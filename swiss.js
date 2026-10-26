(function () {
  "use strict";
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }
  var tb = document.getElementById("theme-btn");
  function paint() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (tb) { tb.textContent = dark ? "Light" : "Dark"; tb.setAttribute("aria-pressed", dark ? "true" : "false"); }
  }
  paint();
  if (tb) tb.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
  var top = document.getElementById("totop");
  if (top) top.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
})();
