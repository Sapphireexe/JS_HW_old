'use strict';
/*
1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
    Функция должна исполнить колбэк строго через переданное количество миллисекунд
    Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
*/

function delay(callback, delay) {
  if (!delay || typeof delay !== 'number') {
    throw new Error ('Delay must be a number');
  }
  setTimeout(callback, delay);
}

delay(() => console.log('hello'), 2000);
    
/*
2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
    1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
    2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
        Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
        Вывести в консоль результат обоих промисов по очереди
*/

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('After 3 seconds'), 3000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('After 5 seconds'), 5000);
  });
  
Promise.all([promise1, promise2]).then(resolves => {
  for (const resolve of resolves)
    console.log(resolve);
});

Promise.allSettled([promise1, promise2]).then(resolves => {
  for (const resolve of resolves)
    console.log(`Status is ${resolve.status}, value is '${resolve.value}'`);
});

//#2

async function promiseHandlerAll (promise1, promise2) {
  try {
    const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]);
    console.log(promise1Result);
    console.log(promise2Result);
  } catch (error) {
    console.log(`An error has occured: ${error}`);
  }
}

promiseHandlerAll(promise1, promise2);

async function promiseHandlerAllSettled (promise1, promise2) {
  try {
    const [promise1Result, promise2Result] = await Promise.allSettled([promise1, promise2]);
    console.log(`Status is ${promise1Result.status}, value is '${promise1Result.value}'`);
    console.log(`Status is ${promise2Result.status}, value is '${promise2Result.value}'`);
  } catch (error) {
    console.log(`An error has occured: ${error}`);
  }
}

promiseHandlerAllSettled(promise1, promise2);

/*
3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
*/

function getSumOfNumbers (a, b) {
  return new Promise ((resolve, reject) => {
    if (isNaN(a) || typeof a !== 'number' || isNaN(b) || typeof b !== 'number') {
      reject ('Input data should be number for both values');
    } else {
      resolve (a + b);
    }
  });
}

getSumOfNumbers(1, 5).then(result => console.log(result)).catch(error => console.log(`Error: ${error}`));
getSumOfNumbers(1, '5').then(result => console.log(result)).catch(error => console.log(`Error: ${error}`));

//#2

async function getSumOfNumbers_2 (a, b) {
  try {
    if (isNaN(a) || typeof a !== 'number' || isNaN(b) || typeof b !== 'number') {
      throw new Error ('Input data should be number for both values')
    }
    return a + b;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

getSumOfNumbers_2(1, 3).then(result => console.log(result));
getSumOfNumbers_2(1, '3').then(result => console.log(result));

/*
4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
    Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

*/

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (const object of data) {
      if (object.userId === 1) {
        console.log(object);
      }
    }
  })
  .catch(error => console.log(error));

  //#2

async function getResponse (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    for (const object of data) {
      if (object.userId === 1) {
        console.log(object);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getResponse(url);