'use strict';
/*
1. Создайте функцию counter с переменной cosnt count = 0. Реализуйте замыкание так, чтобы при вызове функции count увеличиваться на +1 
и выводился в консоль в виде `Function was called ${count} times`
*/

const counter = () => {
    let count = 0;
    return () => {
        count++;
        count === 1 ? console.log(`Function was called ${count} time`) : console.log(`Function was called ${count} times`);
    }
}

const count = counter();
count();

console.log('\n');
/*
2. Создайте класс User с публичной пропертей name и приватным полем surname, а также методом sayHi() возвращающим "Hello from <name> <surname>".
*/

class User {
    #surname

    constructor (name, surname) {
        this.name = name;
        this.#surname = surname;
    }

    sayHi() {
        return `Hello from ${this.name} ${this.#surname}`;
    }
}

/*
3. Создать объект из класса User и вывести результат метода sayHi() в консоль
*/

const user = new User('Anatoly', 'Obukhov');
console.log(user.sayHi());

console.log('\n');
/*
4. Создать объект из класса User и вывести surname в консоль (получить ошибку)
*/

const user2 = new User('Mike', 'Watson');
console.log(user2.#surname);

/*
Task 1

1. Создайте класс Animal
2. В конструкторе класс должен принимать следующие параметры:     
  - type
  - color
  - weight
  - height
  - place of origin
3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
  - Красный
  - Черный
  - Белый
  - Синий
Если не является - кидаем ошибку через throw new Error('текст ошибки')
6. Создайте класс Snake, который будет наследовать класс Animal
7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
10. Сделайте поле isPoisonous приватным в классе Snake
*/

class Animal {
    constructor (params) {
        this.type = params.type;
        this.color = params.color;
        this.weight = params.weight;
        this.height = params.height;
        this.place_of_origin = params.place_of_origin;
    }

    getInfo () {
        return `Type of animal is ${this.type}, color is ${this.color}, weight is ${this.weight}, height is ${this.height}, place of origin is ${this.place_of_origin}`;
    }

    get color () {
        return this._color;
    }

    set color (newColor) {
        if (!(newColor === 'red' || newColor === 'white' || newColor === 'black' || newColor === 'blue')) {
            throw new Error ('Color should be red, white, blue or white');
        }
        this._color = newColor;
    }
}

class Snake extends Animal {
    #isPoisonous;

    constructor (params, isPoisonous) {
        super (params);
        this.#isPoisonous = isPoisonous;
    }

    checkPoisonous() {
        return this.#isPoisonous ? `${this.type} is poisonous` : `${this.type} is not poisonous`;
    }
}

const snake = new Snake ({type: 'snake', color: 'red', weight: '2 m', height: '10 cm', place_of_origin: 'Africa'}, true);

console.log(snake.getInfo());
console.log(snake.checkPoisonous());