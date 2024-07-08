'use strict';
/*
1. На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const url = 'https://jsonplaceholder.typicode.com';

async function getResponseByUrl (domain, endpoint) {
  try {
    const response = await fetch (`${domain}${endpoint}`);
    if (response.status !== 200 || !response.ok) {
      throw new Error (`Error fetching data from ${domain}${endpoint}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
}

const promise = Promise.all([getResponseByUrl(url,'/users'), getResponseByUrl(url,'/albums'), getResponseByUrl(url,'/photos')]);

class UserData {
  constructor (dataOfUser, [dataOfAlbums, dataOfPhotos]) {
    this.id = dataOfUser.id;
    this.name = dataOfUser.name;
    this.email = dataOfUser.email;
    this.phone = dataOfUser.phone;
    this.company = dataOfUser.company.name;
    this.albums = dataOfAlbums;
    this.numberOfPhotos = dataOfPhotos;
  }

  getUserData () {
    console.log(`${this.id}.${' '.repeat(3 - String(this.id).length)}name: ${this.name}
    email: ${this.email}
    phone: ${this.phone}
    company: ${this.company}
    albums:`);
    this.albums.forEach((album, index) => {
      console.log(`      ${album} (${this.numberOfPhotos[index]} photos)`);
    });
    console.log(`__________________________________\n`);
  }
}

promise.then(data => {
  data[0].forEach(user => {
    const userData = new UserData (user, getAlbums(user.id, data[1], data[2]));
    userData.getUserData();
  });
})

function getAlbums (userId, albums = [], photos = []) {
  const userAlbums = [];
  const numberOfPhotos = [];
  for (const album of albums) {
    if (album.userId === userId) {
      userAlbums.push(album.title);
      numberOfPhotos.push(getNumberOfPhotos(album.userId, photos));
    }
  }
  return [userAlbums, numberOfPhotos];
}

function getNumberOfPhotos (albumId, photos = []) {
  return photos.filter(photo => photo.albumId === albumId).length;
}

/*
2. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch(). 
  Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе. 
  Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
  Решить с помощью в 2 вариантах: с  .then() и с использованием async/await

*/


/*
https://exchangeratesapi.io/
*/