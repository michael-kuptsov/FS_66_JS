'use strict';
console.log('User timer script loaded');


const nameInput = document.querySelector('#userName');
const showNowButton = document.querySelector('#showNow');
const showBrokenButton = document.querySelector('#showBroken');
const showArrowButton = document.querySelector('#showArrow');
const showBindButton = document.querySelector('#showBind');
const resultParagraph = document.querySelector('#message');

const user = {
    name: '',
    showName() {
        console.log('This is this',this);
        const message = `Hello, ${this.name}`

        resultParagraph.textContent = message;
        return message;
    }
}

function updateUserName() {
const name = nameInput.value.trim();
user.name = name || 'Guest';
}

showNowButton.addEventListener('click',  () =>{
    updateUserName();
    user.showName()
});

showBrokenButton.addEventListener('click', () => {
    updateUserName();
    resultParagraph.textContent = 
    'Waiting 1 sec';
    setTimeout(user.showName, 1000);
});



showArrowButton.addEventListener('click', ()=> {
    updateUserName();
    resultParagraph.textContent = 'Waiting 1 sec'
    setTimeout(
        () => {
            user.showName();
        },1000
    )
})

showBindButton.addEventListener('click', () => {
    updateUserName();
    resultParagraph.textContent = 
    'Waiting 1 sec';
    setTimeout(user.showName.bind(user), 1000);
});


console.log('Simple tests to learn context behavior with setTimeout and different ways of calling showName');

const user1 = {
    name: 'David',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

user1.greet();


const user2 = {
    name: 'Alice',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

user2.greet();

// const fn = user2.greet;
// fn();
// Простыми словами почему так
// Когда мы вызываем fn(), this внутри greet() не указывает на user2, а на глобальный объект (или undefined в строгом режиме), поэтому this.name не определено.
// Чтобы сохранить контекст, можно использовать bind:
const boundFn = user2.greet.bind(user2);
boundFn();
// Это правило и так нужно работать по дефолту с методами объектов, если мы хотим сохранить контекст.В каждом случае, когда метод передается как колбэк или используется отдельно от объекта, нужно явно привязывать контекст с помощью bind.

const user3 = {
    name: 'Bob',
    greet() {
        const innet = () => {
            console.log(`Hello, ${this.name}`);
        }
        innet();
    }
}

user3.greet();// В этом случае this внутри стрелочной функции innet указывает на this из внешней функции greet, который ссылается на user3. Поэтому this.name будет 'Bob'.

const user4 = {
    name: 'Bobby',
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
}

user4.greet();// В этом случае this внутри стрелочной функции greet не указывает на user4, а на внешний контекст (глобальный объект или undefined в строгом режиме). Поэтому this.name будет undefined.