/* Keep one selected story playing without automatic media downloads */
(function () {
  'use strict';
  var videos = Array.prototype.slice.call(document.querySelectorAll('.hcf-stories video'));
  videos.forEach(function (video) {
    video.addEventListener('play', function () {
      document.querySelectorAll('video').forEach(function (other) {
        if (other !== video) other.pause();
      });
    });
  });
  document.querySelectorAll('.hcf-story-more').forEach(function (details) {
    details.addEventListener('toggle', function () {
      if (!details.open) details.querySelectorAll('video').forEach(function (video) { video.pause(); });
    });
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) videos.forEach(function (video) { video.pause(); });
  });
})();
