// Data Processing Methods
//Что такое методы обработки данных в массиве? Методы обработки данных в массиве - это функции, которые позволяют изменять, фильтровать, сортировать и выполнять другие операции с элементами массива. Они предоставляют удобный способ работы с данными и позволяют легко манипулировать массивами в JavaScript.

const numbers = [1, 5, 2, 9, 4];
const result = numbers.map((num) => num * 10);
console.log("Массив после изменения:", result);
const elemPow2 = function(e) {
    return e * e;
};
const result1=numbers.map(elemPow2);
console.log("Массив после возведения в квадрат:", result1);

const fruits = ["apple", "banana", "cherry", "kiwi"];
console.log("Массив до изменения:", fruits);
const result2 = fruits.map((fruit) => fruit.length);
console.log("Массив после изменения:", result2);
// Метод filter() - создает новый массив с элементами, которые прошли проверку в переданной функции]

const fruits = ['apple', 'banana', 'grape', 'kiwi', 'orange'];
const filteredFruits = fruits.map((fruit) => fruit.length);
console.log(filteredFruits); // [5, 6, 5, 4, 6] - метод map() возвращает новый массив с длинами каждого фрукта

const price = [30.0, 20.0, 50.0, 10.0, 40.0];
const filteredPrice = price.filter((price) => price > 20);
console.log(filteredPrice); // [30.0, 50.0, 40.0] - метод filter() возвращает новый массив с ценами больше 20

// Метод reduce() - применяет функцию к аккумулятору и каждому элементу массива (слева направо), чтобы свести его к одному значению
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 15 - метод reduce() возвращает сумму всех чисел в массиве

// Метод sort() - сортирует элементы массива на месте и возвращает отсортированный массив
const sortedFruits = fruits.sort();
console.log(sortedFruits); // ['apple', 'banana', 'grape', 'kiwi', 'orange'] - метод sort() сортирует фрукты в алфавитном порядке

// Метод forEach() - выполняет указанную функцию один раз для каждого элемента массива
fruits.forEach((fruit) => console.log(fruit)); // Выводит каждый фрукт в консоль

// Метод find() - возвращает первый элемент массива, который удовлетворяет условию, заданному в переданной функции
const foundFruit = fruits.find((fruit) => fruit.startsWith('g'));
console.log(foundFruit); // 'grape' - метод find() возвращает первый фрукт, который начинается с буквы 'g'

// Метод some() - проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в переданной функции
const hasLongFruit = fruits.some((fruit) => fruit.length > 5);
console.log(hasLongFruit); // true - метод some() возвращает true, так как есть фрукты длиной больше 5 символов

// Метод every() - проверяет, удовлетворяют ли все элементы массива условию, заданному в переданной функции
const allLongFruits = fruits.every((fruit) => fruit.length > 3);
console.log(allLongFruits); // true - метод every() возвращает true, так как все фрукты длиной больше 3 символов

//======================================================================
//reduse

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Сумма всех чисел в массиве:", sum); // 21

const mult = numbers.reduce((acc, v) => acc * v, 1);
console.log("Произведение всех чисел в массиве:", mult); // 360

const mult1 = numbers.reduce((acc, v) => acc * v);
console.log("Произведение всех чисел в массиве без начального значения:", mult1);
const concat = numbers.reduce((acc, v) => acc + v, '');
console.log("Конкатенация всех чисел в массиве:", concat); // 15294

const avgResult = numbers.reduce((acc, v) => acc + v, 0) / numbers.length;
console.log("Среднее значение всех чисел в массиве:", avgResult); // 4.2
