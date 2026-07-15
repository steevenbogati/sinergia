/* ============================================================
   SINERGIA MED — modal.js
   Modal de lanzamiento, banner cookies
   ============================================================ */
(function () {
  'use strict';

  // --- Modal de lanzamiento / novedad (solo existe en index) ---
  var modal = document.getElementById('modal-novedad');
  var closeBtn = document.getElementById('modal-close');

  if (modal && closeBtn) {
    var openModal = function () {
      if (!sessionStorage.getItem('modal_shown')) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    };

    var closeModal = function () {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      sessionStorage.setItem('modal_shown', '1');
    };

    setTimeout(openModal, 3000);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });
  }

  // --- Banner cookies ---
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');

  if (cookieBanner && cookieAccept) {
    if (sessionStorage.getItem('cookies_ok')) {
      cookieBanner.style.display = 'none';
    }
    cookieAccept.addEventListener('click', function () {
      cookieBanner.style.display = 'none';
      sessionStorage.setItem('cookies_ok', '1');
    });
  }
})();
