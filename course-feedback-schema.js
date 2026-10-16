// Canonical course questionnaire. Website copies are generated, not hand-maintained.
import {RATING_QUESTIONS, RATING_OPTIONS, OPTIONS} from './group-feedback-schema.js';
export {RATING_OPTIONS};
export const COURSE_SURVEY_ID='hcf-course-experience-v2';
export const COURSE_SURVEY_VERSION=2;
export const ROUTES = {
  group: {label:'團體課回饋',description:'一起練習的感受，從你的角度開始。',branches:['group']},
  private: {label:'私人課回饋',description:'告訴我們，個人規劃有沒有走向你的目標。',branches:['private']},
  both: {label:'團課＋私課回饋',description:'先聊團課，再聊私課；兩種課程分開評價。',branches:['group','private']},
  interest: {label:'未來課程意願',description:'還沒上過也沒關係，先分享你想怎麼開始。',branches:[]},
};
const one=(key,label,options,extra={})=>({key,label,options,type:'one',required:true,...extra});
const many=(key,label,options,extra={})=>({key,label,options,type:'many',required:false,max:3,...extra});
const text=(key,label,placeholder)=>({key,label,placeholder,type:'text',required:false,maxLength:600});
const rating=([key,label])=>({key,label,type:'rating',options:RATING_OPTIONS,required:true});
const ratingById=new Map(RATING_QUESTIONS);
const privateCommon=['goal','feedback','progress','questions'].map(key=>[key,ratingById.get(key)]);
const futureFields=[
  many('goals','下一階段 你最想練到什麼',[
    ['basics','把泰拳基礎練穩'],['technique','改善特定技術'],['fitness','提升體能與運動習慣'],['body','體態管理'],['stress','紓壓與享受運動'],['competition','了解對練或比賽準備'],['unsure','還不確定，想先了解']],{exclusive:'unsure',hint:'選填，最多 3 項。還不確定可單獨選擇。'}),
  one('format','哪一種上課安排更適合你',[
    ['flexible','自由預約團課，配合自己的時間'],['term','固定週次與同一批夥伴，依主題循序練習'],['private','私人課，依個人目標安排'],['mix','團課與私課搭配'],['unsure','目前還不確定']],{required:false,hint:'只調查意願，不代表報名、開課或價格承諾。'}),
  many('days','通常哪幾天比較方便', [['mon','週一'],['tue','週二'],['wed','週三'],['thu','週四'],['fri','週五'],['sat','週六'],['sun','週日'],['varies','時間不固定']],{max:7,exclusive:'varies',hint:'選填，可複選；時間不固定請單獨選擇。',compact:true}),
  many('times','通常哪個時段比較方便',[['morning','上午'],['afternoon','下午'],['evening','晚上'],['varies','時間不固定']],{max:3,exclusive:'varies',hint:'選填，可複選；實際時段仍以課表公告為準。',compact:true}),
];
export const PAGES = {
  'group-experience': {branch:'group',label:'團課感受',eyebrow:'GROUP / EXPERIENCE',title:'一起練習的感受如何',description:'回想最近四週的團課；較久沒來，也可以回想最近一次。沒有遇過的情況請選「無法判斷」。',fields:[one('attendance','最近四週 你上了幾次團課',OPTIONS.attendance),...RATING_QUESTIONS.map(rating)]},
  'group-rhythm': {branch:'group',label:'團課互動',eyebrow:'GROUP / YOUR RHYTHM',title:'什麼樣的團課讓你自在',description:'安靜專注與熱血互動都可以。請依自己的偏好回答，不需要迎合教練。',fields:[
    rating(['pace','課程的節奏與難度適合我']),
    rating(['levels','程度不同時，教練會提供適合我的練法']),
    one('atmosphere','你偏好的上課氣氛',OPTIONS.atmosphere),
    many('activities','哪些安排你會想試試看',OPTIONS.activities,{required:true,exclusive:'none',hint:'最多 3 項。「暫時不想增加互動」可單獨選擇。'}),
    one('priority','如果先改善一件事 你會選',OPTIONS.priority),
    text('discomfort','有沒有讓你不自在的互動','例如不想被公開點名，或希望音量小一些；請避免提及他人的姓名'),
  ]},
  'private-experience': {branch:'private',label:'私課感受',eyebrow:'PERSONAL / EXPERIENCE',title:'專屬你的課有走在目標上嗎',description:'這裡只回想私人課的經驗。沒有遇過或還無法判斷，可以直接選「無法判斷」。',fields:[one('attendance','最近四週 你上了幾次私人課',OPTIONS.attendance),...privateCommon.map(rating)]},
  'private-plan': {branch:'private',label:'私課規劃',eyebrow:'PERSONAL / YOUR PROGRESS',title:'不只上完一堂 也看見下一步',description:'讓我們了解規劃、每堂調整與進步回顧，有沒有符合你的期待。',fields:[
    rating(['personalGoal','課程規劃符合我的個人訓練目的']),
    rating(['adaptation','教練會依我當天的狀態調整訓練']),
    rating(['continuity','教練會回顧之前的練習，讓我知道下一步']),
    many('reasons','你選擇私人課最主要的原因',[
      ['technique','個別技術修正'],['planning','個人訓練規劃'],['schedule','時間安排更彈性'],['support','教練陪伴與督促'],['goal','有特定目標想完成'],['privacy','比較自在的練習環境'],['other','其他']],{hint:'選填，最多 3 項。'}),
    one('priority','如果先改善一件事 你會選',[
      ['planning','更清楚的個人規劃'],['correction','更具體的技術調整'],['progress','更清楚的進步回顧'],['pace','更適合我的節奏與強度'],['schedule','排課與溝通更順暢'],['none','目前沒有特別需要改善'],['other','其他，寫在下方']]),
    text('expectations','有哪些地方還沒符合你對私課的期待','例如想更了解目前的進度，或每一堂之間如何接續'),
  ]},
  future: {branch:'future',label:'未來意願',eyebrow:'NEXT / YOUR PREFERENCE',title:'接下來 你想怎麼練',description:'這一頁都可以跳過。課程意願會獨立整理，不當作對現在課程的評分。',notice:'固定主題期班仍在蒐集意願，並非開課公告或報名。',fields:futureFields},
  voice: {branch:'voice',label:'你的聲音',eyebrow:'VOICE / IN YOUR WORDS',title:'值得保留的事 想改變的事',description:'一句具體的感受，就能讓我們更了解你。這一頁都可以留白。',fields:[]},
  review: {label:'確認回饋',eyebrow:'REVIEW / YOUR VOICE',title:'這就是你想告訴我們的事',description:'團課、私課與未來意願各自整理。確認前可以逐段修改。',fields:[]},
};
export function pagesFor(route){
  if(!ROUTES[route])return [];
  return [...ROUTES[route].branches.flatMap(branch=>branch==='group'?['group-experience','group-rhythm']:['private-experience','private-plan']),'future','voice','review'];
}
export function voiceFields(route){
  const fields=ROUTES[route].branches.flatMap(branch=>[
    text(branch+'Keep',(branch==='group'?'團課':'私課')+' 有什麼值得繼續保留','例如教練的一句提醒，或讓你看見自己進步的時刻'),
    text(branch+'Change',(branch==='group'?'團課':'私課')+' 希望下次有什麼不同','可以描述具體情況，不必寫出任何人的姓名'),
  ]);
  if(route==='interest')fields.push(text('wish','還有什麼想讓我們知道','說說你想嘗試的課程，或開始前的疑問'));
  if(ROUTES[route].branches.length)fields.push(
    {...text('coachRecipient','想對哪位教練說','可以寫教練稱呼，也可以寫整個教練團隊'),maxLength:60,singleLine:true,section:'encouragement',footer:'只需稱呼，不需要提供聯絡方式'},
    {...text('coachMessage','想給教練的一句話','例如：謝謝你上次耐心幫我調整動作，讓我更敢嘗試。'),section:'encouragement',hint:'可以說說發生了什麼，以及那件事帶給你的感受。',footer:'依自己的經驗寫，也可以留白'},
    many('coachSharing','這段鼓勵的分享方式',[
      ['summary','我願意讓館長去除可辨識細節後，將這段鼓勵整理進教練回饋摘要']
    ],{section:'encouragement',max:1,simple:true,emptyLabel:'僅供館長閱讀',hint:'未勾選時，這段鼓勵僅供館長閱讀。不會自動轉傳原文、姓名或通知教練。'})
  );
  return [...fields,{...text('memberName','姓名或暱稱','留白即可匿名'),maxLength:60}];
}
export const fieldsFor=(id,route)=>id==='voice'?voiceFields(route):PAGES[id].fields;
export const emptyAnswers=()=>({group:{},private:{},future:{},voice:{}});
export function toggleMany(current,value,field){
  const values=Array.isArray(current)?current:[];
  if(values.includes(value))return {values:values.filter(v=>v!==value)};
  if(value===field.exclusive)return {values:[value]};
  const next=values.filter(v=>v!==field.exclusive);
  if(next.length>=field.max)return {values,error:'最多選 '+field.max+' 項，請先取消其中一項。'};
  return {values:[...next,value]};
}
export function validatePage(id,route,answers){
  const branch=PAGES[id].branch;
  return fieldsFor(id,route).flatMap(field=>{
    const v=answers[branch]?.[field.key];
    if(field.type==='text')return v!==undefined&&(typeof v!=='string'||v.length>field.maxLength)?[{key:field.key,message:'請檢查文字長度。'}]:[];
    if(field.type==='many'){
      if((v===undefined||v.length===0)&&!field.required)return [];
      if(!Array.isArray(v)||v.length<1||v.length>field.max||new Set(v).size!==v.length||v.some(x=>!field.options.some(([value])=>value===x))||(v.includes(field.exclusive)&&v.length>1))return [{key:field.key,message:'請選擇 '+(field.required?'1 至 ':'最多 ')+field.max+' 項。'}];
    }else if((v===undefined||v==='')&&!field.required)return [];
    else if(!field.options.some(([value])=>v===value))return [{key:field.key,message:field.type==='rating'?'請選一個感受，或選「無法判斷」。':'請選擇一項。'}];
    return [];
  });
}
export function labelFor(field,value){
  if(value===undefined||value===''||(Array.isArray(value)&&!value.length))return field.emptyLabel||'未填';
  if(field.type==='text')return String(value).trim()||'未填';
  const find=v=>field.options.find(([id])=>id===v)?.[1]||'無法辨識';
  return Array.isArray(value)?value.map(find).join('、'):find(value);
}
// Only selected branches and documented fields enter the review. Switching
// course type keeps local drafts but never leaks hidden answers into the result.
export function projectAnswers(route,answers){
  const ids=pagesFor(route);if(!ids.length)throw Error('請選擇課程類型');
  const output={route,group:null,private:null,future:{},voice:{}};
  for(const id of ids.filter(id=>id!=='review')){
    const errors=validatePage(id,route,answers);if(errors.length)throw Error(id+': '+errors[0].message);
    const branch=PAGES[id].branch;output[branch]??={};
    for(const field of fieldsFor(id,route)){
      const value=answers[branch]?.[field.key];
      output[branch][field.key]=field.type==='many'?(Array.isArray(value)?[...value]:[]):typeof value==='string'?value.trim():'';
    }
  }
  return output;
}

