'use strict';

/*
1. Создайте цикл, который выведет в консоль цифры от 10 до 0
*/

for (let i = 10; i >= 0; i--) {
    console.log(i);
};

console.log('\n');

/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)

  Для Оксаны и ее друзей: также реализовать циклом while
  Рекоммендация: попробуйте метод .repeat()
*/

const outputString = ':)';
let result1 = '';

for (let i = 0; i < 5; i++) {
    result1 += outputString;
    console.log(result1);   
};

console.log('\n');

//Вариант 2

let result2 = '';

for (let i = 1; i <= 5; i++) {
    result2 = outputString.repeat(i);
    console.log(result2);
};

console.log('\n');

//Вариант 3

let iteration = 0;
let result3 = '';

while (iteration < 5) {
    result3 = outputString.repeat(iteration + 1);
    console.log(result3);
    iteration++;
};