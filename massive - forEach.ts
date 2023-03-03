// ------------------------------- МЕТОД ForEach------------------------





// losers.forEach(function(a,index) {
//   if (index===1) {
//     console.log(`${a.name} ${a.surname} ${a.age}`);
//   }
// });

// losers.forEach(function (a) {
//   console.log(`${a.name} ${a.surname} ${a.age}`);
// });



// Создайте массив объектов, каждый объект должен содержать информацию о пользователе (имя, фамилия, возраст). 
// Используя метод forEach, выведите на экран информацию о пользователе в формате "имя фамилия (возраст лет)".









// Создайте массив строк с названиями городов. Используя метод forEach, отфильтруйте все города, 
// название которых содержит более 6 букв, и выведите их на экран

// const towns = ['Moscow', 'St. Petersburg', 'Novosibirsk', 'Kazan', 'Ekaterinburg', 'Krasnodar'];

// towns.forEach(city=> {
//   if(city.length > 9){
//     console.log(city);
//   }
// });

// cities.forEach(city => {
//   if (city.length > 2) {
//     console.log(city);
//   }
// });







// Создайте массив строк с названиями цветов. Используя метод forEach, 
// создайте новый массив, в котором каждый элемент будет содержать название цвета и его длину в символах.


// Создайте массив объектов, каждый объект должен содержать информацию о фильме (название, режиссер, год выпуска). 
// Используя метод forEach, выведите на экран информацию о каждом фильме в формате "название (режиссер, год выпуска)".
// const films = [
//      {
//     title: "Зеленая миля",
//     director: "Фрэнк Дарабонт",
//     year: 1999
//   },
//   {
//     title: "Начало",
//     director: "Кристофер Нолан",
//     year: 2010
//   },
//   {
//     title: "Побег из Шоушенка",
//     director: "Фрэнк Дарабонт",
//     year: 1994
//   }
// ]

// films.forEach(function(a,index){
//     if(index===2){
//         console.log(`${a.year}`)
//     }
// });


// films.forEach(function(a){
// console.log(`${a.director}`)
// });
// films.forEach(function(a) {
//     console.log(`${a.title}`)
// });

// Список всех фильмов
// films.forEach(function(a){
//     console.log(`${a.title} ${a.director} ${a.year}`)
// });
 
// Первый фильм
// films.forEach (function(a,index) {
// if (index===0) {
//     console.log(`${a.title} ${a.director} ${a.year}`);
// }
// });
// Второй фидьм
//  films.forEach(function (b,index) {
//     if(index===1) {
//         console.log(`${b.director} ${b.year} ${b.title}`)
//     } 
//  });

// Третий фильм
// films.forEach(function(c,index){
//     if(index===2) {
//         console.log(`${c.year} ${c.title} ${c.director}`)
//     }
// });


// const numbers = [1, 2, 3, 4, 4 ,6]
// let sum=0;
// numbers.forEach(function(number) {
// sum +=number;
// });
// console.log(sum);

// const numbers = [3 ,3 , 4, 5 ,6];
// let sum=0;
// numbers.forEach(function(a) {
// sum -=a;
// });
// console.log(sum);

// const numbers = [1,2,14,1,1]
// let sum=2;
// numbers.forEach(function(b){
// sum*=b;
// });
// console.log(sum);

