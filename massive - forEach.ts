               //* ------------------------------- МЕТОД ForEach------------------------


                       // *  ---------------------- TASK ONE ----------------------

// Создайте массив строк с названиями городов. Используя метод forEach, отфильтруйте все города, 
// название которых содержит более 6 букв, и выведите их на экран

const towns = ['Moscow', 'St. Petersburg', 'Novosibirsk', 'Kazan', 'Ekaterinburg', 'Krasnodar'];

// *--------------------- НАЗВАНИЕ ГОРОДОВ БОЛЬШЕ 3 БУКВ --------------------

// towns.forEach (a => {
//     if(a.length >3) {
//         console.log(a);
// }else{
//         console.log();
// }
//     });

// * --------------------- НАЗВАНИЕ ГОРОДОВ БОЛЬШЕ 6 БУКВ --------------------

// towns.forEach (a => {
//     if(a.length >6) {
//         console.log(a); }
// });

// * --------------------- НАЗВАНИЕ ГОРОДОВ БОЛЬШЕ 9 БУКВ --------------------
// towns.forEach(city=> {
//   if(city.length > 9){
//     console.log(city);
//   }
// });

// * --------------------- НАЗВАНИЕ ГОРОДОВ БОЛЬШЕ 12 БУКВ --------------------
//  towns.forEach (a =>{
//     if(a.length >12){
//         console.log(a); 
//     }
// });



                    // *  ---------------------- TASK TWO ----------------------


// Создайте массив объектов, каждый объект должен содержать информацию о фильме (название, режиссер, год выпуска). 
// Используя метод forEach, выведите на экран информацию о каждом фильме в формате "название (режиссер, год выпуска)".

 const films = [
     {title: "Зеленая миля",
    director: "Фрэнк Дарабонт",
     year: 1999},

  {title: "Начало",
     director: "Кристофер Нолан",
     year: 2010},
   {title: "Побег из Шоушенка",
     director: "Фрэнк Дарабонт",
    year: 1994}

 ];





              //* -------------------------- СПИСОК ВСЕХ ФИЛЬМОВ -----------------------
//  films.forEach (function(a) {
//     console.log(`${a.title} ${a.director } ${a.year}`);
    
//  });




             // * ------------------------- ПЕРВЫЙ ФИЛЬМ ------------------------
// films.forEach (function(a,index) {
// if (index===0) {
//     console.log(`${a.title} ${a.director} ${a.year}`);
// }
// });


          //* ---------------------------- ВТОРОЙ ФИЛЬМ ------------------------
//  films.forEach (function(a,index) {
//     if (index===1) {
//         console.log(`${a.title} ${a.director} ${a.year}`);
        
//     }
//  });

        // * ----------------------------- ТРЕТИЙ ФИЛЬМ ----------------
// films.forEach (function(a,index) {
//     if(index===2) {
//         console.log(`${a.title} ${a.director} ${a.year}`);
        
//     }
// });

            // * ------------------ ТОЛЬКО НАЗВАНИЕ -----------------
// films.forEach(function(a) {
//     console.log(`${a.title}`)
// });

             // * -------------------- ТОЛЬКО РЕЖИССЕР --------------------
// films.forEach(function(a){
// console.log(`${a.director}`)
// });

                //* -------------------- ВТОРОЙ ФИЛЬМ ГОД-----------------------
// films.forEach(function(a,index){
//     if(index===2){
//         console.log(`${a.year}`)
//     }
// });








     // *const numbers = [1, 2, 3, 4, 4 ,6]

                   // *------------------ СЛОЖЕНИЕ ВСЕХ ЭЛЕМЕНТЫ------------------
// let sum=0;
// numbers.forEach(function(number) {
// sum +=number;});
// console.log(sum);

                   //* ---------------------- ВЫЧЕТАНИЕ ВСЕХ ЭЛЕМЕНТЫ --------------------

// let sum= 0;
// numbers.forEach(function(a) {
// sum -=a});
// console.log(sum);

                    //* ------------------- УМНОЖИТЬ ВСЕ ЭЛЕМЕНТЫ -----------------

// let sum =0;
// numbers.forEach (function (a) {
//     sum *=a;
// });
// console.log(sum);

// const numbers = [1,2,14,1,1]
// let sum=2;
// numbers.forEach(function(b){
// sum*=b;
// });
// console.log(sum);

