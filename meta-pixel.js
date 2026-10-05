// Meta Pixel (Facebook/Instagram-Anzeigen). Lädt erst NACH Einwilligung im
// Cookie-Banner (mv-consent = "granted") – anders als Google gibt es bei Meta
// keinen cookielosen Modus, also wird ohne Einwilligung gar nichts geladen.
// Auf /danke/ wird zusätzlich das Standard-Ereignis "Lead" gesendet.
(function () {
  var PIXEL_ID = "2663035617545370"; // Datensatz "movero-sensor.de", Werbekonto movero (Portfolio Yaico GmbH) – leer = Pixel aus

  function load() {
    if (!PIXEL_ID || window.fbq) return;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
    if (location.pathname.indexOf("/danke") === 0) fbq("track", "Lead");
  }

  var c = null;
  try { c = localStorage.getItem("mv-consent"); } catch (e) {}
  if (c === "granted") load();
  window.addEventListener("mv-consent", function (e) { if (e.detail === "granted") load(); });
})();
