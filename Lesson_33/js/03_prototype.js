// В Джава скрипт можно наследовать свойства и методы от других объектов с помощью прототипов.

const animal = {
    eats: true,
    walk() {
        console.log("Animal is walking");
    }
};

const dog = Object.create(animal);
dog.name = 'Rex';

console.log(dog.eats); // true
console.log(dog.name); // Rex
dog.walk(); // Animal is walking

//Как проверить прототипную цепочку
console.log(Object.getPrototypeOf(dog) === animal); // true

const cat = Object.create(animal);
cat.name = 'Whiskers';

console.log(cat.eats); // true
console.log(cat.name); // Whiskers
cat.walk(); // Animal is walking
console.log(Object.getPrototypeOf(cat) === animal); // true

console.log(Object.hasOwn(dog, 'walk')); // false
console.log(typeof dog.walk); // function
console.log(Object.hasOwn(cat, 'walk')); // false
console.log(typeof cat.walk); // function
//Функции, унаследованные через прототип, не являются собственными свойствами объекта.

dog.eats = false;
console.log(dog.eats); // false
console.log(animal.eats); // true


animal.eats = 'wert';
console.log('....',dog.eats); // false
console.log('....',cat.eats); // false
//Классы в JavaScript также используют прототипное наследование.Классы для удобства предоставляют синтаксис для создания объектов и их методов.
class Animal1{
    constructor(name){
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}

const animal1 = new Animal1('Rex');
animal1.walk(); // Rex is walking

//Конструктор это функция, которая используется для создания и инициализации объектов класса.

class Dog1 extends Animal1{
    bark() {
        console.log(`${this.name} is barking`);
    }
}
// Extends используется для создания класса-наследника, который наследует свойства и методы родительского класса.

const dog1 = new Dog1('Tyzik');
dog1.walk(); // Tyzik is walking
dog1.bark(); // Tyzik is barking

class Dog2 extends Animal1{
    constructor(name, breed) {
        super(name); //super вызывает конструктор родительского класса Animal1 с аргументом name.
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const dog2 = new Dog2('Bobik', 'Golden Retriever');
dog2.walk(); // Bobik is walking
dog2.bark(); // Bobik is barking
console.log(dog2.breed); // Golden Retriever

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes sound`);
    }
}


class Dog3 extends Animal2 {
    speak() {
        console.log(`${this.name} barks`);
    }
}
const animal2 = new Animal2('Animal');
const dog3 = new Dog3('Pushok');
animal2.speak(); // Animal makes sound
dog3.speak(); // Pushok barks
