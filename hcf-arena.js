(function () {
  'use strict';
  if (!document.body.classList.contains('hcf-stories-page')) return;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)');
  var fine = matchMedia('(hover: hover) and (pointer: fine)');
  var motion = !reduced.matches;
  var motionButton = document.getElementById('arena-motion');
  var musicButton = document.getElementById('arena-music');
  function applyMotion() {
    document.body.classList.toggle('arena-is-on', motion && !reduced.matches);
    motionButton.setAttribute('aria-pressed', String(motion && !reduced.matches));
    motionButton.disabled = reduced.matches;
    motionButton.textContent = reduced.matches ? '已減少動態' : (motion ? '立體光影已開啟' : '開啟立體光影');
    document.querySelectorAll('[data-arena-tilt]').forEach(function (node) { node.style.transform = ''; node.style.setProperty('--rx', '0deg'); node.style.setProperty('--ry', '0deg'); });
  }
  motionButton.addEventListener('click', function () { motion = !motion; applyMotion(); });
  if (reduced.addEventListener) reduced.addEventListener('change', applyMotion);
  applyMotion();
  function musicState(state) {
    musicButton.textContent = state.playing ? '暫停配樂' : '開啟配樂';
    musicButton.setAttribute('aria-pressed', String(state.playing));
  }
  musicButton.addEventListener('click', function () { if (window.HCFMusic) window.HCFMusic.toggle(); });
  window.addEventListener('hcfmusicchange', function (event) { musicState(event.detail); });
  if (window.HCFMusic) musicState(window.HCFMusic.state());

  var cards = Array.from(document.querySelectorAll('.hcf-story-card'));
  var scene = document.querySelector('.arena-scene');
  [scene].concat(cards).forEach(function (node) {
    if (!node) return;
    node.setAttribute('data-arena-tilt', '');
    var raf = 0;
    node.addEventListener('pointermove', function (event) {
      if (!motion || reduced.matches || !fine.matches) return;
      var rect = node.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - .5;
      var y = (event.clientY - rect.top) / rect.height - .5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        if (node === scene) { node.style.setProperty('--rx', (-y * 7) + 'deg'); node.style.setProperty('--ry', (x * 10) + 'deg'); }
        else node.style.transform = 'perspective(1000px) rotateX(' + (-y * 3) + 'deg) rotateY(' + (x * 4) + 'deg) translateY(-3px)';
      });
    });
    node.addEventListener('pointerleave', function () { cancelAnimationFrame(raf); node.style.transform = ''; node.style.setProperty('--rx', '0deg'); node.style.setProperty('--ry', '0deg'); });
  });
  if ('IntersectionObserver' in window && !reduced.matches) {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); } });
    }, {threshold: .08});
    document.querySelectorAll('.hcf-story-stage,.hcf-story-grid').forEach(function (node) { node.classList.add('arena-reveal'); reveal.observe(node); });
  }
  var chapterLinks = Array.from(document.querySelectorAll('.arena-chapter-nav a'));
  var sections = chapterLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var ticking = false;
  function updateProgress() {
    ticking = false;
    var total = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--arena-progress', String(total > 0 ? Math.min(1, scrollY / total) : 0));
    var selected = -1;
    sections.forEach(function (section, i) { if (section.getBoundingClientRect().top < innerHeight * .45) selected = i; });
    chapterLinks.forEach(function (a, i) { if (i === selected) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); } }, {passive: true});
  addEventListener('resize', updateProgress); updateProgress();

  var dialog = document.createElement('dialog'); dialog.className = 'arena-lightbox'; dialog.setAttribute('aria-labelledby', 'arena-view-title');
  dialog.innerHTML = '<div class="arena-lightbox-head"><span class="arena-lightbox-count"></span><button type="button" data-close>關閉</button></div><div class="arena-lightbox-media"></div><div class="arena-lightbox-foot"><div><h2 id="arena-view-title"></h2><p></p></div><div class="arena-lightbox-controls"><button type="button" data-prev aria-label="上一個時刻">上一個</button><button type="button" data-next aria-label="下一個時刻">下一個</button></div></div>';
  document.body.appendChild(dialog);
  var media = dialog.querySelector('.arena-lightbox-media'), active = 0, returnFocus = null;
  function clearMedia() { media.querySelectorAll('video').forEach(function (v) { v.pause(); v.removeAttribute('src'); v.load(); }); media.replaceChildren(); }
  function show(index) {
    active = (index + cards.length) % cards.length; clearMedia();
    var card = cards[active], source = card.querySelector('video,img');
    var copy;
    if (source.tagName === 'VIDEO') {
      copy = document.createElement('video'); copy.controls = true; copy.playsInline = true; copy.preload = 'metadata'; copy.muted = source.muted;
      copy.poster = source.poster; copy.src = source.currentSrc || source.src || source.querySelector('source').src;
      copy.addEventListener('play', function () { document.querySelectorAll('video').forEach(function (v) { if (v !== copy) v.pause(); }); });
      copy.setAttribute('aria-label', card.querySelector('h3').textContent);
    } else { copy = document.createElement('img'); copy.src = source.src; copy.alt = source.alt; }
    document.querySelectorAll('.hcf-stories video').forEach(function (v) { v.pause(); });
    media.appendChild(copy);
    dialog.querySelector('h2').textContent = card.querySelector('h3').textContent;
    dialog.querySelector('.arena-lightbox-foot p').textContent = card.querySelector('figcaption p').textContent;
    dialog.querySelector('.arena-lightbox-count').textContent = String(active + 1).padStart(2, '0') + ' 共 ' + cards.length + ' 個真實時刻';
  }
  cards.forEach(function (card, index) {
    if (typeof dialog.showModal !== 'function') return;
    var button = document.createElement('button'); button.type = 'button'; button.className = 'arena-open'; button.textContent = '沉浸觀看';
    button.setAttribute('aria-label', '沉浸觀看 ' + card.querySelector('h3').textContent);
    button.addEventListener('click', function () {
      if (typeof dialog.showModal !== 'function') return;
      returnFocus = button; show(index); dialog.showModal();
    });
    card.querySelector('figcaption').appendChild(button);
  });
  dialog.querySelector('[data-close]').addEventListener('click', function () { dialog.close(); });
  dialog.querySelector('[data-prev]').addEventListener('click', function () { show(active - 1); });
  dialog.querySelector('[data-next]').addEventListener('click', function () { show(active + 1); });
  dialog.addEventListener('close', function () { clearMedia(); if (returnFocus) returnFocus.focus({preventScroll: true}); });
  dialog.addEventListener('keydown', function (event) {
    if (/^(VIDEO|INPUT)$/.test(event.target.tagName)) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(active - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(active + 1); }
  });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) { var r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
})();
