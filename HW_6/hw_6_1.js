'use strict';

/*
1. Создайте функцию getEmployeeInfo()
2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
4. Функция должна принимать 1 аргумент - имя сотрудника
5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
8. Если такое имя сотрудника в массиве не найдется - вернуть null
*/

console.log(getEmployeeInfo('Anatoly'));
console.log(getEmployeeInfo('Geralt'));
console.log(getEmployeeInfo('Mike'));
console.log(getEmployeeInfo('Jane'));

function getEmployeeInfo(employeeName) {
    const employeeList = ['Anatoly','Geralt','Mike','Anna','Mike'];
    const employeeSalary = [5000,1000,2000,1500,800];
    const searchResult = [];
    const i = employeeList.indexOf(employeeName)

    if (!employeeName || typeof employeeName !== 'string') {
        throw new Error('Employee name "' + employeeName + '" is not a valid data type.');
    };

    // for (let i = 0; i < employeeList.length; i++) {
    //     if (employeeList[i] === employeeName) {
    //         searchResult.push(employeeList[i], employeeSalary[i]);
    //     };
    // };

    if (i == -1) return null
            searchResult.push(employeeList[i], employeeSalary[i]);
        };
    };

    if (searchResult.length === 0) {
        return null;
    } else {
        return searchResult;
    };
};