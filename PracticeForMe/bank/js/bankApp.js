import { BankAccount, SavingsAccount } from "./bankFunction.js";   

const balance = document.querySelector('#balance')
const depositeButton = document.querySelector('#depositeButton')
const inputDeposite = document.querySelector('#inputDeposite')
const bankForm = document.querySelector('#bankForm')

const savings = new SavingsAccount("Миша", 1000, 5);

savings.deposit(200);
console.log(savings.applyInterest());
console.log(savings.applyInterest());

const second = new SavingsAccount("Анна", 500, 10);
second.deposit(100);

console.log(savings.balance, '<=>', second.balance);


console.log(second.withdraw(100));
console.log(second.withdraw(1000));
console.log(second.withdraw('10'));

balance.textContent = second.balance

bankForm.addEventListener('submit', function handleDeposite(event) {
    event.preventDefault();
    second.deposit(+inputDeposite.value);
    balance.textContent = second.balance;
    inputDeposite.value = '';
})
