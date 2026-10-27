/* Course guidance shared by the shark and booking. No live availability claims. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.HCFChoice = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var goals = {
    technique: ['學基本拳腿', '學習真正的泰拳或踢拳技術'],
    fitness: ['運動與體能', '提升體能、肌力與爆發力'],
    release: ['下班舒壓', '舒壓、改善生活狀態'],
    personal: ['想要個別指導', '還不確定，想先體驗看看']
  };
  var experience = {
    new: ['完全零基礎', '完全沒有，第一次接觸'],
    some: ['體驗過幾堂', '曾經體驗過幾堂課'],
    regular: ['有規律練習', '有規律上過團體課']
  };
  var times = {
    evening: ['平日晚上', '平日 19:00 左右'],
    weekend: ['週六上午', '週六上午或中午'],
    daytime: ['平日白天', '白天時段'],
    flexible: ['時間不固定', '時間不固定，需與教練討論']
  };
  var courses = {
    beginner: {name:'新手泰拳', minutes:60, price:400, plan:'團體課體驗 $400', note:'從站架、步法與基本拳腿開始；入門班不安排學員互相擊打。'},
    cardio: {name:'泰拳燃脂', minutes:60, price:400, plan:'團體課體驗 $400', note:'以拳腿組合與體能循環為主；班型與動作基礎由教練確認。'},
    intermediate: {name:'中階泰拳', minutes:60, price:400, plan:'團體課體驗 $400', note:'先由教練確認基本技術與控制能力；部分主題有搭檔接觸。'},
    private: {name:'私人教練體驗', price:1400, plan:'私人教練體驗 1 堂 $1,400', note:'想多一些個別指導或時間較難配合，可與教練討論一對一安排。'}
  };
  function valid(p) { return !!(p && Object.hasOwn(goals,p.goal) && Object.hasOwn(experience,p.experience) && Object.hasOwn(times,p.time)); }
  function recommend(p) {
    if (!valid(p)) return null;
    var id = 'beginner';
    if (p.goal === 'personal' || p.time === 'daytime' || p.time === 'flexible') id = 'private';
    else if (p.time !== 'weekend' && p.experience !== 'new' && (p.goal === 'fitness' || p.goal === 'release')) id = 'cardio';
    else if (p.time !== 'weekend' && p.experience === 'regular' && p.goal === 'technique') id = 'intermediate';
    return Object.assign({id:id},courses[id]);
  }
  function encode(p) { return valid(p) ? '#pick=' + [p.goal,p.experience,p.time].join('.') : ''; }
  function decode(hash) {
    var m = /^#pick=([a-z]+)\.([a-z]+)\.([a-z]+)$/.exec(hash || '');
    var p = m && {goal:m[1],experience:m[2],time:m[3]};
    return valid(p) ? p : null;
  }
  function fields(p) {
    var r = recommend(p); if (!r) return {};
    var time = times[p.time][1];
    if (p.time === 'evening' && (r.id === 'cardio' || r.id === 'intermediate')) time = '平日 20:00 左右';
    return {'想改善':goals[p.goal][1], '格鬥經驗':experience[p.experience][1], '開始方式':r.plan, '方便時段':time};
  }
  return {version:'20261027',goals:goals,experience:experience,times:times,courses:courses,valid:valid,recommend:recommend,encode:encode,decode:decode,fields:fields};
});
