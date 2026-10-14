import {SURVEY_ID,SURVEY_VERSION,OPTIONS as defs,FIELD_LABELS as names,FIELD_ORDER,RATING_QUESTIONS as ratingQuestions,RATING_OPTIONS as ratingValues,normalizeFeedback,answerLabel} from './group-feedback-schema.js?v=hcf-group-feedback-20261014-v1';
const form=document.querySelector('#feedback');
const API='https://beamish-basbousa-cb3585.netlify.app/.netlify/functions/group-feedback';
let dirty=false,busy=false,pending=null;
function choice(name,text,index,type='radio',value=text){
 const label=document.createElement('label');label.className='choice';
 const input=document.createElement('input');input.type=type;input.name=name;input.value=value;input.id=name+'-'+index;
 const span=document.createElement('span');span.textContent=text;label.append(input,span);return label;
}
for(const [name,options] of Object.entries(defs)){
 const id=name==='activities'?'activityOptions':name+'Options';
 options.forEach(([value,text],index)=>document.getElementById(id).append(choice(name,text,index,name==='activities'?'checkbox':'radio',value)));
}
for(const [key,title] of ratingQuestions){names[key]=title;const fs=document.createElement('fieldset');fs.dataset.required=key;const legend=document.createElement('legend');legend.textContent=title+' ';const badge=document.createElement('span');badge.className='required';badge.textContent='必填';legend.append(badge);const opts=document.createElement('div');opts.className='ratings';ratingValues.forEach(([value,text],i)=>{const label=choice(key,text,i,'radio',value);if(i===0)label.querySelector('span').textContent='非常\n不同意';if(i===4)label.querySelector('span').textContent='非常\n同意';if(i<5){const n=document.createElement('b');n.textContent=String(i+1);label.querySelector('span').prepend(n)}else label.classList.add('na');opts.append(label)});const error=document.createElement('p');error.className='error';error.hidden=true;error.textContent='請選擇一個感受，或選「無法判斷」。';fs.append(legend,opts,error);document.querySelector('#ratings').append(fs)}
let step=0;const pages=[...form.querySelectorAll('[data-page]')];
function update(){pages.forEach((p,i)=>p.hidden=i!==step);document.querySelectorAll('[data-step]').forEach((p,i)=>{p.classList.toggle('current',i===step);if(i===step)p.setAttribute('aria-current','step');else p.removeAttribute('aria-current')});document.querySelector('#bar').style.width=((step+1)*25)+'%';document.querySelector('#stepText').textContent=`第 ${step+1} 步，共 4 步`;document.querySelector('#back').textContent=step?'← 上一步':'回到介紹';document.querySelector('#next').textContent=step===3?(pending?'重試確認收件':'送出我的回饋'):'繼續 →';pages[step].querySelector('h2').focus();pages[step].scrollIntoView({block:'start'});}
function validate(){let first;for(const fs of pages[step].querySelectorAll('[data-required]')){const selected=fs.querySelectorAll('input:checked');const valid=selected.length>0&&(fs.dataset.required!=='activities'||selected.length<=3);fs.querySelector('.error').hidden=valid;fs.classList.toggle('invalid',!valid);if(!valid&&!first)first=fs}if(first){first.querySelector('input').focus();first.scrollIntoView({block:'center'});return false}return true;}
form.addEventListener('submit',event=>event.preventDefault());
form.addEventListener('change',event=>{const fs=event.target.closest('fieldset');if(fs){fs.classList.remove('invalid');fs.querySelector('.error')?.setAttribute('hidden','')}if(event.target.name==='activities'){const all=[...form.elements.activities];const last=all[all.length-1];if(event.target===last&&last.checked)all.slice(0,-1).forEach(i=>i.checked=false);else if(event.target.checked)last.checked=false;let count=all.filter(i=>i.checked).length;if(count>3){event.target.checked=false;count=3;document.querySelector('#activityStatus').textContent='已選 3 項，請先取消一項再選。'}else document.querySelector('#activityStatus').textContent=`已選 ${count} / 3 項`;}});
function getAnswers(){const data=new FormData(form);return normalizeFeedback(Object.fromEntries(FIELD_ORDER.map(key=>[key,key==='activities'?data.getAll(key):data.get(key)||''])))}
function summary(){const answers=getAnswers();const dl=document.querySelector('#summary');dl.replaceChildren();document.querySelector('#identity').textContent=answers.memberName?'具名回饋':'匿名回饋';for(const key of FIELD_ORDER){const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=names[key];dd.textContent=answerLabel(key,answers[key]);row.append(dt,dd);dl.append(row)}}
form.addEventListener('input',()=>{dirty=true});
window.addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue=''}});
async function send(){
 if(busy)return;
 const error=document.querySelector('#sendError'),next=document.querySelector('#next'),back=document.querySelector('#back');
 try{if(!pending)pending={surveyId:SURVEY_ID,version:SURVEY_VERSION,submissionId:crypto.randomUUID().replaceAll('-',''),answers:getAnswers()}}catch(e){error.textContent=e.message;error.hidden=false;return}
 busy=true;error.hidden=true;next.disabled=true;back.disabled=true;next.textContent='正在確認收件…';
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},credentials:'omit',referrerPolicy:'no-referrer',body:JSON.stringify(pending),signal:controller.signal});
  let result;try{result=await response.json()}catch{throw Error('收件尚未確認，答案保留在這個分頁。請按重試確認收件，不需重新填寫。')}
  if(!response.ok||result.ok!==true||result.receipt!==pending.submissionId){
   if(response.status===400){pending=null;back.disabled=false}
   throw Error(result.error||'收件尚未確認，請保留這個分頁並重試。');
  }
  dirty=false;document.querySelector('#receipt').textContent=result.receipt;pending=null;
  document.querySelector('#survey').hidden=true;document.querySelector('#done').hidden=false;document.querySelector('#done h2').focus();document.querySelector('#done').scrollIntoView();form.reset();
 }catch(e){error.textContent=e.name==='AbortError'?'收件確認時間較長，答案仍保留。請按重試確認收件，系統會核對同一筆，避免重複。':e.message;error.hidden=false;next.textContent=pending?'重試確認收件':'送出我的回饋'}
 finally{clearTimeout(timer);busy=false;next.disabled=false;back.disabled=!!pending}
}
document.querySelector('#start').addEventListener('click',()=>{document.querySelector('#intro').hidden=true;document.querySelector('#survey').hidden=false;update()});
document.querySelector('#back').addEventListener('click',()=>{if(busy||pending)return;if(step){step--;update()}else{document.querySelector('#survey').hidden=true;document.querySelector('#intro').hidden=false;document.querySelector('#start').focus()}});
document.querySelector('#next').addEventListener('click',()=>{if(busy||!validate())return;if(step===3){send();return}step++;if(step===3)summary();update()});
