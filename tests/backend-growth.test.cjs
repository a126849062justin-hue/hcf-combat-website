const test=require('node:test'),assert=require('node:assert/strict'),{spawn}=require('node:child_process'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),crypto=require('node:crypto');
test('authenticated metrics: event sanitation, outcomes, overwrite and validation',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'hcf-metrics-')),password=crypto.randomBytes(24).toString('hex');
 const server=spawn(process.execPath,['backend/server.js'],{cwd:path.join(__dirname,'..'),env:{...process.env,PORT:'8893',DATA_DIR:dir,ADMIN_PASSWORD:password,DATABASE_URL:''},stdio:['ignore','pipe','pipe']});
 try{
  await new Promise((resolve,reject)=>{server.stdout.once('data',resolve);server.once('error',reject);server.once('exit',code=>reject(new Error('exit '+code)));});
  const base='http://127.0.0.1:8893',post=(url,data,cookie)=>fetch(base+url,{method:'POST',headers:{'content-type':'application/json',...(cookie?{cookie}: {})},body:JSON.stringify(data)});
  assert.equal((await fetch(base+'/api/admin/stats')).status,401);
  assert.equal((await post('/api/admin/outcomes',{})).status,401);
  await post('/api/track',{name:'booking_step_complete',params:{step:2,source:'google',name:'PRIVATE',answer:'PRIVATE',page:'/booking'}});
  await post('/api/track',{name:'booking_submit_success',params:{source:'google'}});
  await post('/api/track',{name:'design_inquiry_click',params:{source:'instagram'}});
  const login=await post('/api/login',{password});assert.equal(login.status,200);const cookie=login.headers.get('set-cookie').split(';')[0];
  const date=new Date(Date.now()+8*3600e3).toISOString().slice(0,10);
  assert.equal((await post('/api/admin/outcomes',{date,brand:'combat',confirmed:3,attended:2,won:1},cookie)).status,200);
  assert.equal((await post('/api/admin/outcomes',{date,brand:'combat',confirmed:4,attended:3,won:2},cookie)).status,200);
  assert.equal((await post('/api/admin/outcomes',{date:'2026-99-99',brand:'combat',confirmed:1,attended:0,won:0},cookie)).status,400);
  assert.equal((await post('/api/admin/outcomes',{date,brand:'combat',confirmed:-1,attended:0,won:0},cookie)).status,400);
  const stats=await (await fetch(base+'/api/admin/stats?days=7',{headers:{cookie}})).json();
  assert.equal(stats.steps['2'],1);assert.equal(stats.sources.google.booking_submit_success,1);assert.equal(stats.totals.design_inquiry_click,1);
  assert.equal(stats.outcomes.length,1);assert.equal(stats.outcomes[0].confirmed,4);
  assert.ok(!fs.readFileSync(path.join(dir,'events.ndjson'),'utf8').includes('PRIVATE'));
 }finally{server.kill();await new Promise(r=>server.once('close',r));fs.rmSync(dir,{recursive:true,force:true});}
});
