let button1 = document.querySelector('.activ1');
let button2 = document.querySelector('.activ2');
let button3 = document.querySelector('.activ3');
let button4 = document.querySelector('.activ4');
let button5 = document.querySelector('.activ5');

button1.addEventListener('click', function (e) {
    e.preventDefault();
    button1.classList.add('menu__activ')
    button2.classList.remove('menu__activ')
    button3.classList.remove('menu__activ')
    button4.classList.remove('menu__activ')
    button5.classList.remove('menu__activ')
})

button2.addEventListener('click', function (e) {
    e.preventDefault();
    button1.classList.remove('menu__activ')
    button2.classList.add('menu__activ')
    button3.classList.remove('menu__activ')
    button4.classList.remove('menu__activ')
    button5.classList.remove('menu__activ')
})

button3.addEventListener('click', function (e) {
    e.preventDefault();
    button1.classList.remove('menu__activ')
    button2.classList.remove('menu__activ')
    button3.classList.add('menu__activ')
    button4.classList.remove('menu__activ')
    button5.classList.remove('menu__activ')
})

button4.addEventListener('click', function (e) {
    e.preventDefault();
    button1.classList.remove('menu__activ')
    button2.classList.remove('menu__activ')
    button3.classList.remove('menu__activ')
    button4.classList.add('menu__activ')
    button5.classList.remove('menu__activ')
})

button5.addEventListener('click', function (e) {
    e.preventDefault();
    button1.classList.remove('menu__activ')
    button2.classList.remove('menu__activ')
    button3.classList.remove('menu__activ')
    button4.classList.remove('menu__activ')
    button5.classList.add('menu__activ')
})