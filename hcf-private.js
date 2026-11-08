/* Private inquiries share the booking form. Fragments contain fixed choices only. */
(function () {
  'use strict';
  var plans = {unsure:'還不確定，想聽教練建議',one:'一對一私人課',two:'一對二，兩人同行',pads:'40 分鐘私人打靶'};
  function decode(hash) {
    var match = /^#private=(unsure|one|two|pads)(?:&goal=(competition))?$/.exec(hash || '');
    if (!match) return null;
    var plan = match[1];
    var fields = {'開始方式':plan !== 'one' ? '私人課形式另行討論' : '私人教練體驗 1 堂 $1,400', '私課形式':plans[plan]};
    if (match[2]) fields['想改善'] = '想參加比賽或進入選手班';
    return fields;
  }
  if (typeof module === 'object' && module.exports) module.exports = {decode:decode};
  if (typeof window === 'undefined') return;
  window.HCFPrivate = {decode:decode};
  if (!document.body.classList.contains('hcf-private')) return;
  // Previous bookmarked inquiry anchors still reach the same form.
  if (location.hash === '#private-inquiry') { location.replace('booking.html#private=unsure'); return; }
  document.querySelectorAll('.nav-cta,.mnav .cta,.mcta .m1,.fin-btns .hb1,.svtab:not(.voice)').forEach(function (a) {
    a.href = 'booking.html#private=unsure'; a.textContent = '安排我的第一堂體驗'; a.dataset.intent = 'private';
    if (a.classList.contains('svtab')) a.innerHTML = '<b>安</b><b>排</b><b>體</b><b>驗</b>';
  });
  document.querySelectorAll('.mcta .m2,.fin-btns .hb2').forEach(function (a) {
    a.href = '#private-plans'; a.textContent = '看私教方案'; a.removeAttribute('target'); a.dataset.intent = 'private';
  });
})();
