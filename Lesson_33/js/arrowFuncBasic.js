function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Michael"));

const greet1 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet1("Michael"));

function sayHello() {
    console.log("Hello!");
}

sayHello();

const sayHello1 = () => {
    console.log("Hello!");
};

sayHello1();


const squareBrackets = (num) => {
    return num * num;
};
//var1 - обычная стрелочная функция
console.log(squareBrackets(5));
// square brackets на русском "квадратные скобки"

//var2 - сокращенная стрелочная функция
const square1 = num => {return num * num;};
console.log(square1(5));

const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));

const duble = (num) => {
    return num * 2;
};
console.log(duble(5));

const double1 = num => num * 2;
console.log(double1(5));

const first = (a, b) => {
    return a + b;
};
console.log(first(3, 4));

const second = (a, b) => a + b;
console.log(second(3, 4));

const third = (a, b) => {
    a * b;
};
console.log(third(3, 4));
//3 = undefined, потому что функция third не возвращает значение


const createUser = (name, age) => {
    return { name: name, age: age };
};
console.log(createUser("Michael", 30));
const createUser1 = (name, age) => ({ name: name, age: age });
console.log(createUser1("Michael", 30));

const createUser2 = (name, age) => ({name, age});// name = name : name, age = age : age

// Arrow function and Arrays

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(squaredNumbers);

const doubled1 = numbers.map(number => number * 2);
console.log(doubled1);

const doubled2 = numbers.map(number => { return number * 2; });
console.log(doubled2);

const ages = [18, 33, 22, 67, 11, 45];
const adults = ages.filter(age => age >= 18);
console.log(adults);

const names = ["Michael", "Sarah", "John", "Anna"];
names.forEach(name => {console.log(`Hello, ${name}`)});

const users5 = [
    {name: "Michael", age: 30},
    {name: "Sarah", age: 2},
    {name: "John", age: 28},
    {name: "Anna", age: 10}
]

// const adults5 = users5.filter(user => user.age >= 18);
const adults5 = users5.filter(({age}) => age >= 18);

console.log(adults5);