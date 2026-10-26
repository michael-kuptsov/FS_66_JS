function sum(a,b,c) {
    return a+b+c;
}

const numbers = [10, 20, 30];
console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers)); // Используем оператор spread для передачи элементов массива как отдельных аргументов функции.
//... это не остаточный оператор, а оператор расширения (spread operator), который разворачивает массив в отдельные элементы.

//spread and rest operators
//spread operator разворачивает массив в отдельные элементы
//rest operator собирает отдельные элементы в массив
//Они абсолютно разные по своему назначению, но используют один и тот же синтаксис '...'.

function sum1(...args) {// Тут ... rest operator собирает все переданные аргументы в массив args.
    return args.reduce((acc, item) => acc + item, 0);
}

const values = [1, 2, 3, 4, 5];
console.log(sum1(...values)); // Используем оператор spread для передачи элементов массива как отдельных аргументов функции.

//spread operator чаще всего нуден будет для копирования массивов и объектов.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Используем spread operator для копирования массива
console.log(copiedArray); // [1, 2, 3]

console.log(originalArray === copiedArray); // false, так как это два разных массива


const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['carrot', 'potato', 'tomato'];
const allFoods = [...fruits, ...vegetables]; // Используем spread operator для объединения массивов
console.log(allFoods); // ['apple', 'banana', 'cherry', 'carrot', 'potato', 'tomato']
const food2 = ['bread', ...fruits, 'milk', ...vegetables];
console.log(food2); // ['bread', 'apple', 'banana', 'cherry', 'milk', 'carrot', 'potato', 'tomato']

//spread adn objects

const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const newUser = user;//ERROR
newUser.age = 35;
console.log(user.age); // 35, так как newUser и user ссылаются на один и тот же объект
console.log(newUser.age); // 35, так как newUser и user ссылаются на один и тот же объект

const newUser1 = {...user}; // Используем spread operator для копирования объекта
console.log(newUser1); // { name: 'John', age: 30, city: 'New York' }
newUser1.age = 50;
console.log(user.age); // 35, так как user остался без изменений
console.log(newUser1.age); // 50, так как newUser1 это копия объекта user
console.log(user === newUser1); // false, так как это два разных объекта

const updateUser = {
    ...user,
    email: 'john.doe@example.com',      
    zip: '10001',
};

console.log(updateUser); // { name: 'John', age: 35, city: 'New York', email: 'john.doe@example.com', zip: '10001' }

const contactData = {
    city: 'New York',
    zip: '10001',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    website: 'www.johndoe.com',

}

const newUser4 = {...user,...contactData};

const user5 = {
    name: 'John',
    address:{
        city: 'New York',
        zip: '10001'
    }
}

const copy5 = {...user5}; // Используем spread operator для копирования объекта с вложенным объектом
console.log(user5 === copy5); // false, так как это два разных объекта
console.log(copy5); // { name: 'John', address: { city: 'New York', zip: '10001' } }  
copy5.address.zip = 99999999;
console.log(user5.address.zip); // 99999999, так как вложенный объект был изменен
console.log(copy5.address.zip); // 99999999, так как это ссылка на тот же вложенный объект
// Для глубокого копирования объектов с вложенными объектами нужно использовать другие методы, например JSON.parse(JSON.stringify(obj)) или библиотеки типа lodash.

const user6 = {
    name: 'John',
    address:{
        city: 'New York',
        zip: '10001'
    }
};
const copy6 = {
    ...user6,
    address: {
        ...user6.address}
};

copy6.address.zip = 55555555;
console.log(user6.address.zip); // 10001, так как user6 остался без изменений
console.log(copy6.address.zip); // 55555555, так как copy6 это копия объекта user6 с новым вложенным объектом address


const user7 = {
    name: 'John',
    address:{
        city: 'New York',
        zip: '10001',
        coordinates: {
            lat: 0,
            lng: 0,
        }
    }
};

const copy7 = structuredClone(user7);
copy7.address.coordinates.lat = 10;
copy7.address.coordinates.lng = 20;
console.log(user7.address.coordinates.lat); // 0, так как user7 остался без изменений
console.log(user7.address.coordinates.lng); // 0, так как user7 остался без изменений
console.log(copy7.address.coordinates.lat); // 10, так как copy7 это глубокая копия объекта user7
console.log(copy7.address.coordinates.lng); // 20, так как copy7 это глубокая копия объекта user7

console.log('======Closure======');

