/* hcf-booking-upgrade-20261014-r3 · https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/ */
(function () {
  'use strict';
  // Resolved from the website's existing https://lin.ee/7lidUv0 link.
  var ACCOUNT = '@228pffia';
  var PROFILE = 'https://line.me/R/ti/p/' + encodeURIComponent(ACCOUNT);
  // Conservative handoff limit, not a LINE promise. Long answers remain complete for copying.
  var MAX_HANDOFF_URL = 7000;
  function wellFormed(value) {
    return String(value).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, function (s) { return s.length === 2 ? s : '\uFFFD'; });
  }
  function build(fields, device, receiptId) {
    var lines = ['【HCF 體驗課需求】'];
    if (/^[a-z0-9]{10,40}$/.test(receiptId || '')) lines.push('收件編號：' + receiptId);
    Object.entries(fields).forEach(function (entry) {
      if (entry[0].charAt(0) === '_') return;
      var value = Array.isArray(entry[1]) ? entry[1].join('、') : String(entry[1] == null ? '' : entry[1]);
      if (value.trim()) lines.push(entry[0].replace(/_/g, '｜') + '：' + value.trim());
    });
    lines.push('請教練協助確認課程與時段，謝謝。');
    return fromMessage(lines.join('\n\n'), device);
  }
  function fromMessage(text, device) {
    var message = wellFormed(text);
    var draftURL = 'https://line.me/R/oaMessage/' + encodeURIComponent(ACCOUNT) + '/?' + encodeURIComponent(message);
    var mobile = /Android|iPhone|iPad|iPod/i.test(device.userAgent || '') || (device.platform === 'MacIntel' && device.maxTouchPoints > 1);
    var reason = !mobile ? 'desktop' : draftURL.length > MAX_HANDOFF_URL ? 'long' : 'draft';
    var receipt = message.match(/(?:^|\n)收件編號：([a-z0-9]{10,40})(?:\n|$)/);
    return { receiptId: receipt ? receipt[1] : '', profileURL: PROFILE, message: message, url: reason === 'draft' ? draftURL : PROFILE, autoOpen: reason === 'draft', reason: reason };
  }
  var RECEIPT_KEY = 'hcf.booking.line.receipt.v1', MAX_AGE = 30 * 60 * 1000;
  function save(storage, message, now) {
    try { storage.setItem(RECEIPT_KEY, JSON.stringify({ at: now, message: message })); return true; } catch (_) { return false; }
  }
  function clear(storage) { try { storage.removeItem(RECEIPT_KEY); } catch (_) {} }
  function restore(storage, now, device) {
    try {
      var item = JSON.parse(storage.getItem(RECEIPT_KEY));
      if (!item) return null;
      if (!Number.isFinite(item.at) || now < item.at || now - item.at >= MAX_AGE || typeof item.message !== 'string' || !item.message.startsWith('【HCF 體驗課需求】')) { clear(storage); return null; }
      return fromMessage(item.message, device);
    } catch (_) { clear(storage); return null; }
  }
  window.HCFBookingLine = { build: build, save: save, restore: restore, clear: clear };
})();
