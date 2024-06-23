'use strict';

/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

function letterCounter (string) {
  const arr = [...string.toLowerCase()];

  const numberOfSimilarLetters = arr.map((el, i, arr) => {
    let counter = 0;

    arr.forEach(el2 => {
      if (/[a-z]/.test(el2) && el2 === el) {
        counter++;
      }
    });
    return counter ? counter : el;
  });

  return numberOfSimilarLetters.join('');
}

console.log(letterCounter('I am the best AQA ever!'));

console.log('\n');

/*
2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function priceValue (arr) {
  const totalPrice = arr.reduce((result, price) => result = result + price, 0);
    
  const averagePrice = Math.floor(totalPrice / arr.length);

  return `Итого: ${totalPrice} $, средняя цена товара ${averagePrice} $`;
}

console.log(priceValue(prices));

console.log('\n');

/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/

const arr = ['Greetings', 'today', 'I', 'make', 'this', 'task', 'psst', 'easily'];

function vowelSort(wordsArray) {
  if (!Array.isArray(wordsArray) || wordsArray.length === 0) {
    throw new Error ('Invalid input data.');
  }

  const sortedArray = [...wordsArray];

  return sortedArray.sort((a, b) => numberOfvowels(a) - numberOfvowels(b));
}

const numberOfvowels = word => ((word.match(/[aeiouy]/gi)) ?? 0).length ?? 0;

console.log(vowelSort(arr));

console.log('\n');

/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
*/

const bracketsArr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];
const bracketsArr2 = [[['(']], ')', '(', '(', '(', ')', ')', ['(', ['('], [')']]];
const bracketsArr3 = [[['(']], ')', '(', ')', [[')']], ')', ['(', ['('], [')']]];

function pairedBracketsChecker (arr) {
  const flatArray = [...arr].flat(Infinity);
  const openingBracket = `(`;
  let counter = 0;

  flatArray.forEach(el => el === openingBracket ? counter++ : counter--);

  return counter === 0 ? `Every opening bracket has its closing bracket.` : counter > 0 ? `This array contains ${counter} opening bracket more than closing.` : `This array contains ${-counter} closing bracket more than opening.`;
}

console.log(pairedBracketsChecker(bracketsArr));
console.log(pairedBracketsChecker(bracketsArr2));
console.log(pairedBracketsChecker(bracketsArr3));