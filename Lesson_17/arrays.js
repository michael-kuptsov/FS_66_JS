let ar1 = ['banana', 'apple', 'orange', 7, 3, true, undefined, null];//Но желательно чтоб массив был однородным, то есть состоял из элементов одного типа.
console.log(ar1)
console.log('-------------------------------');
//Массивы не для хранения данных а для пользования ими
const ar2 = ['banana', 'apple', 'orange', 7, 3, true, undefined, null];
ar2[0] = 'kiwi';//Изменяем элемент массива
console.log(ar2);
console.log('-------------------------------');
ar1.push(ar2);
console.log(ar1);
console.log('-------------------------------');
console.log(ar1.length);
// У каждого массива есть изначально метод toString
let arStr = ar1.toString();
console.log(arStr);
console.log('-------------------------------');
const ar3 = ['banana', 'apple', 'orange'];
console.log(ar3);
arStr = ar3.toString();
console.log(arStr);
console.log('-------------------------------');
// Важно что метод toString не выводит такие вещи как NaN, Infinity, undefined, null, а также функции.
//Элементы в toString выводятся через запятую, без пробелов.
arStr = ar3.join(' - ');//Метод join позволяет указать разделитель между элементами массива
console.log(arStr);
console.log('-------------------------------');
arStr = ar3.join(' \n ');// все строки будут разделены переносом строки
console.log(arStr);
console.log('-------------------------------');
console.log(ar3.at(0));//Метод at позволяет получить элемент массива по индексу, но в круглых скобках указывается индекс, а не в квадратных
console.log(ar3[0]);//Метод at позволяет получить элемент массива по индексу, но в круглых скобках указывается индекс, а не в квадратных
console.log('-------------------------------');
console.log(typeof ar3);//Массивы это объект, поэтому typeof возвращает object
console.log(Array.isArray(ar3));//Метод Array.isArray позволяет проверить является ли объект массивом
//Array = массив
const ar4 = [1, 2, 3, 4, 5];
console.log(ar4);
console.log('-------------------------------');
const ar5 = ar3.concat(ar4);//Метод concat позволяет объединить два массива в один
console.log(ar5);
console.log('-------------------------------');
let ar6 = ar3.concat(ar4, 'kiwi', 'melon');//Метод concat позволяет объединить два массива в один, а также добавить новые элементы
console.log(ar6);
ar6 = ar6.toString();
console.log(ar6);
const ar7 = ar4.concat(ar3, ar1);//Метод concat позволяет объединить два массива в один, а также добавить новые элементы
console.log(ar7);
console.log('-------------------------------');
console.log(ar3);
ar3[6] = 'kiwi';//Добавляем элемент в массив по индексу, если индекс больше чем длина массива, то массив будет расширен и недостающие элементы будут undefined
console.log(ar3);
console.log('-------------------------------');
console.log(ar3.length);//Длина массива увеличилась, так как мы добавили элемент по индексу 6, а до этого длина массива была 3
console.log(ar3[4], typeof ar3[4]);//undefined
delete ar3[0];//Удаляем элемент массива по индексу, но длина массива не изменится, а элемент будет undefined
console.log(ar3);
console.log('-------------------------------');
console.log(ar3.length);//Длина массива не изменилась, так как мы удалили элемент по индексу 0, но длина массива осталась 7