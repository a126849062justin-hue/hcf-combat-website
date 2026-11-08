import {SHORT_SURVEY_ID,SHORT_SURVEY_VERSION,SHORT_ROUTES,SHORT_FIELDS,shortErrors,shortLabel,shortSelections,normalizeShortFeedback} from './short-feedback-schema.js?v=20261108-multi-redesign';
const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const empty=()=>({group:{},private:{},memberName:''});
let answers=empty(),route='',pageIndex=0,finished=false,dirty=false,busy=false,pending=null;
const pages=()=>[...SHORT_ROUTES[route].branches,'review'];
const current=()=>pages()[pageIndex];
const projected=()=>normalizeShortFeedback({route,group:SHORT_ROUTES[route].branches.includes('group')?answers.group:null,private:SHORT_ROUTES[route].branches.includes('private')?answers.private:null,memberName:answers.memberName});
function focusTop(element,anchor=element){element.focus({preventScroll:true});anchor.scrollIntoView({block:'start',behavior:'instant'});}
function showIntro(){$('intro').hidden=false;$('survey').hidden=true;$('done').hidden=true;window.scrollTo({top:0,behavior:'instant'});}
function start(nextRoute){route=nextRoute;pageIndex=0;finished=false;$('intro').hidden=true;$('done').hidden=true;$('survey').hidden=false;render();lockSubmission();}
function fieldHtml(field,branch,index){
 const value=answers[branch][field.key]||'',id=branch+'-'+field.key;
 let inner='';
 if(field.stars){
  inner=`<div class="stars" aria-describedby="star-status-${id}">${field.options.slice(0,5).map(([key,label])=>`<label class="star-choice ${Number(value)>=Number(key)?'lit':''}"><input type="radio" name="${id}" value="${key}" ${value===key?'checked':''} aria-label="${esc(label)}"><span class="star-icon" aria-hidden="true">★</span><span class="star-number" aria-hidden="true">${key} 星</span></label>`).join('')}</div><p class="star-status" id="star-status-${id}" aria-live="polite">${value?esc(shortLabel(field,value)):'點選星星評分　1 星很不滿意 → 5 星很滿意'}</p><label class="na-choice"><input type="radio" name="${id}" value="na" ${value==='na'?'checked':''}>還無法判斷</label>`;
 }else if(field.type==='text'){
  inner=field.key==='coachName'?`<input type="text" id="${id}" name="${id}" value="${esc(value)}" maxlength="${field.maxLength}" autocomplete="off" placeholder="${esc(field.placeholder)}">`:`<textarea id="${id}" name="${id}" rows="4" maxlength="${field.maxLength}" placeholder="${esc(field.placeholder)}">${esc(value)}</textarea>`;
 }else if(field.type==='many'){
  const picks=shortSelections(value);
  inner=`<div class="multi-head"><p class="field-hint">可以複選，選出你在意的事。</p><span class="selection-count" id="count-${id}" aria-live="polite">已選 ${picks.length} 項</span></div><div class="choices multi-choices">${field.options.map(([key,label])=>`<label class="choice"><input type="checkbox" name="${id}" value="${key}" ${picks.includes(key)?'checked':''}><span>${esc(label)}</span></label>`).join('')}</div><p class="field-hint" style="margin-top:12px">「目前沒有特別需要改善」會單獨選取。</p>`;
 }else{
  inner=`<div class="choices ${field.type==='rating'?'feeling-choices':''}">${field.options.map(([key,label])=>`<label class="choice"><input type="radio" name="${id}" value="${key}" ${value===key?'checked':''}><span class="feeling-score" aria-hidden="true">${key==='na'?'':key}</span><span>${esc(label)}</span></label>`).join('')}</div>`;
 }
 const title=field.type==='text'?`<label for="${id}">${esc(field.label)}</label>`:esc(field.label);
 return `<fieldset class="field" id="field-${id}" data-field="${field.key}" data-branch="${branch}"><legend>${field.required?`<span class="question-number">0${index+1}</span>`:''}${title} <span class="${field.required?'required':'optional'}">${field.required?'必填':'選填'}</span></legend>${inner}<p class="error" id="error-${id}" role="alert"></p></fieldset>`;
}
function reviewHtml(){
 return `<p class="review-note">確認三個重點就能送出。團課與私課分開統計，「無法判斷」不當作零分。</p>`+SHORT_ROUTES[route].branches.map(branch=>`<section class="review-section"><div class="review-title"><h3>${SHORT_ROUTES[branch].label}</h3><button type="button" data-edit="${branch}">修改<span class="sr-only">${SHORT_ROUTES[branch].label}</span> ↗</button></div><dl>${SHORT_FIELDS.filter(f=>f.required||answers[branch][f.key]).map(f=>`<div><dt>${esc(f.label)}</dt><dd>${f.stars&&answers[branch][f.key]!=='na'?`<span class="review-stars" aria-hidden="true">${'★'.repeat(Number(answers[branch][f.key]))}</span> `:''}${f.type==='many'?`<ul class="review-picks">${shortSelections(answers[branch][f.key]).map(id=>`<li>${esc(shortLabel(f,id))}</li>`).join('')}</ul>`:esc(shortLabel(f,answers[branch][f.key]))}</dd></div>`).join('')}</dl></section>`).join('')+
 `<div class="name-field"><label for="memberName">姓名或暱稱 <span class="optional">選填</span></label><input type="text" id="memberName" maxlength="60" value="${esc(answers.memberName)}" autocomplete="off" placeholder="不填就是匿名回饋"><p class="field-hint">留名後就不是匿名回饋；不需要留下電話。</p></div><div class="privacy-box"><strong>你的感受 由館長先聽見</strong><p>館長看完整原文。教練只看館長公布的統計與去識別摘要，不會收到你的個別評分、姓名或原文。意見不連結會員帳號，也不會自動轉傳 LINE。</p></div>`;
}
function render(){
 const branch=current(),review=branch==='review',title=review?'送出前 看一眼':SHORT_ROUTES[branch].label+' 你上得怎麼樣';
 $('route-badge').textContent=SHORT_ROUTES[route].label;$('route-copy').textContent='只問三個重點。真實感受比標準答案更重要。';
 $('step-list').innerHTML=pages().map((b,i)=>`<li class="${i===pageIndex?'current':i<pageIndex?'finished':''}" ${i===pageIndex?'aria-current="step"':''}><span>${String(i+1).padStart(2,'0')}</span>${b==='review'?'確認送出':SHORT_ROUTES[b].label}</li>`).join('');
 $('step-count').textContent=`${pageIndex+1} / ${pages().length}`;$('progress-caption').textContent=review?'確認送出':'三個重點';
 const progress=Math.round((pageIndex+1)/pages().length*100);$('progress-bar').style.width=progress+'%';document.querySelector('[role=progressbar]').setAttribute('aria-valuenow',String(progress));
 $('page-content').innerHTML=`<section class="panel"><p class="eyebrow">YOUR VOICE MATTERS</p><h2 id="page-title" tabindex="-1">${title}</h2><p class="description">${review?'沒有想補充的話，也可以直接送出。':'以最近一次或最近四週的上課經驗回答。'}</p>${review?reviewHtml():SHORT_FIELDS.filter(f=>f.required).map((f,i)=>fieldHtml(f,branch,i)).join('')+`<details class="optional-note" ${answers[branch].comment||answers[branch].coachName?'open':''}><summary>補充給館長的話 <span>選填</span></summary><p class="field-hint">好感受或改進建議都歡迎。請避免填入其他學員的姓名與私人資訊。</p>${SHORT_FIELDS.filter(f=>!f.required).map(f=>fieldHtml(f,branch)).join('')}</details>`}</section>`;
 $('form-error').hidden=true;$('next').textContent=review?'送出我的回饋':'繼續 →';$('back').textContent=pageIndex===0?'回到選擇':'上一步';focusTop($('page-title'),$('survey'));lockSubmission();
}
function validateCurrent(){
 const branch=current(),errors=shortErrors(answers[branch]);
 document.querySelectorAll('.field.invalid').forEach(el=>el.classList.remove('invalid'));document.querySelectorAll('.field .error').forEach(el=>el.textContent='');
 for(const error of errors){const id=branch+'-'+error.key,box=$('field-'+id);box.classList.add('invalid');$('error-'+id).textContent=error.message;box.querySelectorAll('input,textarea').forEach(el=>{el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby','error-'+id);});}
 if(errors.length){const box=$('field-'+branch+'-'+errors[0].key);if(box.closest('details'))box.closest('details').open=true;box.querySelector('input,textarea').focus({preventScroll:true});box.scrollIntoView({block:'center',behavior:'instant'});return false;}return true;
}
$('start').addEventListener('click',()=>{const choice=document.querySelector('input[name=course]:checked');if(!choice){$('entry-error').hidden=false;document.querySelector('input[name=course]').focus();return;}start(choice.value);});
document.querySelector('.course-picker').addEventListener('change',()=>{$('entry-error').hidden=true;});
$('change-course').addEventListener('click',()=>{if(!pending&&!busy)showIntro();});
$('feedback').addEventListener('submit',event=>event.preventDefault());
$('page-content').addEventListener('input',event=>{
 if(pending||busy||!event.target.matches('textarea,input[type=text]'))return;
 if(event.target.id==='memberName')answers.memberName=event.target.value;
 else{const box=event.target.closest('[data-field]');answers[box.dataset.branch][box.dataset.field]=event.target.value;}dirty=true;
});
$('page-content').addEventListener('change',event=>{
 if(pending||busy||!event.target.matches('input[type=radio],input[type=checkbox]'))return;
 const box=event.target.closest('[data-field]');if(!box)return;const {branch,field}=box.dataset;
 if(event.target.type==='checkbox'){
  if(event.target.checked){box.querySelectorAll('input[type=checkbox]').forEach(input=>{if(event.target.value==='none'&&input!==event.target||event.target.value!=='none'&&input.value==='none')input.checked=false;});}
  answers[branch][field]=[...box.querySelectorAll('input:checked')].map(input=>input.value);
  $('count-'+branch+'-'+field).textContent='已選 '+answers[branch][field].length+' 項';
 }else answers[branch][field]=event.target.value;dirty=true;box.classList.remove('invalid');$('error-'+branch+'-'+field).textContent='';box.querySelectorAll('[aria-invalid]').forEach(el=>{el.removeAttribute('aria-invalid');el.removeAttribute('aria-describedby');});
 if(field==='coachRating'){box.querySelectorAll('.star-choice').forEach(el=>el.classList.toggle('lit',Number(el.querySelector('input').value)<=Number(event.target.value)));$('star-status-'+branch+'-'+field).textContent=shortLabel(SHORT_FIELDS.find(f=>f.key===field),event.target.value);}
 if(field==='priority'&&event.target.value==='other'&&event.target.checked)document.querySelector('.optional-note').open=true;
});
$('page-content').addEventListener('click',event=>{if(pending||busy)return;const edit=event.target.closest('[data-edit]');if(edit){pageIndex=pages().indexOf(edit.dataset.edit);render();}});
$('back').addEventListener('click',()=>{if(pending||busy)return;if(pageIndex===0)showIntro();else{pageIndex--;render();}});
const API='https://beamish-basbousa-cb3585.netlify.app/.netlify/functions/group-feedback';
function lockSubmission(){for(const el of document.querySelectorAll('#feedback button,#feedback input,#feedback textarea,#change-course'))el.disabled=busy||!!pending;$('next').disabled=busy;if(route&&current()==='review')$('next').textContent=busy?'正在確認收件…':pending?'重試確認收件':'送出我的回饋';}
async function send(){
 if(busy||finished)return;
 try{pending??={surveyId:SHORT_SURVEY_ID,version:SHORT_SURVEY_VERSION,submissionId:crypto.randomUUID().replaceAll('-',''),answers:projected()};}
 catch{$('form-error').hidden=false;$('form-error').textContent='有內容尚未完成，請回到前面確認。';return;}
 busy=true;lockSubmission();$('form-error').hidden=true;
 try{
  const r=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},credentials:'omit',body:JSON.stringify(pending),signal:AbortSignal.timeout(25000)}),j=await r.json();
  if(!r.ok||j.ok!==true||j.receipt!==pending.submissionId){if([400,413].includes(r.status))pending=null;throw Error(j.error||'尚未確認收件，請保留畫面並重試。');}
  finished=true;dirty=false;$('survey').hidden=true;$('done').hidden=false;$('done-branches').innerHTML=SHORT_ROUTES[route].branches.map(b=>`<span>✓ ${SHORT_ROUTES[b].label}回饋已收到</span>`).join('');$('receipt').textContent='收件編號 '+j.receipt;focusTop(document.querySelector('#done h1'));
 }catch(e){$('form-error').hidden=false;$('form-error').textContent=(e.name==='TimeoutError'?'連線逾時，尚未確認收件。':e.message||'連線暫時無法確認。')+(pending?' 內容仍保留；重試會使用同一筆收件編號，請勿另開一份重填。':' 內容仍保留，請返回確認並修改後再送出。');}
 finally{busy=false;lockSubmission();}
}
$('next').addEventListener('click',()=>{if(busy||finished)return;if(current()==='review'){send();return;}if(validateCurrent()){pageIndex++;render();}});
$('restart').addEventListener('click',()=>{pending=null;busy=false;answers=empty();route='';pageIndex=0;dirty=false;finished=false;document.querySelectorAll('input[name=course]').forEach(el=>el.checked=false);showIntro();});
window.addEventListener('beforeunload',event=>{if(dirty&&!finished){event.preventDefault();event.returnValue='';}});
