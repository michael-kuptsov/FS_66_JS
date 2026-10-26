'use strict';

const user = {
    name: "Сашка Деркач",
    age: 26,
    showName() {
        console.log(`User name is ${this.name}`);
    }
}
user.showName(); // User name is Сашка Деркач
// const show = user.showName;
// show(); // User name is undefined
// const boundShow = user.showName.bind(user);
// boundShow(); // User name is Сашка Деркач

const user1 = {
    name5: "Вася Пупкин",
    age: 30,
    showName() {
        console.log(`User name is ${this.name5}`);
    }
}
user1.showName(); // User name is Вася Пупкин

// setTimeout(user1.showName, 1000); // User name is undefined

// setTimeout(user1.showName(), 1000); // User name is Вася Пупкин (but immediately, not after 1 second)

//Var 1

setTimeout(() => user1.showName(), 1000); // User name is Вася Пупкин (after 1 second)

const boundShowName = user.showName.bind(user);//bind(user) = создает новую функцию с зафиксированным this
boundShowName(); // User name is Сашка Деркач

setTimeout(user.showName.bind(user), 1000); // User name is Сашка Деркач (after 1 second)
user.showName.bind(user)(); // User name is Сашка Деркач
user.showName.bind(user); // User name is Сашка Деркач (but nothing happens because the function is not called)

function introduce(user) {
    console.log(`Hello, my name is ${user.name}`);
}

const user3 = {
    name: 'Jhon',
}

introduce.call(user3); // Hello, my name is Jhon

function introduce2(city, country) {
    console.log(`Hello, my name is ${this.name} and I am from ${city}, ${country}`);
}

introduce2.call(user3, 'New York', 'USA'); // Hello, my name is Jhon and I am from New York, USA
introduce2.apply(user3, ['New York', 'USA']); // Hello, my name is Jhon and I am from New York, USA
introduce2.call(user3, ...['New York', 'USA']); // Hello, my name is Jhon and I am from New York, USA

introduce2.apply(user3); // Hello, my name is Jhon