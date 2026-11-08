const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const root = path.resolve(__dirname, '../..');
const html = fs.readFileSync(path.join(root, 'coach-huang.html'), 'utf8');
const code = fs.readFileSync(path.join(root, 'hcf-coach-career.js'), 'utf8');
function setup({width=1280,height=900,railHeight=66}={}) {
  const dom = new JSDOM(html, {url:'https://www.hsinchucombat.com/coach-huang',runScripts:'outside-only',pretendToBeVisual:true});
  const w = dom.window, d = w.document;
  Object.defineProperty(w, 'innerWidth', {value:width,writable:true});
  Object.defineProperty(w, 'innerHeight', {value:height,writable:true});
  d.querySelector('.career-nav').getBoundingClientRect=()=>({height:railHeight});
  w.HTMLDialogElement.prototype.showModal = function(){ this.open = true; };
  w.HTMLDialogElement.prototype.close = function(){ this.open = false; this.dispatchEvent(new w.Event('close')); };
  const chapters = [...d.querySelectorAll('[data-career-chapter]')];
  let scroll=0, frame=0, callbacks = new Map();
  chapters.forEach((el,i)=>el.getBoundingClientRect=()=>({top:300+i*1200-scroll,bottom:1500+i*1200-scroll,height:1200}));
  d.querySelector('header.nav').getBoundingClientRect=()=>({height:76});
  const journey=d.getElementById('career-journey');
  journey.getBoundingClientRect=()=>({top:230-scroll});
  Object.defineProperty(journey,'offsetHeight',{value:8500});
  w.requestAnimationFrame=fn=>{callbacks.set(++frame,fn);return frame};
  w.cancelAnimationFrame=id=>callbacks.delete(id);
  function flush(){const q=[...callbacks.values()];callbacks.clear();q.forEach(fn=>fn())}
  w.eval(code);
  return {dom,w,d,chapters,scroll(value){scroll=value;w.dispatchEvent(new w.Event('scroll'));flush()},resize(nextHeight){railHeight=nextHeight;w.dispatchEvent(new w.Event('resize'));flush()}};
}
test('career HTML exposes seven chronological years all original events and all media without JavaScript',()=>{
  const {dom,d}=setup();
  try {
    assert.deepEqual([...d.querySelectorAll('[data-career-chapter]')].map(e=>e.dataset.careerChapter),['2019','2020','2021','2022','2023','2024','2026']);
    assert.equal(d.querySelectorAll('.career-results li').length,21);
    assert.equal(d.querySelectorAll('[data-career-photo]').length,24);
    assert.equal(d.querySelectorAll('[data-career-video]').length,2);
    assert.equal(d.querySelectorAll('iframe').length,0);
    assert.equal(d.querySelectorAll('#huang-training,#alPanel,#alYears').length,0);
    assert(d.querySelector('img.head-coach-poster'));
    for(const a of d.querySelectorAll('[data-career-year]')) assert(d.querySelector(a.getAttribute('href')));
    for(const el of d.querySelectorAll('.career-journey h2,.career-journey h3,.career-journey h4,.career-intro h2')) assert(!/[\p{P}\p{S}]/u.test(el.textContent),el.textContent);
    for(const img of d.querySelectorAll('.career-photo img')){
      assert(fs.existsSync(path.join(root,img.getAttribute('src'))));
      assert.equal(img.getAttribute('loading'),'lazy');
      assert(img.alt && img.getAttribute('width') && img.getAttribute('height'));
    }
    assert(d.querySelector('.career-finish a[href="booking.html"]'));
  } finally {dom.window.close()}
});
test('career photo viewer navigates all images and Escape restores page scrolling and focus',()=>{
  const {dom,w,d}=setup();
  try{
    const photos=[...d.querySelectorAll('[data-career-photo]')].sort((a,b)=>+a.dataset.order-+b.dataset.order);
    const dialog=d.getElementById('career-lightbox');
    d.body.style.overflow='auto';photos[0].click();
    assert(dialog.open);assert.equal(d.body.style.overflow,'hidden');
    assert(d.querySelector('.career-photo-prev').disabled);
    photos.forEach((photo,i)=>{
      assert.equal(d.querySelector('.career-lightbox-stage img').src,photo.href);
      assert.equal(d.getElementById('career-lightbox-title').textContent,photo.dataset.caption);
      if(i<photos.length-1) dialog.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true,cancelable:true}));
    });
    assert(d.querySelector('.career-photo-next').disabled);
    dialog.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',cancelable:true}));
    assert(!dialog.open);assert.equal(d.body.style.overflow,'auto');assert.equal(d.activeElement,photos[0]);
    const modified=new w.MouseEvent('click',{bubbles:true,cancelable:true,ctrlKey:true});
    photos[1].dispatchEvent(modified);assert(!modified.defaultPrevented);assert(!dialog.open);
  }finally{dom.window.close()}
});
test('career videos load on request one at a time and retire on navigation',()=>{
  const {dom,w,d}=setup();
  try{
    const triggers=[...d.querySelectorAll('[data-career-video]')];
    triggers[0].click();assert.equal(d.querySelectorAll('iframe').length,1);
    assert.match(d.querySelector('iframe').src,/youtube-nocookie.com\/embed\/YUj0ev7tH3A/);
    assert(triggers[0].hidden);
    triggers[1].click();assert.equal(d.querySelectorAll('iframe').length,1);assert(!triggers[0].hidden);
    assert.match(d.querySelector('iframe').src,/gLbwgmaSyno/);
    d.querySelectorAll('[data-close-video]')[1].click();assert.equal(d.querySelectorAll('iframe').length,0);
    triggers[0].click();w.dispatchEvent(new w.PageTransitionEvent('pagehide',{persisted:true}));
    assert.equal(d.querySelectorAll('iframe').length,0);assert(!triggers[0].hidden);
  }finally{dom.window.close()}
});
test('vertical scroll highlights its year and progress without an autoplay timer',()=>{
  const {dom,d,scroll}=setup();
  try{
    assert.equal(d.querySelector('[data-career-year][aria-current]').dataset.careerYear,'2019');
    scroll(4000);assert.equal(d.querySelector('[data-career-year][aria-current]').dataset.careerYear,'2022');
    scroll(9000);assert.equal(d.querySelector('[data-career-year][aria-current]').dataset.careerYear,'2026');
    assert.equal(d.querySelector('.career-progress i').style.transform,'scaleX(1)');
    assert(!code.includes('setInterval'));
  }finally{dom.window.close()}
});

