'use strict';

/*
1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
5. Вернуть result из функции
6. Проверить с массивом const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
*/

const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];

function getOnlyNumbers (arr, callback) {
    let result;

    if (!(Array.isArray(arr))) {
		throw new Error ('Input is not array.');
	}

    result = callback(arr);

    return result;
}

const numberChecker = arr => arr.filter(el => typeof el === 'number' && !isNaN(el));

console.log(getOnlyNumbers(arr, numberChecker));