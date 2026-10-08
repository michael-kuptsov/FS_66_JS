console.log("task05 run");

const dataBase = [];

let currentID = 0;

// id | name of product | price

function saveProduct(title, price) {
    if (typeof (title) !== "string" || title.trim() === "") {
        throw new Error("Название продукта должно быть строкой и не пустым");
    }
    if (!Number.isFinite(price)) {
        throw new Error("Цена продукта должна быть числом");
    }
    dataBase.push({
        id: currentID++,
        title: title,
        price: price,
    });
}

saveProduct("Яблоко", 12.50);
saveProduct("Банан", 8.30);
saveProduct("Апельсин", 15.00);
saveProduct("Груша", 10.00);

console.log('task05 finished');
console.log(dataBase);
try {
    saveProduct("", 5);

}catch (error) {
    console.log(error.message);
}

try {
    saveProduct("Мандарин", "не число");
} catch (error) {
    console.log(error.message);
}

console.log(dataBase);