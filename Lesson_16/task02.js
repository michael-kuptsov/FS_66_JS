let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr = [' a', 'b', 'c', 'd', 'e'];
console.log(arr);

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[0]); // Выводит 'apple', так как это первый элемент массива.
console.log(fruits[2]); // Выводит 'cherry', так как это третий элемент массива.
console.log(fruits[4]); // Выводит 'elderberry', так как это пятый элемент массива.

fruits[1] = 'blueberry'; // Изменяем второй элемент массива на 'blueberry'.
console.log(fruits); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry'].

fruits.push('fig'); // Добавляем новый элемент 'fig' в конец массива.
console.log(fruits); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig'].

fruits.pop(); // Удаляем последний элемент массива.
console.log(fruits); // Выводит ['apple', 'blueberry', 'cherry',

const fruts = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruts[0]);
console.log(fruts);
fruts[1] = 'blueberry';
console.log(fruts);
// fruts = ['fig', 'grape', 'honeydew']; // Ошибка! Нельзя переназначить константу.


fruts.push('fig'); // Добавляем новый элемент 'fig' в конец массива.
console.log(fruts); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig'].

fruts.pop(); // Удаляем последний элемент массива.
console.log(fruts); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry'].

fruts.unshift('grape'); // Добавляем новый элемент 'grape' в начало массива.
console.log(fruts); // Выводит ['grape', 'apple', 'blueberry', 'cherry', 'date', 'elderberry'].

fruts.shift(); // Удаляем первый элемент массива.
console.log(fruts); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry'].

fruts.push('fig', 'grape'); // Добавляем несколько элементов в конец массива.
console.log(fruts); // Выводит ['apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig', 'grape'].
fruts.unshift('honeydew', 'kiwi'); // Добавляем несколько элементов в начало массива.
console.log(fruts); // Выводит ['honeydew', 'kiwi', 'apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig', 'grape'].


const myFruits = ['tomato', 'cucumber']
fruts.push(myFruits); // Добавляем массив myFruits в конец массива fruts.
console.log(fruts); // Выводит ['honeydew', 'kiwi', 'apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig', 'grape', ['tomato', 'cucumber']].
// CRUD операции с массивами: Create, Read, Update, Delete. В данном случае мы создаем новый элемент (массив myFruits) и добавляем его в конец массива fruts с помощью метода push().

fruts.splice(2, 0, 'mango'); // Вставляем элемент 'mango' на третью позицию (индекс 2) массива fruts, не удаляя при этом элементы.
console.log(fruts); // Выводит ['honeydew', 'kiwi', 'mango', 'apple', 'blueberry', 'cherry', 'date', 'elderberry', 'fig', 'grape', ['tomato', 'cucumber']].

fruts.splice(4, 1); // Удаляем один элемент на пятой позиции (индекс 4) массива fruts.
console.log(fruts); // Выводит ['honeydew', 'kiwi', 'mango', 'apple', 'cherry', 'date', 'elderberry', 'fig', 'grape', ['tomato', 'cucumber']].

fruts.splice(3, 2, 'papaya'); // Удаляем два элемента начиная с четвертой позиции (индекс 3) и вставляем на их место элемент 'papaya'.
console.log(fruts); // Выводит ['honeydew', 'kiwi', 'mango', 'papaya', 'date', 'elderberry', 'fig', 'grape', ['tomato', 'cucumber']].

