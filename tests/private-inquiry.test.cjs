const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const inquiry=require('../hcf-private.js');
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(require.resolve('../booking-line.js'),'utf8'),ctx);
test('private links prefill real booking fields and distinguish two people from two lessons',()=>{
 const html=fs.readFileSync(require.resolve('../booking.html'),'utf8');
 for(const plan of ['unsure','one','two','pads'])for(const suffix of ['', '&goal=competition']){
  const fields=inquiry.decode('#private='+plan+suffix);
  for(const value of Object.values(fields))assert.ok(html.includes('value="'+value+'"'),value);
  const handoff=ctx.window.HCFBookingLine.build(fields,{userAgent:'iPhone',platform:'iPhone'});
  Object.values(fields).forEach(value=>assert.ok(handoff.message.includes(value)));
  if(['two','pads'].includes(plan))assert.equal(fields['開始方式'],'私人課形式另行討論');
 }
});
test('private prefill only accepts fixed non-personal choices',()=>{
 for(const hash of ['', '#private=__proto__','#private=constructor','#private=one&name=PRIVATE','#private=one&goal=unknown','#private=one<script>'])assert.equal(inquiry.decode(hash),null);
});
test('LINE handoff records one existing click event with fixed intent and no message content',()=>{
 const events=[],handlers={};
 // Execute the existing analytics block in isolation; no network or production records.
 const source=fs.readFileSync(require.resolve('../hcf-analytics.js'),'utf8');
 const block=source.slice(source.indexOf('/* 關鍵行為自動追蹤'),source.indexOf('/* 閱讀深度'));
 const context={document:{body:{dataset:{page:'courses'}},addEventListener(name,fn){handlers[name]=fn}},URL,location:{pathname:'/private-training',origin:'https://www.hsinchucombat.com'},hcfTrack(name,params){events.push({name,params})}};
 vm.runInNewContext(block,context);
 const el={href:'https://line.me/R/oaMessage/%40228pffia/?SECRET_MESSAGE',textContent:'帶著內容開啟 LINE →',closest(){return {getAttribute(){return 'private'}}},hasAttribute(name){return name==='data-private-line'}};
 handlers.click({target:{closest(){return el}}});
 assert.equal(events.length,1);assert.equal(events[0].name,'cta_line');assert.equal(events[0].params.intent,'private');
 assert.ok(!JSON.stringify(events).includes('SECRET_MESSAGE'));
 el.href='https://example.com/?url=https://line.me/';handlers.click({target:{closest(){return el}}});assert.equal(events.length,1);
});
