/* Choose the supplied portrait footage on phones so the teaching action stays in frame. */
(function () {
  'use strict';
  if (!window.matchMedia('(max-width: 640px)').matches) return;
  document.querySelectorAll('video[data-mobile-training-src]').forEach(function (video) {
    var source = video.querySelector('source');
    if (!source) return;
    video.poster = video.dataset.mobileTrainingPoster;
    source.src = video.dataset.mobileTrainingSrc;
    var fallback = video.parentElement.querySelector('[data-training-fallback]');
    if (fallback) fallback.src = video.poster;
    video.load();
  });
})();
