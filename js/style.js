// function toggleMenu() {
//     console.log('Toggle menu function executed');

//     var menu = document.querySelector('.header ul.menu');
//     var body = document.body;

//     menu.classList.toggle('is-active');
//     body.classList.toggle('menu-active');

//     var logo = document.querySelector('.header h1.logo');
//     logo.classList.toggle('is-active');

//     var bar = document.querySelector('.header div.right .toggle-logo .bar');
//     var close = document.querySelector('.header div.right .toggle-logo .close');

//     var whiteImg = document.querySelector('.header img.white');
//     var blackImg = document.querySelector('.header img.black');

//     if (menu.classList.contains('is-active')) {
//         bar.style.display = 'none';
//         close.style.display = 'block';
//         body.style.overflow = 'hidden';

//         // Hide white image and show black image
//         whiteImg.style.display = 'none';
//         blackImg.style.display = 'block';
//     } else {
//         bar.style.display = 'block';
//         close.style.display = 'none';
//         body.style.overflow = 'auto';

//         // Hide black image and show white image
//         whiteImg.style.display = 'block';
//         blackImg.style.display = 'none';
//     }
// }



document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('header ul.items');
    var hamburgerButton = document.querySelector('header .log-button a.button');

    function toggleMenu() {
        menu.classList.toggle('is-active');
    }

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', function () {
            toggleMenu();
        });
    }
});
