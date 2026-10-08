const poducts = [
    {
        name: "Молоко" ,count: 2, price: 1.5, expirationDate: "2024-07-01"
    },
    {
        name: "Хлеб", count: 1, price: 0.8, expirationDate: "2024-06-15"
    },
    {
        name: "Яйца", count: 5, price: 0.5, expirationDate: "2024-06-20"
    }
]

console.log('=====Содержимое холодильника=====');
console.log(poducts);
const p1 = {name: 'Сыр', count: 1, price: 2.0, expirationDate: "2024-07-10"};

poducts.push(p1);
console.log('=====Содержимое холодильника после добавления нового продукта=====');
console.log(poducts);

console.log('JSON');
    console.log(JSON.stringify(poducts)); 