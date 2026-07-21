/* ============================================================
   SINERGIA MED — carousel.js
   Carrusel de casos: autoplay, prev/next, dots, swipe
   ============================================================ */
(function () {
  'use strict';

  var carousel = document.getElementById('carousel-casos');
  if (!carousel) return;

  var track = document.getElementById('carousel-track');
  var dotsWrap = document.getElementById('carousel-dots');
  var btnPrev = carousel.querySelector('.carousel__btn--prev');
  var btnNext = carousel.querySelector('.carousel__btn--next');
  var slides = Array.prototype.slice.call(track.children);

  var currentIndex = 0;
  var slidesVisible = 3;
  var autoplayTimer = null;
  var AUTOPLAY_MS = 2500;

  function getSlidesVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, slides.length - slidesVisible);
  }

  function goTo(index) {
    var max = maxIndex();
    if (index < 0) index = max;        // loop hacia atrás
    else if (index > max) index = 0;   // loop hacia adelante
    currentIndex = index;
    track.style.transform = 'translateX(-' + (currentIndex * (100 / slidesVisible)) + '%)';
    updateDots();
  }

  function prev() { goTo(currentIndex - 1); }
  function next() { goTo(currentIndex + 1); }

  // Dots
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (var i = 0; i <= maxIndex(); i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Ir al caso ' + (i + 1));
      (function (idx) {
        dot.addEventListener('click', function () {
          goTo(idx);
          restartAutoplay();
        });
      })(i);
      dotsWrap.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }
  function restartAutoplay() {
    startAutoplay();
  }

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  // Flechas
  btnPrev.addEventListener('click', function () { prev(); restartAutoplay(); });
  btnNext.addEventListener('click', function () { next(); restartAutoplay(); });

  // Touch / swipe
  var touchStartX = 0;
  track.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    var delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    startAutoplay();
  }, { passive: true });

  // Resize: recalcular slides visibles
  function applyLayout() {
    var visible = getSlidesVisible();
    if (visible !== slidesVisible) {
      slidesVisible = visible;
      track.style.setProperty('--slides-visible', slidesVisible);
      if (currentIndex > maxIndex()) currentIndex = maxIndex();
      buildDots();
      goTo(currentIndex);
    }
  }

  window.addEventListener('resize', applyLayout);

  // Init
  slidesVisible = getSlidesVisible();
  track.style.setProperty('--slides-visible', slidesVisible);
  buildDots();
  goTo(0);
  startAutoplay();
})();
