const hamburger = document.querySelector(".hamburger-icon");
const menuMobile = document.querySelector(".menu-layout");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hide");
  menuMobile.classList.toggle("menu-mobile");
});