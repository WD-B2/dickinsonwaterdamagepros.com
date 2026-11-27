(function () {
  "use strict";
  var BP = 768;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var toggle = document.getElementById("mob-toggle");
  var closeBtn = document.getElementById("mob-close");
  if (!drawer || !overlay || !toggle) { return; }
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    if (drawer.classList.contains("open")) { closeMenu(); } else { openMenu(); }
  });
  overlay.addEventListener("click", closeMenu);
  if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
  window.addEventListener("resize", function () { if (window.innerWidth > BP) { closeMenu(); } });
  var links = drawer.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
})();
