// без обьектов 

let userName = 'Vasya';
let userAge = '25';
let isStudent = true;

console.log('Age = ', userAge);

// Обьекты 

let user = {
    name: 'Ivan',
    age: 25,
    isStudent: true
};

console.log(user);
console.log(user.name);


user.age = 26;

console.log(user.age);

 user.mail = 'ivan@example.com';
 console.log(user.mail);
 delete user.isStudent;
 console.log(user.isStudent);

 const user1 = {
    name: 'Petr',
    age: 30,
    isStudent: false
    //Ссылка на месте в памяти где лежит обьект
};

console.log(user1);

// user1 = 25;
// console.log(user1);

// user1 = user;
// console.log(user1);

user1.age = 33;
console.log(user1)
//Отдельные поля можно менять в const а переприсваивать нет

user1.email = 'test@test.com';
console.log(user1);
// Добавлять можно тоже в const

//типизация 

console.log(typeof user1, typeof user1.name );
