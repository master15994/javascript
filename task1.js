let fruits = [
  {
    name: 'Apple',
    id: 1,
   price: 10,
  },
  {
    name: 'Orange',
    id: 2,
    price: 20,
  },
  {
    name: 'Grape',
    id: 3,
    price: 30,
  },
];

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

fruits.forEach((fruit) => { fruit.id +1});
console.log(fruits);



