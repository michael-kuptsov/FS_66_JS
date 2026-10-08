// const users = [
//   { name: "John", age: 17, active: true },
//   { name: "Alice", age: 25, active: false },
//   { name: "Bob", age: 31, active: true },
//   { name: "Charlie", age: 22, active: true }
// ];

// const ageActiveUsers = (user) => user.age > 18 && user.active === true;

// const myFilter = (arr, callback) => {
//     const result = [];
//     for (let i = 0 ; i < arr.length; i++) {
//     if (callback(arr[i])) {
//         result.push(arr[i]);
//     }
//     }
//     return result};

// console.log(myFilter(users, ageActiveUsers));
// // HW 21

// let item1 = {
//     name: 'notebook Air',
//     price: 1000,
//     description: 'laptop',
//     category: 'electronics',
//     quantity: 5,
//     info: infoFunction
// }

// console.log(item1)
// console.log(item1.info())

// let item2 = new Product('notebook Pro', 1500, 'laptop', 'electronics', 3);
// item2.note = 'This is a high-end laptop';
// console.log(item2)
// console.log(item2.info())


// function Product(name, price, description, category, quantity) {
//     this.name = name;
//     this.price = price;
//     this.description = description;
//     this.category = category;
//     this.quantity = quantity;
//     this.info = infoFunction;
// }

// function infoFunction() {
//     return `Name: ${this.name}, Price: ${this.price}, Description: ${this.description}, Category: ${this.category}, Quantity: ${this.quantity}`;
// }

// const arr = [item1, item2, new Product('notebook Air', 1000, 'laptop', 'electronics', 5),
// new Product('notebook Pro', 1500, 'laptop', 'electronics', 3),
// new Product('notebook Air', 1000, 'laptop', 'electronics', 5),
// new Product('notebook Pro', 1500, 'laptop', 'electronics', 3)];
// console.log(arr)
// console.log(arr[2].info())
// console.log('Print Array')
// printArray(arr)
// console.log(' Print Array 2')
// printArray2(arr)

// function printArray2(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('Not an array');
//         return;
//     }else{
//         arr.forEach((item, index) => {
//             console.log(`Товар ${index + 1}`);
//             for (let key in item) {
//                 let value = typeof item[key] === 'function' ? item[key]() : item[key]();
//                 console.log(`${key}: ${value}`);
//             }
//         });
//     }

// }

// function printArray(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('Not an array');
//         return;
//     }else {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(`Товар ${i+1}`);
//             let item = arr[i];
//             for (let key in item) {
//                 let value = typeof item[key] === 'function' ? item[key]() : item[key]();
//                 console.log(`${key}: ${value}`);
//             }
//         }
//     }
// }

// const products = [
//   { name: "Mouse", price: 80, inStock: true },
//   { name: "Keyboard", price: 250, inStock: false },
//   { name: "Monitor", price: 900, inStock: true },
//   { name: "Cable", price: 30, inStock: true },
//   { name: "Headphones", price: 300, inStock: true }
// ];

// const checkProduct = (item) => { 
//     if(item.price < 500 && item.inStock === true){
//         return true
//     }
// }

// const myFilter = (arr, callback) =>{
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(myFilter(products, checkProduct))


// const numbers = [2, 4, 6, 8];

// const double = (item) => {
//   return item * 2;
// };

// const myMap = (arr, callback) => {
//     let result = [];
//     let res = 0;
//     for (let i = 0; i < arr.length; i++){
//         res = callback(arr[i]);
//         result.push(res)
//     }
//     return result;
// }

// console.log(myMap(numbers, double))



// const products = [
//   { name: "Mouse", price: 80 },
//   { name: "Keyboard", price: 250 },
//   { name: "Monitor", price: 900 }
// ];

// const getProductInfo = (item) => {
//     return `${item.name} - ${item.price}$`
// }

// const myMap = (arr, callback) => {
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         result.push(callback(arr[i]))
//     }
//     return result
// }

// console.log(myMap(products, getProductInfo))


// const users = [
//   { name: "John", age: 17, active: true },
//   { name: "Alice", age: 25, active: false },
//   { name: "Bob", age: 31, active: true },
//   { name: "Charlie", age: 22, active: true },
//   { name: "Kate", age: 19, active: true }
// ];

// const checkUser = (user) => {if (user.age >= 20 && user.active === true){
//     return true
// }}

// const transformer = (info) =>{
//         return `${(info.name)} : ${(info.age)}`
// }



// const processUsers = (arr, checkCallback, transformCallback) => {
//     let result =[];
//   for(let i = 0;i < arr.length; i++){
//     if (checkCallback(arr[i])){
//         result.push(transformCallback(arr[i]))
//     }
//   }
//   return result
// };

// console.log(
//   processUsers(users, checkUser, transformer)
// );


// const numbers = [3, 8, 12, 5, 20, 7];

// const checkNumber = (num) => {
//     if (num >= 6) {
//         return true;
//     }
// }

// const transformNumber = (num) => {
//     return `Number: ${num}`;
// }

// const processArray = (arr, checkCallback, transformCallback) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (checkCallback(arr[i])) {
//             result.push(transformCallback(arr[i]));
//         }
//     }
//     return result;
// };

// console.log(processArray(numbers, checkNumber, transformNumber));
const names = ["John", "Alice", "Bob", "Kate"];

const printName = (names) => {
    names.forEach((name, index) => console.log(`Index: ${index + 1}, Name: ${name}`));
}

printName(names);

const numbers = [1, 2, 3, 4, 5];

const mapNumbers = (numbers) => {
    return numbers.map((number) => number * 2);
}

console.log(mapNumbers(numbers));

const users = [
    { name: "John", age: 17, active: true },
    { name: "Alice", age: 25, active: false },
    { name: "Bob", age: 31, active: true },
    { name: "Charlie", age: 22, active: true }
];

const filterUsers = (users) => {
    return users.filter((user) => user.age > 18 && user.active);
}
const filteredUsers = filterUsers(users);
console.log(filteredUsers);
console.log(filteredUsers.map((user) => `${user.name} - ${user.age}`));