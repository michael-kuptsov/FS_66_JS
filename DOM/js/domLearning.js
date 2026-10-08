console.log("DOM Learning JS file loaded");


// function calculator(num1, num2, operation){
//     let result;
//     if(operation === "add" || operation === "+"){
//         result = num1 + num2;
//     } else if(operation === "subtract" || operation === "-"){
//         result = num1 - num2;
//     } else if(operation === "multiply" || operation === "*"){
//         result = num1 * num2;
//     } else if(operation === "divide" || operation === "/"){
//         result = num1 / num2;
//     }
//     return result;
// }

function getSum(num1, num2){
    const result = num1 + num2;
    return result;
}

let number1 = 5;
let number2 = 10;


let result = getSum(number1, number2);
console.log(result);
console.log('Task completed');

number1 = 'hello';
result = getSum(number1, number2);
console.log(result);
console.log('Task completed');

number1 = undefined;
result = getSum(number1, number2);
console.log(result);
console.log('Task completed');