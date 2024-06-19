'use strict';

/*
5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.
*/
const numbersArray = [1, 2, 10, 5, 3, 5, 1, 9, 6, 7, 8, 10, 9]; // 4

function findMissingNumber(arr) {
  for (const el of arr) {
    if (typeof el !== 'number' || isNaN(el)) {
      throw new Error ('Array contains non-numerical element');
    }
  }

  const sortedArray = arr.sort((a, b) => b - a);

  const lostNumber = sortedArray.find((el, i, arr) => el === arr[i + 1] + 2) - 1;

  return lostNumber;
}

console.log(findMissingNumber(numbersArray));

console.log('\n');

/*
6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
  Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
  Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.
*/

const fs = require('node:fs');
let rawData;

try {
  rawData = fs.readFileSync('./cards.json');
} catch (err) {
  console.error('Error reading file cards.json');
}

const userCardsSet = new Set(JSON.parse(rawData));

const userCards = [...userCardsSet]