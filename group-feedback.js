import {COURSE_SURVEY_ID,COURSE_SURVEY_VERSION,ROUTES,PAGES,pagesFor,fieldsFor,emptyAnswers,toggleMany,validatePage,labelFor,projectAnswers} from './course-feedback-schema.js?v=20261017-v2';

const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let answers=emptyAnswers(),route='',pageIndex=0,editing=false,finished=false,dirty=false,busy=false,pending=null;
const currentId=()=>pagesFor(route)[pageIndex];
function focusTop(element,anchor=element){element.focus({preventScroll:true});anchor.scrollIntoView({block:'start',behavior:'instant'});}
function showIntro(){ $('intro').hidden=false;$('survey').hidden=true;$('done').hidden=true;window.scrollTo({top:0,behavior:'instant'}); }
function start(nextRoute){route=nextRoute;pageIndex=0;editing=false;finished=false;$('intro').hidden=true;$('done').hidden=true;$('survey').hidden=false;render();lockSubmission();}
function fieldHtml(field,branch){
  const value=answers[branch][field.key],id=branch+'-'+field.key;
  const required=field.required?'<span class="required">必填</span>':'<span class="optional">選填</span>';
  const hint=field.hint?`<p class="field-hint" id="hint-${id}">${esc(field.hint)}</p>`:'';
  let inner='';
  if(field.type==='text'){
    const named=field.key==='memberName';
    inner=(named||field.singleLine?`<input id="${id}" type="text" name="${id}" value="${esc(value)}" maxlength="${field.maxLength}" placeholder="${esc(field.placeholder)}" autocomplete="off" aria-describedby="privacy-note">`:`<textarea id="${id}" name="${id}" rows="3" maxlength="${field.maxLength}" placeholder="${esc(field.placeholder)}">${esc(value)}</textarea>`)+`<div class="text-footer"><span>${esc(field.footer||(named?'留名後就不是匿名回饋':'請避免填入他人的姓名或私人資訊'))}</span><span id="count-${id}">${(value||'').length} / ${field.maxLength}</span></div>`;
  }else if(field.type==='rating'){
    inner=`<div class="rating-options">${field.options.map(([key,label])=>`<label class="rating-choice ${key==='na'?'na':''}"><input type="radio" name="${id}" value="${key}" ${value===key?'checked':''}>${key==='na'?'':`<b aria-hidden="true">${key}</b>`}<span>${label.startsWith('非常')?'非常<br>'+esc(label.slice(2)):esc(label)}</span></label>`).join('')}</div>`;
  }else{
    inner=`<div class="choices ${field.compact?'compact':''} ${field.simple?'single-choice':''}">${field.options.map(([key,label])=>`<label class="choice"><input type="${field.type==='many'?'checkbox':'radio'}" name="${id}" value="${key}" ${(field.type==='many'?Array.isArray(value)&&value.includes(key):value===key)?'checked':''}><span>${esc(label)}</span></label>`).join('')}</div>`;
    if(field.type==='many'&&!field.simple)inner+=`<span class="multi-status" id="count-${id}" aria-live="polite">已選 ${(value||[]).length} / ${field.max} 項</span>`;
  }
  return `<fieldset class="field" id="field-${id}" data-field="${field.key}" data-branch="${branch}"><legend><span class="field-title-row"><span>${field.type==='text'?`<label for="${id}">${esc(field.label)}</label>`:esc(field.label)} ${required}</span>${!field.required&&field.type==='one'?`<button type="button" class="clear-choice" data-clear="${field.key}">清除選擇</button>`:''}</span></legend>${hint}${inner}<p class="error" id="error-${id}" role="alert"></p></fieldset>`;
}
function privacyHtml(){return '<div class="privacy-box" id="privacy-note"><strong>你可以不留姓名</strong><p>不要求登入，也不會將答案連結到會員帳號。館長可看完整原文；教練只看館長公布的統計與去識別摘要，不會看到個別回答。</p><p>自由文字若提到個人細節，仍可能讓人辨識你。送出後會保存回覆供館長整理，不會自動轉傳 LINE。</p></div>';}
function pageFieldsHtml(id,branch){
  const fields=fieldsFor(id,route);
  if(id!=='voice'||!ROUTES[route].branches.length)return fields.map(field=>fieldHtml(field,branch)).join('');
  const encouragement=fields.filter(field=>field.section==='encouragement');
  return fields.filter(field=>!field.section&&field.key!=='memberName').map(field=>fieldHtml(field,branch)).join('')+
    `<section class="encouragement" aria-labelledby="encouragement-title"><div class="encouragement-heading"><span class="letter-mark" aria-hidden="true">♡</span><div><p class="eyebrow">A NOTE TO YOUR COACH</p><h3 id="encouragement-title">想給教練的話</h3></div><span class="optional-badge">自由選填</span></div><p class="encouragement-intro">如果有被幫助的時刻，歡迎留下一句。<br>沒有想寫的也可以略過；前面的建議一樣會被認真看待。</p><div class="writing-prompt"><span>不知道從哪裡開始</span><p>「那次你幫我……讓我……」<br>「我很喜歡你上課時……」<br>「謝謝你願意……」</p></div>${encouragement.map(field=>fieldHtml(field,branch)).join('')}</section>`+
    fields.filter(field=>field.key==='memberName').map(field=>fieldHtml(field,branch)).join('');
}
function summaryHtml(){
  const projected=projectAnswers(route,answers);
  const name=projected.voice.memberName;
  return `<div class="privacy-box"><strong>${name?'具名回饋 · '+esc(name):'匿名回饋 · 未留姓名'}</strong><p>確認後送出給館長。教練只看館長公布的統計與去識別摘要。</p></div>`+pagesFor(route).filter(id=>id!=='review').map(id=>{
    const page=PAGES[id];
    return `<section class="review-section"><div class="review-title"><h3>${esc(page.label)}</h3><button type="button" data-edit="${id}">修改<span class="sr-only">${esc(page.label)}</span> ↗</button></div><dl>${fieldsFor(id,route).map(field=>{
      const label=labelFor(field,projected[page.branch][field.key]);
      return `<div><dt>${esc(field.label)}</dt><dd class="${label==='未填'?'empty':''}">${esc(label)}</dd></div>`;
    }).join('')}</dl></section>`;
  }).join('')+'<p class="review-note">團課與私課分開統計；未填與無法判斷，不當作零分。</p>';
}
function render(){
  const ids=pagesFor(route),id=currentId(),page=PAGES[id];
  $('route-badge').textContent=ROUTES[route].label;$('route-copy').textContent=ROUTES[route].description;
  $('step-list').innerHTML=ids.map((pid,i)=>`<li class="${i===pageIndex?'current':i<pageIndex?'finished':''}" ${i===pageIndex?'aria-current="step"':''}><span>${i<pageIndex?'✓':String(i+1).padStart(2,'0')}</span>${PAGES[pid].label}</li>`).join('');
  $('step-count').textContent=`${String(pageIndex+1).padStart(2,'0')} / ${String(ids.length).padStart(2,'0')}`;
  $('progress-caption').textContent=editing?'修改後返回確認':page.label;
  const progress=Math.round((pageIndex+1)/ids.length*100);$('progress-bar').style.width=progress+'%';
  document.querySelector('[role=progressbar]').setAttribute('aria-valuenow',String(progress));
  $('page-content').innerHTML=`<section class="panel"><p class="eyebrow">${page.eyebrow}</p><h2 id="page-title" tabindex="-1">${page.title}</h2><p class="description">${page.description}</p>${page.notice?`<p class="notice">${page.notice}</p>`:''}${id==='voice'?privacyHtml():''}${id==='review'?summaryHtml():pageFieldsHtml(id,page.branch)}</section>`;
  $('form-error').hidden=true;
  $('next').innerHTML=id==='review'?'送出我的回饋 <span aria-hidden="true">✓</span>':editing?'回到確認 <span aria-hidden="true">→</span>':id==='future'?'繼續／略過此頁 <span aria-hidden="true">→</span>':'繼續 <span aria-hidden="true">→</span>';
  $('back').textContent=editing?'取消修改':pageIndex===0?'回到選擇':'上一步';
  focusTop($('page-title'),$('survey'));
}
let editBaseline=null;
function validateCurrent(){
  const page=PAGES[currentId()],errors=validatePage(currentId(),route,answers);
  document.querySelectorAll('.field.invalid').forEach(el=>el.classList.remove('invalid'));
  document.querySelectorAll('.field .error').forEach(el=>el.textContent='');
  document.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  for(const error of errors){
    const id=page.branch+'-'+error.key,box=$('field-'+id);box.classList.add('invalid');$('error-'+id).textContent=error.message;
    box.querySelectorAll('input,textarea').forEach(el=>{el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby','error-'+id);});
  }
  if(errors.length){const first=$('field-'+page.branch+'-'+errors[0].key);first.querySelector('input,textarea').focus({preventScroll:true});first.scrollIntoView({block:'center',behavior:'instant'});return false;}
  return true;
}
$('start').addEventListener('click',()=>{const choice=document.querySelector('input[name=course]:checked');if(!choice){$('entry-error').hidden=false;document.querySelector('input[name=course]').focus();return;}start(choice.value);});
document.querySelector('.course-picker').addEventListener('change',()=>{$('entry-error').hidden=true;});
$('interest-only').addEventListener('click',()=>start('interest'));
$('change-course').addEventListener('click',()=>{if(!pending&&!busy)showIntro()});
$('feedback').addEventListener('submit',event=>event.preventDefault());
$('page-content').addEventListener('input',event=>{
  if(!event.target.matches('textarea,input[type=text]'))return;
  const box=event.target.closest('[data-field]');answers[box.dataset.branch][box.dataset.field]=event.target.value;dirty=true;
  const field=fieldsFor(currentId(),route).find(field=>field.key===box.dataset.field);
  $('count-'+box.dataset.branch+'-'+field.key).textContent=event.target.value.length+' / '+field.maxLength;
});
$('page-content').addEventListener('change',event=>{
  const box=event.target.closest('[data-field]');if(!box||!event.target.matches('input[type=radio],input[type=checkbox]'))return;
  const branch=box.dataset.branch,key=box.dataset.field,field=fieldsFor(currentId(),route).find(field=>field.key===key);
  const id=branch+'-'+key;$('error-'+id).textContent='';box.classList.remove('invalid');
  box.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  if(field.type==='many'){
    const result=toggleMany(answers[branch][key],event.target.value,field);answers[branch][key]=result.values;
    box.querySelectorAll('input').forEach(el=>el.checked=result.values.includes(el.value));
    if($('count-'+id))$('count-'+id).textContent=`已選 ${result.values.length} / ${field.max} 項`;
    if(result.error)$('error-'+id).textContent=result.error;
  }else answers[branch][key]=event.target.value;
  dirty=true;
});
$('page-content').addEventListener('click',event=>{
  const edit=event.target.closest('[data-edit]'),clear=event.target.closest('[data-clear]');
  if(edit){editBaseline=structuredClone(answers);editing=true;pageIndex=pagesFor(route).indexOf(edit.dataset.edit);render();}
  if(clear){const box=clear.closest('[data-field]');delete answers[box.dataset.branch][clear.dataset.clear];box.querySelectorAll('input').forEach(el=>el.checked=false);dirty=true;}
});
$('back').addEventListener('click',()=>{
  if(editing){answers=editBaseline;editBaseline=null;editing=false;pageIndex=pagesFor(route).length-1;render();}
  else if(pageIndex===0)showIntro();else{pageIndex--;render();}
});
const API='https://beamish-basbousa-cb3585.netlify.app/.netlify/functions/group-feedback';
function lockSubmission(){
  for(const el of document.querySelectorAll('#feedback button,#feedback input,#feedback textarea,#change-course'))el.disabled=busy||!!pending;
  $('next').disabled=busy;
  if(currentId()==='review')$('next').textContent=busy?'正在確認收件…':pending?'重試確認收件':'送出我的回饋';
}
async function send(){
  if(busy||finished)return;
  try{
    pending??={surveyId:COURSE_SURVEY_ID,version:COURSE_SURVEY_VERSION,submissionId:crypto.randomUUID().replaceAll('-',''),answers:projectAnswers(route,answers)};
  }catch{ $('form-error').hidden=false;$('form-error').textContent='有內容尚未完成，請回到前面確認。';return; }
  busy=true;lockSubmission();$('form-error').hidden=true;
  try{
    const r=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},credentials:'omit',body:JSON.stringify(pending),signal:AbortSignal.timeout(25000)});
    const j=await r.json();
    if(!r.ok||j.ok!==true||j.receipt!==pending.submissionId){
      // A definite validation rejection allows corrections. An uncertain result
      // retains the exact request/id, so retry never inserts a second response.
      if([400,413].includes(r.status))pending=null;
      throw Error(j.error||'尚未確認收件，請保留畫面並重試。');
    }
    finished=true;dirty=false;$('survey').hidden=true;$('done').hidden=false;
    $('done-branches').innerHTML=[...ROUTES[route].branches.map(b=>b==='group'?'團課感受':'私課感受'),'未來意願'].map(label=>`<span>✓ ${label}已收到</span>`).join('');
    $('receipt').textContent='收件編號 '+j.receipt;
    focusTop(document.querySelector('#done h1'));
  }catch(e){$('form-error').hidden=false;$('form-error').textContent=(e.name==='TimeoutError'?'連線逾時，尚未確認收件。':e.message||'連線暫時無法確認。')+' 內容仍保留；重試會使用同一筆收件編號，請勿另開一份重填。';}
  finally{busy=false;lockSubmission();}
}
$('next').addEventListener('click',()=>{
  if(busy||finished)return;
  if(currentId()==='review'){send();return;}
  if(!validateCurrent())return;
  if(editing){editing=false;editBaseline=null;pageIndex=pagesFor(route).length-1;}else pageIndex++;
  render();
});
$('restart').addEventListener('click',()=>{pending=null;busy=false;answers=emptyAnswers();route='';pageIndex=0;dirty=false;finished=false;editing=false;document.querySelectorAll('input[name=course]').forEach(el=>el.checked=false);showIntro();});
window.addEventListener('beforeunload',event=>{if(dirty&&!finished){event.preventDefault();event.returnValue='';}});
