const hamburgerButtonElement = document.querySelector('#hamburger');
const hamburgerButtonElement2 = document.querySelector('#hamburger2');
const drawerElement = document.querySelector('#drawer');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

hamburgerButtonElement2.addEventListener('click', event => {
    drawer.classList.remove('open');
});