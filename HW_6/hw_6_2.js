'use strict';
/*
1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function uniquePizzasSeeker (myPizzas) {
  let myUniquePizzas = [];

  if (!Array.isArray(myPizzas) || !Array.isArray(competitorPizzas)) {
    throw new Error ('Invalid input data. Please, check input data.');
  }

  for (let i = 0; i < myPizzas.length; i++) {
    if (!competitorPizzas.includes(myPizzas[i])) {
      myUniquePizzas.push(myPizzas[i]);
    };
  };

  if (myUniquePizzas.length !== 0) {
    return myUniquePizzas;
  } else if (myUniquePizzas.length === 0) {
    return null;
  };
};

console.log(uniquePizzasSeeker(['Margherita', 'Cheese and Mushrooms', 'hawai', 'Diablo', 'Chicken BBQ']));
console.log(uniquePizzasSeeker(['hawai', 'Caprichosa']));

console.log('\n')

/*  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
  Если таких слов несколько - выводит их все.
*/

function longestWordSeeker (inputString) {

  if (typeof inputString !== 'string') {
    throw new Error ('Invalid input data!');
  };

  const arrayOfInputString = inputString.replaceAll(/[^a-zA-Z ]/g, '').split(' ');

  for (let i = 0; i < arrayOfInputString.length; i++) {
    if (arrayOfInputString[i] === '') {
      arrayOfInputString.splice(i, 1);
      i--;
    };
  };

  if (arrayOfInputString.length === 0) {
    throw new Error ('String should contain at least one word!');
  };

  for (let i = 1; i < arrayOfInputString.length; i++) {
    if (arrayOfInputString[i].length < arrayOfInputString[i - 1].length) {
      arrayOfInputString.splice(i, 1);
      i--;
    } else if (arrayOfInputString[i].length > arrayOfInputString[i - 1].length) {
      arrayOfInputString.splice(i - 1, 1);
      i = 0;
    };
  };

  return arrayOfInputString.join(' ');
};

console.log(longestWordSeeker('This string contains some number of words'));
console.log(longestWordSeeker('This string contains long word contains along with checking 11111111111111111111111111'));
console.log(longestWordSeeker('This'));
console.log(longestWordSeeker('This string'));

console.log('\n');

/*  
3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.
*/

function duplicateRemover (inputArray) {
  const uniqueNumbersArray = [];

  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    throw new Error ('Invalid input data. Please, check input data.');
  };

  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== 'number') {
      throw new Error ('Input array contains non-numerical values.');
    };
  };

  for (let i = 0; i < inputArray.length; i++) {
    if (!uniqueNumbersArray.includes(inputArray[i])) {
      uniqueNumbersArray.push(inputArray[i]);
    };
  };
  return uniqueNumbersArray;
};

console.log(duplicateRemover([1, 15, 4, 12, 15, 3, 7, 35, 0, 15, 1, 1, 1, 0]));

console.log('\n');

/*
4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrome (inputString) {
  if (!inputString || typeof inputString !== 'string' || /[^a-zA-Z]/g.test(inputString)) {
    throw new Error ('Invalid input data!');
  };

  const checkingWordArray = [...inputString];

  for (let i = 0; i < Math.floor(checkingWordArray.length / 2); i++) {
    if (checkingWordArray.at(i).toLowerCase() !== checkingWordArray.at(-i - 1).toLowerCase()) {
      return `Word ${inputString} is not palindrome.`;
    } else if (checkingWordArray.at(i).toLowerCase() === checkingWordArray.at(-i - 1).toLowerCase()) {
      continue;
    };
  };
  return `Word ${inputString} is palindrome.`;
};

console.log(isPalindrome('Hello'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('Writer'));
console.log(isPalindrome('Hannah'));