import './reset.css'
import './styles/main.scss';


const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const burgerMenu = document.getElementById('burger');
burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
    burgerMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
    closeMenu.style.display = 'none';
    burgerMenu.style.display = 'block';
});

