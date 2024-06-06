'use strict';

/*
1.
Реализовать Task 1 через switch
*/

function checkAge (x) {
    const minAge = 18;
    const maxAge = 60;
    const age = x;
    let result;
    switch (true) {
        case age < minAge:
            result = "You don't have access cause your age is " + age + " It's less then ";
            break;
        case age >= minAge && age < maxAge:
            result = "Welcome  !";
            break;
        case age > maxAge:
            result = "Keep calm and look Culture channel";
            break;
        default:
            result = "Technical work";
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
console.log(`
`);
/*
2. 
Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
  И если он не number - кидалась ошибка в консоль.
  Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
*/

function checkAge_2 (x) {
    const minAge = 18;
    const maxAge = 60;
    const age = x;
    let result;
    switch (true) {
        case typeof age !== 'number':
            result = "An error has occured: input value '" + age + "' has not Number type. Its type is: " + typeof age;
            break;
        case age < minAge:
            result = "You don't have access cause your age is " + age + " It's less then ";
            break;
        case age >= minAge && age < maxAge:
            result = "Welcome  !";
            break;
        case age > maxAge:
            result = "Keep calm and look Culture channel";
            break;
        default:
            result = "Technical work";
    };
    return result;
};

console.log(checkAge_2(17));
console.log(checkAge_2(18));
console.log(checkAge_2(61));
console.log(checkAge_2("2"));
console.log(checkAge_2("aaa"));
console.log(`
`);

/*
3.
Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number
*/

function checkAge_3 (x) {
    const minAge = 18;
    const maxAge = 60;
    const age = +x;
    let result;
    switch (true) {
        case isNaN(age):
            result = "An error has occured: input value '" + x + "' must contain digits only. It contains " + age + " after convertion to Number.";
            break;
        case age < minAge:
            result = "You don't have access cause your age is " + age + " It's less then ";
            break;
        case age >= minAge && age < maxAge:
            result = "Welcome  !";
            break;
        case age > maxAge:
            result = "Keep calm and look Culture channel";
            break;
        default:
            result = "Technical work";
    };
    return result;
};

console.log(checkAge_3(17));
console.log(checkAge_3(18));
console.log(checkAge_3(61));
console.log(checkAge_3("2"));
console.log(checkAge_3("20"));
console.log(checkAge_3("80"));
console.log(checkAge_3("aaa"));
console.log(checkAge_3("222aaa"));