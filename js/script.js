'use strict';
// получение элементов из html
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), // тут псевдомассив
      circles = document.getElementsByClassName('circle'), // тут тоже
      hearts = document.querySelectorAll('.heart'), // и тут
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
// изменение стилей
box.style.backgroundColor = 'blue'; 
box.style.width = '500px';
// можно сделать как обычный css
box.style.cssText = 'background-color: pink; width: 100px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// перебор псевдомассива и применение стилей к элементам
hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});
// добавление html элементов через js
const div = document.createElement('div');
const text = document.createTextNode('тут был я');

div.classList.add('black');

//document.body.append(div); // добавляет в конец body блок div
wrapper.prepend(div); // добавляет в начало блока wrapper блок div
hearts[0].before(div); // добавляет 1й элемент hearts перед блоком div
hearts[1].after(div); // добавляет 2й элемент hearts после блока div

circles[0].remove(); // удаляет один блок circle вообще

hearts[0].replaceWith(circles[0]); // заменяет один блок другим

div.innerHTML = '<h1>Hello world</h1>'; // добавление html кода в блоки
//div.textContent = '<h1>Hello world</h1>'; // добавление текста в блоки, html не работает

// обработчики событий
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Click');
});

btn.addEventListener('mouseenter', (e) =>{
  console.log(e.target);
  console.log('hover');
});

btn.addEventListener('click', (e) =>{
  console.log(e.target);
  e.target.remove(); // удаляет элемент
});

const deleteElemement = function(e){
  console.log(e.target);
};

btn.removeEventListener('click', deleteElemement);

// отмена стандартного поведения браузера

const link = document.querySelector('a');

link.addEventListener('click', function(e) {
  e.preventDefault(); // отменяет стандартное поведение 
  console.log(e.target);
});

// ClassList и делегирование событий

const buttons = document.querySelectorAll('button'),
      buttonsBlock = document.querySelector('.buttons_block');

console.log(buttons[0].classList.add('btn_1')); // навешиваем класс на элемент
// Простой интерактив, навешиваем класс и если он есть убираем его
// Так же можно сделать с помощью buttons[2].classList.toggle('button_red');
buttons[2].addEventListener('click', () => {
  if (!buttons[2].classList.contains('button_red')) {
    buttons[2].classList.add('button_red');
  } else {
    buttons[2].classList.remove('button_red');
  }
});
// Делегирование событий с родительского блока его потомкам(кнопкам)
buttonsBlock.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'BUTTON') {
    console.log('hello');
  }  
});