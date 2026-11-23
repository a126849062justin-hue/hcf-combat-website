const test=require('node:test');
const assert=require('node:assert/strict');
const rules=require('../hcf-christmas.js');
const fs=require('node:fs');
const path=require('node:path');

test('every public HTML entry point loads the seasonal component once including nested shop pages',()=>{
  const root=path.resolve(__dirname,'..');
  const files=fs.readdirSync(root).filter(p=>p.endsWith('.html'));
  for(const entry of fs.readdirSync(path.join(root,'shop'),{recursive:true}))if(entry.endsWith('.html'))files.push(path.join('shop',entry));
  for(const name of files){
    const html=fs.readFileSync(path.join(root,name),'utf8');
    if(!/<\/head>/i.test(html))continue; // Google ownership verification is not a page.
    assert.equal((html.match(/id="hcf-christmas-loader"/g)||[]).length,1,name);
    assert.match(html,/<script id="hcf-christmas-loader" src="\/hcf-christmas\.js\?v=20261123" defer><\/script>/,name);
  }
});

test('holiday uses Taipei boundaries and the same season across New Year',()=>{
  for(const [instant,expected] of [
    ['2026-11-19T15:59:59Z',null],['2026-11-19T16:00:00Z',2026],
    ['2026-12-25T00:00:00Z',2026],['2027-01-06T15:59:59Z',2026],
    ['2027-01-06T16:00:00Z',null],['2027-06-01T00:00:00Z',null],
    ['2027-11-20T00:00:00Z',2027]
  ])assert.equal(rules.season(new Date(instant)),expected,instant);
});

test('all public pages including forms have holiday atmosphere while admin routes do not',()=>{
  for(const path of ['/admin','/backend/api','/api/public'])assert.equal(rules.eligible(path),false,path);
  for(const path of ['/','/index.html','/private-training','/knowledge','/fighters','/first-time-muay-thai-guide','/booking','/booking.html','/booking/','/trial-review','/survey','/group-feedback.html','/complaint','/card-huang'])assert.equal(rules.eligible(path),true,path);
});

test('stored progress accepts only fixed choices and handles denied or corrupt storage',()=>{
  for(const raw of [null,'not json','null','[]','0'])assert.deepEqual(rules.restore(raw),{collected:[],wish:0,snow:true});
  assert.deepEqual(rules.restore('{"collected":[0,0,1,"2",2,3,-1,null],"wish":99,"snow":false,"html":"<script>"}'),{collected:[0,1,2],wish:0,snow:false});
});

test('only three distinct valid gloves complete the round and repeated taps do not advance',()=>{
  let state=rules.restore(null);
  state=rules.collect(state,2);assert.deepEqual(state.collected,[2]);
  assert.equal(rules.collect(state,2),state);
  for(const value of [-1,3,'0',NaN])assert.equal(rules.collect(state,value),state);
  state=rules.collect(state,0);state=rules.collect(state,1);
  assert.equal(state.collected.length,3);
  assert.deepEqual(rules.restore(JSON.stringify(state)),state);
});