const invalid=message=>{throw Object.assign(new Error(message),{status:400})};
const plain=value=>value!==null&&typeof value==='object'&&!Array.isArray(value)&&[Object.prototype,null].includes(Object.getPrototypeOf(value));
// Fail closed on hidden branches, unknown fields and malformed option arrays.
export function normalizeCourseFeedback(input){
  if(!plain(input)||typeof input.route!=='string'||!Object.hasOwn(ROUTES,input.route)||Object.keys(input).some(k=>!['route','group','private','future','voice'].includes(k)))return invalid('請重新確認問卷類型與內容');
  const route=input.route;
  for(const branch of ['group','private','future','voice']){
    const fields=pagesFor(route).filter(id=>PAGES[id].branch===branch).flatMap(id=>fieldsFor(id,route));
    const value=input[branch];
    if(!fields.length){if(value!==null&&value!==undefined)return invalid('未選擇的課程不可附帶回答');continue;}
    if(!plain(value)||Object.keys(value).some(key=>!fields.some(f=>f.key===key)))return invalid('問卷欄位不完整或已變更');
    for(const field of fields){const v=value[field.key];if(field.type==='many'&&v!==undefined&&!Array.isArray(v))return invalid('複選欄位格式不正確');}
  }
  try{return projectAnswers(route,input)}catch{return invalid('部分題目尚未完成或格式不正確，請返回確認');}
}
export const FEEDBACK_SCOPES=[['legacy','原團課問卷'],['group','團體課'],['private','私人課'],['future','未來課程意願']];
export function scopeRows(rows,scope){
  return rows.filter(row=>scope==='legacy'?row.version===1:row.version===2&&(scope==='future'||ROUTES[row.answers.route].branches.includes(scope)));
}
export function scopeFields(scope){return Object.values(PAGES).filter(p=>p.branch===scope).flatMap(p=>p.fields).filter(f=>f.type!=='text');}
export function courseSummary(rows,scope){
  const selected=scopeRows(rows,scope), fields=scopeFields(scope), total=selected.length;
  return {total,scope,ratings:Object.fromEntries(fields.filter(f=>f.type==='rating').map(field=>{
    const counts=Object.fromEntries(RATING_OPTIONS.map(([key])=>[key,0]));
    for(const row of selected)counts[row.answers[scope][field.key]]++;
    const valid=total-counts.na,agree=counts['4']+counts['5'];
    return [field.key,{counts,valid,unavailable:counts.na,agree,agreePercent:valid?Math.round(agree/valid*100):null}];
  })),choices:Object.fromEntries(fields.filter(f=>['one','many'].includes(f.type)).map(field=>[field.key,field.options.map(([id,label])=>({id,label,count:selected.filter(row=>[].concat(row.answers[scope][field.key]).includes(id)).length}))])),unanswered:Object.fromEntries(fields.filter(f=>['one','many'].includes(f.type)).map(f=>[f.key,selected.filter(row=>{const v=row.answers[scope][f.key];return v===''||(Array.isArray(v)&&!v.length)}).length]))};
}
export function courseAnswerRows(answers){return pagesFor(answers.route).filter(id=>id!=='review').flatMap(id=>fieldsFor(id,answers.route).map(field=>({key:PAGES[id].branch+'.'+field.key,label:PAGES[id].label+' · '+field.label,value:labelFor(field,answers[PAGES[id].branch][field.key])})));}
