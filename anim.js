/* ============================================================
   SINERGIA MED — anim.js
   Animaciones de entrada al hacer scroll.

   No hay que tocar el HTML: busca los elementos por selector y
   les aplica la clase .anim (definida en animations.css).

   SEGURIDAD ANTE TODO: el contenido nunca puede quedar invisible.
   - Las clases .anim se añaden sólo después de registrar los
     listeners; si algo falla antes, no se oculta nada.
   - Se usa getBoundingClientRect + scroll (soportado en todos los
     navegadores) en vez de IntersectionObserver, que en algunos
     entornos no llega a dispararse nunca.
   - Red de seguridad: si no se revela NINGÚN elemento (señal de
     que el mecanismo no funciona), se muestra todo.
   ============================================================ */
(function () {
  'use strict';

  // Si el usuario pide menos movimiento, no animamos nada.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* sel     = selector CSS
     v       = variante ('anim-left' | 'anim-right' | 'anim-zoom' | 'anim-fade')
     d       = retardo base en ms
     stagger = retardo extra por elemento (efecto cascada) */
  var TARGETS = [
    // Hero: entra al cargar, en cascada
    { sel: '.hero__eyebrow',       d: 0 },
    { sel: '.hero__title',         d: 120 },
    { sel: '.hero__subtitle',      d: 260 },
    { sel: '.hero__ctas',          d: 380 },
    { sel: '.hero__stats',         d: 480 },

    // Cabeceras y bloques de texto
    { sel: '.section-head' },
    { sel: '.section-title' },
    { sel: '.section-subtitle',    d: 100 },
    { sel: '.tecnologia-text' },
    { sel: '.banner-logro__inner' },
    { sel: '.banner-contador h2',  v: 'anim-zoom' },

    // Bloques a dos columnas: entran desde cada lado
    { sel: '.especialistas-text',  v: 'anim-left' },
    { sel: '.especialistas-side',  v: 'anim-right' },
    { sel: '.equipo-text',         v: 'anim-left' },
    { sel: '.equipo-img',          v: 'anim-right' },
    { sel: '.contact-info-col',    v: 'anim-left' },
    { sel: '.contact-map-col',     v: 'anim-right' },
    { sel: '.detail-media',        v: 'anim-zoom' },
    { sel: '.detail-body',         d: 120 },
    { sel: '.carousel',            v: 'anim-fade' },

    // CTA final
    { sel: '.page-cta h2' },
    { sel: '.page-cta p',          d: 100 },
    { sel: '.page-cta .btn',       d: 200 },

    // Artículo
    { sel: '.article-hero__cat',   d: 0 },
    { sel: '.article-hero__title', d: 120 },
    { sel: '.article-hero__lead',  d: 260 },
    { sel: '.article-hero__meta',  d: 360 },
    { sel: '.article-figure',      v: 'anim-zoom' },
    { sel: '.article-quote',       v: 'anim-left' },
    { sel: '.article-keybox',      v: 'anim-fade' },
    { sel: '.article-cta',         v: 'anim-fade' },

    // Tarjetas: aparecen en cascada dentro de su rejilla
    { sel: '.robot-card',   stagger: 90 },
    { sel: '.lesion-card',  stagger: 90 },
    { sel: '.chip',         stagger: 60 },
    { sel: '.blog-card',    stagger: 90 },
    { sel: '.feature-item', stagger: 110 },
    { sel: '.mvv-card',     stagger: 130 },
    { sel: '.team-card',    stagger: 130 },
    { sel: '.testi-card',   stagger: 110 }
  ];

  var MAX_PASOS = 5; // tope de la cascada, para que no se alargue de más

  try {
    // ---------- 1. Recolectar elementos ----------
    var items = [];
    var nodos = [];

    TARGETS.forEach(function (t) {
      var encontrados = document.querySelectorAll(t.sel);
      Array.prototype.forEach.call(encontrados, function (el, i) {
        if (nodos.indexOf(el) !== -1) return; // ya registrado por otro selector
        var retardo = t.d || 0;
        if (t.stagger) retardo += Math.min(i, MAX_PASOS) * t.stagger;
        items.push({ el: el, v: t.v || '', d: retardo });
        nodos.push(el);
      });
    });

    // Evita animar un elemento que ya está dentro de otro animado
    // (p. ej. .section-title dentro de .section-head): se vería doble movimiento.
    items = items.filter(function (it) {
      var p = it.el.parentElement;
      while (p) {
        if (nodos.indexOf(p) !== -1) return false;
        p = p.parentElement;
      }
      return true;
    });

    if (!items.length) return;

    var pendientes = items.slice();
    var revelados = 0;

    // ---------- 2. Revelar ----------
    function revelar(it) {
      revelados++;
      if (it.d) {
        setTimeout(function () { it.el.classList.add('anim--in'); }, it.d);
      } else {
        it.el.classList.add('anim--in');
      }
    }

    function revisar() {
      if (!pendientes.length) return;
      var alto = window.innerHeight || document.documentElement.clientHeight;
      var umbral = alto * 0.08; // debe asomar un poco antes de animar
      pendientes = pendientes.filter(function (it) {
        var r = it.el.getBoundingClientRect();
        var visible = r.top < (alto - umbral) && r.bottom > 0;
        if (visible) { revelar(it); return false; }
        return true;
      });
      if (!pendientes.length) limpiar();
    }

    var enCola = false;
    function alHacerScroll() {
      if (enCola) return;
      enCola = true;
      window.requestAnimationFrame(function () { enCola = false; revisar(); });
    }

    function limpiar() {
      window.removeEventListener('scroll', alHacerScroll);
      window.removeEventListener('resize', alHacerScroll);
    }

    // ---------- 3. Registrar listeners ANTES de ocultar nada ----------
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    window.addEventListener('resize', alHacerScroll);
    window.addEventListener('load', revisar);

    // ---------- 4. Ahora sí, aplicar el estado inicial (oculto) ----------
    items.forEach(function (it) {
      it.el.classList.add('anim');
      if (it.v) it.el.classList.add(it.v);
    });

    // Primera pasada: revela lo que ya está en pantalla (hero, etc.)
    revisar();

    // ---------- 5. Redes de seguridad ----------
    function mostrarTodoSinAnimar() {
      items.forEach(function (it) {
        it.el.classList.remove('anim', 'anim-left', 'anim-right', 'anim-zoom', 'anim-fade');
      });
      pendientes = [];
      limpiar();
    }

    // (a) Si el navegador NO pinta frames (compositor detenido, algunos
    //     webviews/entornos embebidos), las transiciones CSS no correrían
    //     y el contenido se quedaría en opacity:0 para siempre.
    //     Lo detectamos y renunciamos a animar: mejor sin efecto que invisible.
    var pintaFrames = false;
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(function () { pintaFrames = true; });
    }
    setTimeout(function () {
      if (!pintaFrames) mostrarTodoSinAnimar();
    }, 700);

    // (b) Si pasado un tiempo no se reveló NADA, algo falló: mostrar todo.
    setTimeout(function () {
      if (revelados === 0) mostrarTodoSinAnimar();
    }, 1800);

  } catch (e) {
    // Ante cualquier error, quitamos el estado oculto: se ve todo.
    Array.prototype.forEach.call(document.querySelectorAll('.anim'), function (el) {
      el.classList.remove('anim');
    });
  }
})();
