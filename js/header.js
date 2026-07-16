/* ============================================================
   SINERGIA MED — header.js
   Sticky, hamburguesa, dropdowns móviles
   ============================================================ */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('nav-menu');

  // Sticky: sombra al hacer scroll
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburguesa: abre/cierra el panel móvil
  hamburger.addEventListener('click', function () {
    var open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  function closeMenu() {
    // Solo actuar si el panel está abierto — evita pisar el overflow
    // que gestionan otros componentes (p. ej. el banner de cookies).
    if (!navMenu.classList.contains('open')) return;
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });

  var isMobile = function () { return window.innerWidth < 768; };

  // Mobile: click en items con dropdown los expande (acordeón)
  document.querySelectorAll('.has-dropdown > .nav-link, .has-sub > .dropdown-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // En desktop, un padre con href real (p. ej. tecnologia.html) navega;
      // solo se bloquean los toggles href="#". En mobile siempre es acordeón.
      if (!isMobile()) {
        if (link.getAttribute('href') === '#') e.preventDefault();
        return;
      }
      e.preventDefault();
      var parent = link.parentElement;
      var wasOpen = parent.classList.contains('open');
      if (parent.classList.contains('has-dropdown')) {
        // Cerrar los demás dropdowns de primer nivel
        document.querySelectorAll('.has-dropdown').forEach(function (el) {
          if (el !== parent) el.classList.remove('open');
        });
      } else {
        // Sub-dropdown: cerrar hermanos
        parent.parentElement.querySelectorAll('.has-sub').forEach(function (el) {
          if (el !== parent) el.classList.remove('open');
        });
      }
      parent.classList.toggle('open', !wasOpen);
    });
  });

  // Mobile: cerrar el panel al tocar un link final (sin dropdown)
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!isMobile()) return;
      var parent = link.parentElement;
      if (parent.classList.contains('has-dropdown') || parent.classList.contains('has-sub')) return;
      closeMenu();
    });
  });

  // Al pasar a desktop, resetear el estado del menú móvil
  window.addEventListener('resize', function () {
    if (!isMobile()) {
      closeMenu();
      document.querySelectorAll('.has-dropdown.open, .has-sub.open').forEach(function (el) {
        el.classList.remove('open');
      });
    }
  });
})();