test('mobile sticky year reel follows forward and backward scroll with room for both navigation bars',()=>{
  const {dom,w,d,scroll,resize}=setup({width:390,height:844,railHeight:150});
  try{
    const rail=d.querySelector('.career-nav');
    assert(d.getElementById('career-journey').classList.contains('career-scroll-ready'));
    assert.equal(d.documentElement.style.getPropertyValue('--career-rail-height'),'150px');
    assert.equal(d.querySelectorAll('.career-year-reel>span').length,7);
    scroll(6200);
    assert.equal(rail.style.getPropertyValue('--career-step'),'5');
    assert.equal(d.querySelector('[data-career-live-title]').textContent,d.querySelector('#career-2024 h3').textContent);
    assert.equal(d.querySelector('[data-career-live-chapter]').textContent,'CHAPTER 06');
    const fraction=Number(d.getElementById('career-2024').style.getPropertyValue('--career-chapter-progress'));
    assert(fraction>0 && fraction<1);
    scroll(1400);
    assert.equal(rail.style.getPropertyValue('--career-step'),'1');
    assert.equal(d.querySelector('[data-career-year][aria-current]').dataset.careerYear,'2020');
    resize(100);
    assert.equal(d.documentElement.style.getPropertyValue('--career-rail-height'),'100px');
    assert.equal(rail.style.getPropertyValue('--career-step'),'1');
    scroll(-100);
    assert.equal(rail.style.getPropertyValue('--career-step'),'0');
    assert.equal(d.getElementById('career-2019').style.getPropertyValue('--career-chapter-progress'),'0.0000');
    w.dispatchEvent(new w.PageTransitionEvent('pagehide'));
    scroll(9000);assert.equal(rail.style.getPropertyValue('--career-step'),'0');
  }finally{dom.window.close()}
});
