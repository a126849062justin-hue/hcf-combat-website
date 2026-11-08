(function(){
 'use strict';const el=document.querySelector('.hcf-arena-entry');if(!el)return;
 let stopped=false,pending=false,request,interval;
 function imageURL(value){try{const u=new URL(value,location.origin);return u.protocol==='https:'&&!u.username&&!u.password&&!u.hash&&/\.(webp|avif|png|jpe?g)$/i.test(u.pathname)?u.href:null}catch{return null}}
 async function refresh(){if(stopped||pending||document.hidden)return;pending=true;request=new AbortController();const timeout=setTimeout(()=>request.abort(),8000);try{const r=await fetch('https://hcf-admin.onrender.com/api/public/arena',{signal:request.signal,credentials:'omit'});if(!r.ok)return;const {content:c}=await r.json();if(stopped||!c||c.version!==1||typeof c.headline!=='string'||typeof c.intro!=='string'||typeof c.heroAlt!=='string'||c.headline.length>40||c.intro.length>180)return;const src=imageURL(c.heroImage);if(!src)return;el.querySelector('.arena-entry-headline').textContent=c.headline;el.querySelector('.arena-entry-intro').textContent=c.intro;const img=el.querySelector('.arena-entry-image');img.src=src;img.alt=c.heroAlt}catch{}finally{pending=false;clearTimeout(timeout)}}
 const io=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){refresh();io.disconnect();interval=setInterval(refresh,60000)}},{rootMargin:'400px'});io.observe(el);
 let frame=0;
 function move(e){if(frame||matchMedia('(prefers-reduced-motion:reduce)').matches)return;frame=requestAnimationFrame(()=>{const b=el.getBoundingClientRect();el.style.setProperty('--arena-x',((e.clientX-b.left)/b.width*100)+'%');el.style.setProperty('--arena-y',((e.clientY-b.top)/b.height*100)+'%');frame=0})}
 if(matchMedia('(hover:hover)').matches)el.addEventListener('pointermove',move);
 document.addEventListener('visibilitychange',refresh);
 window.addEventListener('pagehide',e=>{if(e.persisted)return;stopped=true;request?.abort();clearInterval(interval);cancelAnimationFrame(frame);io.disconnect();el.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',refresh)});
})();
