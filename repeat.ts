const news = [
  {
    title: 'Я сегодня поел',
    date: 'Сегодня',
    price: 1001,
    subtitle: 'Курицу',
    content: 'Сегодня был веселый день...',
    images: ['feqfqeeq', 'feqfeqfqe', '12414', 'feqfqeofq'],
    links: ['https://koklp', 'https://12312'],
    partners: [
      {
        title: 'Мы за все хорошее, ',
        site: 'https://nfjefq',
        keywords: ['Мы хорошие', 'Мы красивые'],
      },

      {
        title: 'Мы за все хорошее2, ',
        site: 'https://nfjefq2',
        keywords: ['Мы хорошие2', 'Мы красивые2'],
      },
    ],
  },

  {
    title: 'Я сегодня поел3',
    subtitle: 'Курицу3',
    content: 'Сегодня был веселый день...3',
    images: ['https://fueqfuqehfeq', 'https://jfiq'],
    links: ['https://koklp', 'https://12312'],
    partners: [
      {
        title: 'Мы за все хорошее, ',
        site: 'https://nfjefq',
        keywords: ['Мы хорошие', 'Мы красивые'],
      },
      {
        title: 'Мы за все хорошее2, ',
        site: 'https://nfjefq2',
        keywords: ['Мы хорошие2', 'Мы красивые2'],
      },
    ],
  },
];
if (!news || news.length === 0) {
  console.log('Новостей нет');
} else {
  const firstNew = news[0];
  const secondNew = news[1];

  if (firstNew.images.length !== 0) {
    console.log(firstNew.images[0]);
  }else (firstNew.images.length === 0){
    console.log("картинки няма ");
  }

  if ('title ' in firstNew && 'subtitle' in firstNew) {
  }
  if ('date' in firstNew) {
    console.log('Опубликовать');
  }
}

// interface ICar {
//   brand: string;
//   color: string;
//   year: number;
// }

// class Car implements ICar {
//   brand!: string;
//   color!: string;
//   year!: number;
//   isNew!: boolean;

//   constructor(data: ICar) {
//     Object.assign(this, data);
//   }
// }

// const cars: ICar[] = [
//   {
//     brand: 'Tesla',
//     color: 'red',
//     year: 1945,
//   },
//   {
//     brand: 'Honda',
//     color: 'black',
//     year: 1955,
//   },
//   {
//     brand: 'Kia',
//     color: 'purple',
//     year: 1933,
//   },
// ];

// const carsInstanses = cars.map(item => new Car(item));

// console.log(carsInstanses);

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
