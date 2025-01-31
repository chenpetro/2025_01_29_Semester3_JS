// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
 
//   // Оголосимо змінні і дамо їм значення з об'єкта
// //   const { name, stars, status } = hotel;

//   const { name = 'hotel', stars=0, status='empty' } = hotel;
 
//   console.log(name, stars, status); // "Resort Hotel", 5, undefined

///////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
 
//   const { name, ...rest } = hotel;
 
//   console.log(name); // "Resort Hotel"
//   console.log(rest); // {stars: 5, capacity: 100}

///////////////////////////////////////////////////////////////////////////////////

// const rgb = [200, 255, 100];


// const [red, green, blue, alfa = 0.3] = rgb;


// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// // Red: 200, Green: 255, Blue: 100


/////////////////////////////////////////////////////////////////////////////////////

// // 2. Додаткові завдання
// //   Деструктуризувати наступні об’єкти
// // Об’єкт user
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }

// const {name, age, email} = user;
// console.log(name, age, email);


// // Об’єкт car
// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }

// const {make, model, year, features, safety} = car;
// console.log(make, model, year, features, safety);


// // Об’єкт movie
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const {title, director, actors, release_year,ratings} = movie
// console.log(title, director, actors, release_year,ratings);



// // Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }

// const {count, list} = books
// console.log(count, list);

/////////////////////////////////////////////////////////////////////////

// 1) Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };
 
// function personInfo(params) {
//     const {name, surname, age} = params
//     return `Мене звати ${name} ${surname} і мені ${age} років`
// }
//   console.log(personInfo(person));




// 2) Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.

// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };
 
//   function calculateAverageGrade(params) {
//     const { grades } = params; // Деструктуризація для отримання grades
//     const sum = grades.reduce((acc, grade) => acc + grade, 0); // Обчислюємо суму оцінок
//     return sum / grades.length; // Повертаємо середню оцінку
//   }
//   console.log(calculateAverageGrade(student));


// 3) Напишіть функцію, яка отримує масив об'єктів з інформацією про товари (назва, ціна, кількість) та використовує деструктуризацію для обчислення загальної вартості товарів.


const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
  ];

  function calculateTotalCost(params) {
    return params.reduce((acc, { price, quantity }) => acc + price * quantity, 0); // Обчислюємо загальну вартість
}
 
  console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500