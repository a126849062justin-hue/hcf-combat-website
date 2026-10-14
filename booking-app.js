/* hcf-booking-app-20261014-r1 · existing questions, prices and delivery destinations */
(function () {
  'use strict';
  var TOTAL = 4, cur = 1, submitted = false;
  var form = document.getElementById('diagForm');
  var btnN = document.getElementById('btnNext'), btnP = document.getElementById('btnPrev');
  var sections = document.querySelectorAll('.step');
  var error = document.getElementById('submitError');
  function track(event, data) { if (typeof window.gtag === 'function') window.gtag('event', event, data || {}); }
  function chosen(name) { return Array.from(form.elements).filter(function (el) { return el.name === name && el.checked; }).map(function (el) { return el.value; }); }
  function branch(id, visible) {
    var el = document.getElementById(id); el.style.display = visible ? 'block' : 'none';
    el.querySelectorAll('input,textarea').forEach(function (input) { input.disabled = !visible; });
  }
  function revealBranches() {
    var goals = chosen('想改善');
    branch('branchFat', goals.includes('減脂、瘦身、改善體態'));
    branch('branchComp', goals.includes('想參加比賽或進入選手班'));
    branch('branchKid', goals.includes('想讓孩子學習運動與紀律'));
    var body = chosen('身體狀況')[0]; branch('injuryNote', !!body && body !== '沒有');
  }
  function answers() {
    var fields = {};
    new FormData(form).forEach(function (value, key) { if (String(value).trim()) fields[key] = fields[key] ? fields[key] + '、' + value : String(value).trim(); });
    return fields;
  }
  function summary() {
    var target = document.getElementById('bookingSummary'); target.replaceChildren();
    Object.entries(answers()).forEach(function (entry) {
      var row = document.createElement('div'), label = document.createElement('dt'), value = document.createElement('dd');
      label.textContent = entry[0]; value.textContent = entry[1]; row.append(label, value); target.append(row);
    });
  }
  function paint() {
    sections.forEach(function (section) { section.classList.toggle('on', Number(section.dataset.step) === cur); });
    revealBranches(); summary(); error.hidden = true;
    goalQ.querySelector('.qmax').textContent = '最多選 2 項 · 已選 ' + chosen('想改善').length + ' 項';
    document.getElementById('pgFill').style.width = cur / TOTAL * 100 + '%';
    document.getElementById('pgStep').textContent = '第 ' + cur + ' 步 / 共 ' + TOTAL + ' 步';
    document.querySelectorAll('[data-progress]').forEach(function (item) {
      var step = Number(item.dataset.progress); item.classList.toggle('complete', step < cur);
      if (step === cur) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current');
    });
    btnP.style.display = cur === 1 ? 'none' : 'block';
    btnN.textContent = cur === TOTAL ? '送出需求 給教練' : '下一步 →';
    document.getElementById('navHint').textContent = ['下一步：體驗方式', '下一步：方便時間', '下一步：安全與確認', '送出後請到官方 LINE 確認'][cur - 1];
    document.querySelector('.step.on h2').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
  }
  document.getElementById('startBtn').addEventListener('click', function () {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('formWrap').style.display = 'block';
    document.getElementById('pgWrap').style.display = 'block';
    document.getElementById('navBar').classList.add('on'); track('diagnosis_start'); paint();
  });
  form.querySelectorAll('.q[data-group]').forEach(function (q, i) {
    var title = q.querySelector('.t'), err = q.querySelector('.err');
    if (title) { title.id = 'question-' + i; q.setAttribute('role', 'group'); q.setAttribute('aria-labelledby', title.id); }
    if (err) { err.id = 'question-error-' + i; err.setAttribute('role', 'alert'); q.setAttribute('aria-describedby', err.id); }
  });
  var goalQ = document.querySelector('.q[data-group="goal"]');
  goalQ.addEventListener('change', function (event) {
    var count = goalQ.querySelectorAll('input:checked').length, exceeded = count > 2;
    if (exceeded) { event.target.checked = false; count = 2; }
    goalQ.querySelector('.qmax').textContent = (exceeded ? '最多只能選 2 項，請先取消一項' : '最多選 2 項') + ' · 已選 ' + count + ' 項';
  });
  function clearCorrectedErrors() {
    form.querySelectorAll('.q').forEach(function (q) {
      var valid = false, required = q.querySelector('input[required],textarea[required]');
      if (required) { valid = !!required.value.trim(); if (valid) required.removeAttribute('aria-invalid'); }
      if (q.dataset.group) { var count = q.querySelectorAll('input:checked').length, max = Number(q.dataset.max); valid = count > 0 && (!max || count <= max); }
      if (valid) { q.removeAttribute('aria-invalid'); var err = q.querySelector('.err'); if (err) err.classList.remove('on'); }
    });
  }
  form.addEventListener('change', function () { revealBranches(); clearCorrectedErrors(); summary(); });
  form.addEventListener('input', function () { clearCorrectedErrors(); summary(); });
  function validate(section) {
    section.querySelectorAll('.err').forEach(function (el) { el.classList.remove('on'); });
    section.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    var first;
    section.querySelectorAll('input[required],textarea[required]').forEach(function (input) {
      if (!input.value.trim()) { first = first || input; input.setAttribute('aria-invalid', 'true'); input.closest('.q').querySelector('.err').classList.add('on'); }
    });
    section.querySelectorAll('.q[data-group]').forEach(function (q) {
      if (!q.dataset.group || q.closest('.branch')) return;
      var count = q.querySelectorAll('input:checked').length, max = Number(q.dataset.max);
      if (!count || (max && count > max)) { first = first || q.querySelector('input'); q.setAttribute('aria-invalid', 'true'); q.querySelector('.err').classList.add('on'); }
    });
    if (first) { first.focus({ preventScroll: true }); first.closest('.q').scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    return !first;
  }
  btnN.addEventListener('click', function () {
    if (submitted || !validate(document.querySelector('.step.on'))) return;
    if (cur < TOTAL) { track('diagnosis_step', { step: cur }); cur++; paint(); }
    else submit();
  });
  btnP.addEventListener('click', function () { if (!submitted && cur > 1) { cur--; paint(); } });
  form.addEventListener('submit', function (event) { event.preventDefault(); });
  form.addEventListener('keydown', function (event) { if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') { event.preventDefault(); btnN.click(); } });
  async function submit() {
    submitted = true; btnN.disabled = true; btnP.disabled = true; error.hidden = true; btnN.textContent = '正在送出需求…';
    var name = document.getElementById('f_name').value.trim();
    try {
      if (!window.hcfMirrorForm) throw new Error('not ready');
      var result = await window.hcfMirrorForm(form);
      if (!result || !result.ok) throw new Error('unconfirmed');
      // Email remains the existing secondary channel. The APP must confirm receipt first.
      var payload = answers(); payload._subject = '🥊 新生需求診斷｜' + name; payload._template = 'table'; payload._captcha = 'false';
      fetch('https://formsubmit.co/ajax/hsinchucombat2022@gmail.com', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) }).catch(function () {});
      track('generate_lead', { currency: 'TWD', value: 400, plan: chosen('開始方式')[0] || '', when: chosen('預計開始')[0] || '' });
      document.getElementById('doneMsg').textContent = '已填寫｜' + name;
      document.getElementById('formWrap').style.display = 'none'; document.getElementById('pgWrap').style.display = 'none';
      document.getElementById('navBar').classList.remove('on'); document.getElementById('done').classList.add('on');
      document.querySelector('#done h2').focus({ preventScroll: true }); window.scrollTo({ top: 0 });
      // Explicit LINE button lets the visitor read/copy the confirmation without an automatic redirect.
    } catch (_) {
      submitted = false; btnN.disabled = false; btnP.disabled = false; btnN.textContent = '重新送出需求';
      error.textContent = '暫時無法確認收件，填寫內容已保留在此頁。請檢查連線再試一次；若不確定是否已送出，也可到官方 LINE 請教練核對。'; error.hidden = false;
    }
  }
  document.getElementById('copyDone').addEventListener('click', async function () {
    var text = document.getElementById('doneMsg');
    try { await navigator.clipboard.writeText(text.textContent); document.getElementById('copyStatus').textContent = '已複製，貼到官方 LINE 即可'; }
    catch (_) { var selection = window.getSelection(), range = document.createRange(); range.selectNodeContents(text); selection.removeAllRanges(); selection.addRange(range); document.getElementById('copyStatus').textContent = '請長按已選取的文字並複製'; }
  });
  revealBranches();
})();
