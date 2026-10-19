/* HCF VISUAL LAB promotion shared by public content pages. */
(function () {
  'use strict';
  var pagePath = location.pathname.replace(/\.html$/, '').replace(/\/$/, '');
  var pageName = pagePath.split('/').pop() || 'home';
  var formPages = ['booking', 'survey', 'status', 'complaint', 'trial-review', 'survey-trial-followup', 'group-feedback'];
  if (formPages.indexOf(pageName) !== -1 || document.getElementById('hcfvl-promo') || document.getElementById('hcfvl-site-promo')) return;

  function link(path, placement) {
    return 'https://www.hcfvisuallab.com' + path + '?utm_source=hsinchucombat&utm_medium=referral&utm_campaign=brand_cross_promo&utm_content=' + encodeURIComponent(pagePath.replace(/^\//, '').replace(/\//g, '_') + '_' + placement);
  }
  function anchor(label, className, placement, path) {
    var a = document.createElement('a');
    a.className = className;
    a.textContent = label;
    a.href = link(path || '/', placement);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }
  function mount() {
    if (document.getElementById('hcfvl-promo') || document.getElementById('hcfvl-site-promo')) return;
    var nav = document.querySelector('header.nav');
    var footer = document.querySelector('#finale, footer.ft, body > footer');
    if (!nav && !footer) return;
    document.body.classList.add('hcfvl-site-page');
    if (nav) {
      nav.classList.add('hcfvl-site-nav');
      var desktop = nav.querySelector('.nav-links');
      var burger = nav.querySelector('.nav-burger');
      var menu = nav.querySelector('.mnav');
      if (desktop) desktop.insertBefore(anchor('品牌設計 ↗', 'hcfvl-site-nav-link', 'nav_design'), desktop.querySelector('.nav-cta'));
      if (burger) burger.parentNode.insertBefore(anchor('品牌設計 ↗', 'hcfvl-site-nav-link hcfvl-site-mobile-link', 'mobile_header_design'), burger);
      if (menu) menu.insertBefore(anchor('HCF VISUAL LAB｜品牌設計 ↗', 'hcfvl-site-menu-link', 'mobile_menu_design'), menu.querySelector('.cta'));
    }
    if (!footer) return;
    var promo = document.createElement('section');
    promo.id = 'hcfvl-site-promo';
    promo.setAttribute('aria-labelledby', 'hcfvl-site-title');
    promo.innerHTML = '<div class="hcfvl-site-inner">'
      + '<div class="hcfvl-site-brand"><img src="/assets/hcf-mark.webp" width="600" height="241" alt="HCF VISUAL LAB" loading="lazy" decoding="async"><span>HCF VISUAL LAB</span></div>'
      + '<div class="hcfvl-site-copy"><p class="hcfvl-site-kicker">HCF 自有設計品牌｜品牌成長夥伴</p><h2 id="hcfvl-site-title">免費品牌健檢</h2><p class="hcfvl-site-desc">發現機會・優化方向・打造更強的品牌</p></div>'
      + '<div class="hcfvl-site-actions"></div></div>'
      + '<svg class="hcfvl-site-waves" viewBox="0 0 1440 230" preserveAspectRatio="none" fill="none" aria-hidden="true"><defs><linearGradient id="hcfvl-site-spectrum" x2="1" y2="0"><stop stop-color="#26c1ff"/><stop offset=".3" stop-color="#6673ff"/><stop offset=".5" stop-color="#e58dff"/><stop offset=".7" stop-color="#ff298d"/><stop offset="1" stop-color="#ffd671"/></linearGradient></defs><g fill="url(#hcfvl-site-spectrum)"><path opacity=".13" d="M0 30C280-80 510 220 800 130C1100 30 1260-10 1440 50V230H0Z"/><path opacity=".25" d="M0 115C270-30 540 230 850 145C1140 50 1260 30 1440 100V170C1160 90 1030 220 780 192C430 150 220 55 0 195Z"/><path opacity=".16" d="M0 190C230 30 480 100 760 185C1040 265 1200 95 1440 140V230H0Z"/></g></svg>';
    var actions = promo.querySelector('.hcfvl-site-actions');
    actions.appendChild(anchor('立即預約健檢 →', 'hcfvl-site-primary', 'brand_check', '/diagnosis'));
    actions.appendChild(anchor('看看我們的設計作品 ↗', 'hcfvl-site-secondary', 'portfolio', '/works'));
    footer.parentNode.insertBefore(promo, footer);
    var credit = document.createElement('p');
    credit.className = 'hcfvl-site-credit';
    credit.appendChild(anchor('網站設計｜HCF VISUAL LAB ↗', '', 'footer_credit'));
    footer.appendChild(credit);
  }
  function init() {
    if (document.getElementById('hcfvl-site-styles')) return;
    var style = document.createElement('link');
    style.id = 'hcfvl-site-styles';
    style.rel = 'stylesheet';
    style.href = '/hcf-visual-lab.css?v=20261020';
    style.onload = mount;
    document.head.appendChild(style);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
