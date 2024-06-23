// const numbers = [1, 2, 3, 4, 5];
// const filtered = numbers.filter((num) => num % 2 === 0);
// console.log(filtered.length);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2.push(4);
// console.log(arr1.length);

// const arr = [1, 2, 3];
// const sliced = arr.slice(1);
// sliced.push(4);
// console.log(arr.length);

// const arr = [1, 2, 3];
// const modified = arr.map((num) => num * 2);
// console.log(arr[1]);

// const arr = [1, 2, 3];
// const result = arr.reduce((sum, num) => sum + num, 10);
// console.log(result);

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// const result = addNumbers(5, 10, 15);
// console.log(result);

// const arr = [1, 2, 3];
// const newArr = arr.slice(1, 2);
// console.log(newArr);

// const arr = [1, 2, 3, 4];
// const result = arr.find((num, index, array) => num > 2);
// console.log(result);

// function find(array, callback) {
//   let result;
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array) === true) {
//       result = array[i];
//       break;
//     }
//   }
//   return result;
// }

// const result = find(arr, (num, index, array) => num > 2);
// console.log(result);

// const student = {};
// const student = new Object();

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   lovelyMethods: ["forEach", "map"],
//   completed3rdTasks: null,
//   "3rdName": undefined,
// };

// // console.log(student.name);
// // console.log(student.lovelyMethods[0]);

// student.age = 30;
// // console.log(student);

// student.country = "Belarus";
// // console.log(student);
// delete student.country;
// // console.log(student);

// // console.log(student["3rdName"]);

// student["when will love reduce"] = "after this lection";

// // console.log(student["when will love reduce"]);
// console.log(student);

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   lovelyMethods: ["forEach", "map"],
//   completed3rdTasks: null,
//   "3rdName": undefined,
// };

// const getNewKey = (a, b) => a + b;

// const newKey = getNewKey("last", "Key");

// student[newKey] = "really?";
// console.log(student);

// function createStudent(name, age) {
//   const student = {
//     name: name,
//     age: age
//   }
//   return student
// }

// function createStudent(name, age) {
//   return {
//     studentName: name,
//     studentAge: age,
//   };
// }

// function createStudent(name, age) {
//   return {
//     name, //name: name
//     age, //age: age
//   };
// }

// console.log(createStudent("Yauhen", 35));

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   sayHi() {
//     console.log("Hello from Yauhen");
//   },
// };

// student.sayHi();

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   sayHi: function () {
//     console.log("Hello from Yauhen");
//   },
// };

// student.sayHi();

/*
У вас есть массив имен ['Anatoly', 'Maria', 'Pavel', 'Svetlana'], 
массив зарплат [1000, 2000, 500, 0] и 
массив профессий ['AQA', 'Developer', 'DevOps', 'QA']. 
Напишите функцию, принимающую на вход 3 этих массива и возвращающую массив объектов вида 
 [
    {
      name: 'Anatoly',
      salary: 1000,
      profession: 'AQA'
    },
    {
      name: 'Maria',
      salary: 2000,
      profession: 'Developer'
    },
    {
      name: 'Pavel',
      salary: 500,
      profession: 'DevOps'
    },
    {
      name: 'Svetlana',
      salary: 0,
      profession: 'QA'
    },
  ]
*/

// const names = ["Anatoly", "Maria", "Pavel", "Svetlana"];
// const salaries = [1000, 2000, 500, 0];
// const jobs = ["AQA", "Developer", "DevOps", "QA"];

// const getEmployees = (names, salaries, jobs) =>
//   names.map((name, i, array) => {
//     return {
//       name,
//       salary: salaries[i],
//       job: jobs[i],
//     };
//   });
// const result = getEmployees(names, salaries, jobs);
// console.log(result);

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   sayHi: function () {
//     console.log("Hello from Yauhen");
//   },
//   someParam: undefined,
// };

// console.log(student.lovesReduceSoMuch === undefined);
// console.log(student.lovesReduceQuestions === undefined);
// console.log("lovesReduceQuestions" in student);
// console.log("lovesReduceSoMuch" in student);
// console.log("someParam" in student);

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
// };

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

// const arr = [1, 2, 3];
// for (const num in arr) {
//   console.log(num);
// }

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   child: {
//     name: "Anna",
//     age: 5,
//   },
// };

// const arr = [1, 2, 3];
// const [first, ...last] = arr;

// const { name, age } = student;
// console.log(name);
// console.log(age);

// const { name: studentName, age: studentAge, child: studentChild } = student;

// student.name = "Anatoly";
// student.age = 15;
// student.child.name = "Maria";
// console.log(studentName);
// console.log(studentAge);
// console.log(studentChild);
// console.log(student);

// const student = {
//   name: "Yauhen",
//   age: 25,
//   lovesReduceQuestions: false,
//   child: {
//     name: "Anna",
//     age: 5,
//   },
// };

// function getStudentName(studentObject) {
//   return `Hello, my name is ${studentObject.name}, my age is ${studentObject.age}`;
// }

// console.log(getStudentName(student));

// function getStudentName({ name, age }) {
//   //params = { name: 'Yauhen', age: 45 }
//   //const age = params.age;
//   //const name = params.name

//   //const {name, age} = params
//   return `Hello, my name is ${name}, my age is ${age}`;
// }

// console.log(getStudentName({ name: "Elena" }));

// const student = {
//   name: "Dzmitry",
//   age: 31,
// };

// const newStudent = student;

// student.name = "Elena";
// console.log(newStudent);

// const student = {
//   name: "Dzmitry",
//   age: 31,
//   child: {
//     name: "Elena",
//     age: 5,
//   },
// };
// const newStudent = { ...student };
// student.name = "Elena";
// student.child.age = 15;
// console.log(newStudent);
// const newStudent = Object.assign({}, student);
// const newStudent = Object.assign(student);
// student.name = "Elena";
// student.child.age = 15;

// console.log(newStudent);

// const newStudent = structuredClone(student);
// student.name = "Elena";
// student.child.age = 15;
// console.log(newStudent);

// const userName = {
//   name: "Tatiana",
//   surname: "Kotejkina",
// };
// const userAddress = {
//   country: "Ukrain",
//   city: "Vinnitsa",
// };

// // const requestBody = { ...userName, ...userAddress };

// const userName2 = {
//   name: "John",
//   surname: "Doe",
// };

// const requestBody = { ...userName, ...userAddress, ...userName2 };
// console.log(requestBody);

// const student = {
//   name: "Dzmitry",
//   age: 31,
//   // child: {
//   //   name: "Elena",
//   //   age: 5,
//   // },
// };

// console.log(student?.child?.age);
// const student = {
//   name: "Dzmitry",
//   age: 31,
// };
// const keys = Object.keys(student);
// console.log(keys);

// const value = Object.values(student);
// console.log(value);

// const entries = Object.entries(student);
// console.log(entries);

// Object.entries(student).forEach((entry) => {
//   console.log(entry[0]);
//   console.log(entry[1]);
// });

// for (const key of Object.keys(student)) {
//   console.log(`${key} is student is ${student[key]}`);
// }

/*
Написать функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля.
  Пример:
  const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
  console.log(pluck(characters, 'name')); // ['Barney', 'Fred', 'Jack']
  console.log(pluck(characters, 'age')); // [36, 40, 50]
  */
// const characters = [
//   { name: "Barney", age: 36 },
//   { name: "Fred", age: 40 },
//   { name: "Jack", age: 50 },
// ];

// function pluck(arr, key) {
//   return arr.map((object, i, array) => object[key]);
// }

// console.log(pluck(characters, "name"));
// console.log(pluck(characters, "age"));

// const student = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi() {
//     return `I am ${student.name} ${student.surname}`;
//   },
// };

// console.log(student.sayHi());

// const student = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi() {
//     return `I am ${this.name} ${this.surname}`;
//   },
// };

// console.log(student.sayHi());

// const sayHi = function () {
//   return `I am ${this.name} ${this.surname}`;
// };

// const Tania = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi: sayHi,
// };
// const Dima = {
//   name: "Dima",
//   surname: "Hlinkin",
//   sayHi: sayHi,
// };

// console.log(Tania.sayHi());
// console.log(Dima.sayHi());
// const student = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi: () => {
//     return `I am ${this.name} ${this.surname}`;
//   },
// };
// console.log(student.sayHi());

// const student = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi: function () {
//     return `I am ${this.name} ${this.surname}`;
//   },
// };
// console.log(student.sayHi());

// function makeAction(action) {
//   const result = action();
//   console.log(result);
// }

// const Volodya = {
//   name: "Volodymir",
//   surname: "SlavaUkrainov",
// };

// const greetings = student.sayHi.bind(Volodya);

// makeAction(greetings);
// const student = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi: function () {
//     return `I am ${this.name} ${this.surname}`;
//   },
// };

// const st2 = {
//   name: "Elena",
//   surname: "JSovna",
// };
// const greetings = student.sayHi.bind(st2)();
// console.log(greetings);

// function sayHi(helloWord) {
//   console.log(`${helloWord}! I am ${this.name} ${this.surname}`);
// }

// const Tania = {
//   name: "Tatiana",
//   surname: "Kotejkina",
//   sayHi: sayHi,
// };

// const st2 = {
//   name: "Elena",
//   surname: "JSovna",
// };

// Tania.sayHi.call(st2, "Hello there");
// Tania.sayHi.apply(st2, ["Hello there"]);

// const student = {
//   name: "John",
//   age: 30,
//   courses: ["html", "css", "js"],
// };

// const jsonObject = JSON.stringify(student);
// console.log(jsonObject);
// const studentFromJSON = JSON.parse(jsonObject);
// console.log(studentFromJSON);

// const copiedStudent = JSON.parse(JSON.stringify(student));
// function getChildren() {
//   // console.log(this);
//   return this.child;
// }

// const obj = {
//   name: "John",
//   age: 30,
//   child: {
//     name: "Elena",
//     age: 1,
//   },
//   getChildren: getChildren,
// };

// const obj2 = {
//   name: "Tatiana",
//   age: 30,
//   child: {
//     name: "Jack",
//     age: 5,
//   },
//   getChildren: getChildren,
// };

// console.log(obj.getChildren());
// console.log(obj2.getChildren());
// console.log(obj2.getChildren.bind(obj)());
// console.log(obj2.getChildren.call(obj, "", ""));
// console.log(obj2.getChildren.apply(obj, ["", "", "", "", "", "", "", ""]));

// const arr = [
//   {
//     name: "Anatoly",
//     salary: 1000,
//     profession: "AQA",
//   },
//   {
//     name: "Maria",
//     salary: 2000,
//     profession: "Developer",
//   },
//   {
//     name: "Pavel",
//     salary: 500,
//     profession: "DevOps",
//   },
//   {
//     name: "Svetlana",
//     salary: 0,
//     profession: "QA",
//   },
// ];

// const sveta = arr.find((el) => el.name === "Svetlana");
// sveta.name = "Oleg";
// console.log(arr);

// const Tatiana = {
//   name: "Tatiana",
//   age: 30,
//   child: {
//     name: "Jack",
//     age: 5,
//     say: function () {
//       return this.name;
//     },
//   },
//   getChildren: getChildren,
// };
// console.log(Tatiana.getChildren());
// console.log(Tatiana.child.say());

//https://learn.javascript.ru/date
