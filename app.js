/* =============================================================
   LIQUID DISPATCH to interactions engine (vanilla, dependency-free)
   ============================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };

  /* ---- Mobile menu ---- */
  var toggle = $('#menu-toggle'), menu = $('#mobile-menu');
  if (toggle) {
    var setMenu = function (open) {
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
      if (menu) menu.setAttribute('aria-hidden', !open);
    };
    toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
    if (menu) $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---- Nav state + scroll progress ---- */
  var nav = $('#top-nav'), prog = $('#progress');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 24);
    if (prog) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Reveal on scroll ---- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in', 'visible'); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    $$('.reveal, .reveal-stagger, .reveal-on-scroll').forEach(function (el) { io.observe(el); });

    /* ---- Fill outlined display words ---- */
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('fill'); io2.unobserve(e.target); } });
    }, { threshold: 0.55 });
    $$('.stroke').forEach(function (el) { io2.observe(el); });

    /* ---- Animated counters ---- */
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, end = parseFloat(el.getAttribute('data-count')), dur = 1400, t0 = null;
        var suffix = el.getAttribute('data-suffix') || '';
        function step(ts) {
          if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1);
          var eased = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          el.textContent = Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(step); else el.textContent = end + suffix;
        }
        requestAnimationFrame(step); cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  } else {
    $$('.reveal, .reveal-stagger, .reveal-on-scroll').forEach(function (el) { el.classList.add('in', 'visible'); });
  }

  if (reduce) return; /* skip continuous motion for reduced-motion users */

  /* ---- Scroll + mouse parallax ---- */
  var px = $$('[data-parallax]');
  var mp = $$('[data-mouse]');
  var ticking = false, mx = 0, my = 0;
  function frame() {
    var y = window.scrollY || 0;
    px.forEach(function (el) {
      var s = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      el.style.transform = 'translate3d(0,' + (-(y * s)).toFixed(1) + 'px,0)';
    });
    mp.forEach(function (el) {
      var s = parseFloat(el.getAttribute('data-mouse')) || 12;
      el.style.transform = 'translate3d(' + (mx * s).toFixed(1) + 'px,' + (my * s).toFixed(1) + 'px,0)';
    });
    ticking = false;
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  if (px.length) window.addEventListener('scroll', req, { passive: true });
  if (mp.length && fine) {
    window.addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth - 0.5); my = (e.clientY / window.innerHeight - 0.5); req();
    }, { passive: true });
  }

  if (!fine) return; /* pointer-fine enhancements below */

  /* ---- Magnetic buttons ---- */
  $$('[data-magnetic]').forEach(function (el) {
    var str = parseFloat(el.getAttribute('data-magnetic')) || 0.35;
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * str).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * str).toFixed(1) + 'px)';
    });
    el.addEventListener('mouseleave', function () { el.style.transform = 'translate(0,0)'; });
  });

  /* ---- 3D tilt cards ---- */
  $$('[data-tilt]').forEach(function (el) {
    var max = parseFloat(el.getAttribute('data-tilt')) || 8;
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var a = (e.clientX - r.left) / r.width - 0.5, b = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', (a * max).toFixed(2) + 'deg');
      el.style.setProperty('--rx', (-b * max).toFixed(2) + 'deg');
    });
    el.addEventListener('mouseleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });

  /* ---- Spotlight cards ---- */
  $$('.spot').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
