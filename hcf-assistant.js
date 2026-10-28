/* HCF original-logo course companion. Local FAQ only; no chat data is transmitted. */
(async () => {
  'use strict';
  if (document.getElementById('hcf-shark-assistant')) return;
  async function dependency(src, ready) {
    if (ready()) return;
    await new Promise((resolve, reject) => { const s = document.createElement('script'); s.src = src; s.onload = resolve; s.onerror = reject; document.head.append(s); });
  }
  try { await dependency('/hcf-course-data.js?v=20261027', () => !!window.HCFChoice); } catch (_) { /* FAQs remain available offline. */ }
  if (!window.hcfGrowthTrack) dependency('/hcf-growth-events.js?v=20261027', () => !!window.hcfGrowthTrack).catch(() => {});
  const track = (name, params) => window.hcfGrowthTrack?.(name, params);
  const host = document.createElement('div');
  host.id = 'hcf-shark-assistant';
  host.style.visibility = 'hidden';
  const root = host.attachShadow({mode: 'open'});
  const sheet = document.createElement('link');
  sheet.rel = 'stylesheet'; sheet.href = '/hcf-assistant.css?v=20261027';
  const widget = document.createElement('div');
  widget.className = 'widget'; widget.dataset.mood = 'ready';
  widget.innerHTML = `
    <section id="panel" class="panel" role="dialog" aria-label="小鯊課程小幫手" hidden>
      <header class="header"><span class="sprite avatar" aria-hidden="true"></span><div><h2>小鯊・課程小幫手</h2><p id="status" class="status">陪你找到第一堂課</p></div><button id="close" class="close" type="button" aria-label="收起小鯊對話">−</button></header>
      <div id="conversation" class="conversation" role="log" aria-live="polite" aria-relevant="additions text" aria-label="與小鯊的對話"><div class="message"><small>小鯊</small><p>嗨，我是 HCF 小鯊！🥊\n第一次接觸格鬥也沒關係。想先了解課程、體驗費用，還是怎麼預約？</p></div></div>
      <button id="guide-start" class="guide-start" type="button">三個問題，幫我選第一堂課 →</button><div class="quick" aria-label="課程快捷問題"><button type="button" data-question="我是零基礎">我是零基礎 ↗</button><button type="button" data-question="體驗課多少錢？">體驗課多少錢？</button><button type="button" data-question="查看最新課表">查看最新課表</button><button type="button" data-question="第一次要帶什麼？">第一次要帶什麼？</button></div>
      <form id="form" class="form"><label for="question" class="sr-only">想問小鯊的問題</label><input id="question" type="text" placeholder="試著問：怎麼預約？" autocomplete="off" maxlength="180"><button class="send" id="send" type="submit" aria-label="送出問題">↑</button></form>
      <div class="tools"><button id="motion" type="button" aria-pressed="false">減少動態</button><button id="reset" type="button">回到角落</button><button id="minimize" type="button">暫時收起</button></div>
      <p class="footnote">常見問題自動回覆・預約由教練確認</p>
    </section>
    <button id="launcher" class="launcher" type="button" aria-label="開啟小鯊課程助手；按住可拖曳移動" aria-expanded="false" aria-controls="panel" aria-describedby="drag-help"><span class="glow"></span><span class="sprite" aria-hidden="true"></span><span class="sleep-marks" aria-hidden="true"><i>Z</i><i>z</i><i>z</i></span><span class="badge" id="badge">拖曳移動 · 點我聊</span><span id="speech" class="speech" aria-hidden="true">嘿！準備好一起變強了嗎？</span></button>
    <button id="rest" class="rest" type="button" aria-label="展開小鯊選課助手" hidden><span class="sprite" aria-hidden="true"></span>小鯊選課</button><button id="tuck" class="tuck" type="button" aria-label="暫時收起小鯊">−</button>
    <span id="drag-help" class="sr-only">按住角色可拖曳。方向鍵移動，Shift 加方向鍵加速，Home 回到角落；點一下聊天或叫醒。20 秒沒互動會睡覺。</span><span class="safe-area" id="safe-area" aria-hidden="true"></span>`;
  root.append(sheet, widget);
  document.body.append(host);
  const $ = selector => root.querySelector(selector);
  const $$ = selector => [...root.querySelectorAll(selector)];
  const launcher = $('#launcher'), panel = $('#panel'), input = $('#question');
  const IDLE_MS = 20000, POSITION_KEY = 'hcf-shark-position-v1';
  const moods = {
    ready: '嘿！準備好一起變強了嗎？', happy: '很高興認識你，一起開始吧！',
    thinking: '我想想，幫你找個好起點⋯', cheer: '碰拳！今天也為自己贏一次。',
    sleeping: 'Zzz…我先睡一下，點我叫醒。'
  };
  const answers = [
    {keys: /零基礎|新手|不會|第一次學/, text: '零基礎可以先了解新手泰拳！從站架、移動與基本拳腿開始，以打靶等基礎練習為主，入門課不安排學員互相擊打。先把第一步練穩就很棒了。', label: '看看新手課程', url: '/group-classes.html', mood: 'happy'},
    {keys: /費用|多少|價錢|價格|體驗課|體驗費/, text: '團體課首堂體驗是 NT$400。想多一些個別指導，也有私人教練體驗 1 堂 NT$1,400、深度體驗 2 堂 NT$2,400。方案與時段以官網和教練確認為準。', label: '選擇我的體驗方式', url: '/booking.html', mood: 'happy'},
    {keys: /課表|時間|幾點|時段|星期|週/, text: '最新課表可以在官網查看，再依班別與程度選擇。全館採預約制；實際開課與可約名額請看最新課表及預約系統，我這裡不顯示即時名額。', label: '查看最新課表', url: '/schedule.html', mood: 'ready'},
    {keys: /帶什麼|穿什麼|裝備|毛巾|水壺/, text: '帶水壺、毛巾，穿方便活動的運動服就好。體驗借用裝備依方案安排；鞋襪規範或其他個人用品，可以在預約時先跟教練確認。', label: '查看體驗說明', url: '/group-classes.html', mood: 'happy'},
    {keys: /預約|報名|加入|體驗/, text: '先填寫體驗需求，讓教練了解你的目標與方便時間。手機送出後會開啟官方 LINE，請再按「傳送」，由教練確認時段。這裡的聊天不會建立預約。', label: '前往體驗預約', url: '/booking.html', mood: 'cheer'},
    {keys: /受傷|痛|疾病|懷孕|手術|不舒服/, text: '有既有不適或需要調整的狀況，請先跟教練說明，確認適合的課程安排；我無法透過線上訊息判斷你的身體狀況。', label: '聯絡 HCF 教練', url: 'https://lin.ee/7lidUv0', mood: 'thinking'},
    {keys: /對打|被打|害怕|緊張/, text: '不用把對打當作目標。可以持續以運動、體能或技術為主；自由技術對打需要另外確認參加意願、裝備與教練評估。先照自己的步調開始。', label: '了解課程與接觸方式', url: '/group-classes.html', mood: 'happy'},
    {keys: /地址|哪裡|位置|怎麼去/, text: 'HCF 新竹格鬥在新竹市北區林森路 301 號 2 樓。出發前記得先預約，讓教練幫你安排合適的課程。', label: '查看官網資訊', url: '/', mood: 'ready'},
    {keys: /加油|碰拳|擊拳|嗨|你好|謝謝/, text: '碰拳！🥊 不必一開始就很厲害，願意踏出第一步就值得鼓勵。我在這裡，陪你一起變強。', mood: 'cheer'}
  ];
  let busy = false, open = false, idleTimer, resetTimer, drag = null, suppressClickUntil = 0;
  let position = {x: 1, y: 1};
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = motionPreference.matches;
  try {
    const saved = JSON.parse(localStorage.getItem(POSITION_KEY));
    if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) position = {x: Math.max(0, Math.min(1, saved.x)), y: Math.max(0, Math.min(1, saved.y))};
  } catch { /* Position storage is optional. */ }
  const readingPage = document.body.classList.contains('hcf-reading');
  let minimized = document.body.dataset.page === 'booking' || readingPage;
  try { minimized = minimized || sessionStorage.getItem('hcf-shark-minimized') === '1'; } catch (_) {}
  const clamp = (n, min, max) => Math.max(min, Math.min(Math.max(min, max), n));
  function setMotion(value) {
    reduced = value; widget.classList.toggle('reduced', value);
    $('#motion').setAttribute('aria-pressed', String(value));
    $('#motion').textContent = value ? '恢復動態' : '減少動態';
  }
  function label() {
    const action = widget.dataset.mood === 'sleeping' ? '叫醒小鯊' : open ? '收起小鯊課程助手' : '開啟小鯊課程助手';
    launcher.setAttribute('aria-label', action + '；按住可拖曳移動');
  }
  function mood(value, text) {
    clearTimeout(resetTimer); widget.dataset.mood = value;
    $('#speech').textContent = text || moods[value];
    $('#badge').textContent = value === 'sleeping' ? '點我叫醒' : '拖曳移動 · 點我聊';
    $('#status').textContent = value === 'sleeping' ? '打個盹，有事就叫我' : busy ? '正在整理課程資訊…' : '陪你找到第一堂課';
    label();
  }
  function resetLater() {
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { if (!busy && widget.dataset.mood !== 'sleeping' && root.activeElement !== input) mood('ready'); }, 6500);
  }
  function scheduleSleep() {
    clearTimeout(idleTimer);
    if (!drag) idleTimer = setTimeout(() => { if (busy) scheduleSleep(); else mood('sleeping'); }, IDLE_MS);
  }
  function activity() {
    if (widget.dataset.mood === 'sleeping') { mood('happy', '我醒啦！繼續陪你一起變強。'); resetLater(); }
    scheduleSleep();
  }
  ['pointerdown', 'keydown', 'input', 'wheel'].forEach(type => root.addEventListener(type, activity, {capture: true, passive: true}));
  function viewport() {
    const v = window.visualViewport;
    return {left: v?.offsetLeft || 0, top: v?.offsetTop || 0, width: v?.width || innerWidth, height: v?.height || innerHeight};
  }
  function bounds() {
    const v = viewport(), size = launcher.offsetWidth, margin = 24;
    let bottomInset = Math.max(margin, parseFloat(getComputedStyle($('#safe-area')).paddingBottom) + 16);
    // Keep the resting position above existing booking bars and the music control.
    document.querySelectorAll('.mcta,.stickybar,.nav.on,#bgmBtn').forEach(element => {
      const r = element.getBoundingClientRect(), style = getComputedStyle(element);
      if (style.position === 'fixed' && style.display !== 'none' && style.visibility !== 'hidden' && r.width && r.height && r.height < 180 && r.top > v.top + v.height / 2 && r.top < v.top + v.height) {
        bottomInset = Math.max(bottomInset, v.top + v.height - r.top + 20);
      }
    });
    bottomInset = Math.min(bottomInset, Math.max(margin, v.height - size - margin));
    return {v, size, left: v.left + margin, top: v.top + margin, width: Math.max(0, v.width - size - margin * 2), height: Math.max(0, v.height - size - margin - bottomInset), bottom: v.top + v.height - bottomInset};
  }
  function layout() {
    const b = bounds(), v = b.v, gap = 16, margin = 12;
    const x = b.left + b.width * position.x, y = b.top + b.height * position.y;
    Object.assign(launcher.style, {left: x + 'px', top: y + 'px'});
    Object.assign($('#tuck').style, {left: (x + b.size - 18) + 'px', top: (y - 15) + 'px'});
    Object.assign($('#rest').style, {right: '12px', top: Math.max(v.top + 12,b.bottom - 44) + 'px'});
    const bubbleWidth = Math.min(220, v.width - margin * 2);
    Object.assign($('#speech').style, {width: bubbleWidth + 'px', left: clamp(x + b.size / 2 - bubbleWidth / 2, v.left + margin, v.left + v.width - margin - bubbleWidth) - x + 'px'});
    $('#speech').classList.toggle('below', y - v.top < 100);
    if (!open) return;
    const width = Math.min(370, v.width - margin * 2);
    const fitsLeft = x - gap - width >= v.left + margin;
    const fitsRight = x + b.size + gap + width <= v.left + v.width - margin;
    let left, top, height;
    if (v.width <= 720) {
      height = Math.max(180, Math.min(640, b.bottom - v.top - margin * 2));
      left = v.left + (v.width - width) / 2;
      top = Math.max(v.top + margin, b.bottom - height);
    } else if (fitsLeft || fitsRight) {
      height = Math.min(590, b.bottom - v.top - margin);
      left = fitsLeft ? x - gap - width : x + b.size + gap;
      top = clamp(y + b.size - height, v.top + margin, b.bottom - height);
    } else {
      const above = y - v.top - margin - gap, below = b.bottom - y - b.size - gap;
      const useAbove = above >= below;
      height = Math.min(590, Math.max(160, useAbove ? above : below));
      height = Math.min(height, v.height - margin * 2);
      left = clamp(x + b.size / 2 - width / 2, v.left + margin, v.left + v.width - margin - width);
      top = useAbove ? y - gap - height : y + b.size + gap;
      top = clamp(top, v.top + margin, v.top + v.height - margin - height);
    }
    panel.classList.toggle('compact', height < 400);
    Object.assign(panel.style, {left: left + 'px', top: top + 'px', width: width + 'px', height: height + 'px'});
  }
  function setOpen(value, focus = true) {
    if (value && minimized) setMinimized(false);
    open = value; widget.classList.toggle('is-open', value); panel.hidden = !value; launcher.setAttribute('aria-expanded', String(value)); label(); layout();
    if (focus) (value ? input : launcher).focus({preventScroll: true});
  }
  function setMinimized(value, focus = false) {
    minimized = value;
    if (value && open) setOpen(false, false);
    launcher.hidden = value; $('#tuck').hidden = value; $('#rest').hidden = !value;
    widget.classList.toggle('is-minimized', value);
    try { sessionStorage.setItem('hcf-shark-minimized', value ? '1' : '0'); } catch (_) {}
    layout(); if (focus) (value ? $('#rest') : launcher).focus({preventScroll:true});
  }
  $('#minimize').addEventListener('click', () => {track('shark_minimize');setMinimized(true,true);});
  $('#tuck').addEventListener('click', () => {track('shark_minimize');setMinimized(true,true);});
  $('#rest').addEventListener('click', () => {setMinimized(false);setOpen(true,false);$('#guide-start').focus();});
  window.addEventListener('hcf-booking-active', () => setMinimized(true));
  function savePosition() { try { localStorage.setItem(POSITION_KEY, JSON.stringify(position)); } catch { /* No storage is needed to drag. */ } }
  function moveTo(x, y) {
    const b = bounds();
    position = {x: b.width ? clamp((x - b.left) / b.width, 0, 1) : 0, y: b.height ? clamp((y - b.top) / b.height, 0, 1) : 0};
    layout();
  }
  launcher.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    const r = launcher.getBoundingClientRect();
    drag = {id: e.pointerId, startX: e.clientX, startY: e.clientY, x: r.left, y: r.top, moved: false};
    clearTimeout(idleTimer); launcher.setPointerCapture(e.pointerId);
  });
  launcher.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 7) return;
    drag.moved = true; launcher.classList.add('dragging');
    launcher.style.setProperty('--drag-tilt', clamp(dx / 8, -9, 9) + 'deg'); moveTo(drag.x + dx, drag.y + dy);
  });
  function finishDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.moved) { suppressClickUntil = Date.now() + 600; savePosition(); }
    drag = null; launcher.classList.remove('dragging');
    if (launcher.hasPointerCapture(e.pointerId)) launcher.releasePointerCapture(e.pointerId);
    scheduleSleep();
  }
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => launcher.addEventListener(type, finishDrag));
  launcher.addEventListener('click', e => {
    if (Date.now() < suppressClickUntil) { e.preventDefault(); return; }
    activity(); setOpen(!open);
    if (open && !busy) { mood('happy', '嗨！有什麼想了解的？'); resetLater(); }
  });
  launcher.addEventListener('keydown', e => {
    const steps = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]};
    if (e.key === 'Home') { e.preventDefault(); position = {x: 1, y: 1}; layout(); savePosition(); }
    else if (steps[e.key]) {
      e.preventDefault(); const r = launcher.getBoundingClientRect(), step = e.shiftKey ? 40 : 12;
      moveTo(r.left + steps[e.key][0] * step, r.top + steps[e.key][1] * step); savePosition();
    }
  });
  function addMessage(text, role, link) {
    const message = document.createElement('div'); message.className = 'message ' + role;
    if (role !== 'user') { const name = document.createElement('small'); name.textContent = '小鯊'; message.append(name); }
    const p = document.createElement('p'); p.textContent = text; message.append(p);
    if (link?.url) { const a = document.createElement('a'); a.href = link.url; a.textContent = link.label + ' ↗'; if (new URL(a.href,location.href).origin !== location.origin) {a.target = '_blank'; a.rel = 'noopener noreferrer';} message.append(a); }
    $('#conversation').append(message);
    while ($('#conversation').children.length > 30) $('#conversation').firstElementChild.remove();
    $('#conversation').scrollTop = $('#conversation').scrollHeight;
    return message;
  }
  function ask(raw) {
    const text = raw.trim().slice(0, 180); if (!text || busy) return;
    activity(); busy = true; mood('thinking');
    $$('.quick button,#send').forEach(b => b.disabled = true);
    addMessage(text, 'user'); input.value = '';
    const typing = addMessage('小鯊思考中 ⋯', 'typing');
    setTimeout(() => {
      typing.remove();
      const reply = answers.find(a => a.keys.test(text)) || {text: '這題交給教練幫你確認！你也可以先問我新手課程、體驗費用、課表、裝備或預約方式。', label: '詢問 HCF 教練', url: 'https://lin.ee/7lidUv0', mood: 'ready'};
      addMessage(reply.text, 'assistant', reply); busy = false; mood(reply.mood);
      $$('.quick button,#send').forEach(b => b.disabled = false); resetLater(); scheduleSleep();
    }, reduced ? 250 : 900);
  }
  let guide = null;
  function guideStep(step) {
    const api = window.HCFChoice;
    if (!api) { addMessage('選課引導暫時無法載入，你可以直接填寫體驗需求。','assistant',{url:'/booking.html',label:'前往預約'}); return; }
    const config = [ ['goal','1 / 3 · 你最想獲得什麼？',api.goals], ['experience','2 / 3 · 目前的格鬥經驗？',api.experience], ['time','3 / 3 · 哪個時段比較方便？',api.times] ][step];
    const message = addMessage(config[1], 'assistant');
    const choices = document.createElement('div'); choices.className = 'guide-choices';
    Object.entries(config[2]).forEach(([key,value]) => {
      const button = document.createElement('button'); button.type='button'; button.textContent=value[0];
      button.addEventListener('click', () => {
        if (!guide) return;
        choices.querySelectorAll('button').forEach(b => b.disabled=true);
        guide[config[0]]=key; addMessage(value[0],'user');
        if (step < 2) guideStep(step+1);
        else {
          const result=api.recommend(guide); track('shark_guide_complete',{course:result.id});
          const note = guide.time === 'weekend' ? '\n週六課程與可約名額請以最新課表及教練確認為準。' : '';
          const msg=addMessage('建議先了解：'+result.name+'\n'+(result.minutes ? result.minutes+' 分鐘 · ' : '')+'體驗 NT$'+result.price.toLocaleString()+'\n'+result.note+note+'\n這是選課建議，時段與參加資格由教練確認。','assistant');
          const link=document.createElement('a');link.href='/booking.html'+api.encode(guide);link.textContent='帶入選課結果，安排體驗 →';
          link.addEventListener('click',()=>track('shark_booking_click',{course:result.id}));msg.append(link);
          guide=null; mood('cheer'); resetLater();
        }
        $('#conversation').scrollTop=$('#conversation').scrollHeight;
        const next = $('#conversation').lastElementChild?.querySelector('button,a'); if(next) next.focus({preventScroll:true});
      }); choices.append(button);
    }); message.append(choices); $('#conversation').scrollTop=$('#conversation').scrollHeight;
  }
  $('#guide-start').addEventListener('click', () => {
    if (busy) return;
    $$('.guide-choices button').forEach(b=>b.disabled=true);
    guide={};track('shark_guide_start');guideStep(0);
  });
  $$('.quick button').forEach(b => b.addEventListener('click', () => ask(b.dataset.question)));
  $('#form').addEventListener('submit', e => { e.preventDefault(); ask(input.value); });
  input.addEventListener('input', () => { if (!busy) mood(input.value ? 'thinking' : 'ready', input.value ? '我在聽，慢慢說。' : undefined); });
  $('#close').addEventListener('click', () => {if(document.body.dataset.page==='booking'||readingPage)setMinimized(true,true);else setOpen(false);});
  root.addEventListener('keydown', e => { if (e.key === 'Escape' && open) { e.preventDefault(); e.stopPropagation(); setOpen(false); } });
  $('#reset').addEventListener('click', () => { position = {x: 1, y: 1}; layout(); savePosition(); });
  $('#motion').addEventListener('click', () => setMotion(!reduced));
  setMinimized(minimized);
  setMotion(reduced); motionPreference.addEventListener('change', e => setMotion(e.matches));
  let layoutFrame = 0;
  function queueLayout() { if (!layoutFrame) layoutFrame = requestAnimationFrame(() => { layoutFrame = 0; layout(); }); }
  window.addEventListener('resize', queueLayout);
  window.visualViewport?.addEventListener('resize', queueLayout);
  window.visualViewport?.addEventListener('scroll', queueLayout);
  new MutationObserver(queueLayout).observe(document.body, {childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'hidden']});
  sheet.addEventListener('load', () => { layout(); host.style.visibility = 'visible'; scheduleSleep(); }, {once: true});
  sheet.addEventListener('error', () => host.remove(), {once: true});
})();
