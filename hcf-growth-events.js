/* Fixed event names only. Never collect form answers, chat text, receipt IDs or URL queries. */
(function () {
  'use strict';
  if (window.hcfGrowthTrack) return;
  var names = new Set(['shark_guide_start','shark_guide_complete','shark_booking_click','shark_minimize','booking_prefill','booking_start','booking_step_view','booking_step_complete','booking_step_leave','booking_edit','booking_submit_success','booking_submit_failure','booking_line_open','booking_copy','booking_entry','first_visit_view','first_visit_video','design_case_view','design_case_entry','design_inquiry_click']);
  var local = !['www.hsinchucombat.com','hsinchucombat.com'].includes(location.hostname);
  var source = 'direct';
  try {
    var prior = sessionStorage.getItem('hcf-entry-source');
    var ref = document.referrer ? new URL(document.referrer).hostname : '';
    if (prior && /^(direct|google|instagram|facebook|youtube|threads|referral)$/.test(prior)) source = prior;
    else {
      source = /(^|\.)google\./.test(ref) ? 'google' : /(^|\.)instagram\.com$/.test(ref) ? 'instagram' : /(^|\.)(facebook\.com|fb\.com)$/.test(ref) ? 'facebook' : /(^|\.)youtube\.com$/.test(ref) ? 'youtube' : /(^|\.)threads\.(net|com)$/.test(ref) ? 'threads' : ref && ref !== location.hostname ? 'referral' : 'direct';
      sessionStorage.setItem('hcf-entry-source', source);
    }
  } catch (_) {}
  window.hcfGrowthTrack = function (name, data) {
    if (!names.has(name)) return;
    data = data || {};
    var safe = {version:'20261027', source:source, page:location.pathname.replace(/[^a-zA-Z0-9/_\-.]/g,'').slice(0,90)};
    if (Number.isInteger(data.step) && data.step >= 1 && data.step <= 4) safe.step = data.step;
    if (['manual','automatic'].includes(data.mode)) safe.mode = data.mode;
    if (['beginner','cardio','intermediate','private'].includes(data.course)) safe.course = data.course;
    if (local) { window.HCFGrowthDebug = window.HCFGrowthDebug || []; window.HCFGrowthDebug.push({name:name,params:safe}); return; }
    window.dataLayer = window.dataLayer || [];
    function tag(){window.dataLayer.push(arguments);}
    tag('event',name,safe);
    try {
      var payload = JSON.stringify({name:name,params:safe});
      var endpoint = 'https://hcf-admin.onrender.com/api/track';
      if (!navigator.sendBeacon || !navigator.sendBeacon(endpoint,payload)) fetch(endpoint,{method:'POST',body:payload,keepalive:true}).catch(function(){});
    } catch (_) {}
  };
  document.addEventListener('click',function(e){
    var a = e.target.closest('a[href]'); if (!a) return;
    var u; try {u=new URL(a.href);} catch(_){return;}
    var path = u.pathname.replace(/\.html$/,'').replace(/\/$/,'');
    if (u.origin === location.origin && path === '/booking') window.hcfGrowthTrack('booking_entry');
    if (u.origin === location.origin && path === '/website-design-case') window.hcfGrowthTrack('design_case_entry');
    if (u.hostname === 'www.hcfvisuallab.com' && path === '/diagnosis') window.hcfGrowthTrack('design_inquiry_click');
  });
  var p = location.pathname.replace(/\.html$/,'').replace(/\/$/,'');
  if (p === '/first-time-muay-thai-guide') window.hcfGrowthTrack('first_visit_view');
  if (p === '/website-design-case') window.hcfGrowthTrack('design_case_view');
})();
