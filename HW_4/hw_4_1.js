'use strict';

/*
1. Создать переменную "minAge" и присвоить ей значение 18
2. Создать переменную "maxAge" и присвоить ей значение 60
3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
  - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
  - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
  - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
  - Иначе выводите "Technical work".
5. Проверить задание с данными 10, 17, 18, 19, 59, 60, 61
*/

function checkAge (x) {
    const minAge = 18;
    const maxAge = 60;
    const age = x;
    let result;
    if (age < minAge) {
        result = "You don't have access cause your age is " + age + " It's less then "
    } else if (age >= minAge && age < maxAge) {
        result = "Welcome  !"
    } else if (age > maxAge) {
        result = "Keep calm and look Culture channel"
    } else {
        result = "Technical work"
    };
    return result;
};

console.log(checkAge(10));
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(19));
console.log(checkAge(59));
console.log(checkAge(60));
console.log(checkAge(61));