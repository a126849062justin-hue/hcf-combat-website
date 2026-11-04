const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const analytics=fs.readFileSync(require.resolve('../hcf-analytics.js'),'utf8');
const routing=analytics.slice(analytics.indexOf('/* 關鍵行為自動追蹤'),analytics.indexOf('/* 閱讀深度'));
function clickEvent(href,classes=[]){
 const events=[],handlers={};
 const context={URL,location:{href:'https://www.hsinchucombat.com/private-training',origin:'https://www.hsinchucombat.com',pathname:'/private-training'},document:{body:{dataset:{}},addEventListener(n,fn){handlers[n]=fn}},hcfTrack(name,params){events.push({name,params})}};
 vm.runInNewContext(routing,context);
 const el={href,textContent:'詢問課程',closest(){return null},hasAttribute(){return false},classList:{contains(name){return classes.includes(name)}}};
 handlers.click({target:{closest(){return el}}});return events;
}
test('clean URLs and HTML URLs each report exactly one matching conversion or course event',()=>{
 for(const [path,event] of [['booking','cta_booking'],['schedule','nav_schedule'],['private-training','nav_private'],['group-classes','nav_group'],['status','nav_survey']]){
  for(const suffix of ['', '.html', '/', '?utm_source=instagram']){
   const events=clickEvent('https://www.hsinchucombat.com/'+path+suffix);
   assert.equal(events.length,1,path+suffix);assert.equal(events[0].name,event);
  }
 }
 assert.equal(clickEvent('https://www.fit-book.com.tw/hsinchucombat/plan/588')[0].name,'cta_booking');
});
test('existing survey and feedback buttons keep their event tracking',()=>{
 assert.equal(clickEvent('', ['svtab'])[0].name,'survey_tab_click');
 assert.equal(clickEvent('', ['svtab','voice'])[0].name,'voice_tab_click');
});
test('ordinary buttons and unrelated external URLs do not count as inquiry navigation',()=>{
 for(const href of ['', 'https://example.com/booking','https://example.com/?next=private-training.html'])assert.equal(clickEvent(href).length,0);
});
function attribution(search,prior,referrer){
 const sent=[];let stored=prior;
 const context={window:{dataLayer:[]},location:{search,hostname:'www.hsinchucombat.com',pathname:'/booking',origin:'https://www.hsinchucombat.com'},document:{referrer,addEventListener(){}},sessionStorage:{getItem(){return stored},setItem(k,v){stored=v}},URL,URLSearchParams,Set,navigator:{sendBeacon(url,body){sent.push(JSON.parse(body));return true}}};
 vm.runInNewContext(fs.readFileSync(require.resolve('../hcf-growth-events.js'),'utf8'),context);
 context.window.hcfGrowthTrack('booking_entry');return {event:sent[0],stored};
}
test('allowlisted campaign sources survive in-app browsers without a referrer',()=>{
 for(const [tag,expected] of [['instagram','instagram'],['ig','instagram'],['google_business_profile','google'],['facebook','facebook']]){
  const r=attribution('?utm_source='+tag+'&name=PRIVATE_VALUE','direct','');
  assert.equal(r.event.params.source,expected);assert.equal(r.stored,expected);assert.ok(!JSON.stringify(r).includes('PRIVATE_VALUE'));
 }
});
test('unknown tags never enter analytics and normal referrer or stored attribution still works',()=>{
 assert.equal(attribution('?utm_source=PRIVATE_VALUE',null,'https://www.google.com/search?q=PRIVATE_VALUE').event.params.source,'google');
 assert.equal(attribution('', 'instagram','https://www.hsinchucombat.com/').event.params.source,'instagram');
 assert.equal(attribution('?utm_source=__proto__',null,'').event.params.source,'direct');
});
