/* ============================================================
   SINERGIA MED — layout.js
   Header + footer + elementos flotantes compartidos.
   Se inyectan en todas las páginas desde un solo lugar, para que
   el menú sea idéntico y editable en un único archivo.

   Para cambiar el número de WhatsApp real, edita WA_LINK aquí abajo.
   ============================================================ */
(function () {
  'use strict';

  // Datos de contacto (edítalos aquí una sola vez para todo el sitio)
  var WA_NUMBER = '593984229440';
  var WA_TEXT   = 'Hola 👋, quiero información sobre SINERGIA MED.';
  // UTM para rastrear los clics del botón de WhatsApp (se leen con Google Analytics)
  var WA_UTM    = 'utm_source=sitio_web&utm_medium=boton_whatsapp&utm_campaign=contacto';
  var WA_LINK   = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_TEXT) + '&' + WA_UTM;
  var IG_LINK = 'https://www.instagram.com/sinergiamed.ec';
  var FB_LINK = 'https://www.facebook.com/sinergiamed.ec';
  var TT_LINK = 'https://www.tiktok.com/@sinergiamed.ec';
  var MAPS_LINK = 'https://maps.app.goo.gl/xpyZshiGyJ34z3Dy6';

  var activePage = document.body.getAttribute('data-page') || '';

  function cls(page) { return activePage === page ? ' active' : ''; }

  /* ---- SVGs de redes ---- */
  var svgInstagram = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
  var svgFacebook = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
  var svgTiktok = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';
  var svgYoutube = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>';
  var svgWhatsapp = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  /* ---- HEADER ---- */
  var headerHTML =
    '<div class="header-top">' +
      '<div class="container header-top__inner">' +
        '<div class="header-social">' +
          '<a href="' + IG_LINK + '" target="_blank" rel="noopener" aria-label="Instagram" data-red="instagram" class="social-icon">' + svgInstagram + '</a>' +
          '<a href="' + FB_LINK + '" target="_blank" rel="noopener" aria-label="Facebook" data-red="facebook" class="social-icon">' + svgFacebook + '</a>' +
          '<a href="' + TT_LINK + '" target="_blank" rel="noopener" aria-label="TikTok" data-red="tiktok" class="social-icon">' + svgTiktok + '</a>' +
        '</div>' +
        '<a href="' + WA_LINK + '" class="btn btn-primary header-cta" target="_blank" rel="noopener">Agenda tu cita</a>' +
      '</div>' +
    '</div>' +
    '<nav id="main-nav" class="main-nav" aria-label="Navegación principal">' +
      '<div class="container main-nav__inner">' +
        '<a href="index.html" class="nav-logo">' +
          '<img src="assets/logos/logo-oscuro.svg" alt="SINERGIA MED - Medical Biohacking Center" width="180" />' +
        '</a>' +
        '<ul class="nav-menu" id="nav-menu">' +
          '<li class="nav-item"><a href="index.html" class="nav-link' + cls('inicio') + '">Inicio</a></li>' +

          '<li class="nav-item has-dropdown">' +
            '<a href="servicios.html" class="nav-link' + cls('servicios') + '">Servicios <span class="nav-arrow">▾</span></a>' +
            '<ul class="dropdown">' +
              '<li class="has-sub">' +
                '<a href="servicios.html#especializaciones" class="dropdown-link">Especializaciones <span class="nav-arrow">›</span></a>' +
                '<ul class="sub-dropdown">' +
                  '<li><a href="columna.html">Columna</a></li>' +
                  '<li><a href="hombro.html">Hombro</a></li>' +
                  '<li><a href="rodilla.html">Rodilla</a></li>' +
                  '<li><a href="cadera.html">Cadera</a></li>' +
                  '<li><a href="codo.html">Codo</a></li>' +
                  '<li><a href="mano.html">Mano</a></li>' +
                  '<li><a href="tobillo.html">Tobillo</a></li>' +
                  '<li><a href="pie.html">Pie</a></li>' +
                '</ul>' +
              '</li>' +
              '<li class="has-sub">' +
                '<a href="servicios.html#lesiones" class="dropdown-link">Lesiones Deportivas <span class="nav-arrow">›</span></a>' +
                '<ul class="sub-dropdown">' +
                  '<li><a href="lesiones-oseas.html">Lesiones óseas</a></li>' +
                  '<li><a href="lesiones-musculares.html">Lesiones musculares</a></li>' +
                  '<li><a href="lesiones-articulares.html">Lesiones articulares</a></li>' +
                  '<li><a href="lesiones-tendinosas.html">Lesiones tendinosas</a></li>' +
                '</ul>' +
              '</li>' +
              '<li><a href="servicios.html#medicina-deportiva" class="dropdown-link">Medicina deportiva</a></li>' +
              '<li><a href="servicios.html#traumatologia" class="dropdown-link">Traumatología</a></li>' +
            '</ul>' +
          '</li>' +

          '<li class="nav-item has-dropdown">' +
            '<a href="tecnologia.html" class="nav-link' + cls('tecnologia') + '">Tecnología <span class="nav-arrow">▾</span></a>' +
            '<ul class="dropdown">' +
              '<li><a href="tecnologia.html#camara-hiperbarica" class="dropdown-link">Cámara Hiperbárica</a></li>' +
              '<li><a href="tecnologia.html#criogenica" class="dropdown-link">Criogénica (Crioterapia)</a></li>' +
              '<li><a href="tecnologia.html#laser-infrarrojo" class="dropdown-link">Láser Infrarrojo</a></li>' +
              '<li><a href="tecnologia.html#fisioterapia" class="dropdown-link">Fisioterapia Avanzada</a></li>' +
              '<li><a href="tecnologia.html#consultorio" class="dropdown-link">Consultorio Médico</a></li>' +
            '</ul>' +
          '</li>' +

          '<li class="nav-item"><a href="blog.html" class="nav-link' + cls('blog') + '">Blog</a></li>' +
          '<li class="nav-item"><a href="quienes-somos.html" class="nav-link' + cls('quienes') + '">Quiénes Somos</a></li>' +
          '<li class="nav-item"><a href="contacto.html" class="nav-link' + cls('contacto') + '">Contacto</a></li>' +
        '</ul>' +
        '<button class="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>';

  /* ---- FOOTER ---- */
  var footerHTML =
    '<div class="footer-main">' +
      '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="index.html"><img src="assets/logos/logo-claro.svg" alt="SINERGIA MED" width="160" loading="lazy" /></a>' +
          '<p class="footer-tagline">Recupera tu movilidad y tu bienestar con la precisión de la tecnología médica y la experiencia de nuestros especialistas.</p>' +
          '<div class="footer-social">' +
            '<a href="' + IG_LINK + '" target="_blank" rel="noopener" aria-label="Instagram" data-red="instagram" class="footer-social__icon">' + svgInstagram + '</a>' +
            '<a href="' + FB_LINK + '" target="_blank" rel="noopener" aria-label="Facebook" data-red="facebook" class="footer-social__icon">' + svgFacebook + '</a>' +
            '<a href="' + TT_LINK + '" target="_blank" rel="noopener" aria-label="TikTok" data-red="tiktok" class="footer-social__icon">' + svgTiktok + '</a>' +
            '<a href="' + WA_LINK + '" aria-label="WhatsApp" class="footer-social__icon" target="_blank" rel="noopener">' + svgWhatsapp + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 class="footer-col__title">EXPLORA</h4>' +
          '<ul class="footer-list">' +
            '<li><a href="index.html">Inicio</a></li>' +
            '<li><a href="servicios.html">Servicios</a></li>' +
            '<li><a href="tecnologia.html">Tecnología</a></li>' +
            '<li><a href="blog.html">Blog</a></li>' +
            '<li><a href="quienes-somos.html">Quiénes Somos</a></li>' +
            '<li><a href="contacto.html">Contacto</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 class="footer-col__title">CONTACTOS</h4>' +
          '<ul class="footer-list">' +
            '<li><a href="' + WA_LINK + '" target="_blank" rel="noopener">📞 +593 98 422 9440</a></li>' +
            '<li><a href="mailto:cindyperez@sinergiamed.ec">✉️ cindyperez@sinergiamed.ec</a></li>' +
            '<li><a href="' + IG_LINK + '" target="_blank" rel="noopener" data-red="instagram">📷 @sinergiamed.ec</a></li>' +
            '<li><a href="' + MAPS_LINK + '" target="_blank" rel="noopener">📍 Río Guayllabamba, Ambato — Ecuador</a></li>' +
            '<li>🕘 Lun–Vie 9:00–18:00 · Sáb 9:00–13:00</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<div class="container"><p>Copyright © 2026 SINERGIA MED | Medical Biohacking Center · <a href="privacidad.html">Política de Privacidad</a></p></div>' +
    '</div>';

  /* ---- FLOTANTES: cookies + WhatsApp ---- */
  var floatingHTML =
    '<div class="cookie-banner" id="cookie-banner">' +
      '<p>Utilizamos cookies para mejorar tu experiencia en SINERGIA MED. Consulta más en nuestra <a href="privacidad.html">Política de Privacidad</a>.</p>' +
      '<button class="btn btn-primary btn--sm" id="cookie-accept">Aceptar</button>' +
    '</div>' +
    '<a href="' + WA_LINK + '" class="wa-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    '</a>';

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  var headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = headerHTML;

  var footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = footerHTML;

  mount('floating-mount', floatingHTML);

  /* --- Aplica UTM + mensaje a TODOS los botones de WhatsApp del sitio
         (flotante, header, footer y los "Agenda tu cita" de cada página) --- */
  Array.prototype.forEach.call(
    document.querySelectorAll('a[href^="https://wa.me/"], a[href^="http://wa.me/"]'),
    function (a) { a.setAttribute('href', WA_LINK); }
  );

  /* --- Popup de cookies: aparece hasta que se acepta, y lo recuerda --- */
  (function () {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    var KEY = 'sinergia_cookies_ok';
    var accepted = null;
    try { accepted = localStorage.getItem(KEY); } catch (e) {}
    if (!accepted) {
      document.body.classList.add('cookie-open');
      setTimeout(function () { banner.classList.add('is-visible'); }, 700);
    }
    var btn = document.getElementById('cookie-accept');
    if (btn) {
      btn.addEventListener('click', function () {
        try { localStorage.setItem(KEY, '1'); } catch (e) {}
        banner.classList.remove('is-visible');
        document.body.classList.remove('cookie-open');
      });
    }
  })();

  /* --- Desplazar a #ancla con el offset del header fijo ---------
     El header se inyecta por JS, así que el salto nativo del navegador
     queda descuadrado; reposicionamos manualmente tras inyectarlo. */
  function scrollToHash(smooth) {
    if (location.hash.length <= 1) return;
    var target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch (e) { target = null; }
    if (!target) return;
    var header = document.getElementById('site-header');
    var offset = (header ? header.offsetHeight : 0) + 8;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: smooth ? 'smooth' : 'auto' });
  }

  if (location.hash.length > 1) {
    // rAF: tras el reflow por la inyección del header; load: tras imágenes
    window.requestAnimationFrame(function () { scrollToHash(false); });
    window.addEventListener('load', function () { scrollToHash(false); });
  }
  // Clics a #anclas dentro de la misma página
  window.addEventListener('hashchange', function () { scrollToHash(true); });
})();
