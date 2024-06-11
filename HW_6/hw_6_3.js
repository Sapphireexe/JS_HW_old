'use strict';
/*
5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
*/

function singleNumber (number) {
  if (typeof number !== 'number') {
    throw new Error ('Input should be a number.');
  };

  const numberArray = [...number.toString()];
  number = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === '-') {
      i++;
      number -= +numberArray[i];
    } else {
      number += +numberArray[i];
    };
  };

  if (number < 10) {
    return number;
  } else {
    return singleNumber (number);
  };
};

console.log(singleNumber(19));
console.log(singleNumber(123));
console.log(singleNumber(555));
console.log(singleNumber(-19));

console.log('\n');

/*
6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
    и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
    Пример: aabc => bbc => cc => d
*/

function doubleLettersToNextLetter (inputString) {
  if (!inputString || typeof inputString !== 'string') {
    throw new Error ('Input should be a string and should not be empty.');
  };

  const processedArray = [...inputString];

  for (let i = 0; i < processedArray.length - 1; i++) {
    if (processedArray[i] !== processedArray [i + 1] || /[z]/i.test(processedArray[i])) {
      continue;
    } else if (processedArray[i] === processedArray [i + 1]) {
      const charCode = processedArray[i].charCodeAt(0);
      processedArray.splice(i, 2, String.fromCharCode(charCode + 1));
      return doubleLettersToNextLetter (processedArray.join(''));
    };
  };
  return processedArray.join('');
};

console.log(doubleLettersToNextLetter('Letter'));
console.log(doubleLettersToNextLetter('aabc'));
console.log(doubleLettersToNextLetter('zzabc'));