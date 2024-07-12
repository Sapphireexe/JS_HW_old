export { }
/*
1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
  Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
  Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
  Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
  Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 
*/

interface IEmployee {
  name: string;
  surname: string;
  readonly salary: number;
  address?: IAddress;
}

interface ItEmployee {
  name: string;
  surname: string;
  readonly salary: number;
  grade: Grade;
  occupation: OCCUPATION;
  address?: IAddress;
  projectNames: string[];
}

interface IAddress {
  country: 'BELARUS' | 'POLAND' | 'UKRAINE' | 'RUSSIA';
  street: string;
  house: number;
  flat: number;
}

type Grade = 'junior' | 'middle' | 'senior' | 'lead';

enum OCCUPATION {
  DEVELOPER = "Developer",
  QA = "Tester",
  AQA = "Automation QA",
  PM = "Project Manager",
  DEVOPS = "DevOps",
}

function getEmployeeInfo(employee: IEmployee | ItEmployee) {
  console.log(`Name is ${employee.name}`);
  console.log(`Surname is ${employee.surname}`);
  console.log(`Salary is ${employee.salary}`);
  if (employee.address) {
    console.log(`Country: ${employee.address.country}, street: ${employee.address.street}, house: ${employee.address.house}, flat: ${employee.address.flat}`);
  }
  if (isItEmployee(employee)) {
    console.log(`Grade is ${employee.grade}`);
    console.log(`Occupation is ${employee.occupation}`);
    console.log(`Projects are ${employee.projectNames.join(', ')}`);
  }
}

function isItEmployee(employee: IEmployee | ItEmployee): employee is ItEmployee {
  return (('grade') in employee);
}

const person1: IEmployee = {
  name: 'Anatoly',
  surname: 'Obukhov',
  salary: 1000,
  address: {
    country: 'RUSSIA',
    street: 'Gagarina',
    house: 5,
    flat: 10,
  }
}

const person2: ItEmployee = {
  name: 'Anatoly',
  surname: 'Obukhov',
  salary: 1000,
  grade: 'junior',
  occupation: OCCUPATION.QA,
  address: {
    country: 'RUSSIA',
    street: 'Gagarina',
    house: 5,
    flat: 10,
  },
  projectNames: ['AQA', 'HomeWorks'],
}

getEmployeeInfo(person1);
console.log('');
getEmployeeInfo(person2);
console.log('');

/*
2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
  Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
  Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 
*/

type Object = { [key: string]: string | number | boolean };

type ArrOfObjects = { [key: string]: string | number | boolean }[];

interface IObject {
  string: number;
  number: number;
  boolean: number;
}

function getNumberOfTypes(objectOrArray: Object | ArrOfObjects) {
  const result: IObject = {
    string: 0,
    number: 0,
    boolean: 0,
  }
  if (!Array.isArray(objectOrArray)) {
    result.string = counter(objectOrArray, 'string');
    result.number = counter(objectOrArray, 'number');
    result.boolean = counter(objectOrArray, 'boolean');
  } else {
    for (const object of objectOrArray) {
      result.string += counter(object, 'string');
      result.number += counter(object, 'number');
      result.boolean += counter(object, 'boolean');
    }
  }
  return result;
}

function counter(object: Object, type: 'string' | 'number' | 'boolean') {
  let counter = 0;
  for (const key in object) {
    if (typeof object[key] === type) {
      counter++;
    }
  }
  return counter;
}

const randomObject: Object = {
  name: 'Nick',
  surname: 'Blanc',
  age: 42,
  salary: 1500,
  isMarried: false,
  hasChildrens: true,
  believesInFlatEarth: true,
}

const randomArrayOfObjects: ArrOfObjects = [
  {
    isEarthFlat: false,
    earthType: 'globe',
    radiusInKm: 6371,
  },
  {
    name: 'Nick',
    surname: 'Blanc',
    age: 42,
    salary: 1500,
    isMarried: false,
    hasChildrens: true,
    believesInFlatEarth: true,
  }]

console.log(getNumberOfTypes(randomObject));
console.log(getNumberOfTypes(randomArrayOfObjects));
console.log('');

/*
3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
    который будет использоваться для проверки каждого числа на соответствие требованиям. 
    Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
    Пример функции:
    const numbers = [1, -5, 2, 3, 4, 133];
    filter(numbers, (n) => n > 3); // [4, 133]
    filter(numbers, (n) => n % 2 == 0); // [2, 4]
    Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.
*/

type Argument = number[];
type Predicate = (number: number) => boolean;
type FilterFunction = number[];

function filter(arrayOfNumbers: Argument, predicate: Predicate): FilterFunction {
  const filteredArray: Argument = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (predicate(arrayOfNumbers[i])) {
      filteredArray.push(arrayOfNumbers[i]);
    }
  }
  return filteredArray;
}

const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3)); // [4, 133]
console.log(filter(numbers, (n) => n % 2 == 0)); // [2, 4]