// Tag do Google (Google Ads AW-11220342294): mede visitas que chegam pelos anúncios.
// Fica em arquivo próprio porque a CSP do app não permite script inline.
(function () {
  var ID = 'AW-11220342294';
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', ID);
})();
