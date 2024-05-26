'use strict';

/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

function concatProgram (n) {
    let result;
    if (n >= 1 && n <= 9 && String(n/1).length === 1) {
        result = n + +(String(n) + n) + +(String(n) + n + n);
    } else {
        result = 'На входе должно быть целое положительное число n (одно любое число от 1 до 9).';
    }
    return result;
}

console.log(concatProgram(1.00));