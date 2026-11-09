(function () {
  'use strict';
  var root = document.querySelector('[data-venue-carousel]');
  if (!root || root.dataset.ready) return;
  var slides = Array.from(root.querySelectorAll('[data-venue-slide]'));
  if (slides.length < 2) return;
  var controls = root.querySelector('.hcf-venue-controls');
  var stage = root.querySelector('.hcf-venue-stage');
  var toggle = root.querySelector('[data-venue-toggle]');
  var dots = Array.from(root.querySelectorAll('[data-venue-index]'));
  var counter = root.querySelector('[data-venue-count]');
  var status = root.querySelector('[data-venue-status]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var index = 0, timer = 0, serial = 0, retired = false, pageActive = true;
  var visible = false, hovered = false, focused = false, pointer = null;
  var automatic = !reduced.matches;
  var events = new AbortController();
  function listen(target, type, handler) { target.addEventListener(type, handler, {signal: events.signal}); }
  function prepare(i) { var img = slides[i].querySelector('img'); img.loading = 'eager'; return img; }
  function sync() {
    clearTimeout(timer); timer = 0;
    toggle.textContent = automatic ? '暫停輪播' : '開始輪播';
    root.dataset.playing = 'false';
    if (!retired && pageActive && visible && automatic && !hovered && !focused && !document.hidden) {
      root.dataset.playing = 'true';
      timer = setTimeout(function () { show(index + 1, false); }, 6000);
    }
  }
  async function show(target, manual) {
    if (retired || !pageActive) return;
    clearTimeout(timer);
    if (manual) automatic = false;
    var next = (target + slides.length) % slides.length;
    var request = ++serial, img = prepare(next);
    if (img.decode) { try { await img.decode(); } catch (_) {} }
    if (request !== serial || retired || !pageActive) return;
    if (!manual && (!automatic || !visible || hovered || focused || document.hidden)) { sync(); return; }
    slides.forEach(function (slide, i) { slide.hidden = i !== next; slide.classList.toggle('is-active', i === next); });
    dots.forEach(function (dot, i) { if (i === next) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current'); });
    index = next;
    counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    if (manual) status.textContent = '第 ' + (index + 1) + ' 張 ' + slides[index].querySelector('h3').textContent;
    if (visible) prepare((index + 1) % slides.length);
    sync();
  }
  slides.forEach(function (slide, i) { slide.hidden = i !== 0; slide.classList.toggle('is-active', i === 0); });
  root.dataset.ready = 'true'; root.classList.add('is-ready'); controls.hidden = false;
  listen(root.querySelector('[data-venue-prev]'), 'click', function () { show(index - 1, true); });
  listen(root.querySelector('[data-venue-next]'), 'click', function () { show(index + 1, true); });
  dots.forEach(function (dot) { listen(dot, 'click', function () { show(Number(dot.dataset.venueIndex), true); }); });
  listen(toggle, 'click', function () { automatic = !automatic; if (automatic) focused = false; sync(); });
  listen(root, 'pointerenter', function (e) { if (e.pointerType !== 'touch') { hovered = true; sync(); } });
  listen(root, 'pointerleave', function () { hovered = false; sync(); });
  listen(root, 'focusin', function () { focused = true; sync(); });
  listen(root, 'focusout', function (e) { focused = root.contains(e.relatedTarget); sync(); });
  listen(root, 'keydown', function (e) {
    var targets = {ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: slides.length - 1};
    if (e.altKey || e.ctrlKey || e.metaKey || !(e.key in targets)) return;
    e.preventDefault(); show(targets[e.key], true);
  });
  listen(stage, 'pointerdown', function (e) { if (e.isPrimary && e.pointerType === 'touch') { pointer = {id:e.pointerId,x:e.clientX,y:e.clientY}; focused = false; clearTimeout(timer); } });
  listen(stage, 'pointerup', function (e) {
    if (!pointer || pointer.id !== e.pointerId) return;
    var dx = e.clientX - pointer.x, dy = e.clientY - pointer.y; pointer = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) show(index + (dx < 0 ? 1 : -1), true);
    else sync();
  });
  listen(stage, 'pointercancel', function () { pointer = null; sync(); });
  listen(document, 'visibilitychange', sync);
  listen(reduced, 'change', function () { if (reduced.matches) automatic = false; sync(); });
  var observer;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) { prepare(index); prepare((index + 1) % slides.length); }
      sync();
    }, {threshold:0.15});
    observer.observe(stage);
  } else { visible = true; prepare(1); }
  listen(window, 'pagehide', function (e) {
    pageActive = false; ++serial; sync();
    if (!e.persisted) { retired = true; observer?.disconnect(); events.abort(); }
  });
  listen(window, 'pageshow', function () { if (!retired) { pageActive = true; sync(); } });
  sync();
}());
