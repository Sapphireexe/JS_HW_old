'use strict';

/*
1. Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)
*/

console.log(sizeConverter(65846)); // kB
console.log(sizeConverter(0)); // B
console.log(sizeConverter(10_000_000)); // MB
console.log(sizeConverter(1_000_000)); // kB
console.log(sizeConverter(1_000_000_000_000_000)); // TB
console.log(sizeConverter(1_099_511_627_776)); // TB
console.log(sizeConverter(1_099_511_627_775)); // GB
console.log(sizeConverter(1_048_576)); // MB
console.log(sizeConverter(1_048_575)); // kB
console.log(sizeConverter(1024)); // kB
console.log(sizeConverter(1023)); // B

function sizeConverter (a) {
  let result;
  let byte = 1024;

  if (isNaN(a)) {
    return 'Input is not a number.'
  };

  if (a < byte) { // bytes
    result = a + ' bytes';
  } else if (a < byte**2) { // kB
    result = (a / byte).toFixed(1) + ' kB';
  } else if (a < byte**3) { // MB
    result = (a / byte**2).toFixed(1) + ' MB';
  } else if (a < byte**4) { // GB
    result = (a / byte**3).toFixed(1) + ' GB';
  } else if (a >= byte**4) { // TB
    result = (a / byte**4).toFixed(1) + ' TB';
  };

  return zeroCutter(result);
};

function zeroCutter (result) {
  if (result.slice(0,6) === '1024.0') {
    if (result.slice(7,9) === 'kB') {
      result = '1 MB';
    } else if (result.slice(7,9) === 'MB') {
      result = '1 GB';
    } else if (result.slice(7,9) === 'GB') {
      result = '1 TB';
    };
  };

  if (result.includes('.0')) {
    result = result.replace('.0','');
  };

  return result;
};

console.log(`
`);

/*
2. Сделать из "*" в консоли равнобедренный треугольник и ромб
*/

const space = ' ';
const asterisk = '*';

const triangleHeight = 8;

for (let i = 0; i < triangleHeight; i++) {
  console.log(space.repeat(triangleHeight - i - 1) + asterisk.repeat(i * 2 + 1));
};

console.log(`
`);

const rhombusHeight = 5;

for (let i = 0; i < rhombusHeight; i++) {
  console.log(space.repeat(rhombusHeight - i - 1) + asterisk.repeat(i * 2 + 1));
};
for (let i = rhombusHeight - 1; i > 0; i--) {
  console.log(space.repeat(rhombusHeight - i) + asterisk.repeat(i * 2 - 1));
};

// for (let i = 0; i < rows; i++) {
//   if (i < rows/2) {
//     console.log (space.repeat(rows - i - 1) + asterisk.repeat(i * 2 + 1));
//   } else if (i >= rows/2) {
//     console.log (space.repeat(rows + i - 1) + asterisk.repeat(i / 2 + 1));
//   }
// };

console.log(`
`);

/*
3.  Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log(`Число ${i} делится без остатка на 3`);
  } else if (i % 3 !== 0 && i % 5 === 0) {
    console.log(`Число ${i} делится без остатка на 5`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Число ${i} делится без остатка на 3 и на 5`);
  } else {
    console.log(`Число ${i}`);
  };
};

console.log(`
`);

/*
4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
*/

console.log(camelCaseConverter('I am super engineer'));
console.log(camelCaseConverter('   I am super engineer   '));

function camelCaseConverter (a) {
  let result = '';

  if (!a || typeof a !== 'string') {
    return 'Error. Invalid input data.';
  };

  const inputString = a.trim();

  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) === ' ') {
      result += inputString.charAt(i + 1).toUpperCase();
      i++;
    } else {
      result += inputString.charAt(i).toLowerCase();
    };
  };
  return result;
};