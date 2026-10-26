function test() {
  const message = "Hello, Closure!";
  console.log(message);
}

console.log("=====closure=====");
test();

// console.log(message); // ReferenceError: message is not defined, так как message доступна только внутри функции test

function outer() {
  const message = "Hello from outer!";
  function inner() {
    console.log(message);
  }
  inner();
}

outer(); // Вызов функции outer, которая внутри вызывает inner и выводит сообщение 'Hello from outer!'

function outer2() {
  const message3 = "Hello from outer2!";
  function inner2() {
    console.log(message3);
  }
  return inner2;
}

const savedInner2 = outer2();
savedInner2(); // Вызов сохраненной функции inner2, которая выводит сообщение 'Hello from outer2!'



function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };

};


    const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


const counterA = createCounter();
const counterB = createCounter();
console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterA());
console.log(counterA());
console.log(counterA());


console.log('Замыкания и DOM')



function createCounter2() {
    let count = 0;
    return function() {
        count++;
        return count;
    };

};

const counter2 = createCounter2()

const button = document.querySelector("#counterButton");
const result = document.querySelector("#counterResult");

button.addEventListener("click", function() {
    const value = counter2();
    result.textContent = value;
    console.log('Counter value:', value);
});


const counterC = createCounter2();
const counterD = createCounter2();
console.log('Замыкание как фабрика функций')

function createMultiplyer(factor) {
    //localFactor = factor;
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplyer(2);
const triple = createMultiplyer(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
const quadruple = createMultiplyer(4);
console.log(quadruple(5)); // 20