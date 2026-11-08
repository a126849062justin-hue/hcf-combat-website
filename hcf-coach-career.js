(function () {
  'use strict';
  var journey = document.getElementById('career-journey');
  if (!journey) return;
  var chapters = Array.from(journey.querySelectorAll('[data-career-chapter]'));
  var links = Array.from(journey.querySelectorAll('[data-career-year]'));
  var progress = journey.querySelector('.career-progress i');
  var nav = document.querySelector('header.nav');
  var frame = 0, stopped = false;
  function update() {
    frame = 0;
    if (stopped) return;
    var navHeight = nav ? nav.getBoundingClientRect().height : 76;
    document.documentElement.style.setProperty('--career-nav', navHeight + 'px');
    var line = navHeight + 100, active = chapters[0];
    chapters.forEach(function (chapter) { if (chapter.getBoundingClientRect().top <= line) active = chapter; });
    chapters.forEach(function (chapter) { chapter.classList.toggle('is-current', chapter === active); });
    links.forEach(function (a) {
      if (a.dataset.careerYear === active.dataset.careerChapter) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    var bounds = journey.getBoundingClientRect();
    var total = Math.max(1, journey.offsetHeight - innerHeight + navHeight);
    progress.style.transform = 'scaleX(' + Math.max(0, Math.min(1, (navHeight - bounds.top) / total)) + ')';
  }
  function requestUpdate() { if (!stopped && !frame) frame = requestAnimationFrame(update); }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate);
  journey.querySelectorAll('details').forEach(function (el) { el.addEventListener('toggle', requestUpdate); });
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
    removeEventListener('scroll', requestUpdate); removeEventListener('resize', requestUpdate);
  });
})();
