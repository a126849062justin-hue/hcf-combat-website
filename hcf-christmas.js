/* HCF Christmas round. Local interactions only. No sound or booking is triggered. */
(function (factory) {
  const rules = factory();
  if (typeof module === 'object' && module.exports) module.exports = rules;
  else if (typeof window !== 'undefined') startChristmas(rules);
})(function () {
  'use strict';
  return {
    season(date) {
      const parts = new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Taipei', year:'numeric', month:'numeric', day:'numeric'}).formatToParts(date);
      const get = type => Number(parts.find(p => p.type === type).value);
      const day = get('month') * 100 + get('day'), year = get('year');
      return day >= 1120 ? year : day <= 106 ? year - 1 : null;
    },
    eligible(path) {
      return !/^\/(admin|backend|api)(\/|$)/.test(path);
    },
    restore(raw) {
      let value;
      try { value = JSON.parse(raw || '{}'); } catch (_) { value = {}; }
      if (!value || typeof value !== 'object') value = {};
      const collected = Array.isArray(value.collected) ? [...new Set(value.collected.filter(v => Number.isInteger(v) && v >= 0 && v < 3))] : [];
      return {collected, wish:Number.isInteger(value.wish) && value.wish >= 0 && value.wish < 4 ? value.wish : 0, snow:value.snow !== false};
    },
    collect(state, index) {
      if (!Number.isInteger(index) || index < 0 || index > 2 || state.collected.includes(index)) return state;
      return {...state, collected:[...state.collected,index]};
    }
  };
});

