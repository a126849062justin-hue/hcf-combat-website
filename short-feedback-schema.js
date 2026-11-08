// Canonical short questionnaire. Website receives a generated copy.
export const SHORT_SURVEY_ID='hcf-course-experience-v3';
export const SHORT_SURVEY_VERSION=3;
export const SHORT_ROUTES={group:{label:'團體課',branches:['group']},private:{label:'私人課',branches:['private']},both:{label:'團課與私課',branches:['group','private']}};
export const SHORT_SCOPES=[['short-group','團課 簡短版'],['short-private','私課 簡短版']];
export const FEELING_OPTIONS=[['1','很不滿意'],['2','不太滿意'],['3','普通'],['4','滿意'],['5','很滿意'],['na','還無法判斷']];
export const COACH_OPTIONS=[['1','1 星 很不滿意'],['2','2 星 不太滿意'],['3','3 星 普通'],['4','4 星 滿意'],['5','5 星 很滿意'],['na','還無法判斷']];
export const SHORT_FIELDS=[
  {key:'feeling',label:'這次上課的整體感受如何',type:'rating',options:FEELING_OPTIONS,required:true},
  {key:'coachRating',label:'你對教練的教學感受',type:'rating',options:COACH_OPTIONS,required:true,stars:true},
  {key:'priority',label:'最希望改善的事',type:'many',required:true,options:[['content','課程內容更符合需求'],['beginner','課程對新手太難或進度太快'],['pace','節奏或強度更適合我'],['clarity','教學說明更清楚'],['attention','更多個別指導與關心'],['approachability','教練表情或語氣讓我有壓力'],['atmosphere','上課氣氛更自在'],['schedule','排課與溝通更順暢'],['none','目前沒有特別需要改善'],['other','其他，我想補充']]},
  {key:'coachName',label:'這次回饋哪位教練',type:'text',maxLength:60,placeholder:'教練稱呼或整個教練團隊，不確定可留白'},
  {key:'comment',label:'想對課程或教練說的話',type:'text',maxLength:600,placeholder:'哪個時刻讓你覺得被照顧？哪裡不舒服或希望改變？一句話也可以。'},
];
const fail=message=>{throw Object.assign(new Error(message),{status:400})};
const plain=v=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&[Object.prototype,null].includes(Object.getPrototypeOf(v));
// Keep legacy scalar answers unchanged so old submission retries retain their hash.
export const shortSelections=value=>Array.isArray(value)?value:typeof value==='string'&&value?[value]:[];
export function shortErrors(branch){
  return SHORT_FIELDS.flatMap(f=>{
    const v=branch?.[f.key];
    if(f.type==='text')return v!==undefined&&(typeof v!=='string'||v.length>f.maxLength)?[{key:f.key,message:'請檢查文字長度'}]:[];
    if(f.type==='many'){
      const picks=shortSelections(v),valid=picks.length>0&&picks.length<=f.options.length&&new Set(picks).size===picks.length&&picks.every(id=>f.options.some(([key])=>key===id));
      if(!valid)return [{key:f.key,message:'請至少選擇一項，也可選「目前沒有特別需要改善」'}];
      return picks.includes('none')&&picks.length>1?[{key:f.key,message:'「目前沒有特別需要改善」請單獨選擇'}]:[];
    }
    return f.options.some(([id])=>id===v)?[]:[{key:f.key,message:f.type==='rating'?'請選擇評分，或選「還無法判斷」':'請選擇一項'}];
  });
}
export function normalizeShortFeedback(input){
  if(!plain(input)||!Object.hasOwn(SHORT_ROUTES,input.route)||Object.keys(input).some(k=>!['route','group','private','memberName'].includes(k)))return fail('請確認回饋的課程類型');
  if(input.memberName!==undefined&&(typeof input.memberName!=='string'||input.memberName.length>60))return fail('姓名或暱稱請在 60 字內');
  const result={route:input.route,group:null,private:null,memberName:(input.memberName||'').trim()};
  for(const branch of ['group','private']){
    const value=input[branch];
    if(!SHORT_ROUTES[input.route].branches.includes(branch)){if(value!==undefined&&value!==null)return fail('未選擇的課程不可附帶回答');continue;}
    if(!plain(value)||Object.keys(value).some(k=>!SHORT_FIELDS.some(f=>f.key===k))||shortErrors(value).length)return fail('請完成三個重點問題，或確認文字長度');
    result[branch]=Object.fromEntries(SHORT_FIELDS.map(f=>[f.key,Array.isArray(value[f.key])?[...value[f.key]]:(value[f.key]||'').trim()]));
  }
  return result;
}
export function shortLabel(field,value){if(field.type==='many')return shortSelections(value).map(id=>field.options.find(([key])=>key===id)?.[1]).filter(Boolean).join('；')||'未填';return field.type==='text'?(value||'未填'):(field.options.find(([id])=>id===value)?.[1]||'未填');}
export function shortScopeRows(rows,scope){const branch=scope.replace('short-','');return rows.filter(row=>row.version===3&&SHORT_ROUTES[row.answers.route]?.branches.includes(branch));}
export function shortSummary(rows,scope){
  const selected=shortScopeRows(rows,scope),branch=scope.replace('short-','');
  return {total:selected.length,scope,ratings:Object.fromEntries(SHORT_FIELDS.filter(f=>f.type==='rating').map(f=>{
    const counts=Object.fromEntries(f.options.map(([id])=>[id,0]));
    for(const row of selected)counts[row.answers[branch][f.key]]++;
    const valid=selected.length-counts.na,sum=[1,2,3,4,5].reduce((s,n)=>s+n*counts[n],0);
    return [f.key,{counts,valid,unavailable:counts.na,average:valid?Math.round(sum/valid*10)/10:null,agree:counts[4]+counts[5],agreePercent:valid?Math.round((counts[4]+counts[5])/valid*100):null}];
  })),choices:{priority:SHORT_FIELDS.find(f=>f.key==='priority').options.map(([id,label])=>({id,label,count:selected.filter(row=>shortSelections(row.answers[branch].priority).includes(id)).length}))},unanswered:{}};
}
export function shortAnswerRows(answers){return [...SHORT_ROUTES[answers.route].branches.flatMap(branch=>SHORT_FIELDS.map(f=>({key:branch+'.'+f.key,label:SHORT_ROUTES[branch].label+' · '+f.label,value:shortLabel(f,answers[branch][f.key])}))),{key:'memberName',label:'姓名或暱稱',value:answers.memberName||'匿名'}];}
