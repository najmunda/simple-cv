//Hamburger Menu on small width screen

let menuButton = document.querySelector('.menu-button');
let closeMenuButton = document.querySelector('.close-menu-button');
let nav = document.querySelector("nav");
windowX = window.matchMedia("(min-width: 600px)")

menuButton.addEventListener('click', function() {
    nav.style.display = 'unset';
    nav.classList.add('nav-full');
    closeMenuButton.style.display = 'unset'
    menuButton.style.display = 'none';
});

closeMenuButton.addEventListener('click', function() {
    nav.style.display = 'none';
    nav.classList.remove('nav-full');
    closeMenuButton.style.display = 'none'
    menuButton.style.display = 'unset';
});

windowX.addEventListener('change', function() {
    if (windowX.matches) {
        nav.style.display = 'unset';
        nav.classList.remove('nav-full');
        menuButton.style.display = 'none';
        closeMenuButton.style.display = 'none';
    } else {
        nav.style.display = 'none';
        menuButton.style.display = 'unset';
        closeMenuButton.style.display = 'none';
    }
});