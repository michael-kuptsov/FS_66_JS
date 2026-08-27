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

let item1 = {
    name: 'notebook Air',
    price: 1000,
    description: 'laptop',
    category: 'electronics',
    quantity: 5,
    info: infoFunction
}

console.log(item1)
console.log(item1.info())

let item2 = new Product('notebook Pro', 1500, 'laptop', 'electronics', 3);
item2.note = 'This is a high-end laptop';
console.log(item2)
console.log(item2.info())


function Product(name, price, description, category, quantity) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.quantity = quantity;
    this.info = infoFunction;
}

function infoFunction() {
    return `Name: ${this.name}, Price: ${this.price}, Description: ${this.description}, Category: ${this.category}, Quantity: ${this.quantity}`;
}

const arr = [item1, item2, new Product('notebook Air', 1000, 'laptop', 'electronics', 5),
new Product('notebook Pro', 1500, 'laptop', 'electronics', 3),
new Product('notebook Air', 1000, 'laptop', 'electronics', 5),
new Product('notebook Pro', 1500, 'laptop', 'electronics', 3)];
console.log(arr)
console.log(arr[2].info())
console.log('Print Array')
printArray(arr)
console.log(' Print Array 2')
printArray2(arr)

function printArray2(arr) {
    if(!Array.isArray(arr)) {
        console.log('Not an array');
        return;
    }else{
        arr.forEach((item, index) => {
            console.log(`Товар ${index + 1}`);
            for (let key in item) {
                let value = typeof item[key] === 'function' ? item[key]() : item[key]();
                console.log(`${key}: ${value}`);
            }
        });
    }

}

function printArray(arr) {
    if(!Array.isArray(arr)) {
        console.log('Not an array');
        return;
    }else {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Товар ${i+1}`);
            let item = arr[i];
            for (let key in item) {
                let value = typeof item[key] === 'function' ? item[key]() : item[key]();
                console.log(`${key}: ${value}`);
            }
        }
    }
}