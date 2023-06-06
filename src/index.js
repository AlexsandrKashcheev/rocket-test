import './reset.css'
import './styles/main.scss';


let position = 0;
let count = 1;
const slidesToShow = 1;
const slidesToScroll = 1;
const checkUpContainer = document.querySelector('.check-up__container');
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const currentItem = document.querySelector('.current');
const quantityItem = document.querySelector('.quantity');

const setCurrentPosition = () => {
    currentItem.innerHTML = `${count}`;
    quantityItem.innerHTML = `${itemsCount}`;
}

setCurrentPosition();

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

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});


btnRight.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    count++;
    setCurrentPosition();
    setPosition();
    checkBtns();
});

btnLeft.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;
    count -= slidesToScroll;
    setCurrentPosition();
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnRight.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();