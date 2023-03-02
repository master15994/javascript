
const human = [
{name:'Alex',age:23,},

{name:'Sasha', age:46,},

{name:'Max',age:28,},

{name:'Kate',age:19,},

{name:'Anna',age:55,},
];



// const humanName=human.filter(human=>human.name.includes('e'));
// console.log(humanName);
// const humanAge = human.filter(human=>human.age>20);
// console.log(humanAge);

// const age = human.find( h=> h.age === 19);
// console.log(age);

// const obj = human.find(human => human.name === 'Anna');
// console.log(obj);

// const obj = human.find(human=>human.age === 55);
// console.log(obj);

// const firstHuman = human.find(h => true);
// console.log(firstHuman);

// human.unshift({name:'Olga', age:33});
// console.log(human);

// human.push({name:'Serge', age:23});
// console.log(human);

// const Alex= human.shift();
// console.log(Alex);

// const ann = human.pop();
// console.log(ann);

// human.forEach ((person) => { person.age +=10});
// console.log(human);

// human.forEach ((person) =>{
//   console.log(`${person.age}`);
// });
// human.forEach ((person) => {
//   console.log(`${person.name}`);
// });

// human.forEach ((person) =>{
// console.log(`${person.name}  ${person.age}`);
// });

// let humanAge = human.map(human => human.age);
// console.log(humanAge);

// let humanName = human.map(human => human.name);
// console.log(humanName);



// Получение списка имен:
// Создайте массив из нескольких объектов, каждый из которых содержит имя и возраст. Используя метод map,
//  создайте новый массив, содержащий только имена из исходного массива.

// Поиск объекта по имени:
// Создайте массив из нескольких объектов, каждый из которых содержит имя и возраст. Используя метод find,
//  найдите первый объект в массиве, у которого имя равно заданному имени.

// Фильтрация массива объектов:
// Создайте массив из нескольких объектов, каждый из которых содержит имя и возраст. Используя метод filter,
//  отфильтруйте массив, оставив только те объекты, у которых возраст больше заданного значения.




//  let fruits = [
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

// fruits.forEach((fruit) => { fruit.id +=1});
// console.log(fruits);


