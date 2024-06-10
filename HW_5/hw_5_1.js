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

let outputString = ':)';

for (let i = 0; i < 5; i++) {
    console.log(outputString);
    outputString += ':)';
};

console.log('\n');

//Вариант 2

for (let i = 1; i <= 5; i++) {
    console.log(':)'.repeat(i));
};

//Вариант 3

console.log('\n');

let iteration = 0;

while (iteration < 5) {
    console.log(':)'.repeat(iteration+1));
    iteration++;
};