(function(){
  'use strict';
  var TOTAL=4,cur=1,submitted=false;
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var error=document.getElementById('submitError');
  function track(event,step){
    if(typeof window.gtag!=='function')return;
    var safe={form_version:'20261108'};
    if(Number.isInteger(step)&&step>=1&&step<=4)safe.step=step;
    window.gtag('event',event,safe);
  }
  var LEAD_EMAIL='hsinchucombat2022@gmail.com';
  var form=document.getElementById('revForm'),steps=document.querySelectorAll('.step');
  var fill=document.getElementById('pgFill'),pgStep=document.getElementById('pgStep');
  var btnN=document.getElementById('btnNext'),btnP=document.getElementById('btnPrev');
  var val=function(n){var e=form.querySelector('[name="'+n+'"]:checked:not(:disabled)');return e?e.value:'';};
  var multi=function(n){return [].slice.call(form.querySelectorAll('[name="'+n+'"]:checked:not(:disabled)')).map(function(e){return e.value;});};

  /* URL 參數帶入 */
  var qp=new URLSearchParams(location.search);
  if(qp.get('lead'))document.getElementById('f_lead').value=qp.get('lead');
  if(qp.get('name'))document.getElementById('f_name').value=qp.get('name');
  var TYPEMAP={group:'團體課體驗 $400',private:'私人教練體驗 1 堂',p1:'私人教練體驗 1 堂',deep1:'私教深度體驗・第 1 堂',deep2:'私教深度體驗・第 2 堂'};
  var t=Object.hasOwn(TYPEMAP,qp.get('type'))?TYPEMAP[qp.get('type')]:null; if(t){var r=form.querySelector('input[name="體驗類型"][value="'+t+'"]');if(r)r.checked=true;}
  var COACHMAP={huang:'黃謙和總教練',kao:'高大可教練',mi:'小米教練'};
  var c=Object.hasOwn(COACHMAP,qp.get('coach'))?COACHMAP[qp.get('coach')]:null; if(c){var cr=form.querySelector('input[name="帶課教練"][value="'+c+'"]');if(cr)cr.checked=true;}
  var d=new Date();document.getElementById('f_date').value=d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);

  // Do not send prefilling names or student IDs to analytics or linked sites.
  if(location.search)history.replaceState(null,'',location.pathname+location.hash);
  if(['www.hsinchucombat.com','hsinchucombat.com'].includes(location.hostname)){
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments);};
    window.gtag('js',new Date());
    window.gtag('config','G-ZCPVLM3SY0',{page_location:location.origin+location.pathname,page_referrer:''});
    var ga=document.createElement('script');ga.async=true;ga.src='https://www.googletagmanager.com/gtag/js?id=G-ZCPVLM3SY0';document.head.append(ga);
  }

  function isPrivate(){return /私/.test(val('體驗類型'));}
  function showBranch(id,visible){
    var el=document.getElementById(id);el.style.display=visible?'block':'none';
    el.querySelectorAll('input,textarea').forEach(function(input){input.disabled=!visible;});
  }
  function reveal(){
    showBranch('brGroup',!isPrivate());showBranch('brPrivate',isPrivate());
    showBranch('lowFeel',parseInt(val('整體感受'),10)<=3);
    showBranch('painWrap',val('訓練強度')==='身體有不舒服或疼痛');
    showBranch('worryWrap',['課程不錯，但需要考慮一下','目前暫時不會開始'].includes(val('下一步安排')));
  }
  function paint(){
    steps.forEach(function(s){s.classList.toggle('on',+s.dataset.step===cur);});
    reveal();fill.style.width=(cur/TOTAL*100)+'%';document.body.dataset.reviewStep=cur;
    pgStep.textContent='第 '+cur+' 步 / 共 '+TOTAL+' 步';
    document.querySelectorAll('[data-progress]').forEach(function(item){
      var step=Number(item.dataset.progress);item.classList.toggle('complete',step<cur);
      if(step===cur)item.setAttribute('aria-current','step');else item.removeAttribute('aria-current');
    });
    btnP.style.display=cur===1?'none':'block';
    btnN.textContent=cur===TOTAL?'送出評估，查看建議 →':'下一步 →';
    document.getElementById('navHint').textContent=['接下來：課後感受','接下來：訓練目標','接下來：你的安排','送出後，和教練一起確認'][cur-1];
    document.querySelector('.step.on h2').focus({preventScroll:true});
    window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
  }
  // Accessible native radio groups, with cumulative visual stars and a verbal score.
  document.querySelectorAll('[data-star-rating]').forEach(function(group){
    var labels=Array.from(group.querySelectorAll('.star-option'));
    function update(){
      var selected=group.querySelector('input:checked'),score=selected?parseInt(selected.value,10):0;
      labels.forEach(function(label,i){label.classList.toggle('is-filled',i<score);label.classList.remove('is-preview','is-preview-empty');});
      document.getElementById(group.dataset.caption).textContent=selected?score+' / 5 顆星 · '+selected.value.split('｜')[1]:'點選星星，給今天的感受一個分數';
    }
    labels.forEach(function(label,i){label.addEventListener('pointerenter',function(event){
      if(event.pointerType!=='mouse')return;
      labels.forEach(function(item,j){item.classList.toggle('is-preview',j<=i);item.classList.toggle('is-preview-empty',j>i);});
    });});
    group.addEventListener('pointerleave',update);group.addEventListener('change',update);update();
  });
  form.querySelectorAll('.q[data-group]').forEach(function(q,i){
    var title=q.querySelector('.t'),err=q.querySelector('.err');
    title.id='review-question-'+i;q.setAttribute('role','group');q.setAttribute('aria-labelledby',title.id);
    if(err){err.id='review-error-'+i;err.setAttribute('role','alert');q.setAttribute('aria-describedby',err.id);}
  });
  form.addEventListener('change',function(){
    reveal();form.querySelectorAll('.q[aria-invalid=true]').forEach(function(q){
      if(q.querySelector('input:checked:not(:disabled)')){q.removeAttribute('aria-invalid');q.querySelector('.err').classList.remove('on');}
    });
  });
  document.getElementById('f_name').addEventListener('input',function(){
    if(this.value.trim()){this.removeAttribute('aria-invalid');this.parentElement.querySelector('.err').classList.remove('on');}
  });

  /* 最多選 2 */
  document.querySelectorAll('.q[data-max="2"]').forEach(function(q){q.addEventListener('change',function(e){
    var ck=q.querySelectorAll('input:checked:not(:disabled)');if(ck.length>2&&e.target.checked){e.target.checked=false;
      var m=q.querySelector('.qmax');if(m){var o=m.textContent;m.textContent='最多選 2 項喔';m.style.color='var(--red)';setTimeout(function(){m.textContent=o;m.style.color='';},1400);}}});});

  function validate(sec){
    sec.querySelectorAll('.err').forEach(function(e){e.classList.remove('on');});
    sec.querySelectorAll('[aria-invalid]').forEach(function(el){el.removeAttribute('aria-invalid');});
    var ok=true,first=null;
    sec.querySelectorAll('.q[data-group]').forEach(function(q){
      if(!q.querySelector('input:not(:disabled)'))return;
      var sel=q.querySelectorAll('input:checked:not(:disabled)').length,max=+q.dataset.max||0;
      if(sel===0){ok=false;first=first||q;q.setAttribute('aria-invalid','true');var e=q.querySelector('.err');if(e)e.classList.add('on');}
      else if(max&&sel>max){ok=false;first=first||q;q.setAttribute('aria-invalid','true');var e2=q.querySelector('.err');if(e2)e2.classList.add('on');}
    });
    // 稱呼必填
    if(+sec.dataset.step===1){var nm=document.getElementById('f_name');if(!nm.value.trim()){nm.setAttribute('aria-invalid','true');ok=false;first=nm;nm.parentElement.querySelector('.err').classList.add('on');}}
    if(!ok&&first){var focus=first.matches('input')?first:first.querySelector('input:not(:disabled)');if(focus)focus.focus({preventScroll:true});first.scrollIntoView({behavior:reduced?'instant':'smooth',block:'center'});}
    return ok;
  }

  btnN.addEventListener('click',function(){
    if(submitted)return;
    var sec=document.querySelector('.step[data-step="'+cur+'"]');
    if(!validate(sec))return;
    if(cur<TOTAL){track('review_step',cur);cur++;paint();return;}
    submit();
  });
  btnP.addEventListener('click',function(){if(!submitted&&cur>1){cur--;paint();}});

  /* 推薦引擎：主推薦＋備選＋原因 */
  function recommend(){
    var feel=parseInt(val('整體感受')||'0',10), intensity=val('訓練強度'), priv=isPrivate();
    var goals=multi('三個月改變'), help=multi('私教_希望協助'), next=val('下一步安排');
    var follow=val('團課_跟上'), like=val('團課_團體方式'), fit=val('私教_針對性');
    var wantComp=/比賽|選手/.test((help.join()+goals.join()+next));
    var fatLoss=goals.indexOf('體重下降改善體態')>-1;
    var main,reason,alt;
    if(intensity==='身體有不舒服或疼痛'||intensity==='稍微太累，需降低強度'){
      main='先調整強度・安全優先';
      reason='你今天回報強度偏高或身體不適。教練會先確認狀況、調整訓練強度，暫不安排高頻或高強度方案。';
      alt='備選：待身體確認後，再依你的目標安排合適的入門節奏。';
    } else if(feel<=2||parseInt(val('教練評分'),10)<=2){
      main='先和教練釐清體驗落差';
      reason='你的回饋很重要。先把不符合期待的地方說清楚，讓教練和你討論可以怎麼調整。';
      alt='備選：調整教學方式、強度或上課形式後，再決定是否繼續。';
    } else if(wantComp){
      main='總教練個別評估';
      reason='你提到比賽／選手方向或已有格鬥經驗，這類訓練需由總教練先評估體能、技術與可訓練時間，不直接排一般團課。';
      alt='備選：先以私人教練建立技術與體能基礎，再進入選手訓練。';
    } else if(!priv){ // 團課
      if((follow==='大部分都跟得上'||follow==='基本跟得上，有些動作要再練')&&like==='很喜歡，有人一起比較有動力'){
        main='團體課 10 堂或包月';
        reason='你跟得上團課節奏、也喜歡團體訓練的氣氛，適合直接用團課建立頻率與熟練度。';
        alt='備選：搭配 1～2 堂私教做動作微調，進步更快。';
      } else if(follow==='完全跟不上，需先補基礎'||follow==='希望有更多個別指導'||like==='喜歡，但想先補幾堂基礎'||like==='比較喜歡一對一教學'){
        main='先用私課補基礎，再搭配團課';
        reason='你喜歡團體訓練，但目前動作或節奏還需要個別修正。先用少量私教把基礎打好，再回團課會輕鬆很多。';
        alt='備選：先與教練討論一對一入門，依程度安排技術與體能。';
      } else {
        main='先再上一次團課評估';
        reason='你對團課的感受還在觀察中。建議再體驗一次，讓教練確認最適合的起點。';
        alt='備選：團課 10 堂，邊上邊調整。';
      }
    } else { // 私教
      if(fit==='與原本期待有落差'){
        main='換教練或調整教學方向後再評估';
        reason='今天的私教與你的期待有落差。教練會先了解落差點，調整教學方式或安排更合適的教練，再決定方案。';
        alt='備選：先再上一堂調整後的私教確認。';
      } else if(fatLoss){
        main='以私教規劃體態目標與運動習慣';
        reason='你希望改善體態，可以先和教練確認動作基礎與可投入的時間，再討論私教、打靶或團課的搭配。';
        alt='備選：私人教練 10 堂，先把動作與強度建立好。';
      } else {
        main='私人教練 10 堂';
        reason='你在私教中感受到針對性的調整，適合持續一對一精修動作與訓練安排，由教練依你的進度持續調整。';
        alt='備選：私課＋團課搭配，兼顧個別指導與訓練量。';
      }
    }
    return {main:main,reason:reason,alt:alt};
  }

  async function submit(){
    if(submitted)return;submitted=true;btnN.disabled=true;btnP.disabled=true;btnN.textContent='正在送出評估…';error.hidden=true;
    var rec=recommend(),name=document.getElementById('f_name').value.trim();
    var payload={};new FormData(form).forEach(function(v,k){if(!v)return;payload[k]=payload[k]?payload[k]+'、'+v:v;});
    payload['系統建議_主推薦']=rec.main;payload['系統建議_原因']=rec.reason;
    payload._subject='🥊 體驗後評估｜'+name+'（'+val('下一步安排')+'）';payload._template='table';payload._captcha='false';
    var score=parseInt(val('教練評分'),10),coach=val('帶課教練');
    var inputs=Array.from(form.elements).map(function(input){return {input:input,disabled:input.disabled};});
    inputs.forEach(function(row){row.input.disabled=true;});form.setAttribute('aria-busy','true');
    var controller=new AbortController(),timer=setTimeout(function(){controller.abort();},20000);
    try{
      var response=await fetch('https://formsubmit.co/ajax/'+LEAD_EMAIL,{method:'POST',keepalive:true,signal:controller.signal,headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});
      var result=await response.json();
      if(!response.ok||!(result.success===true||result.success==='true'))throw new Error('unconfirmed');
    }catch(e){
      inputs.forEach(function(row){row.input.disabled=row.disabled;});submitted=false;btnN.disabled=false;btnP.disabled=false;btnN.textContent='重新送出評估 →';
      error.textContent='暫時無法確認送出，剛才填的內容都還在。請稍後重試，或先把畫面交給現場教練。';error.hidden=false;error.scrollIntoView({block:'center',behavior:reduced?'instant':'smooth'});track('trial_review_failure');return;
    }finally{clearTimeout(timer);form.removeAttribute('aria-busy');}
    track('trial_review_submit');
    document.getElementById('recMain').textContent=rec.main;document.getElementById('recReason').textContent=rec.reason;
    document.getElementById('recAlt').textContent=rec.alt;
    document.getElementById('doneStars').textContent='★'.repeat(score)+'☆'.repeat(5-score);document.getElementById('doneStars').setAttribute('aria-label',score+' 顆星，共 5 顆星');document.getElementById('doneCoach').textContent=coach+' · '+score+' / 5 顆星';
    document.getElementById('formWrap').style.display='none';document.getElementById('navBar').style.display='none';document.getElementById('done').classList.add('on');document.body.dataset.reviewState='complete';document.getElementById('doneTitle').focus({preventScroll:true});window.scrollTo({top:0});
  }
  document.getElementById('showRec').addEventListener('click',function(){
    document.getElementById('done').classList.remove('on');
    document.getElementById('result').classList.add('on');document.getElementById('resultTitle').focus({preventScroll:true});window.scrollTo({top:0});
  });

  form.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT'&&e.target.type==='text'){e.preventDefault();btnN.click();}});
  form.addEventListener('submit',function(event){event.preventDefault();});
  paint();
})();
