const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

console.log('============= Index Of, Last Index Of =============');
console.log(arr.indexOf('three')); // 2
console.log(arr.indexOf('eleven')); // -1
console.log(arr.lastIndexOf('three')); // 12
console.log(arr.lastIndexOf('eleven')); // -1

console.log('============= Includes =============');
console.log(arr.includes('three')); // true
console.log(arr.includes('eleven')); // false

console.log('============= Find, Find Index =============');

console.log(arr.find((item) => item.toLowerCase() === 'three')); // 'three'
console.log(arr.findIndex((item) => item.toLowerCase() === 'three')); // 2
// Что такое item? Это элемент массива, который мы проверяем в функции обратного вызова. В данном случае мы ищем элемент, который равен 'three' (без учета регистра). item может быть любым именем переменной, которое вы хотите использовать для представления текущего элемента массива в функции обратного вызова.
console.log(arr.find((item) => item.toLowerCase() === 'three')); // 'three'
console.log(arr.findIndex((item) => item.toLowerCase() === 'three')); // 2
console.log(arr.find((item, index) => index % 2 === 0 && item.length > 4)); // 'three'
console.log(arr.filter((item, index) => index % 2 === 0 && item.length > 4)); // ['three', 'seven', 'three', 'seven']

console.log('============= ObjArrays =============');

const persons = {
    john: { name: 'John', age: 25 },
    alice: { name: 'Alice', age: 30 },
    bob: { name: 'Bob', age: 25 },
    charlie: { name: 'Charlie', age: 30 }
};

const person = {
    name: 'Bob', age: 25
};
let res = Object.values(persons).findIndex((p) => p.name === person.name && p.age === person.age);
console.log(res); 
res = Object.values(persons).find((p) => p.age < 32);
console.log(res);

console.log("========ForEach========");

Object.values(persons).forEach((p) => console.log( `Name: ${p.name}, Age: ${p.age}`));
res = Object.values(persons).forEach((p,i) => 
    console.log( `${i+1}: Name: ${p.name}, Age: ${p.age}`));
console.log(res);//undefined

console.log("========Map========");
const names = Object.values(persons).map((p) => p.name.toUpperCase());
console.log(names);
res= Object.values(persons).map((p,i) => (`${i+1}: Name: ${p.name}, Age: ${p.age}`));
console.log(res);

console.log('==============Reduce===============');
res = arr.reduce((acc, item) => acc + item.length, 0)/arr.length;
console.log(res);

res = arr.reduce((acc, item) => acc+=item+'-', 'concat: ');
console.log(res);

res = Object.values(persons).reduce((youngestPerson, p) => youngestPerson.age > p.age ? p: youngestPerson);
console.log(res);