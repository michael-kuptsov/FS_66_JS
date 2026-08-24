// print 5 раз слово 'Hello' в консоль 
// for number in range (5): in python 
for (let i = 0; i < 5; i++) {
    console.log('Hello');
}

let n = 5;
n = n + 2;
n += 2;
n ++;
console.log(n);
n--;
console.log(n);
console.log(n++); // Тут всеравно будет 9 потому что сначала выводится значение переменной, а потом увеличивается на 1
console.log(n);
console.log(n--); // Тут всеравно будет 10 потому что сначала выводится значение переменной, а потом уменьшается на 1
console.log(n);
console.log(--n); // Тут будет 8 потому что сначала уменьшается на 1, а потом выводится значение переменной
console.log('================================================')
console.log('=====================================================')

for ( ; ; ) {
    console.log('Hello'); // Что тут происходит? Это бесконечный цикл, так как нет условия выхода из цикла
    break; // break - прерывает выполнение цикла
}

for (let i = 0; i < 5; i++) {
    console.log(i);// Тут выведется 0, 1, 2, 3, 4, так как условие i < 5 выполняется
}
// console.log(i);//reference error, так как переменная i объявлена внутри цикла и недоступна снаружи

for (let i = 2; i < 2050; i *= 2) {

    console.log(i);// Тут выведется 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, так как условие i < 2050 выполняется
}




//-----------------------------------------------------------------------------------------------------------------------------------------------------------//


// let number = 20000; loop will not run because the condition is false
let number = 2;

while (number < 2050) {
    console.log(number);
    number *= 2;
    let myName = 'Misha';
    let res = number % 2 === 0 ? 'четное' : 'нечетное'; // тернарный оператор
    console.log(res, myName);
}

// while (true) {
//     console.log('Hello');
//     break; // break - прерывает выполнение цикла
// }


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//


let number2 = 2;
    
// Спецефический цикл do while, который выполняется хотя бы один раз, даже если условие не выполняется
//Цикл с пост условием, то есть сначала выполняется тело цикла, а потом проверяется условие
do {
    console.log(number2);
    number2 *= 2;
} while (number2 < 2050);

// Есть еще два типа циклов for in и for of, которые используются для перебора объектов и массивов соответственно.

let fruits = ['banana', 'apple', 'orange', 'kiwi', 'melon'];
console.log(fruits.toString());

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++){
    fruits[i] = fruits[i]+'!';
    console.log(fruits[i]);
}


let counter = 0;

while (counter < fruits.length) {
    console.log(`${counter + 1}. ${fruits[counter]}`);
    counter++;
}


//for of для работы с массивами, for in для работы с объектами

for (let fruit of fruits) {
    console.log(fruit);
    fruit = 'apercot'; // Изменение переменной fruit не изменяет массив fruits 
}
console.log(fruits)





