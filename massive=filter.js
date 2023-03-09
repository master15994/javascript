//* ------------------------------- МЕТОД Filter -----------------------

//* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ БОЛЬШЕ 1 -----------------------
// const moreOne = numbers.filter (a => a > 1);
// console.log(moreOne);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ БОЛЬШЕ 3 -----------------------
//  const moreThree = numbers.filter ( a => a > 3);
//  console.log(moreThree);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ БОЛЬШЕ 5 -----------------------

// const less5 = numbers.filter(a=>a<5);
// console.log(less5);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ МЕНЬШЕ  5 -----------------------

//   const lessFive = numbers.filter (a => a < 5);
//   console.log(lessFive);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ МЕНЬШЕ  10 -----------------------

//   const lessTen = numbers.filter (a => a < 10 );
//     console.log(lessTen);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ ТОЛЬКО ЧЕТНЫЕ ЧИСЛА  -----------------------

//   const even = numbers.filter(a => a  % 2 ===0);
//   console.log(even);

// *---------------------------- ВЫБРАТЬ ЭЛЕМЕНТЫ ТОЛЬКО НЕЧЕТНЫЕ ЧИСЛА  -----------------------

//   const odd = numbers.filter( a => a % 2 !== 0) ;
//   console.log(odd);

//* ------------------------------- TASK TWO ---------------------------------
// Используя метод filter(), выберите из массива только фильмы, выпущенные после 2000 года

/* const movies = [
  { title: 'Inception', year: 2010, genre: 'sci-fi' },
  { title: 'The Dark Knight', year: 2008, genre: 'action' },
  { title: 'The Shawshank Redemption', year: 1994, genre: 'drama' },
  { title: 'Pulp Fiction', year: 1994, genre: 'crime' },
  { title: 'The Godfather', year: 1972, genre: 'crime' },
  { title: 'Forrest Gump', year: 1994, genre: 'drama' },
  { title: 'The Matrix', year: 1999, genre: 'sci-fi' },
  { title: 'Goodfellas', year: 1990, genre: 'crime' }
];
*/

//* --------------------------- ЭЛЕМЕНТ ПО БУКВЕ  R -----------------
//  const filmR = movies.filter (a => a.title.includes('r'));
//  console.log(filmR);

//* --------------------------- ЭЛЕМЕНТ ПО БУКВЕ  X -----------------
// const filmsX = movies.filter(a => a.title.includes('x'));
// console.log(filmsX);
//* --------------------------- ЭЛЕМЕНТ ПО БУКВЕ  T -----------------
// const filmsTes = movies.filter ((a)=>a.title.includes('T'));
// console.log(filmsTes);

//* --------------------------- ЭЛЕМЕНТ ПО ГОДУ. ПОСЛЕ 1990 --------------------
// const year = movies.filter (a => a.year >1990);
// console.log(year);

//* --------------------------- ЭЛЕМЕНТ ПО ГОДУ. ПОСЛЕ 2000 --------------------

//   const year_2000 = movies.filter (a => a.year > 2000);
//   console.log(year_2000);

//* --------------------------- ЭЛЕМЕНТ ПО ГОДУ. ДО 2000 -------------------
// const year_1990 = movies.filter (a => a.year < 2000);
// console.log(year_1990);

// const film = movies.filter (a => a.genre.includes('c'));
// console.log(film);

// const year1990 = movies.filter(a => a.year= 1990);
// console.log(year1990);

// *  { name: 'John', surname: 'Doe', age: 25 },
// * { name: 'Jane', surname: 'Smith', age: 32 },
// * { name: 'Bob', surname: 'Johnson', age: 45 }
// ];

// const ageLoser = losers.filter((a) => a.surname.includes('t'));
// console.log(ageLoser);

// const nameLoser = losers.filter ((a) => a.name.includes('B'));
// console.log(nameLoser);

// const losersName = losers.filter((a) => a.surname.includes('o'));
// console.log(losersName);

// const filteredLosers = losers.filter((user) => user.name.includes('J'));
// console.log(filteredLosers);

// const Plusloser = losers.filter((a) => a.age>40);
// console.log(Plusloser);
// const minusLoser = losers.filter ((a) => a.age>18);
// console.log(minusLoser);

// const filterLoser = losers.filter((user) =>user.age > 35);
// console.log(filterLoser);

// const filteredLosers = losers.filter((user) => user.age > 20);
// console.log(filteredLosers);
