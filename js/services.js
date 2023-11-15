let consultationBtn = document.querySelector('.services-info-top__button');
let popap = document.getElementById('popup');
let formClose = document.querySelector('.form__cross');
let formSend = document.querySelector('.form__button');

consultationBtn.addEventListener('click', () => {
    popap.classList.add('form-popup--active')
});

formClose.addEventListener('click', () => {
    popap.classList.remove('form-popup--active')
});

formSend.addEventListener('click', () => {
    popap.classList.remove('form-popup--active')
});