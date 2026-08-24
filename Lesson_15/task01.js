// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//Ctrl+F5 - run without debugging

// For Mac:

// ⌘ + P           Быстро открыть файл
// ⌘ + Shift + P   Command Palette
// ⌘ + B           Скрыть/показать боковую панель
// ⌘ + /           Закомментировать строку
// ⌥ + ↑ / ↓       Переместить строку
// ⌘ + D           Выделить следующее совпадение
// ⌘ + Shift + L   Выделить все совпадения
// ⌘ + Enter       Новая строка снизу
// ⌘ + Shift + Enter  Новая строка сверху
// ⌘ + J           Показать/скрыть панель терминала

// Дублировать строку вниз: ⇧ Shift + ⌥ Option + ↓
// Дублировать строку вверх: ⇧ Shift + ⌥ Option + ↑

let user = {
    name: 'John',
    age: 30, 
    isAdmin: true,
    email: 'john@example.com',
    city: 'New York',
    'is a developer': true
};

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.email);
console.log(user.city);
console.log(user);

// Обьекты и Json - это разные вещи. Обьект - это структура данных, которая может содержать свойства и методы. JSON (JavaScript Object Notation) - это текстовый формат обмена данными, который используется для передачи данных между сервером и клиентом. JSON является подмножеством синтаксиса JavaScript, но не поддерживает методы и функции.
//Ключ жто строка в JS
//Обьект это имя свойства и значение

console.log(user["name"]);
let fieldName = 'age';
console.log(user[fieldName]);

//Добавление свойства в обьект
// user.isAdmin = false;
// console.log(user);

//Удаление свойства из обьекта
// delete user.age;
// console.log(user);

user['second name'] = 'Smith';
console.log(user['second name']);
console.log(user['is a developer']);
console.log(user)

//Разница обьекта и JSON в том, что обьект может содержать методы и функции и undefined, а JSON - нет. JSON используется для передачи данных между сервером и клиентом, а обьект используется для хранения данных в памяти программы.

console.log('===========')
console.log(user)
console.log('===========')

let userJson = JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson);
console.log(user.name);
console.log(userJson.name); // undefined, потому что userJson - это строка, а не обьект
let parsedUser = JSON.parse(userJson);
console.log(parsedUser.name); // теперь это работает, потому что parsedUser - это обьект

let productJson = '{"name": "Laptop", "price": 1000, "isAvailable": true}';
let product = JSON.parse(productJson); //parse - преобразует JSON в обьект что дает возможность работать с ним как с обьектом
console.log(product);
console.log(typeof product); //object
console.log(product.name); //Laptop











