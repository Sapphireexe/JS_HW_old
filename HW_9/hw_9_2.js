'use strict';
/*
1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно. 
   Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
   И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'. 
   Задачу решить через замыкания
    Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'
*/

const randomGenerator = (n) => {
  const generatedNumbers = [];
  let number;
  return () => {
    if (generatedNumbers.length === n) {
      console.log('All numbers were received');
    } else {
      do {
        number = Math.floor(Math.random() * n + 1);
      } while (generatedNumbers.find(element => element === number));
      console.log(number);
      generatedNumbers.push(number);
    }
  }
}

const randomNumber = randomGenerator(5);
randomNumber();

console.log('\n');

/*
Task 2.
1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
    class Worker
      firstName
      lastName
      phone
      getFullName()
4. Создайте класс Zoo, реализующий следующий интерфейс:
    class Zoo
      address
      title
      ticket price
      workers: []
      animals: [],
5. Добавьте геттеры и сеттеры к полям address, title, ticket price
6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
    На вход метод должен принимать объект класса Worker. 
    Если объект не является инстансом класса Worker - выкинуть ошибку
7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
    На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
    Если объект не является инстансом класса Animal - выкинуть ошибку
    ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
*/

class Animal {
  constructor(params) {
    this.type = params.type;
    this.color = params.color;
    this.weight = params.weight;
    this.height = params.height;
    this.place_of_origin = params.place_of_origin;
  }

  getInfo() {
    return `Type of animal is ${this.type}, color is ${this.color}, weight is ${this.weight}, height is ${this.height}, place of origin is ${this.place_of_origin}`;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (!(newColor === 'red' || newColor === 'white' || newColor === 'black' || newColor === 'blue')) {
      throw new Error('Color should be red, white, blue or white');
    }
    this._color = newColor;
    console.log(`Color of ${this.type} was set to ${this._color}`);
  }
}

class Snake extends Animal {
  #isPoisonous;

  constructor(params, isPoisonous) {
    super(params);
    this.#isPoisonous = isPoisonous;
  }

  checkPoisonous() {
    return this.#isPoisonous ? `${this.type} is poisonous` : `${this.type} is not poisonous`;
  }
}

class Bird extends Animal {
  #isFlying;

  constructor(params, isFlying) {
    super(params);
    this.#isFlying = isFlying;
  }

  getFlying() {
    return this.#isFlying ? `${this.type} is flying` : `${this.type} is not flying`;
  }
}

class CatLike extends Animal {
  constructor(params, isSafeToPet) {
    super(params);
    this.isSafeToPet = isSafeToPet;
  }

  getSafeToPet() {
    return this.isSafeToPet ? `${this.type} is safe to pet` : `${this.type} is not safe to pet`;
  }
}

class Worker {
  constructor(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Zoo {
  constructor(params) {
    this.address = params.address;
    this.title = params.title;
    this.ticketPrice = params.ticketPrice;
    this.workers = params.workers;
    this.animals = params.animals;
  }

  get address () {
    return this._address;
  }
  set address (newAddress) {
    if (!newAddress || typeof newAddress !== 'string') {
      throw new Error ('Invalid address type');
    }
    this._address = newAddress;
    console.log(`Successfully changed address to ${this._address}`);
  }

  get title () {
    return this._title;
  }
  set title (newTitle) {
    if (!newTitle || typeof newTitle !== 'string') {
      throw new Error ('Invalid title type');
    }
    this._title = newTitle;
    console.log(`Successfully changed title to ${this._title}`);
  }

  get ticketPrice () {
    return this._ticketPrice;
  }
  set ticketPrice (newTicketPrice) {
    if (!newTicketPrice || typeof newTicketPrice !== 'number') {
      throw new Error ('Invalid ticket price type');
    }
    this._ticketPrice = newTicketPrice;
    console.log(`Successfully changed ticket price to ${this._ticketPrice}`);
  }

  addWorker (worker) {
    if (!(worker instanceof Worker)) {
      throw new Error (`${worker} is not instance of class Worker`);
    }
    this.workers.push(worker);
    console.log(`Successfully hired ${this.workers.at(-1).firstName} ${this.workers.at(-1).lastName} to workers`);
  }

  addAnimal (animal) {
    if (!(animal instanceof Animal)) {
      throw new Error ('Animal is not instance of class Animal');
    }
    if (animal instanceof Snake) {
      throw new Error ('There will be no snakes, mister Potter!');
    }
    this.animals.push(animal);
    console.log(`Successfully added ${this.animals.at(-1).type} to animals`);
  }

  removeWorker (fullName, phoneNumber) {
    if (typeof fullName !== 'string' && typeof phoneNumber !== 'number') {
      throw new Error ('Invalid typeof fullName and/or phoneNumber');
    }
    const result = this.workers.find(worker => `${worker.firstName} ${worker.lastName}` === fullName && worker.phone === phoneNumber);
    if (result === undefined) {
      throw new Error (`No workers found with ${fullName} and ${phoneNumber}`);
    }
    this.workers.splice((this.workers.indexOf(result)), 1);
    console.log(`Successfully fired ${result.firstName} ${result.lastName} from workers`);
  }
  
  removeAnimal (animalType, animalColor) {
    if (typeof animalType !== 'string' && typeof animalColor !== 'string') {
      throw new Error ('Invalid typeof animalType and/or animalColor');
    }
    const result = this.animals.find(animal => animal.type === animalType && animal.color === animalColor);
    if (result === undefined) {
      throw new Error (`No animals found with ${animalType} and ${animalColor}`);
    }
    this.animals.splice((this.animals.indexOf(result)), 1);
    console.log(`Successfully removed ${result.type} with ${result.color} color from animals`);
  }
}

const parrot = new Bird({ type: 'Cacadu', color: 'white', weight: '0.8 kg', height: '15 cm', place_of_origin: 'USA'}, true );
const bigCat = new CatLike({ type: 'Panther', color: 'black', weight: '60 kg', height: '130 cm', place_of_origin: 'Africa'}, false );
const dog = new Animal({ type: 'Houndeye', color: 'blue', weight: '25 kg', height: '80 cm', place_of_origin: 'USA'});
const cobra = new Snake({ type: 'Snake', color: 'red', weight: '40cm', height: '30 cm', place_of_origin: 'Japan'}, true );
const chick = new Bird({ type: 'chicken', color: 'red', weight: '4 kg', height: '20 cm', place_of_origin: 'USA'}, false );
const worker1 = new Worker('Ace', 'Ventura', 9876543210);
const worker2 = new Worker('James', 'Jameson', 1350485424);
const worker3 = new Worker('John', 'Smith', 1354298765);
const zoo = new Zoo({address: 'Big Prospect street', title: 'New Cool Zoo', ticketPrice: 15, workers: [worker1, worker2], animals: [parrot, bigCat, dog]});

console.log(zoo);

zoo.addAnimal(chick);
console.log(zoo);
zoo.addWorker(worker3);
console.log(zoo);
zoo.removeWorker('James Jameson', 1350485424);
console.log(zoo);
zoo.removeAnimal('Houndeye', 'blue');
console.log(zoo);
