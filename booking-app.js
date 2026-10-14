/* hcf-booking-upgrade-20261014-r3 · confirmed receipt before LINE draft handoff */
(function () {
  'use strict';
  var TOTAL = 4, cur = 1, submitted = false, editing = false, started = false;
  var form = document.getElementById('diagForm');
  var btnN = document.getElementById('btnNext'), btnP = document.getElementById('btnPrev');
  var sections = document.querySelectorAll('.step');
  var error = document.getElementById('submitError');
  // Only fixed operation names and numeric steps. Never send answers, IDs or LINE draft URLs.
  function track(event, data) {
    var events = ['booking_start','booking_step_view','booking_step_complete','booking_step_leave','booking_edit','booking_submit_success','booking_submit_failure','booking_line_open','booking_copy'];
    if (!events.includes(event)) return;
    var safe = { form_version: '20261014_r3' };
    if (data && Number.isInteger(data.step) && data.step >= 1 && data.step <= TOTAL) safe.step = data.step;
    if (data && ['manual','automatic'].includes(data.mode)) safe.mode = data.mode;
    if (typeof window.gtag === 'function') window.gtag('event', event, safe);
  }
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
      label.textContent = entry[0].replace(/_/g, '｜'); value.textContent = entry[1]; row.append(label, value);
      var input = Array.from(form.elements).find(function (el) { return el.name === entry[0] && !el.disabled; });
      if (input) {
        var edit = document.createElement('button'); edit.type = 'button'; edit.className = 'edit-answer'; edit.textContent = '修改'; edit.setAttribute('aria-label', '修改' + label.textContent);
        edit.addEventListener('click', function () {
          if (submitted) return;
          editing = true; cur = Number(input.closest('.step').dataset.step); track('booking_edit', {step:cur}); paint();
          var details = input.closest('details'); if (details) details.open = true;
          input.focus({preventScroll:true}); input.closest('.q').scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
        }); row.append(edit);
      }
      target.append(row);
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
    btnP.style.display = editing || cur === 1 ? 'none' : 'block';
    btnN.textContent = editing ? '完成修改 回到摘要' : cur === TOTAL ? '送出並前往 LINE' : '下一步 →';
    document.getElementById('navHint').textContent = ['下一步：體驗方式', '下一步：方便時間', '下一步：安全與確認', 'LINE 會帶入表單，請再按傳送'][cur - 1];
    document.querySelector('.step.on h2').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
  }
  document.getElementById('startBtn').addEventListener('click', function () {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('formWrap').style.display = 'block';
    document.getElementById('pgWrap').style.display = 'block';
    document.getElementById('navBar').classList.add('on'); started = true; track('booking_start'); track('booking_step_view', {step:cur}); paint();
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
    if (editing) { editing = false; cur = TOTAL; paint(); document.getElementById('reviewTitle').setAttribute('tabindex','-1'); document.getElementById('reviewTitle').focus(); return; }
    track('booking_step_complete', {step:cur});
    if (cur < TOTAL) { cur++; track('booking_step_view', {step:cur}); paint(); }
    else submit();
  });
  btnP.addEventListener('click', function () { if (!submitted && cur > 1) { track('booking_step_leave',{step:cur}); cur--; track('booking_step_view',{step:cur}); paint(); } });
  form.addEventListener('submit', function (event) { event.preventDefault(); });
  form.addEventListener('keydown', function (event) { if (event.key === 'Enter' && event.target.tagName === 'INPUT' && !['radio','checkbox'].includes(event.target.type)) { event.preventDefault(); btnN.click(); } });
  document.querySelectorAll('[data-goal-prompt]').forEach(function (button) {
    button.addEventListener('click', function () {
      var input = document.getElementById('f_change'), value = button.dataset.goalPrompt;
      if (!input.value.includes(value)) input.value = input.value.trim() + (input.value.trim() ? '、' : '') + value;
      input.focus(); summary();
    });
  });
  window.addEventListener('pagehide',function () { if (started && !submitted) track('booking_step_leave',{step:cur}); });
  async function submit() {
    submitted = true; btnN.disabled = true; btnP.disabled = true; error.hidden = true; btnN.textContent = '正在送出需求…';
    var snapshot = answers(), name = snapshot['稱呼'];
    var inputs = Array.from(form.elements).map(function (input) { return { input: input, disabled: input.disabled }; });
    var handoff;
    try {
      if (!window.hcfMirrorForm || !window.HCFBookingLine) throw new Error('not ready');
      var delivery = window.hcfMirrorForm(form);
      inputs.forEach(function (row) { row.input.disabled = true; });
      form.setAttribute('aria-busy', 'true');
      var result = await delivery;
      if (!result || !result.ok) throw new Error('unconfirmed');
      handoff = window.HCFBookingLine.build(snapshot, navigator, result.id);
    } catch (_) {
      inputs.forEach(function (row) { row.input.disabled = row.disabled; });
      form.removeAttribute('aria-busy');
      track('booking_submit_failure');
      submitted = false; btnN.disabled = false; btnP.disabled = false; btnN.textContent = '重新送出需求';
      error.textContent = '暫時無法確認收件，填寫內容已保留在此頁。請檢查連線再試一次；若不確定是否已送出，也可到官方 LINE 請教練核對。'; error.hidden = false;
      return;
    }
    // All destinations use the same submitted snapshot. A LINE problem must never resubmit the form.
    form.removeAttribute('aria-busy');
    var payload = Object.assign({}, snapshot, handoff.receiptId ? {'收件編號':handoff.receiptId} : {}, { _subject: '🥊 新生需求診斷｜' + name, _template: 'table', _captcha: 'false' });
    fetch('https://formsubmit.co/ajax/hsinchucombat2022@gmail.com', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) }).catch(function () {});
    var stored = false;
    try { stored = window.HCFBookingLine.save(window.sessionStorage, handoff.message, Date.now()); } catch (_) {}
    showDone(handoff, stored);
    if (!stored && handoff.autoOpen) lineStatus.textContent = '需求已收件。此瀏覽器無法暫存摘要，請先複製完整表單，再點按鈕前往 LINE。';
    track('booking_submit_success');
  }
  function showDone(handoff, autoOpen) {
    document.getElementById('doneMsg').textContent = handoff.message;
    document.getElementById('receiptId').textContent = handoff.receiptId || '舊版收件摘要 請用稱呼核對';
    document.getElementById('intro').style.display = 'none';
    document.getElementById('formWrap').style.display = 'none'; document.getElementById('pgWrap').style.display = 'none';
    document.getElementById('navBar').classList.remove('on'); document.getElementById('done').classList.add('on');
    document.querySelector('#done h2').focus({ preventScroll: true }); window.scrollTo({ top: 0 });
    prepareLine(handoff, autoOpen);
  }
  var lineTimer = null, lineHandoff = null;
  var lineButton = document.getElementById('openLine'), lineStatus = document.getElementById('lineStatus'), cancelLine = document.getElementById('cancelLine');
  function stopLine() { if (lineTimer !== null) clearTimeout(lineTimer); lineTimer = null; cancelLine.hidden = true; }
  function prepareLine(handoff, autoOpen) {
    stopLine(); lineHandoff = handoff;
    // Keep the draft out of anchor href: automatic outbound analytics must not capture personal data.
    lineButton.href = handoff.profileURL;
    if (!handoff.autoOpen) {
      lineStatus.textContent = handoff.reason === 'desktop' ? '電腦版請先複製完整表單，再開啟官方 LINE；可用手機掃描 LINE 頁面的 QR code。' : '內容較長，完整表單已保留下方。請先複製，再開啟官方 LINE 貼上並傳送。';
      lineButton.textContent = '開啟 HCF 官方 LINE'; return;
    }
    lineButton.textContent = '立即開啟 LINE 帶入表單';
    if (autoOpen === false) { lineStatus.textContent = '需求已收件。若尚未在 LINE 傳送，請用下方按鈕繼續，不必重新填表。'; return; }
    lineStatus.textContent = '3 秒後開啟官方 LINE，表單會帶入訊息框。請再按一次「傳送」，教練才會在 LINE 收到。';
    cancelLine.hidden = false;
    lineTimer = setTimeout(function () {
      stopLine();
      lineStatus.textContent = '正在開啟 LINE。若沒有跳轉或沒有帶入內容，請使用下方按鈕，或複製完整表單貼上。';
      openLineDraft('automatic');
    }, 3000);
  }
  function openLineDraft(mode) { stopLine(); if (!lineHandoff) return; track('booking_line_open',{mode:mode}); window.location.assign(lineHandoff.url); }
  lineButton.addEventListener('click', function (event) { event.preventDefault(); openLineDraft('manual'); });
  cancelLine.addEventListener('click', function () { stopLine(); lineStatus.textContent = '已留在此頁。準備好後點「開啟 LINE」，確認內容再按傳送。'; });
  document.addEventListener('visibilitychange', function () { if (document.hidden && lineTimer !== null) { stopLine(); lineStatus.textContent = '需求已收件。若尚未在 LINE 傳送，請用下方按鈕繼續。'; } });
  window.addEventListener('pagehide', stopLine);
  window.addEventListener('pageshow', function (event) { if (event.persisted) { stopLine(); lineStatus.textContent = '需求已收件。若尚未在 LINE 傳送，請用下方按鈕繼續。'; } });
  document.getElementById('copyDone').addEventListener('click', async function () {
    stopLine();
    lineStatus.textContent = '完整表單已保留下方。複製後開啟官方 LINE，貼上並按「傳送」。';
    track('booking_copy');
    var text = document.getElementById('doneMsg');
    try { await navigator.clipboard.writeText(text.textContent); document.getElementById('copyStatus').textContent = '已複製，貼到官方 LINE 即可'; }
    catch (_) { var selection = window.getSelection(), range = document.createRange(); range.selectNodeContents(text); selection.removeAllRanges(); selection.addRange(range); document.getElementById('copyStatus').textContent = '請長按已選取的文字並複製'; }
  });
  document.getElementById('newBooking').addEventListener('click', function () {
    stopLine(); try { window.HCFBookingLine.clear(window.sessionStorage); } catch (_) {}
    window.location.reload();
  });
  revealBranches();
  try {
    var restored = window.HCFBookingLine.restore(window.sessionStorage, Date.now(), navigator);
    if (restored) { submitted = true; showDone(restored, false); }
  } catch (_) {}
})();