async function startChristmas(rules) {
  'use strict';
  const year = rules.season(new Date());
  if (year === null || !rules.eligible(location.pathname) || document.getElementById('hcf-christmas') || window.__hcfChristmasStarting) return;
  window.__hcfChristmasStarting = true;
  if (document.readyState === 'loading') await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, {once:true}));
  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = '/hcf-christmas.css?v=20261123';
  const ready = new Promise(resolve => {css.onload=()=>resolve(true);css.onerror=()=>resolve(false);});
  document.head.append(css);
  if (!await ready) {window.__hcfChristmasStarting=false;return;}

  const key = 'hcf-christmas-' + year;
  let saved = null;
  try { saved = localStorage.getItem(key); } catch (_) {}
  let state = rules.restore(saved), previousFocus, oldOverflow='', retired=false;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const home = /^\/(index(?:\.html)?)?$/.test(location.pathname);
  const wishes = [
    ['把第一步送給自己','不用等到準備完美才開始','願你帶著勇氣踏出第一步 也把掌聲留給每一次願意嘗試的自己'],
    ['把熱愛練成日常','每一次出席都算數','願你在忙碌裡留一點時間給自己 讓喜歡的事慢慢成為生活的一部分'],
    ['下一回合一起更好','有人陪練的冬天很暖','願你遇見一起努力的夥伴 在每一個回合裡找到繼續前進的力量'],
    ['這一年你已經很棒','為努力過的自己碰拳','願你記得那些沒有放棄的時刻 帶著自己的節奏迎接下一個開始']
  ];
  if (!saved) state.wish = Math.floor(Math.random() * wishes.length);
  const values = [
    ['HONOR','榮譽','為每一次認真出席的自己鼓掌'],
    ['COURAGE','勇氣','把還沒嘗試的第一步送給自己'],
    ['FAITH','信念','相信每一個小小的累積都算數']
  ];
  const star = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2 3.5 10.5L30 16l-10.5 3.5L16 30l-3.5-10.5L2 16l10.5-3.5Z" fill="currentColor"/></svg>';
  const giftIcon = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 15h22v13H5zM3 10h26v6H3zM16 10v18M16 10C5 10 6 1 11 4c3 2 5 6 5 6Zm0 0c11 0 10-9 5-6-3 2-5 6-5 6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  const glove = '<svg viewBox="0 0 120 130" aria-hidden="true"><path d="M39 92C19 82 19 54 23 31 27 9 49 5 71 10 92 15 98 32 93 50c8-5 17 0 17 10 0 17-11 29-27 34l-2 23H39Z" fill="currentColor" stroke="#f3dfb1" stroke-width="2"/><path d="M30 42c4-14 8-19 21-21M85 50 71 70M39 92h44M40 102h41" fill="none" stroke="#f3dfb1" stroke-opacity=".65" stroke-width="2" stroke-linecap="round"/><text x="60" y="69" text-anchor="middle" fill="#fff5db" font-family="Arial,sans-serif" font-weight="900" font-size="19" font-style="italic">HCF</text></svg>';
  const giftArt = `<span class="hcfx-gift-art" aria-hidden="true"><span class="hcfx-orbit"></span><span class="hcfx-box"><span class="hcfx-face hcfx-front"><b>HCF</b><small>FOR YOU</small></span><span class="hcfx-face hcfx-right"></span><span class="hcfx-face hcfx-top"></span><span class="hcfx-bow">${star}</span></span><span class="hcfx-gift-shadow"></span></span>`;
  const host = document.createElement('div');host.id='hcf-christmas';
  host.innerHTML = `<canvas id="hcfx-snow" aria-hidden="true"></canvas><div class="hcfx-lights" aria-hidden="true">${Array.from({length:15},(_,i)=>`<i style="--i:${i}"></i>`).join('')}</div>
    <div class="hcfx-dock" aria-label="聖誕互動控制"><button class="hcfx-dock-open" type="button" data-hcfx-open aria-haspopup="dialog">${giftIcon}<span>聖誕驚喜<small>HCF CHRISTMAS</small></span></button><button class="hcfx-snow-switch" type="button" data-hcfx-snow aria-pressed="true" aria-label="暫停飄雪">❄</button></div>
    <dialog id="hcfx-dialog" aria-labelledby="hcfx-title" aria-describedby="hcfx-description">
      <button class="hcfx-close" type="button" aria-label="關閉聖誕驚喜" autofocus>×</button>
      <div class="hcfx-dialog-layout">
        <div class="hcfx-scene" aria-hidden="true"><div class="hcfx-scene-grid"></div><span class="hcfx-scene-kicker">HCF HOLIDAY EDITION ${year}</span><span class="hcfx-scene-word">GIVE<br> YOURSELF<br><em>A ROUND</em></span><div class="hcfx-tree"><span>${star}</span></div>${giftArt}<span class="hcfx-scene-bottom">HONOR　COURAGE　FAITH</span></div>
        <div class="hcfx-play"><span class="hcfx-eyebrow">A LITTLE MAGIC FROM HCF</span><h2 id="hcfx-title">聖誕暖心回合</h2><p id="hcfx-description">點亮三個拳套<br>打開屬於你的聖誕祝福</p>
          <div class="hcfx-progress" aria-hidden="true"><i></i><i></i><i></i></div>
          <div class="hcfx-gloves" aria-label="點亮三個 HCF 精神拳套">${values.map((v,i)=>`<button type="button" class="hcfx-glove" data-hcfx-value="${i}" aria-pressed="false" aria-label="點亮${v[1]}拳套"><span class="hcfx-glove-art">${glove}<i class="hcfx-check">✓</i></span><b>${v[1]}</b><small>${v[0]}</small></button>`).join('')}</div>
          <p class="hcfx-message" role="status" aria-live="polite" aria-atomic="true">從任何一個拳套開始</p>
          <section class="hcfx-wish" aria-labelledby="hcfx-wish-title" hidden><span class="hcfx-eyebrow">MERRY CHRISTMAS</span><h3 id="hcfx-wish-title"></h3><p class="hcfx-wish-sub"></p><p class="hcfx-wish-body"></p><span class="hcfx-signature">WITH LOVE　HCF 新竹格鬥</span><div class="hcfx-wish-tools"><button type="button" data-hcfx-copy>複製我的祝福</button><button type="button" data-hcfx-again>再開一張</button></div><a class="hcfx-trial" href="/booking.html" data-cta data-intent="christmas_trial">安排我的第一堂體驗 <span aria-hidden="true">↗</span></a></section>
          <div class="hcfx-footer"><span>一份給每個努力中的你的祝福</span><button type="button" data-hcfx-snow aria-pressed="true">暫停飄雪</button></div>
        </div>
      </div>
    </dialog>`;
  document.body.append(host);
  const $ = selector => host.querySelector(selector);
  const dialog = $('#hcfx-dialog'), play = $('.hcfx-play');
  let banner=null;
  if (home && document.querySelector('.hero')) {
    banner=document.createElement('section');banner.id='hcf-christmas-home';banner.className='hcfx-home';banner.setAttribute('aria-labelledby','hcfx-home-title');
    banner.innerHTML=`<div class="hcfx-home-inner"><div class="hcfx-home-copy"><span class="hcfx-eyebrow">HCF HOLIDAY EDITION ${year}</span><h2 id="hcfx-home-title">這個聖誕<br>把勇氣送給自己</h2><p>今年的努力值得一份祝福<br>小鯊替你準備了一個暖心驚喜</p><button type="button" class="hcfx-home-cta" data-hcfx-open aria-haspopup="dialog">打開我的聖誕驚喜 <span aria-hidden="true">↗</span></button><span class="hcfx-home-note">桌面移動滑鼠探索光影　手機輕點禮物開啟</span></div><button class="hcfx-present" type="button" data-hcfx-open aria-label="打開 HCF 聖誕禮物" aria-haspopup="dialog"><span class="hcfx-present-word" aria-hidden="true">A GIFT<br>FOR YOU</span>${giftArt}<span class="hcfx-present-caption">TAP TO UNWRAP ${star}</span></button></div><div class="hcfx-home-bottom"><span>HONOR　COURAGE　FAITH</span><span>MERRY CHRISTMAS FROM HCF</span></div>`;
    document.querySelector('.hero').after(banner);
  }
  function persist() {try {localStorage.setItem(key,JSON.stringify(state));} catch (_) {}}
  function open(trigger) {
    if(dialog.open)return;
    previousFocus=trigger || document.activeElement; oldOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';render();dialog.showModal();$('.hcfx-close').focus({preventScroll:true});
  }
  function close() {if(dialog.open)dialog.close();}
  dialog.addEventListener('close',()=>{document.body.style.overflow=oldOverflow;if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});});
  $('.hcfx-close').addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  [host,banner].filter(Boolean).forEach(el=>el.addEventListener('click',e=>{const trigger=e.target.closest('[data-hcfx-open]');if(trigger)open(trigger);}));
  function render() {
    const done=state.collected.length===3;
    host.classList.toggle('hcfx-complete',done);
    host.querySelectorAll('[data-hcfx-value]').forEach(b=>{const on=state.collected.includes(Number(b.dataset.hcfxValue));b.setAttribute('aria-pressed',String(on));});
    host.querySelectorAll('.hcfx-progress i').forEach((el,i)=>el.classList.toggle('on',i<state.collected.length));
    $('.hcfx-wish').hidden=!done;
    if(done){const wish=wishes[state.wish];$('#hcfx-wish-title').textContent=wish[0];$('.hcfx-wish-sub').textContent=wish[1];$('.hcfx-wish-body').textContent=wish[2];}
    $('#hcfx-description').textContent=done?'榮譽 勇氣 信念 都已點亮':'點亮三個拳套 打開屬於你的聖誕祝福';
    $('.hcfx-message').textContent=done?'你的聖誕祝福已打開':state.collected.length ? `已點亮 ${state.collected.length} 個拳套 還有 ${3-state.collected.length} 個` : '從任何一個拳套開始';
  }
  function sparkle(button) {
    if(reduced.matches || !state.snow)return;
    const r=button.getBoundingClientRect(),p=play.getBoundingClientRect();
    for(let i=0;i<12;i++){const dot=document.createElement('span');dot.className='hcfx-spark';dot.style.cssText=`left:${r.left+r.width/2-p.left}px;top:${r.top+r.height/3-p.top}px;--x:${Math.cos(i*Math.PI/6)*90}px;--y:${Math.sin(i*Math.PI/6)*90}px;--r:${i*30}deg`;play.append(dot);dot.addEventListener('animationend',()=>dot.remove(),{once:true});setTimeout(()=>dot.remove(),800);}
  }
  host.querySelectorAll('[data-hcfx-value]').forEach(b=>b.addEventListener('click',()=>{
    const index=Number(b.dataset.hcfxValue),next=rules.collect(state,index);
    if(next===state)return;
    state=next;
    persist();render();sparkle(b);
    $('.hcfx-message').textContent=state.collected.length===3?'三個拳套已點亮 你的聖誕祝福在下方':values[index][2]+` 已點亮 ${state.collected.length} 個`;
  }));
  $('[data-hcfx-again]').addEventListener('click',()=>{state={...state,collected:[],wish:(state.wish+1)%wishes.length};persist();render();host.querySelector('[data-hcfx-value]').focus({preventScroll:true});});
  $('[data-hcfx-copy]').addEventListener('click',async()=>{
    const wish=wishes[state.wish],text=`${wish[0]}\n${wish[1]}\n${wish[2]}\n\nHCF 新竹格鬥 祝你聖誕快樂\nhttps://www.hsinchucombat.com/`;
    try {await navigator.clipboard.writeText(text);$('.hcfx-message').textContent='祝福已複製 可以分享給一起努力的夥伴';}
    catch (_) {$('.hcfx-message').textContent='目前無法複製 可以長按祝福文字選取';}
  });
  $('.hcfx-trial').addEventListener('click',()=>{close();});

  // Dress the original logo with a removable SVG accessory inside its moving sprite.
  // No logo asset, assistant movement, sleep behaviour or music setting is replaced.
  const hat='<svg class="hcfx-shark-hat" viewBox="0 0 100 70" aria-hidden="true"><path d="M13 52C25 18 56-4 73 8c13 9 13 26 18 29L73 41C69 27 64 24 59 27L56 52Z" fill="#C81015" stroke="#730b13" stroke-width="2"/><path d="M14 48c13-6 35-8 49-3l3 15c-17-3-37 0-53 5Z" fill="#fff9ec" stroke="#d8cab4" stroke-width="2"/><circle cx="87" cy="39" r="12" fill="#fff9ec" stroke="#d8cab4" stroke-width="2"/><path d="M26 40c9-16 19-23 30-26" fill="none" stroke="#f65d60" stroke-width="4" stroke-linecap="round"/></svg>';
  function dressShark() {
    const root=document.getElementById('hcf-shark-assistant')?.shadowRoot;
    if(!root?.querySelector('.launcher .sprite'))return false;
    if(root.querySelector('.hcfx-shark-hat'))return true;
    const style=document.createElement('style');style.textContent='.launcher .sprite{position:relative;overflow:visible}.hcfx-shark-hat{position:absolute;width:58%;height:auto;left:35%;top:-13%;transform:rotate(13deg);pointer-events:none;filter:drop-shadow(0 2px 2px #0004)}.hcfx-assistant-entry{margin:10px 16px 0;padding:10px 12px;min-height:44px;border:1px solid #cfbb8c;border-radius:10px;background:#193c33;color:#fff3d7;font-size:13px;flex-shrink:0;text-align:left}.hcfx-assistant-entry:hover{background:#254e42}.hcfx-assistant-entry:focus-visible{outline:3px solid #c81015;outline-offset:3px}';
    root.append(style);root.querySelector('.launcher .sprite').insertAdjacentHTML('beforeend',hat);
    const button=document.createElement('button');button.type='button';button.className='hcfx-assistant-entry';button.textContent='小鯊的聖誕驚喜　拆開祝福 ↗';button.setAttribute('aria-haspopup','dialog');
    const music=root.querySelector('#music');if(music)music.after(button);else root.querySelector('.header').after(button);
    button.addEventListener('click',()=>{root.querySelector('#close').click();open(root.querySelector('#launcher'));});return true;
  }
  const observer=new MutationObserver(()=>{if(dressShark())observer.disconnect();});
  if(!dressShark())observer.observe(document.body,{childList:true});

  // Low-density ambient snow capped at 30fps with no interception of page input.
  const canvas=$('#hcfx-snow'),ctx=canvas.getContext('2d');
  let flakes=[],raf=0,last=0,width=0,height=0,breeze=0,drift=0;
  const canMove=()=>state.snow&&!reduced.matches&&!document.hidden&&!retired&&!window.__hcfPageRetired;
  function resize(){
    width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,1.5);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);if(ctx)ctx.setTransform(dpr,0,0,dpr,0,0);
    flakes=Array.from({length:width<600?12:28},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.6+.8,v:Math.random()*18+15,phase:Math.random()*6.28}));
    let inset=18;
    document.querySelectorAll('.mcta,.stickybar,.nav').forEach(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);if(s.position==='fixed'&&s.display!=='none'&&r.height>0&&r.height<180&&r.top>height/2&&r.bottom>=height-12)inset=Math.max(inset,height-r.top+12);});
    $('.hcfx-dock').style.bottom=`calc(${inset}px + env(safe-area-inset-bottom))`;
  }
  function frame(now){
    raf=0;if(!ctx||!canMove())return;
    if(now-last>=32){const dt=Math.min((now-last)/1000,.07);last=now;drift+=(breeze-drift)*.04;ctx.clearRect(0,0,width,height);
      flakes.forEach(f=>{f.y+=f.v*dt;f.x+=(Math.sin(now/1600+f.phase)*7+drift*22)*dt;if(f.y>height+4){f.y=-4;f.x=Math.random()*width;}if(f.x<0)f.x=width;if(f.x>width)f.x=0;ctx.beginPath();ctx.fillStyle='rgba(242,239,220,.65)';ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();});
    }raf=requestAnimationFrame(frame);
  }
  function motion(){
    cancelAnimationFrame(raf);raf=0;last=performance.now();
    const enabled=canMove();host.classList.toggle('hcfx-still',!enabled);banner?.classList.toggle('hcfx-still',!enabled);
    if(ctx)ctx.clearRect(0,0,width,height);
    host.querySelectorAll('[data-hcfx-snow]').forEach(b=>{b.disabled=reduced.matches;b.setAttribute('aria-pressed',String(state.snow&&!reduced.matches));const label=reduced.matches?'已依系統減少動態':state.snow?'暫停節慶動態':'開啟節慶動態';b.setAttribute('aria-label',label);if(!b.classList.contains('hcfx-snow-switch'))b.textContent=label;});
    if(enabled&&ctx)raf=requestAnimationFrame(frame);
  }
  host.querySelectorAll('[data-hcfx-snow]').forEach(b=>b.addEventListener('click',()=>{state={...state,snow:!state.snow};persist();motion();}));
  let pointerFrame=0,pointerX=0,pointerY=0;
  if(banner)banner.addEventListener('pointermove',e=>{
    if(!finePointer.matches||!canMove())return;pointerX=e.clientX;pointerY=e.clientY;if(pointerFrame)return;
    pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;const r=banner.getBoundingClientRect();const x=(pointerX-r.left)/r.width,y=(pointerY-r.top)/r.height;breeze=(x-.5)*2;banner.style.setProperty('--hx',`${x*100}%`);banner.style.setProperty('--hy',`${y*100}%`);banner.style.setProperty('--tilt',`${(x-.5)*14}deg`);});
  },{passive:true});
  banner?.addEventListener('pointerleave',()=>{breeze=0;banner.style.setProperty('--tilt','0deg');});
  window.addEventListener('resize',resize,{passive:true});
  // Booking steps reveal their bottom navigation after the visitor starts the form.
  const dockObserver=new ResizeObserver(resize);
  document.querySelectorAll('.mcta,.stickybar,.nav').forEach(el=>dockObserver.observe(el));
  function typing(){host.classList.toggle('hcfx-typing',!!document.activeElement?.matches('input,textarea,select,[contenteditable="true"]'));}
  document.addEventListener('focusin',typing);
  document.addEventListener('focusout',()=>setTimeout(typing,0));
  reduced.addEventListener('change',motion);
  document.addEventListener('visibilitychange',motion);
  window.addEventListener('storage',e=>{if(e.key===key){state=rules.restore(e.newValue);render();motion();}});
  window.addEventListener('pagehide',()=>{retired=true;close();cancelAnimationFrame(pointerFrame);motion();observer.disconnect();dockObserver.disconnect();});
  window.addEventListener('pageshow',()=>{if(window.__hcfPageRetired)return;retired=false;document.querySelectorAll('.mcta,.stickybar,.nav').forEach(el=>dockObserver.observe(el));resize();motion();});
  render();resize();motion();
}
