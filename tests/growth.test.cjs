const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const choice=require('../hcf-course-data.js');
test('all 48 combinations recommend valid courses and valid booking options',()=>{
 const html=fs.readFileSync(require.resolve('../booking.html'),'utf8');
 for(const goal of Object.keys(choice.goals))for(const experience of Object.keys(choice.experience))for(const time of Object.keys(choice.times)){
  const p={goal,experience,time},r=choice.recommend(p);assert.ok(r);assert.deepEqual(choice.decode(choice.encode(p)),p);
  for(const value of Object.values(choice.fields(p)))assert.ok(html.includes('value="'+value+'"'),value);
  if(experience==='new')assert.ok(!['cardio','intermediate'].includes(r.id));
  if(time==='daytime'||time==='flexible'||goal==='personal')assert.equal(r.id,'private');
  if(time==='weekend'&&goal!=='personal')assert.equal(r.id,'beginner');
 }
});
test('invalid, inherited or injected fragment values cannot enter the form',()=>{
 for(const hash of ['#pick=__proto__.new.evening','#pick=technique.new.evening&name=private','#pick=<script>.new.evening','#pick=technique.new.unknown',''])assert.equal(choice.decode(hash),null);
 assert.deepEqual(choice.fields({goal:'constructor',experience:'new',time:'evening'}),{});
});
test('tracking strips personal answers, raw query URLs and unknown values',()=>{
 const sent=[],events=[];
 const context={window:{dataLayer:events},location:{hostname:'www.hsinchucombat.com',pathname:'/booking',origin:'https://www.hsinchucombat.com'},document:{referrer:'https://www.google.com/search?q=secret',addEventListener(){}},sessionStorage:{getItem(){return null},setItem(){}},URL,Set,navigator:{sendBeacon(url,body){sent.push(JSON.parse(body));return true}}};
 vm.runInNewContext(fs.readFileSync(require.resolve('../hcf-growth-events.js'),'utf8'),context);
 context.window.hcfGrowthTrack('booking_step_complete',{step:2,name:'DO_NOT_TRACK',health:'DO_NOT_TRACK',url:'DO_NOT_TRACK',course:'beginner'});
 assert.equal(sent.length,1);assert.equal(sent[0].params.step,2);assert.equal(sent[0].params.source,'google');assert.ok(!JSON.stringify(sent).includes('DO_NOT_TRACK'));
 context.window.hcfGrowthTrack('free_form_text',{text:'secret'});assert.equal(sent.length,1);
});

test('preview hosts do not send analytics to production',()=>{
 let calls=0;
 const ctx={window:{},location:{hostname:'deploy-preview-126--hcf.netlify.app',pathname:'/booking',origin:'https://deploy-preview-126--hcf.netlify.app'},document:{referrer:'',addEventListener(){}},sessionStorage:{getItem(){return null},setItem(){}},URL,Set,navigator:{sendBeacon(){calls++;return true}}};
 vm.runInNewContext(fs.readFileSync(require.resolve('../hcf-growth-events.js'),'utf8'),ctx);
 ctx.window.hcfGrowthTrack('booking_start');assert.equal(calls,0);
});
