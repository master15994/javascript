// let num = ['Gap', 'tex'];
// num.shift();
// console.log(num);

// let nam = [
//   'Hate',
//   {
//     name: 'carl',
//     age: 'show',
//     type: 'bet',
//   },
//   true,
//   function () {
//     console.log('HI Lack');
//   },
// ];

// console.log(nam.sort());

// let ret = 'freemoney';
// console.log(ret.toLocaleUpperCase());

// let num = 233 + '233';
// console.log(num);


// let ret = 'freemoney';
// let letter = ret[4];
// console.log(letter);

// let fls = 'флилансер';
// let rext = ` Привет! Я ${fls}`;

// console.log(rext);

// let kite = 'Привет';

// console.log(kite.toUpperCase());
// console.log(kite.toLocaleLowerCase());

// for (const chram of kite) {
//   console.log(chram);

// let firstLet = kite[2];
// console.log(firstLet);

// function User (name){
//    this.name=name;
//     this.age=88;
//     this.male='male';

// };
// console.log(new User('Rex'));
// console.log(new User('san'));

// Написать функцию, проверяет год фильма, и если он выше 2000, добавляет в новый массив с названием newFilms,
//  если старше 1990, но младше 2000 - middle
// middleFilms, а остальные будут в oldFilms
// 2. Функция возвращает массив, в котором больше всего фильмов

const movies = [
  { title: 'Inception', year: 2010, genre: 'sci-fi' },
  { title: 'The Dark Knight', year: 2008, genre: 'action' },
  { title: 'The Shawshank Redemption', year: 1994, genre: 'drama' },
  { title: 'Pulp Fiction', year: 1994, genre: 'crime' },
  { title: 'The Godfather', year: 1972, genre: 'crime' },
  { title: 'Forrest Gump', year: 1994, genre: 'drama' },
  { title: 'The Matrix', year: 1999, genre: 'sci-fi' },
  { title: 'Goodfellas', year: 1990, genre: 'crime' },
];

function foo = 
const newFilms = [];
const middleFilms = [];
const oldFilms = [];

movies.forEach(film => {
  if (
    middleFilms.length > oldFilms.length &&
    middleFilms.length > newFilms.length
  ) {
    return middleFilms;
  } else {
    return oldFilms;
  }
});
foo();
console.log(foo());

// movies.forEach(film => {
//   if (film.year > 2000) {
//     newFilms.push(film);
//   } else if (film.year >= 1990 && film.year < 2000) {
//     middleFilms.push(film);
//   } else {
//     oldFilms.push(film);
//   }
// });
// }
//  movies.forEach(film => {
//     newFilms.length > middleFilms.length &&
//     newFilms.length > oldFilms.length
//   ) {
//     return newFilms;
//   }

// const cars = ['Honda', 'Audi', 'Mers', 'Geli k', 'BWV'];

// let obj = { ...cars };
// console.log(cars);
// console.log (obj);

// let nums = [1,2,1,2,3,4,5,7,5,3,1,3,5,5,5,5,2,2,,3,];

// let divide = nums.reduce (( x,y ) => x/y);
// console.log(divide);

// let multi = nums.reduce(( x,y) => x*y);
// console.log(multi);

// let sum = nums.reduce((x,y) => x+y);
// console.log(sum);

// let minus = nums.reduce((x,y) => x-y);
// console.log(minus);

// let fruits = [
//   {
//     name: 'Apple',
//     id: 1,
//    price: 10,
//   },
//   {
//     name: 'Orange',
//     id: 2,
//     price: 20,
//   },
//   {
//     name: 'Grape',
//     id: 3,
//     price: 30,
//   },
// ];

// const fruitsName = fruits.map(fruits => fruits.name);
// console.log(fruitsName);

// const fruitsId = fruits.map (fruits => fruits.id );
// console.log (fruitsId);

// const fruitsPrice = fruits.map (fruits => fruits.price);
// console.log(fruitsPrice);

// fruits.push({name:'Banana', id:4, price:5});
// console.log(fruits);

// fruits.unshift({name:'Banana', id:4, price:5});
// console.log(fruits);

// const grape = fruits.pop();
// console.log(grape);

// const apple = fruits.shift();
// console.log(apple);

// fruits.forEach((fruit) =>{fruit.price += 10});
// console.log(fruits);

// fruits.forEach((fruit) => { fruit.id +1});
// console.log(fruits);
