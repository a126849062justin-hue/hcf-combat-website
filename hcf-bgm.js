/* One player survives same origin page navigation */
(function () {
  'use strict';
  if (window.HCFMusic) return;
  try {
    if (window.parent !== window) {
      if (window.parent.HCFMusic) {
        window.HCFMusic = window.parent.HCFMusic;
        window.HCFMusic.register(window);
      }
      return;
    }
  } catch (_) { return; }
  if (/\/(complaint|group-feedback|backend)(\.|\/|$)/.test(location.pathname)) return;
  var ROOT = location.origin;
  var TRACKS = [
    {id: 'original', title: 'HCF 原版配樂', src: '/hero-music.m4a'},
    {id: 'win', title: '為自己贏一次', src: '/assets/music/win-for-yourself.m4a'}
  ];
  var KEY = 'hcfMusicV2', saved = {};
  try { saved = JSON.parse(sessionStorage.getItem(KEY) || '{}'); } catch (_) {}
  if (!saved || typeof saved !== 'object') saved = {};
  var choice = TRACKS.findIndex(function (t) { return t.id === saved.track; });
  var current = choice < 0 ? Math.floor(Math.random() * TRACKS.length) : choice;
  var wanted = saved.playing === true, enabled = wanted;
  var bgm = new Audio(); bgm.preload = 'metadata'; bgm.volume = 0.38;
  var resumeAt = choice >= 0 && Number.isFinite(saved.time) ? Math.max(0, saved.time) : 0;
  var views = new Set([window]), bound = new WeakSet(), activeView = window;
  var frame = null, stage = null, navTimer = null, navPending = '', navigationSerial = 0;
  var message = '';
  var allowed = new Set(["/battle-pass", "/beginner-muay-thai", "/booking", "/can-women-learn-muay-thai", "/card-huang", "/card-kao", "/card-mi", "/careers", "/coach-huang-archive", "/coach-huang-spotlight", "/coach-huang", "/courses", "/fighters", "/first-time-muay-thai-guide", "/group-classes", "/group-vs-private-training", "/gym-vs-muay-thai-fat-loss", "/how-often-train-muay-thai", "/how-to-book", "/how-to-choose-muay-thai-gym-hsinchu", "/hsinchu-fitness", "/hsinchu-kickboxing", "/hsinchu-muay-thai-price", "/hsinchu-muay-thai", "/hsinchu-private-training", "/index", "/", "/is-muay-thai-safe", "/is-private-training-worth-it", "/kickboxing", "/kids-muay-thai", "/knowledge", "/legal", "/muay-thai-gloves-hand-wraps-guide", "/muay-thai-padwork-vs-sparring", "/muay-thai-vs-boxing-kickboxing", "/muay-thai-weight-loss", "/muaythai", "/news", "/partnership", "/philosophy", "/plans-proposal", "/pricing", "/private-training", "/sanda", "/schedule", "/shop", "/status", "/story-kao", "/story-mi", "/strength", "/survey-trial-followup", "/survey", "/team", "/trial-review", "/website-design-case", "/what-is-muay-thai-8-limbs", "/will-muay-thai-make-you-bulky", "/shop/gloves-12oz/index", "/shop/gloves-12oz", "/shop/handwraps-5m/index", "/shop/handwraps-5m", "/shop/mouthguard/clear", "/shop/mouthguard/color"]);

  function persist() {
    try { sessionStorage.setItem(KEY, JSON.stringify({track: TRACKS[current].id, time: bgm.currentTime || 0, playing: wanted})); } catch (_) {}
  }
  function snapshot() { return {track: TRACKS[current].title, playing: !bgm.paused, wanted: wanted, message: message}; }
  function notify() {
    var state = snapshot();
    views.forEach(function (v) {
      try { v.dispatchEvent(new v.CustomEvent('hcfmusicchange', {detail: state})); } catch (_) { views.delete(v); }
    });
  }
  function play() {
    wanted = true; enabled = true; message = '';
    var attempt;
    try { attempt = bgm.play(); } catch (_) { attempt = Promise.reject(); }
    Promise.resolve(attempt).then(function () { persist(); notify(); }).catch(function () {
      message = '點播放開啟音樂'; notify();
    });
  }
  function pause() { wanted = false; bgm.pause(); message = ''; persist(); notify(); }
  function toggle() { if (bgm.paused) play(); else pause(); }
  function select(index, autoplay) {
    current = index; resumeAt = 0; message = '';
    bgm.src = ROOT + TRACKS[current].src; bgm.load(); persist(); notify();
    if (autoplay) play();
  }
  function next() { select((current + 1) % TRACKS.length, true); }
  function updateVolume() {
    var audible = false;
    try {
      audible = Array.prototype.some.call(activeView.document.querySelectorAll('video,audio'), function (m) {
        return !m.paused && !m.ended && !m.muted && m.volume > 0;
      });
    } catch (_) {}
    bgm.volume = audible ? 0.06 : 0.38;
  }
  bgm.addEventListener('loadedmetadata', function () {
    if (resumeAt > 0 && resumeAt < bgm.duration - 1) bgm.currentTime = resumeAt;
    resumeAt = 0;
  });
  bgm.addEventListener('play', notify); bgm.addEventListener('pause', notify);
  bgm.addEventListener('ended', next);
  bgm.addEventListener('error', function () { message = '音樂暫時無法載入 可切換下一首'; notify(); });
  bgm.src = ROOT + TRACKS[current].src;
  setInterval(function () { if (!bgm.paused) persist(); }, 1500);
  window.addEventListener('pagehide', persist);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { persist(); bgm.pause(); }
    else if (wanted) play();
  });

  function loadShellStyles() {
    var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = ROOT + '/hcf-music.css?v=20261108-shark';
    document.head.appendChild(css);
  }
  function ensureAssistant(view) {
    var doc = view.document;
    if (doc.getElementById('hcf-shark-assistant') || doc.querySelector('script[src*="hcf-assistant.js"]')) return;
    var script = doc.createElement('script');
    script.id = 'hcf-assistant-loader'; script.src = ROOT + '/hcf-assistant.js?v=20261108-shark';
    script.async = true; doc.head.appendChild(script);
  }
  function eligible(url) {
    return url.origin === ROOT && allowed.has(url.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/');
  }
  function record(url, replace) { history[replace ? 'replaceState' : 'pushState']({hcfMusicShell: true}, '', url); }
  function copyMetadata(doc) {
    document.title = doc.title;
    ['meta[name="description"]', 'link[rel="canonical"]', 'meta[property="og:title"]', 'meta[property="og:url"]', 'meta[property="og:image"]'].forEach(function (selector) {
      var source = doc.querySelector(selector), target = document.querySelector(selector);
      if (!source) { if (target) target.remove(); return; }
      if (!target) { target = source.cloneNode(); document.head.appendChild(target); }
      else if (source.tagName === 'LINK') target.href = source.href;
      else target.content = source.content;
    });
  }
  function finishNavigation() {
    if (!frame) return;
    try {
      var view = frame.contentWindow;
      if (!view.location.href || view.location.href === 'about:blank') return;
      if (!eligible(new URL(view.location.href))) { location.assign(navPending || view.location.href); return; }
      clearTimeout(navTimer); navPending = '';
      activeView = view; views = new Set([window]); register(view);
      frame.title = view.document.title || 'HCF 官網內容'; copyMetadata(view.document);
      if (location.href !== view.location.href) record(view.location.href, true);
      stage.classList.remove('is-loading'); stage.setAttribute('aria-busy', 'false');
      updateVolume(); notify();
      try { frame.focus({preventScroll: true}); } catch (_) {}
    } catch (_) { if (navPending) location.assign(navPending); }
  }
  function navigate(url, replace) {
    var target = new URL(url, activeView.location.href);
    if (!eligible(target)) return false;
    if (frame && !navPending && target.pathname === activeView.location.pathname && target.search === activeView.location.search) {
      activeView.history.replaceState(null, '', target.href);
      if (location.href !== target.href) record(target.href, !!replace);
      var anchor = null;
      try { anchor = activeView.document.getElementById(decodeURIComponent(target.hash.slice(1))); } catch (_) {}
      if (anchor) anchor.scrollIntoView({behavior: 'auto'});
      else activeView.scrollTo(0, 0);
      return true;
    }
    if (!frame) {
      record(location.href, true);
      // Retire the original page lifecycle without unloading the audio owner
      // This cancels booking handoff timers and any pagehide cleanup hooks
      window.__hcfPageRetired = true;
      window.dispatchEvent(new Event('pagehide'));
      document.querySelectorAll('video,audio').forEach(function (m) { m.pause(); });
      document.querySelectorAll('iframe').forEach(function (embedded) { embedded.src = 'about:blank'; });
      stage = document.createElement('div'); stage.id = 'hcf-site-stage';
      stage.innerHTML = '<div class="hcf-page-loading" role="status">正在前往下一頁</div>';
      frame = document.createElement('iframe'); frame.id = 'hcf-site-view'; frame.title = 'HCF 官網內容';
      frame.setAttribute('allow', 'autoplay; fullscreen; clipboard-write'); frame.addEventListener('load', finishNavigation);
      stage.appendChild(frame); document.body.appendChild(stage);
      Array.prototype.forEach.call(document.body.children, function (node) {
        if (node !== stage && !/^(SCRIPT|STYLE|LINK)$/.test(node.tagName)) node.inert = true;
      });
      document.body.classList.add('hcf-audio-host');
    }
    updateVolume(); navPending = target.href; navigationSerial++;
    var serial = navigationSerial;
    stage.classList.add('is-loading'); stage.setAttribute('aria-busy', 'true');
    if (location.href !== target.href) record(target.href, !!replace);
    clearTimeout(navTimer);
    navTimer = setTimeout(function () { if (serial === navigationSerial && navPending) location.assign(navPending); }, 18000);
    // Only the parent owns history entries so browser Back does not double step
    frame.contentWindow.location.replace(target.href);
    return true;
  }
  function register(view) {
    if (view !== window && (!frame || view !== frame.contentWindow)) return;
    views.add(view); view.HCFMusic = api;
    ensureAssistant(view);
    if (bound.has(view.document)) return;
    bound.add(view.document);
    view.document.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      // Assistant links live in a shadow root so the document target is its host
      var link = event.composedPath().find(function (node) { return node.matches && node.matches('a[href]'); });
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      var url;
      try { url = new URL(link.getAttribute('href'), view.location.href); } catch (_) { return; }
      if (!eligible(url)) {
        if (view !== window && !/^javascript:/.test(url.protocol)) link.target = '_top';
        return;
      }
      if (url.pathname === view.location.pathname && url.search === view.location.search) {
        if (view !== window && url.hash) {
          var anchor;
          try { anchor = view.document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch (_) {}
          if (anchor) {
            event.preventDefault(); view.history.replaceState(null, '', url.href); record(url.href, false);
            anchor.scrollIntoView({behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
          }
        }
        return;
      }
      if (enabled || frame) { event.preventDefault(); navigate(url.href, false); }
    });
    view.document.addEventListener('submit', function (event) {
      if (view !== window && !event.defaultPrevented && event.target.tagName === 'FORM' && (!event.target.target || event.target.target === '_self')) event.target.target = '_top';
    });
    ['play', 'pause', 'ended', 'volumechange'].forEach(function (name) { view.document.addEventListener(name, updateVolume, true); });
    notify();
  }
  window.addEventListener('popstate', function () { if (frame) navigate(location.href, true); });
  var api = window.HCFMusic = {
    toggle: toggle, play: play, pause: pause, next: next, state: snapshot, register: register,
    openExternal: function (url) {
      var target = new URL(url, ROOT);
      if (target.protocol === 'https:' || target.protocol === 'line:') { persist(); location.assign(target.href); }
    }
  };
  loadShellStyles(); register(window);
  if (wanted) play();
})();
