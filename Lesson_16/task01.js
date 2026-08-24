let temperature = 25;
// Python => and , or , not
// JavaScript => && , || , !

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature >= 0 && temperature < 20) {
  console.log("Холодно");
} else if (temperature >= 20 && temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature < 20) {
  console.log("Холодно");
} else if (temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}

let number = 5;
console.log(number % 2 === 0 ? 'Четное' : 'Нечетное'); // ? это тернарный оператор, который является сокращенной формой записи условного оператора if-else. В данном случае, если выражение number % 2 === 0 (проверка на четность) истинно, то будет выведено 'Четное', иначе 'Нечетное'.


let age = 15;
let isAdult = age > 18;
console.log(isAdult ? 'Совершеннолетний' : 'Несовершеннолетний'); // Проверка возраста с использованием тернарного оператора. Если age больше 18, то выводится 'Совершеннолетний', иначе 'Несовершеннолетний'.
number = 5;
switch (number) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day number');
}
// то тут происходит проверка значения переменной number. Если number равно 1, то выводится 'Monday', если 2 - 'Tuesday' и так далее. Если значение number не соответствует ни одному из указанных случаев (case), выполняется блок default, который выводит 'Invalid day number'.

number = 6;
switch (number) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('Invalid day number');
}


let myName = null;
let result = myName ?? "Unknown";
console.log(result); // Выводит "Unknown", так как myName является null. Оператор ?? возвращает значение слева, если оно не null или undefined, иначе возвращает значение справа.

let price = 25.5;
console.log(price ?? 'Price not available'); // Выводит 25.5, так как price имеет значение. Оператор ?? возвращает значение слева, если оно не null или undefined, иначе возвращает значение справа.

