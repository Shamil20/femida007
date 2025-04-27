const burger = document.getElementById('burger');
const menu = document.querySelector('.header-list');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});