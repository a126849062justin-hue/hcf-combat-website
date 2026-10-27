(function(){
  'use strict';
  // Clips below the fold load only when played. Pause them when outside the viewport.
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting) entry.target.pause();});},{threshold:.05});
    document.querySelectorAll('[data-lazy-video],[data-first-visit-video]').forEach(function(v){observer.observe(v);});
  }
  document.querySelectorAll('[data-first-visit-video]').forEach(function(video){video.addEventListener('play',function(){window.hcfGrowthTrack?.('first_visit_video');},{once:true});});
  document.querySelectorAll('[data-open-shark]').forEach(function(button){button.addEventListener('click',function(){
    var shadow=document.getElementById('hcf-shark-assistant')?.shadowRoot;
    if(!shadow){location.href='/booking.html';return;}
    var compact=shadow.querySelector('#rest');
    if(compact&&!compact.hidden) compact.click();
    else if(shadow.querySelector('#panel')?.hidden) shadow.querySelector('#launcher')?.click();
    shadow.querySelector('#guide-start')?.focus();
  });});
  // The homepage has its own promotion; expose the case alongside that existing CTA.
  var homePromo=document.getElementById('hcfvl-promo');
  if(homePromo&&!homePromo.querySelector('[data-case-link]')){
    var a=document.createElement('a');a.href='/website-design-case.html';a.textContent='這個官網怎麼做？看設計案例 →';a.dataset.caseLink='';
    a.style.cssText='display:block;position:relative;z-index:2;text-align:center;padding:16px 20px;color:#4d3c67;font-size:14px;font-weight:700;text-decoration:underline;text-underline-offset:5px';homePromo.append(a);
  }
})();
