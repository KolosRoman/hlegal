let burgerBtn = document.querySelector('.info-block__mobile');
let overlay = document.querySelector('.overlay');
let menu = document.querySelector('.mobile-nav');

burgerBtn.addEventListener('click', () => {
    overlay.classList.add('overlay--active');
    menu.classList.add('mobile-nav--active')
});

let closeBtn = document.querySelector('.mobile-nav__close');

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('overlay--active');
    menu.classList.remove('mobile-nav--active')
});



let tabButtons = document.querySelectorAll('.main-content__text');
let tabsContentItems = document.querySelectorAll('.tab-content__item')

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach( (btn) => {
            btn.classList.remove('main-content__text--active');
        })
        button.classList.add('main-content__text--active');
        tabsContentItems.forEach((block) => {
            block.classList.remove('tab-content__item--active');
        })
        tabsContentItems[index].classList.add('tab-content__item--active')
    })
});

let scrollBtn = document.getElementById("scroll-to-bottom");

console.log(scrollBtn);

scrollBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let tabsContainer = document.querySelector(".main-tabs");

    window.scrollTo ({
        top: tabsContainer.offsetTop,
        behavior: 'smooth'
    });
});