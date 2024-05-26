'use strict';

/*
Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня
*/

function quadraticEquation (a, b, c){
    let answer;
    const discriminant =  b**2 - 4*a*c;
    if (discriminant < 0) {
        answer = `Нет действительных корней в уравнении.`;
    } else if (discriminant === 0) {
        const radical = (-b + discriminant**0.5)/2*a;
        answer = `<${radical}>`;
    } else if (discriminant > 0) {
        const radical_1 = (-b + discriminant**0.5)/2*a;
        const radical_2 = (-b - discriminant**0.5)/2*a;
        answer = `<${radical_1}> и <${radical_2}>`;
    } else {
        answer = `Что-то пошло не так. Проверьте входные данные.`;
    }
    return answer;
}

console.log('Ответ к уравнению 1: ', quadraticEquation(1,-6,9));
console.log('Ответ к уравнению 2: ', quadraticEquation(1,-4,-5));