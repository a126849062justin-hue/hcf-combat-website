const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const root = path.resolve(__dirname, '../..');
const html = fs.readFileSync(path.join(root, 'first-time-muay-thai-guide.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'hcf-venue-carousel.js'), 'utf8');
function setup(reduce = false) {
  const dom = new JSDOM(html, {runScripts:'outside-only', pretendToBeVisual:true, url:'https://www.hsinchucombat.com/first-time-muay-thai-guide'});
  const w = dom.window, d = w.document;
  const media = new w.EventTarget(); media.matches = reduce; w.matchMedia = () => media;
  let hidden = false, io, disconnected = false, next = 0;
  const timers = new Map();
  Object.defineProperty(d, 'hidden', {get:() => hidden});
  w.setTimeout = fn => {timers.set(++next, fn); return next};
  w.clearTimeout = id => timers.delete(id);
  w.HTMLImageElement.prototype.decode = () => Promise.resolve();
  w.IntersectionObserver = class {constructor(cb){io = cb} observe(){} disconnect(){disconnected = true}};
  w.eval(script);
  const carousel = d.querySelector('[data-venue-carousel]');
  const flush = async () => {await Promise.resolve(); await Promise.resolve()};
  return {w,d,dom,media,carousel,timers,flush,
    visible(value){io([{isIntersecting:value}])},
    hidden(value){hidden=value;d.dispatchEvent(new w.Event('visibilitychange'))},
    current(){return [...d.querySelectorAll('[data-venue-slide]')].findIndex(s => !s.hidden)},
    async tick(){const q=[...timers.values()];timers.clear();q.forEach(fn=>fn());await flush()},
    async click(selector){d.querySelector(selector).click();await flush()},
    disconnected(){return disconnected}, close(){dom.window.close()}
  };
}
test('five selected photos remain accessible without scripts and preserve the original class video', () => {
  const dom = new JSDOM(html), d = dom.window.document;
  try {
    const slides = [...d.querySelectorAll('[data-venue-slide]')];
    assert.equal(slides.length, 5);
    assert(slides.every(s => !s.hidden));
    assert(d.querySelector('.hcf-venue-controls').hidden);
    for (const img of d.querySelectorAll('[data-venue-slide] img')) {
      assert(img.alt); assert.equal(img.getAttribute('loading'),'lazy');
      for (const item of img.getAttribute('srcset').split(',')) assert(fs.existsSync(path.join(root,item.trim().split(' ')[0])));
    }
    assert(d.querySelector('#first-class-film video source[src="assets/training/class-padwork-rhythm-202611.mp4"]'));
    for (const h of d.querySelectorAll('.hcf-venue h2,.hcf-venue h3')) assert(!/[\p{P}\p{S}]/u.test(h.textContent));
  } finally {dom.window.close()}
});
test('autoplay runs only on screen and pauses for hover focus visibility and explicit pause', async () => {
  const s=setup();
  try {
    assert.equal(s.timers.size,0); s.visible(true); assert.equal(s.timers.size,1);
    await s.tick(); assert.equal(s.current(),1);
    s.carousel.dispatchEvent(new s.w.Event('pointerenter')); assert.equal(s.timers.size,0);
    s.carousel.dispatchEvent(new s.w.Event('pointerleave')); assert.equal(s.timers.size,1);
    s.d.querySelector('[data-venue-next]').focus(); assert.equal(s.timers.size,0);
    s.d.querySelector('[data-venue-next]').blur(); assert.equal(s.timers.size,1);
    s.hidden(true); assert.equal(s.timers.size,0); s.hidden(false); assert.equal(s.timers.size,1);
    await s.click('[data-venue-toggle]'); assert.equal(s.timers.size,0);
    s.visible(false);s.visible(true); assert.equal(s.timers.size,0);
    s.d.querySelector('[data-venue-toggle]').focus();
    await s.click('[data-venue-toggle]'); assert.equal(s.timers.size,1);
    s.visible(false); assert.equal(s.timers.size,0);
  } finally {s.close()}
});
test('manual controls keyboard and touch swipe select photos and leave autoplay paused', async () => {
  const s=setup();
  try {
    s.visible(true); await s.click('[data-venue-prev]'); assert.equal(s.current(),4);
    assert.equal(s.d.querySelector('[data-venue-count]').textContent,'05 / 05');
    await s.click('[data-venue-next]');assert.equal(s.current(),0);
    await s.click('[data-venue-index="3"]'); assert.equal(s.current(),3);
    s.carousel.dispatchEvent(new s.w.KeyboardEvent('keydown',{key:'Home',bubbles:true,cancelable:true}));await s.flush();assert.equal(s.current(),0);
    const stage=s.d.querySelector('.hcf-venue-stage');
    function pointer(type,x,y){const e=new s.w.Event(type);Object.assign(e,{pointerType:'touch',isPrimary:true,pointerId:1,clientX:x,clientY:y});stage.dispatchEvent(e)}
    pointer('pointerdown',250,100);pointer('pointerup',150,105);await s.flush();assert.equal(s.current(),1);
    pointer('pointerdown',250,100);pointer('pointerup',240,250);await s.flush();assert.equal(s.current(),1);
    assert.equal(s.timers.size,0);
    assert.equal(s.d.querySelectorAll('[data-venue-slide]:not([hidden])').length,1);
    assert.equal(s.d.querySelector('[data-venue-index][aria-current]').dataset.venueIndex,'1');
    assert.match(s.d.querySelector('[data-venue-status]').textContent,/第 2 張/);
  } finally {s.close()}
});
test('reduced motion starts paused and page lifecycle cleans up timers including music shell navigation', async () => {
  const s=setup(true);
  try {
    s.visible(true);assert.equal(s.timers.size,0);
    await s.click('[data-venue-toggle]'); assert.equal(s.timers.size,1);
    s.w.dispatchEvent(new s.w.PageTransitionEvent('pagehide',{persisted:true}));assert.equal(s.timers.size,0);
    s.w.dispatchEvent(new s.w.PageTransitionEvent('pageshow',{persisted:true}));assert.equal(s.timers.size,1);
    s.media.dispatchEvent(new s.w.Event('change'));assert.equal(s.timers.size,0);
    await s.click('[data-venue-toggle]');assert.equal(s.timers.size,1);
    s.w.dispatchEvent(new s.w.Event('pagehide'));assert.equal(s.timers.size,0);assert(s.disconnected());
    s.w.dispatchEvent(new s.w.Event('pageshow'));await s.click('[data-venue-next]');assert.equal(s.current(),0);assert.equal(s.timers.size,0);
  } finally {s.close()}
});
