'use strict';

const button = document.querySelector('#demoButton');
// При вызове через addEventListener this будет ссылаться на элемент, к которому привязан обработчик
// button.addEventListener('click', function() {
//     console.log(this); // this будет ссылаться на кнопку
//     console.log(this.textContent); // this будет ссылаться на текст кнопки
// });


// button.addEventListener('click', () => {
//     console.log(this); // this будет ссылаться на внешний контекст, а не на кнопку
// })// window

button.addEventListener('click', (event) => {
   console.log(event.currentTarget); // элемент на котором зарегистрирован обработчик
});

// Важно помнить, что стрелочные функции не имеют собственного this, поэтому внутри них this будет ссылаться на внешний контекст, а не на элемент, к которому привязан обработчик.

// разница между target и currentTarget
// event.target - элемент, на котором произошло событие
// event.currentTarget - элемент, на котором зарегистрирован обработчик 

button.addEventListener('click', (event) => {
    console.log('target:', event.target);
    console.log('currentTarget:', event.currentTarget);
});

//arguments and arrow functions
// В стрелочных функциях нет собственного объекта arguments, поэтому внутри них arguments будет ссылаться на внешний контекст, а не на аргументы самой функции.

function showArguments() {
    console.log(arguments);
}

// showArguments(1, 2, 3, 4);
        // const showArgumentsArrow = () => { 
        //     console.log(arguments); // ReferenceError: arguments is not defined in arrow functions
        // }

const showArgumentsArrow = (...args) => {
    console.log(args);
}

showArgumentsArrow(1, 2, 3, 4); 

// arrows and new

// Стрелочные функции не могут быть использованы как конструкторы с оператором new
const ArrowConstructor = () => {};
// const instance = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor

function User(name) {
    this.name = name;
}

const user = new User('John');
console.log(user); // User { name: 'John' }

const UserArrow = (name) => {
    this.name = name;
}
// const userArrow = new UserArrow('John'); // TypeError: UserArrow is not a constructor


//                          обычная функция                  стрелочная функция
// синтаксис                function(0){}                    ()=>{}            
// собственный this         да , смотри способ вызова        нет ,используется внешний
// NEW                      да                               нет
// arguments                да                               нет
// call/apply/bind          могут this                       нет
// краткий return           нет                              да
// удобство для callbacks   да                               да особенно при необходимости внешнего this
// Обычная - когда нам нужен метод обьекта
//Когда нам нуден конструктор или метод объекта когда нам нужен this от Dom элемента в обработчике событий

// Стрелочная функция когда нам нужен this от внешнего контекста, для коротких преобразований,для преобразования массивово фильтер и map и обработячикоы событий, для коллбеков в промисах и таймерах и ДОМ если не нудке собственный зис