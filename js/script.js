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

div.insertAdjacentElement('beforebegin', '<h2>Hello</h2>');