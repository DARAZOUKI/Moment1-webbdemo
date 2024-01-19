"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const navMenuEl = document.getElementById("nav-menu");

    const style = window.getComputedStyle(navMenuEl);

    navMenuEl.style.display = style.display === "none" ? "block" : "none";
  }
});
