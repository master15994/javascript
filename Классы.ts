// const personObject: IHuman[] = [
//   { name: 'Alex', age: 23, job: 'teacher' },

//   { name: 'Sasha', age: 46, job: 'pilot' },

//   { name: 'Max', age: 28, job: 'secretary' },

//   { name: 'Kate', age: 19, job: 'doctor' },

//   { name: 'Anna', age: 55, job: 'unemloyer' },
// ];

// interface IHuman {
//   name: string;
//   age: number;
//   job: string;
// }

// class Human implements IHuman {
//   name!: string;
//   age!: number;
//   job!: string;
//   isNewPerson!: boolean;

//   constructor(personObject: IHuman) {
//     Object.assign(this, personObject);
//     if (personObject.age > 40) {
//       this.isNewPerson = true;
//     } else {
//       this.isNewPerson = false;
//     }
//     // this.age = personObject.age;
//     // this.job = personObject.job;
//     // this.name = personObject.name;
//   }
// }
// let personClasses = personObject.map(per => new Human(per));

// console.log(personClasses);

// const classFruit: IFruits[] = [
//   {
//     name: 'Apple',
//     id: 1,
//     price: 10,
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

// interface IFruits {
//   name: string;
//   id: number;
//   price: number;
//   country: string;
// }

// class Fruit implements IFruits {
//   name!: string;
//   id!: number;
//   price!: number;
//   country!: string;
//   isNewfruit: boolean;

//   constructor(classFruit: IFruits) {
//     Object.assign(this, classFruit);

//     if (classFruit.price > 20) {
//       this.isNewfruit = true;
//     } else {
//       this.isNewfruit = false;
//     }
//   }
// }

// let fruitClasses = classFruit.map(fruit => new Fruit(fruit));
// console.log(fruitClasses);

const personObject: IHuman[] = [
  { name: 'Alex', age: 23, job: 'teacher' },

  { name: 'Sasha', age: 46, job: 'pilot' },

  { name: 'Max', age: 28, job: 'secretary' },

  { name: 'Kate', age: 19, job: 'doctor' },

  { name: 'Anna', age: 55, job: 'unemloyer' },
];

interface IHuman {
  name: string;
  age: number;
  job: string;
}

class Human implements IHuman {
  name!: string;
  age!: number;
  job!: string;
  isNewperson!: boolean;
  constructor(personObject: IHuman) {
    Object.assign(this, personObject);

    if (personObject.age > 30) {
      this.isNewperson = true;
    } else {
      this.isNewperson = false;
    }
  }
}

let classPerson = personObject.map(per => new Human(per));
console.log(classPerson);
