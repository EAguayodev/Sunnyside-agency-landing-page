const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('menu-layout');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('mobile-menu');
})