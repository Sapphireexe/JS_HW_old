'use strict';

/*
Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
*/

alert(checkAge_3(prompt("Input your age", 18)));

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