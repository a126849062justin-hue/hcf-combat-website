const goals={
start:['YOUR FIRST ROUND','從站姿開始，把基礎練穩。','沒有經驗也能開始。先讓教練了解你的目標與運動經驗，再安排適合的體驗方式。','找教練安排第一堂課 ↗','booking'],
shred:['BUILD YOUR ENGINE','把流汗，變成持續的習慣。','結合打擊練習與體能訓練，找到能持續投入的運動節奏。課程強度由教練依狀況協助調整。','了解團課訓練 ↗','group-classes'],
skill:['REFINE YOUR CRAFT','不只會出拳，更懂得怎麼打。','从基本發力、步法與防守開始，逐步練習組合與距離。希望細緻調整動作，可以先了解私人教練。'.replace('从','從'),'了解私人教練 ↗','private-training'],
release:['MAKE TIME FOR YOURSELF','下班後，把時間留給自己。','離開工作模式，在打靶與動作練習裡重新集中注意力。先預約一次體驗，感受適合自己的節奏。','預約一次體驗 ↗','booking']
};
document.querySelectorAll('[data-goal]').forEach(button=>button.addEventListener('click',()=>{
const [label,title,copy,link,path]=goals[button.dataset.goal];
document.querySelectorAll('[data-goal]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
document.getElementById('goal-label').textContent=label;document.getElementById('goal-title').textContent=title;document.getElementById('goal-copy').textContent=copy;
const a=document.getElementById('goal-link');a.textContent=link;a.href=path+'.html';
}));
const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus();}});

// Keep the existing optional backend announcement above the new static header.
const noticeObserver=new MutationObserver(()=>{const bar=document.getElementById('hcfAnn');if(!bar)return;const update=()=>document.body.style.paddingTop=bar.offsetHeight+'px';update();if(typeof ResizeObserver!=='undefined')new ResizeObserver(update).observe(bar);noticeObserver.disconnect();});
noticeObserver.observe(document.body,{childList:true});
