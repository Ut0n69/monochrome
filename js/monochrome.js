"use strict";

// humberger menu
document.querySelector(".hbg-menu").addEventListener("click", function () {
  document.querySelector(".hbg-menu .hbg").classList.toggle("active");
}, false);

document.querySelector(".hbg-menu-spin").addEventListener("click", function () {
  document.querySelector(".hbg-menu-spin .hbg").classList.toggle("active");
}, false);

document.querySelector(".hbg-menu-arrow-left").addEventListener("click", function () {
  document.querySelector(".hbg-menu-arrow-left .hbg").classList.toggle("active");
}, false);

document.querySelector(".hbg-menu-arrow-right").addEventListener("click", function () {
  document.querySelector(".hbg-menu-arrow-right .hbg").classList.toggle("active");
}, false);