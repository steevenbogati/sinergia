/* ============================================================
   SINERGIA MED — main.js
   Init, smooth scroll, lazy load
   ============================================================ */
(function () {
  'use strict';

  // El desplazamiento suave lo da CSS (html { scroll-behavior: smooth })
  // y el offset bajo el header fijo lo da scroll-padding-top.
  // Aquí solo se evita el salto al inicio de los links placeholder href="#".
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  // Lazy load nativo: refuerzo con decodificación asíncrona
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    img.decoding = 'async';
  });
})();
