interface ICar {
  brand: string;
  color: string;
  year: number;
}

class Car implements ICar {
  brand!: string;
  color!: string;
  year!: number;
  isNew!: boolean;

  constructor(data: ICar) {
    Object.assign(this, data);
  }
}

const cars: ICar[] = [
  {
    brand: 'Tesla',
    color: 'red',
    year: 1945,
  },
  {
    brand: 'Honda',
    color: 'black',
    year: 1955,
  },
  {
    brand: 'Kia',
    color: 'purple',
    year: 1933,
  },
];

const carsInstanses = cars.map(item => new Car(item));

console.log(carsInstanses);

// const car = cars.filter(item => item.color === 'red');
// console.log(car);

// const colors = cars.map(item => item.color);
// console.log(colors);

// const tesla = cars.find(item => item.brand.toLowerCase() === 'tesla');
// console.log(tesla);

// const map = new Map([['brand', 'Kia']]);
// const set = new Set([{ brand: 'Kia', id: 1 }]);
// const object = [{ brand: 'Kia', id: 1 }];

// object.push({ brand: 'Kia', id: 1 });
// map.set('brand', 'Kia');
// set.add({ brand: 'Kia', id: 1 });

// console.log(object);
// console.log(map);
// console.log(set);

interface Car {}
