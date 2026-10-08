// const products = [
//   { name: "Mouse", price: 80, inStock: true },
//   { name: "Keyboard", price: 250, inStock: false },
//   { name: "Monitor", price: 900, inStock: true },
//   { name: "Cable", price: 30, inStock: true },
//   { name: "Headphones", price: 300, inStock: true }
// ];

// const resultProducts = products.filter(product => product.price > 100 && product.inStock).sort((a,b) => a.price - b.price).map(product => `${product.name} - ${product.price}`);
// console.log(resultProducts);

// const secondResultOfProducts = products.reduce((acc, product) => {
//     acc.totalPrice += product.price
//     let mostExpensive = -Infinity;
//     if (product.inStock){
//         acc.inStockCount += 1;
//     } 
    
//     if (product.price > acc.mostExpensivePrice){
//         acc.mostExpensivePrice = product.price;
//         acc.mostExpensiveName = product.name;
//     }
//     return acc;
// }, {
//   totalPrice: 0,
//   inStockCount: 0,
//   mostExpensiveName: "",
//   mostExpensivePrice: 0,
// });

// console.log(resultProducts);
// console.log(secondResultOfProducts);


// const account1 = {
//   owner: "Bob",
//   balance: 1000,

//   info() {
//     return `${this.owner}: ${this.balance}`;
//   }
// };

// const account2 = {
//   owner: "Alice",
//   balance: 500,
//   info: account1.info
// };

// console.log(account1.info());
// console.log(account2.info());

// const infoFunction = account1.info;
// // console.log(infoFunction());
// //account2 инфо в нем будет работать, так как метод info привязан к объекту account2 через ссылку на account1.info
// //infoFunction работать не ьудет не знаю почему

// function Account(owner, balance, deposit, withdraw) {
//     this.owner = owner;
//     this.balance = balance;
//     this.deposit = deposit;
//     this.withdraw = withdraw;
//     this.info = function() {
//         return `Name of owner: ${this.owner} <=> Balance: ${this.balance}`;
//     }
//     this.deposit = function(amount){
//         if (amount > 0) {
//             this.balance += amount;
//             return `Transaction successful, new balance: ${this.balance}`;
//         }
//         return `Transaction failed, invalid amount`;
//     }
//     this.withdraw = function(amount){
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             return `Transaction successful, new balance: ${this.balance}`;
//         }
//         return `Transaction failed, insufficient funds or invalid amount`;
//     }

// }

// const ArthurAccount = new Account("Arthur", 2000, 0, 0);
// console.log(ArthurAccount.info());
// console.log(ArthurAccount.deposit(500));
// console.log(ArthurAccount.withdraw(1000));
// console.log(ArthurAccount.info());

// Product.prototype.getInfo = function() {
//   return `Name: ${this.name} <=> Price: ${this.price} <=> Amount: ${this.amount}`;
// }

// function Product(name, price, amount) {
//   this.name = name;
//   this.price = price;
//   this.amount = amount;
//   this.info = function() {
//     return `Name: ${this.name} <=> Price: ${this.price} <=> Amount: ${this.amount}`;
//   }
//   this.getTotal = function() {
//     return this.price * this.amount;
//   }
//   this.addAmount = function(amount) {
//     if (amount > 0 && typeof amount === "number") {
//         this.amount += amount;
//         return { success: true, amount: this.amount };
//     }
//     return { success: false };
//   }
//   this.sell = function(amount) {
//     if (amount > 0 && amount <= this.amount && typeof amount === "number") {
//       this.amount -= amount;
//       return { success: true, amount: this.amount };
//     }
//     return { success: false };
//   }
//   this.changePrice = function(newPrice) {
//     if (newPrice > 0 && typeof newPrice === "number") {
//       this.price = newPrice;
//       return { success: true, price: this.price };
//     }
//     return { success: false };
//   }
// }

// const item1 = new Product("Milk", 8, 2);
// const item2 = new Product("Bread", 6, 3);
// console.log(item1.getTotal()); // 16

// item1.addAmount(3);

// console.log(item1.amount);     // 5
// console.log(item1.getTotal()); // 40
// item1.sell(1);
// console.log(item1.amount);     // 4
// console.log(item1.getTotal()); // 32
// item1.changePrice(10);
// console.log(item1.price);     // 10
// console.log(item1.getTotal()); // 40


// console.log(item1.sell("2"));         // 1
// console.log(item1.sell(2));           // 2
// console.log(item1.sell(4));           // 3
// console.log(item1.amount);           // 4
// console.log('---')
// console.log(item1.changePrice("12")); // 5
// console.log(item1.price);            // 6
// console.log(item1.changePrice(12));   // 7
// console.log(item1.getTotal());        // 8

// const milk = new Product("Milk", 8, 5);
// const bread = new Product("Bread", 6, 3);

// console.log(milk.getInfo === bread.getInfo);
// console.log(bread.getInfo());


function Counter(start) {
  this.value = start;
  this.main = this.value;

}

Counter.prototype.getValue = function() {
  return this.value;
}
Counter.prototype.increment = function() {
  this.value ++;
  return this.value;
}
Counter.prototype.decrement = function() {
  this.value --;
  return this.value;
}

Counter.prototype.reset = function() {
  this.value = this.main
  return this.value
}
const first = new Counter(0);
const second = new Counter(10);

console.log(first.getValue());  // 0
console.log(second.getValue()); // 10
console.log(first.value);  // 0
console.log(second.value); // 10