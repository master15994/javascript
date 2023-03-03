


const users = [
{
 name:'Anna' ,
 age:77  

},
{
 name:'Kate' ,
 age:33  

},
{
 name:'Max' ,
 age:28  

},
]
const fun (users) => {
  return users.map(a => a.name);
};
console.log(fun(users));


// function removeUnusedProps(cats: ICat[]) {
//   return cats.map((cat) => ({ name: cat.name, age: cat.age }))
// }


// interface ICat {
//   name: string
//   age: number
//   isClever: boolean
// }

// 
// / /If-else
// function foo(cat: Record<string, any>) {
//   if (cat.name === 'Мурзик') {
//     console.log('Мурзик');
//   } else if (cat.name === 'Барсик') {
//     console.log('Барсик')
//   } else {
//     console.log('noName')

// Switch-case
// function foo(cat: Record<string, any>) {
//   switch (cat.name) {
//     case 'Мурзик':
//       console.log('Мурзик');
//       break;
//     case 'Барсик':
//       console.log('Барсик');
//       break;
//     default:
//       console.log('noName')
//       break;
//   }
// }


// /If-else
// function foo(cat: Record<string, any>) {
//   if (cat.name === 'Мурзик') {
//     console.log('Мурзик');
//   } else if (cat.name === 'Барсик') {
//     console.log('Барсик')
//   } else {
//     console.log('noName')
//   }
// }

// Тернарное выражение
// function foo(cat: Record<string, any>) {
//   cat.name === 'Мурзик' ? console.log('Мурзик')
//     : cat.name === 'Барсик' ?
//       console.log('Барсик') :
//       console.log('noName')
// }

// Простое определение функции
// function catName(cat: ICat): string {
//   return cat.name
// }

// стрелочная функция
// const catName = (cat: ICat): string => cat.name;

// function removeUnusedProps(cats: ICat[]) {
//   return cats.map((cat) => ({ name: cat.name, age: cat.age }))
// }

// console.log(removeUnusedProps(cats));

