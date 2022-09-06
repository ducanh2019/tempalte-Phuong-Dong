const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.querySelector('.overlay');


const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
    overlayMenu.classList.toggle('active');
};


const collapseSubMenu = () => {
    navbarMenu.querySelector('.menu-dropdown.active .submenu').removeAttribute('style');
    navbarMenu.querySelector('.menu-dropdown.active').classList.remove('active');
};


const toggleSubMenu = (e) => {
    if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;


        if (menuDropdown.classList.contains('active')) {
            collapseSubMenu();
        } else {

            if (navbarMenu.querySelector('.menu-dropdown.active')) {
                collapseSubMenu();
            }

            menuDropdown.classList.add('active');
            const subMenu = menuDropdown.querySelector('.submenu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }
};

const resizeWindow = () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains('active')) {
            toggleMenu();
        }
        if (navbarMenu.querySelector('.menu-dropdown.active')) {
            collapseSubMenu();
        }
    }
};

burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
navbarMenu.addEventListener('click', toggleSubMenu);
window.addEventListener('resize', resizeWindow);

var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("topFunction()", 30);
    } else clearTimeout(scrollAnimation);
}