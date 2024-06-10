'use strict';

/*
1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

console.log(vowelsConsonantsCounter('Incomprehensible'));
console.log(vowelsConsonantsCounter('ABC'));
console.log(vowelsConsonantsCounter('abc'));
console.log(vowelsConsonantsCounter(''));
console.log(vowelsConsonantsCounter(1));
console.log(vowelsConsonantsCounter('Incomprehensible dsa'));
console.log(vowelsConsonantsCounter('Incomprehensibleйцукен'));

function vowelsConsonantsCounter (str) {
  const vowels = 'eyuioa';
  const consonants = 'qwrtpsdfghjklzxcvbnm';
  let vowelsNumber = 0;
  let consonantsNumber = 0;

  if (! str || /[^a-zA-Z]/g.test(str)) {
    return `Invalid input string. Must contain word only.`
  };

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelsNumber++;
    } else if (consonants.includes(str[i].toLowerCase())) {
      consonantsNumber++;
    };
  };
  return `word contains ${vowelsNumber} vowels and ${consonantsNumber} consonants`;
};

console.log('\n');

/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
  шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
  Например let str = 'AbC'; let offset = -1, result = 'ZaB';
  Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/

console.log(caesarCipher('DefinitionOfDone', 1));
console.log(caesarCipher('DefinitionOfDone', -1));
console.log(caesarCipher('AaBbXxZz', 1));
console.log(caesarCipher('AaBbXxZz', -1));
console.log(caesarCipher('AbC', -1));
console.log(caesarCipher('ZzZ', 1));

function caesarCipher (str, offset) {
  let encryptedString = '';

  if (! str || /[^a-zA-Z]/g.test(str)) {
    return `Invalid input string. Must contain word only.`
  };

  if (offset !== 1 && offset !== -1) {
    return `Invalid offset. Must be only '1' or '-1'.`
  };

  for (let i = 0; i < str.length; i++) {
    if ((str[i] === 'A' || str[i] === 'a') && offset === -1) {
      encryptedString += String.fromCharCode(str.charCodeAt(i) + 25);
    } else if ((str[i] === 'Z' || str[i] === 'z') && offset === 1) {
      encryptedString += String.fromCharCode(str.charCodeAt(i) - 25);
    } else {
      encryptedString += String.fromCharCode(str.charCodeAt(i) + offset);
    };
  };
  return encryptedString;
};