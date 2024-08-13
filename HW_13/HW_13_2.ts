export{}

/*
Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
Задача класса - хранить объекты типа Т в приватном массиве
Реализуйте в классе следующие методы:
  - constructor должен принимать необзятельный массив объектов соответствующего типа. 
    Если массив пришел - объекты запушить в хранилище.
  - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
    Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
    Если на вход подан объект с айди - запушить его в хранилище
    Для типизации используйте Utility Types
  - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
  - remove, принимающий на вход id и удаляющий объект из массива
  - getById(id), возвращающий объект по айди если найден
  - getAll(), возвращает все объекты в хранилище
*/

type CustomObject = {id: number};

class Storage<T extends CustomObject> {
  private storageArray: T[] = [];

  constructor (array?: T[]) {
    if (array?.length) {
      this.storageArray.push(...array);
    }
  }

  add(obj: T): void;
  add(obj: Omit<T, 'id'>): void;
  add(obj: T | Omit<T, 'id'>): void {
    if ('id' in obj) {
      this.storageArray.push(obj);
      console.log(`Added new object ${JSON.stringify(obj)} to storageArray`);
    } else if (!('id' in obj)) {
      const id = this.getMaxId() + 1;
      const newObj = {...obj, id};
      this.storageArray.push(newObj as T);
      console.log(`Added new object ${JSON.stringify(newObj)} to storageArray`);
    }
  }

  private getMaxId(): number {
    let maxId = 0;
    for (const object of this.storageArray) {
      if (maxId < object.id) {
        maxId = object.id;
      }
    }
    return maxId;
  }

  private findIndexInStorageArray(id: number) {
    return this.storageArray.findIndex(object => object.id === id);
  }

  public update(obj: Pick<T, 'id'> & Partial<T>): void {
    const index = this.findIndexInStorageArray(obj.id);
    if (index === -1) {
      throw new Error (`No such object with id ${obj.id}`);
    }
    this.storageArray.splice(index, 1, {...this.storageArray[index], ...obj});
    console.log(`Updated existing object up to ${JSON.stringify(this.storageArray[index])} in storageArray`);
  }

  public remove(id: number): void {
    const index = this.findIndexInStorageArray(id);
    if (index === -1) {
      throw new Error (`No such object with id ${id}`);
    }
    this.storageArray.splice(index, 1);
    console.log(`Removed object with id ${id} from storageArray`);
  }

  getById(id: number): T {
    const index = this.findIndexInStorageArray(id);
    if (index === -1) {
      throw new Error (`No such object with id ${id}`);
    }
    return this.storageArray[index];
  }

  getAll(): T[] {
    return this.storageArray;
  }
}

const students = [
  { id: 1, name: "Anatoly", email: "mailTolya@gmail.com", surname: 'Obukhov'},
  { id: 2, name: "Maksim", email: "mailMaksim@gmail.com", surname: 'Marozau'}
];

const storage = new Storage(students);
storage.add({name: "Wandering", surname: "Student", email: "random@gmail.com"});
console.log(storage.getAll());
storage.update({ id: 1, name: "Tolya", email: "mailTolya123@gmail.com"});
console.log(storage.getById(1));
storage.remove(3);
console.log(storage.getAll());