/* Optional choices only; no personal inputs, storage, submission, or availability claims. */
(function () {
  'use strict';
  var plans = {unsure:'還不確定，想聽教練建議',one:'一對一私人課',two:'一對二，兩人同行',pads:'40 分鐘私人打靶'};
  var goals = {unsure:'想先聊聊，還沒決定',basics:'零基礎，想學基本拳腿',fitness:'運動、體能與下班紓壓',technique:'已有經驗，想修正技術',competition:'想了解備賽訓練'};
  var times = {flexible:'時間不固定，想討論',day:'平日白天',evening:'平日晚上',weekend:'週末'};
  function choice(map, value, fallback) { return Object.prototype.hasOwnProperty.call(map,value) ? map[value] : map[fallback]; }
  function fields(values) {
    values = values || {};
    return {'詢問類型':'私人課諮詢（尚未預約）','上課方式':choice(plans,values.plan,'unsure'),'主要目標':choice(goals,values.goal,'unsure'),'方便時段':choice(times,values.time,'flexible'),'想先了解':'費用、教練安排與可預約時段'};
  }
  if (typeof module === 'object' && module.exports) module.exports = {fields:fields};
  if (typeof document === 'undefined') return;
  var picker = document.getElementById('private-picker');
  if (!picker || !window.HCFBookingLine) return;
  var plan = document.getElementById('private-plan'), goal = document.getElementById('private-goal'), time = document.getElementById('private-time');
  var message = document.getElementById('private-message'), line = document.getElementById('private-line'), status = document.getElementById('private-copy-status');
  function update() {
    var handoff = window.HCFBookingLine.build(fields({plan:plan.value,goal:goal.value,time:time.value}),navigator);
    message.value = handoff.message;
    line.href = handoff.url;
    line.textContent = handoff.autoOpen ? '帶著內容開啟 LINE →' : '開啟官方 LINE →';
    document.getElementById('private-device-note').textContent = handoff.autoOpen
      ? '會嘗試帶入手機 LINE 草稿，請確認內容後親自送出。若沒帶入，可先複製再貼上。'
      : '先複製內容，再開啟 LINE；電腦可能顯示官方帳號 QR Code，可用手機掃描加入，或在電腦 LINE 搜尋 @228pffia。';
    status.textContent = '';
  }
  [plan,goal,time].forEach(function (select) {select.addEventListener('change',update);});
  update();
  picker.hidden = false;
  document.getElementById('private-direct').hidden = true;
  document.getElementById('private-copy').addEventListener('click',async function () {
    try {
      await navigator.clipboard.writeText(message.value);
      status.textContent = '已複製。請貼到官方 LINE 並送出，教練才能收到。';
    } catch (_) {
      message.focus(); message.select();
      status.textContent = '請長按或使用複製快捷鍵複製上方已選取的文字，再貼到 LINE。';
    }
  });
  document.querySelectorAll('[data-private-plan],[data-private-goal]').forEach(function (a) {
    a.addEventListener('click',function () {
      if (Object.prototype.hasOwnProperty.call(plans,a.dataset.privatePlan)) plan.value = a.dataset.privatePlan;
      if (Object.prototype.hasOwnProperty.call(goals,a.dataset.privateGoal)) goal.value = a.dataset.privateGoal;
      update(); plan.focus({preventScroll:true});
    });
  });
  // Keep private-page navigation in the inquiry flow instead of the group trial funnel.
  document.querySelectorAll('.nav-cta,.mnav .cta,.mcta .m1,.fin-btns .hb1,.svtab:not(.voice)').forEach(function (a) {
    a.href = '#private-inquiry'; a.textContent = '詢問私人課'; a.dataset.intent = 'private';
    if (a.classList.contains('svtab')) a.innerHTML = '<b>詢</b><b>問</b><b>私</b><b>人</b><b>課</b>';
  });
  document.querySelectorAll('.mcta .m2,.fin-btns .hb2').forEach(function (a) {
    a.href = '#private-plans'; a.textContent = '看私教方案'; a.removeAttribute('target'); a.dataset.intent = 'private';
  });
})();
