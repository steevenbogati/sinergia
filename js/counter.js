/* ============================================================
   SINERGIA MED — counter.js
   Contador animado con Intersection Observer
   ============================================================ */
(function () {
  'use strict';

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 2000;
    var steps = 60;
    var increment = target / steps;
    var current = 0;
    var timer = setInterval(function () {
      current = Math.min(current + increment, target);
      el.textContent = prefix + Math.floor(current).toLocaleString('es-ES');
      if (current >= target) clearInterval(timer);
    }, duration / steps);
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.contador-numero').forEach(function (el) {
    obs.observe(el);
  });
})();
