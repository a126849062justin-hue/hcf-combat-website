const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const inquiry=require('../hcf-private.js');
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(require.resolve('../booking-line.js'),'utf8'),ctx);
test('all private inquiry combinations preserve their choices in the official LINE draft',()=>{
 for(const plan of ['unsure','one','two','pads'])for(const goal of ['unsure','basics','fitness','technique','competition'])for(const time of ['flexible','day','evening','weekend']){
  const fields=inquiry.fields({plan,goal,time});
  const handoff=ctx.window.HCFBookingLine.build(fields,{userAgent:'iPhone',platform:'iPhone'});
  assert.equal(handoff.autoOpen,true);
  assert.ok(handoff.url.startsWith('https://line.me/R/oaMessage/%40228pffia/?'));
  assert.equal(decodeURIComponent(handoff.url.split('/?')[1]),handoff.message);
  assert.ok(handoff.message.includes('私人課諮詢（尚未預約）'));
  Object.values(fields).forEach(value=>assert.ok(handoff.message.includes(value)));
  assert.ok(!handoff.message.includes('undefined'));
 }
});
test('desktop has profile fallback; iPad uses mobile draft; no arbitrary fields enter the message',()=>{
 const fields=inquiry.fields({plan:'__proto__',goal:'<script>secret</script>',time:'constructor',name:'PRIVATE'});
 assert.deepEqual(fields,inquiry.fields());
 const desktop=ctx.window.HCFBookingLine.build(fields,{userAgent:'Macintosh',platform:'MacIntel',maxTouchPoints:0});
 assert.equal(desktop.url,'https://line.me/R/ti/p/%40228pffia');
 assert.equal(desktop.autoOpen,false); assert.ok(!desktop.message.includes('PRIVATE'));
 assert.equal(ctx.window.HCFBookingLine.build(fields,{userAgent:'Macintosh',platform:'MacIntel',maxTouchPoints:5}).autoOpen,true);
});
test('LINE handoff records one existing click event with fixed intent and no message content',()=>{
 const events=[],handlers={};
 // Execute the existing analytics block in isolation; no network or production records.
 const source=fs.readFileSync(require.resolve('../hcf-analytics.js'),'utf8');
 const block=source.slice(source.indexOf('/* 關鍵行為自動追蹤'),source.indexOf('/* 閱讀深度'));
 const context={document:{body:{dataset:{page:'courses'}},addEventListener(name,fn){handlers[name]=fn}},location:{pathname:'/private-training'},hcfTrack(name,params){events.push({name,params})}};
 vm.runInNewContext(block,context);
 const el={href:'https://line.me/R/oaMessage/%40228pffia/?SECRET_MESSAGE',textContent:'帶著內容開啟 LINE →',closest(){return {getAttribute(){return 'private'}}},hasAttribute(name){return name==='data-private-line'}};
 handlers.click({target:{closest(){return el}}});
 assert.equal(events.length,1);assert.equal(events[0].name,'cta_line');assert.equal(events[0].params.intent,'private');
 assert.ok(!JSON.stringify(events).includes('SECRET_MESSAGE'));
 el.href='https://example.com/?url=https://line.me/';handlers.click({target:{closest(){return el}}});assert.equal(events.length,1);
});
