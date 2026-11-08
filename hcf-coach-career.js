(function () {
  'use strict';
  var journey = document.getElementById('career-journey');
  if (!journey) return;
  var chapters = Array.from(journey.querySelectorAll('[data-career-chapter]'));
  var links = Array.from(journey.querySelectorAll('[data-career-year]'));
  var progress = journey.querySelector('.career-progress i');
  var rail = journey.querySelector('.career-nav');
  var liveTitle = journey.querySelector('[data-career-live-title]');
  var liveChapter = journey.querySelector('[data-career-live-chapter]');
  var nav = document.querySelector('header.nav');
  var frame = 0, stopped = false;
  journey.classList.add('career-scroll-ready');
  function update() {
    frame = 0;
    if (stopped) return;
    var navHeight = nav ? nav.getBoundingClientRect().height : 76;
    var railHeight = rail.getBoundingClientRect().height || 66;
    document.documentElement.style.setProperty('--career-nav', navHeight + 'px');
    document.documentElement.style.setProperty('--career-rail-height', railHeight + 'px');
    var line = navHeight + railHeight + 32, active = chapters[0];
    chapters.forEach(function (chapter) { if (chapter.getBoundingClientRect().top <= line) active = chapter; });
    chapters.forEach(function (chapter) {
      chapter.classList.toggle('is-current', chapter === active);
      var rect = chapter.getBoundingClientRect();
      var fraction = Math.max(0, Math.min(1, (line - rect.top) / Math.max(1, rect.height)));
      chapter.style.setProperty('--career-chapter-progress', fraction.toFixed(4));
    });
    var activeIndex = chapters.indexOf(active);
    rail.style.setProperty('--career-step', activeIndex);
    liveTitle.textContent = active.querySelector('h3').textContent;
    liveChapter.textContent = 'CHAPTER ' + String(activeIndex + 1).padStart(2, '0');
    links.forEach(function (a) {
      if (a.dataset.careerYear === active.dataset.careerChapter) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    var bounds = journey.getBoundingClientRect();
    var total = Math.max(1, journey.offsetHeight - innerHeight + navHeight + railHeight);
    progress.style.transform = 'scaleX(' + Math.max(0, Math.min(1, (navHeight - bounds.top) / total)) + ')';
  }
  function requestUpdate() { if (!stopped && !frame) frame = requestAnimationFrame(update); }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate);
  journey.querySelectorAll('details').forEach(function (el) { el.addEventListener('toggle', requestUpdate); });
  var layoutObserver;
  if (typeof ResizeObserver === 'function') {
    layoutObserver = new ResizeObserver(requestUpdate);
    if (nav) layoutObserver.observe(nav);
    layoutObserver.observe(rail);
  }
  update();

  var dialog = document.getElementById('career-lightbox');
  var photos = Array.from(journey.querySelectorAll('[data-career-photo]')).sort(function (a, b) { return +a.dataset.order - +b.dataset.order; });
  var index = 0, opener = null, previousOverflow = '', locked = false;
  function draw() {
    var photo = photos[index], img = dialog.querySelector('.career-lightbox-stage img');
    img.src = photo.href; img.alt = photo.dataset.alt;
    dialog.querySelector('#career-lightbox-title').textContent = photo.dataset.caption;
    dialog.querySelector('.career-lightbox-count').textContent = String(index + 1).padStart(2, '0') + ' / ' + photos.length;
    dialog.querySelector('.career-photo-prev').disabled = index === 0;
    dialog.querySelector('.career-photo-next').disabled = index === photos.length - 1;
  }
  function unlock() {
    if (locked) { document.body.style.overflow = previousOverflow; locked = false; }
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    dialog.querySelector('.career-lightbox-stage img').removeAttribute('src');
  }
  function close() { if (dialog.open) dialog.close(); }
  function move(step) { index = Math.max(0, Math.min(photos.length - 1, index + step)); draw(); }
  photos.forEach(function (photo) {
    photo.addEventListener('click', function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault(); index = photos.indexOf(photo); opener = photo; draw();
      previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; locked = true;
      dialog.showModal(); dialog.querySelector('[data-close-lightbox]').focus();
    });
  });
  dialog.querySelector('[data-close-lightbox]').addEventListener('click', close);
  dialog.querySelector('.career-photo-prev').addEventListener('click', function () { move(-1); });
  dialog.querySelector('.career-photo-next').addEventListener('click', function () { move(1); });
  dialog.addEventListener('close', unlock);
  dialog.addEventListener('click', function (event) { if (event.target === dialog) close(); });
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
  });

  function closeVideo(slot, focus) {
    var player = slot.querySelector('.career-video-player'), trigger = slot.querySelector('[data-career-video]');
    player.replaceChildren(); player.hidden = true;
    slot.querySelector('.career-video-tools').hidden = true; trigger.hidden = false;
    if (focus) trigger.focus({ preventScroll: true });
  }
  journey.querySelectorAll('[data-video-slot]').forEach(function (slot) {
    var trigger = slot.querySelector('[data-career-video]');
    trigger.addEventListener('click', function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      journey.querySelectorAll('[data-video-slot]').forEach(function (other) { closeVideo(other, false); });
      var player = slot.querySelector('.career-video-player'), video = document.createElement('iframe');
      video.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(trigger.dataset.careerVideo) + '?autoplay=1&rel=0';
      video.title = trigger.dataset.videoTitle;
      video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      video.allowFullscreen = true; video.referrerPolicy = 'strict-origin-when-cross-origin';
      player.append(video); player.hidden = false; trigger.hidden = true;
      slot.querySelector('.career-video-tools').hidden = false;
      video.focus();
    });
    slot.querySelector('[data-close-video]').addEventListener('click', function () { closeVideo(slot, true); });
  });
  addEventListener('pagehide', function (event) {
    journey.querySelectorAll('[data-video-slot]').forEach(function (slot) { closeVideo(slot, false); });
    close();
    if (event.persisted) return;
    stopped = true; cancelAnimationFrame(frame);
    if (layoutObserver) layoutObserver.disconnect();
    removeEventListener('scroll', requestUpdate); removeEventListener('resize', requestUpdate);
  });
})();
