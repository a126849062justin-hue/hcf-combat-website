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
  host.innerHTML = `<canvas id="hcfx-snow" aria-hidden="true"></canvas><div class="hcfx-lights" role="group" aria-label="互動聖誕燈串 點燈換色">${Array.from({length:15},(_,i)=>`<button class="hcfx-bulb" type="button" data-hcfx-color="${['green','gold','red'][i%3]}" aria-label="第 ${i+1} 盞聖誕燈 點擊換色" title="點我換色"><i aria-hidden="true"></i></button>`).join('')}</div>
    <div class="hcfx-dock" aria-label="聖誕互動控制"><button class="hcfx-dock-open" type="button" data-hcfx-open aria-haspopup="dialog">${giftIcon}<span>聖誕驚喜<small>HCF CHRISTMAS</small></span></button><button class="hcfx-snow-play" type="button" aria-label="灑一把雪" title="灑一把雪">❄</button><button class="hcfx-snow-switch" type="button" data-hcfx-snow aria-pressed="true" aria-label="暫停飄雪">Ⅱ</button></div>
    <dialog id="hcfx-dialog" aria-labelledby="hcfx-title" aria-describedby="hcfx-description">
      <button class="hcfx-close" type="button" aria-label="關閉聖誕驚喜" autofocus>×</button>
      <div class="hcfx-dialog-layout">
        <div class="hcfx-scene" aria-hidden="true"><div class="hcfx-scene-grid"></div><span class="hcfx-scene-kicker">HCF HOLIDAY EDITION ${year}</span><span class="hcfx-scene-word">GIVE<br> YOURSELF<br><em>A ROUND</em></span><div class="hcfx-tree"><span>${star}</span></div>${giftArt}<span class="hcfx-scene-bottom">HONOR　COURAGE　FAITH</span></div>
        <div class="hcfx-play"><span class="hcfx-eyebrow">A LITTLE MAGIC FROM HCF</span><h2 id="hcfx-title">聖誕暖心回合</h2><p id="hcfx-description">點亮三個拳套<br>打開屬於你的聖誕祝福</p>
          <div class="hcfx-progress" aria-hidden="true"><i></i><i></i><i></i></div>
          <div class="hcfx-gloves" aria-label="點亮三個 HCF 精神拳套">${values.map((v,i)=>`<button type="button" class="hcfx-glove" data-hcfx-value="${i}" aria-pressed="false" aria-label="點亮${v[1]}拳套"><span class="hcfx-glove-art">${glove}<i class="hcfx-check">✓</i></span><b>${v[1]}</b><small>${v[0]}</small></button>`).join('')}</div>
          <p class="hcfx-message" role="status" aria-live="polite" aria-atomic="true">從任何一個拳套開始</p>
          <section class="hcfx-wish" aria-labelledby="hcfx-wish-title" hidden><span class="hcfx-eyebrow">MERRY CHRISTMAS</span><h3 id="hcfx-wish-title"></h3><p class="hcfx-wish-sub"></p><p class="hcfx-wish-body"></p><span class="hcfx-signature">WITH LOVE　HCF 新竹格鬥</span><div class="hcfx-wish-tools"><button type="button" data-hcfx-copy>複製我的祝福</button><button type="button" data-hcfx-again>再開一張</button></div><a class="hcfx-trial" href="/booking.html" data-cta data-intent="christmas_trial">安排我的第一堂體驗 <span aria-hidden="true">↗</span></a></section>
          <div class="hcfx-footer"><span>撥動雪花 點燈換色 收下你的祝福</span><button type="button" data-hcfx-snow aria-pressed="true">暫停飄雪</button></div>
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

  // Cache the crystal artwork so larger flakes stay light to render at 30fps.
  const canvas=$('#hcfx-snow'),ctx=canvas.getContext('2d');
  const crystal=document.createElement('canvas');crystal.width=crystal.height=96;
  const ice=crystal.getContext('2d');
  if(ice){
    ice.translate(48,48);ice.lineCap='round';ice.lineJoin='round';ice.beginPath();
    for(let arm=0;arm<6;arm++){
      const a=arm*Math.PI/3,c=Math.cos(a),s=Math.sin(a);
      ice.moveTo(0,0);ice.lineTo(c*34,s*34);
      for(const [distance,length] of [[17,10],[26,7]])for(const side of [-1,1]){
        ice.moveTo(c*distance,s*distance);
        ice.lineTo(c*distance+Math.cos(a+side*Math.PI/3)*length,s*distance+Math.sin(a+side*Math.PI/3)*length);
      }
    }
    ice.strokeStyle='rgba(91,132,158,.65)';ice.lineWidth=6.5;ice.stroke();
    ice.strokeStyle='#fff';ice.lineWidth=3.8;ice.shadowColor='rgba(216,242,255,.9)';ice.shadowBlur=6;ice.stroke();
  }
  let flakes=[],bursts=[],raf=0,last=0,width=0,height=0,breeze=0,drift=0;
  const wind={x:0,y:0,until:0};let touchStart=null,lastBurst=0;
  const lightButtons=[...host.querySelectorAll('.hcfx-bulb')],lightTimers=[];
  const canMove=()=>state.snow&&!reduced.matches&&!document.hidden&&!retired&&!window.__hcfPageRetired;
  const pageSurface=target=>target instanceof Element&&!target.closest('a,button,input,textarea,select,label,summary,[role="button"],[contenteditable],#hcf-shark-assistant,dialog');
  function scatter(x,y){
    if(!canMove()||!ctx)return;
    const now=performance.now();if(now-lastBurst<180)return;lastBurst=now;
    const count=width<600?10:18,limit=width<600?24:48;
    const fresh=Array.from({length:count},(_,i)=>{const a=i*Math.PI*2/count,speed=50+Math.random()*100;return{x,y,r:6+Math.random()*7,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed-45,life:1.1,maxLife:1.1,crystal:true,angle:a,spin:.8,alpha:1};});
    bursts=bursts.concat(fresh).slice(-limit);
  }
  function clearLights(){lightTimers.splice(0).forEach(clearTimeout);lightButtons.forEach(b=>b.classList.remove('hcfx-lit'));}
  lightButtons.forEach((button,index)=>button.addEventListener('click',()=>{
    const colors=['gold','green','red'],labels={gold:'金色',green:'綠色',red:'紅色'};
    const color=colors[(colors.indexOf(button.dataset.hcfxColor)+1)%colors.length];button.dataset.hcfxColor=color;
    button.setAttribute('aria-label',`第 ${index+1} 盞聖誕燈 ${labels[color]} 點擊換色`);
    clearLights();if(!canMove())return;
    const rect=button.getBoundingClientRect();scatter(rect.left+rect.width/2,rect.bottom);
    lightButtons.forEach((bulb,i)=>{
      if(!bulb.getClientRects().length)return;
      lightTimers.push(setTimeout(()=>{bulb.classList.add('hcfx-lit');lightTimers.push(setTimeout(()=>bulb.classList.remove('hcfx-lit'),760));},Math.abs(i-index)*65));
    });
  }));
  $('.hcfx-snow-play').addEventListener('click',()=>scatter(width/2,height*.4));
  document.addEventListener('pointermove',event=>{
    if(event.pointerType!=='mouse'||!canMove()||dialog.open||!pageSurface(event.target))return;
    wind.x=event.clientX;wind.y=event.clientY;wind.until=performance.now()+250;
  },{passive:true});
  // Passive touch events retain native scrolling while a swipe stirs the snow.
  document.addEventListener('touchmove',event=>{
    if(event.touches.length!==1||!canMove()||dialog.open||!pageSurface(event.target))return;
    wind.x=event.touches[0].clientX;wind.y=event.touches[0].clientY;wind.until=performance.now()+250;
  },{passive:true});
  document.addEventListener('pointerdown',event=>{
    touchStart=event.isPrimary&&event.button===0&&pageSurface(event.target)?{x:event.clientX,y:event.clientY,id:event.pointerId}:null;
  },{passive:true});
  document.addEventListener('pointerup',event=>{
    const start=touchStart;touchStart=null;
    if(!start||start.id!==event.pointerId||Math.hypot(event.clientX-start.x,event.clientY-start.y)>12||!pageSurface(event.target)||dialog.open||!canMove())return;
    const flake=flakes.find(f=>Math.hypot(f.x-event.clientX,f.y-event.clientY)<f.r+24);
    if(flake){scatter(flake.x,flake.y);flake.y=-flake.r;flake.x=Math.random()*width;}
  },{passive:true});
  document.addEventListener('pointercancel',()=>{touchStart=null;},{passive:true});
  function drawFlake(f){
    ctx.save();ctx.globalAlpha=f.alpha;
    if(f.crystal&&ice){ctx.translate(f.x,f.y);ctx.rotate(f.angle);ctx.drawImage(crystal,-f.r,-f.r,f.r*2,f.r*2);}
    else{ctx.beginPath();ctx.fillStyle='#fff';ctx.strokeStyle='rgba(91,132,158,.45)';ctx.lineWidth=.8;ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();ctx.stroke();}
    ctx.restore();
  }
  function resize(){
    width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,1.5);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);if(ctx)ctx.setTransform(dpr,0,0,dpr,0,0);
    const mobile=width<600;
    flakes=Array.from({length:mobile?16:36},(_,i)=>({x:Math.random()*width,y:Math.random()*height,crystal:i%3!==0,r:i%3!==0?(mobile?9+Math.random()*6:12+Math.random()*10):2+Math.random()*2,v:Math.random()*18+22,phase:Math.random()*6.28,angle:Math.random()*6.28,spin:i%2?.14:-.14,alpha:.8+Math.random()*.2,dx:0,dy:0}));
    bursts=[];wind.until=0;
    let inset=18;
    document.querySelectorAll('.mcta,.stickybar,.nav').forEach(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);if(s.position==='fixed'&&s.display!=='none'&&r.height>0&&r.height<180&&r.top>height/2&&r.bottom>=height-12)inset=Math.max(inset,height-r.top+12);});
    $('.hcfx-dock').style.bottom=`calc(${inset}px + env(safe-area-inset-bottom))`;
  }
  function frame(now){
    raf=0;if(!ctx||!canMove())return;
    if(now-last>=32){const dt=Math.min((now-last)/1000,.07);last=now;drift+=(breeze-drift)*.04;ctx.clearRect(0,0,width,height);
      flakes.forEach(f=>{
        if(now<wind.until){const dx=f.x-wind.x,dy=f.y-wind.y,d=Math.hypot(dx,dy),range=width<600?90:140;if(d>0&&d<range){const force=(1-d/range)*350*dt;f.dx+=dx/d*force;f.dy+=dy/d*force;}}
        const decay=Math.exp(-dt*2.4);f.dx*=decay;f.dy*=decay;
        f.y+=(f.v+f.dy)*dt;f.x+=(Math.sin(now/1600+f.phase)*7+drift*22+f.dx)*dt;f.angle+=f.spin*dt;
        if(f.y>height+f.r){f.y=-f.r;f.x=Math.random()*width;}if(f.x < -f.r)f.x=width+f.r;if(f.x>width+f.r)f.x=-f.r;
        drawFlake(f);
      });
      bursts=bursts.filter(f=>{f.life-=dt;if(f.life<=0)return false;f.x+=f.vx*dt;f.y+=f.vy*dt;f.vy+=100*dt;f.angle+=f.spin*dt;f.alpha=Math.min(1,f.life/.45);drawFlake(f);return true;});
    }raf=requestAnimationFrame(frame);
  }
  function motion(){
    cancelAnimationFrame(raf);raf=0;last=performance.now();
    const enabled=canMove();host.classList.toggle('hcfx-still',!enabled);banner?.classList.toggle('hcfx-still',!enabled);
    if(!enabled){bursts=[];wind.until=0;clearLights();}
    $('.hcfx-snow-play').disabled=!enabled;
    if(ctx)ctx.clearRect(0,0,width,height);
    host.querySelectorAll('[data-hcfx-snow]').forEach(b=>{b.disabled=reduced.matches;b.setAttribute('aria-pressed',String(state.snow&&!reduced.matches));const label=reduced.matches?'已依系統減少動態':state.snow?'暫停節慶動態':'開啟節慶動態';b.setAttribute('aria-label',label);b.textContent=b.classList.contains('hcfx-snow-switch')?(state.snow&&!reduced.matches?'Ⅱ':'▶'):label;});
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
