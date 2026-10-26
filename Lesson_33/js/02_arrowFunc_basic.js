const user = {
    name: "Сашка Деркач",
    age: 26,
    showName: function() {
        console.log(`Привет!Я геюга по имени ${this.name}`);
    }
}

user.showName(); // Привет!Я геюга по имени Сашка Деркач

const user1 = {
    name: "Вася Пупкин",
    age: 30,
    showName() {
        console.log(`Привет!Я геюга по имени ${this.name}`);
    }
}

user1.showName(); // Привет!Я геюга по имени Вася Пупкин

const user2 = {
    name: "Петя Иванов",
    age: 28,
    showName: showName
}
function showName() {
    console.log(`Привет!Я геюга по имени ${this.name}`);
}


const user3 = {
    name: "Маша Смирнова",
    age: 25,
    showName: showName
}
user3.showName(); // Привет!Я геюга по имени Маша Смирнова

const user4 = {
    name: "Иван Петров",
    age: 32,
    showName: showName
}
user4.showName(); // Привет!Я геюга по имени Иван Петров