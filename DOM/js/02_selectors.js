console.log('02-selectors.js started');

const shopTitle = document.querySelector('#shopTitle');
const products = document.querySelectorAll('.product');
const buyButton = document.querySelector('#buyButton');


console.log(typeof shopTitle);
console.log(shopTitle.textContent);

console.log(typeof products);
console.log(products);

console.log(typeof buyButton);
console.log(buyButton);
