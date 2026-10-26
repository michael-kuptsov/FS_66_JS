'use strict';
//Лексичная область видимости this в стрелочных функциях определяется контекстом, в котором функция была создана, а не вызвана.

const user = {
    name: 'Jhon',
    showName() {
        console.log('Outer', this.name) // Outer Jhon

        function innerFunction() {
            console.log('Inner', this.name) // Inner undefined
        }
        innerFunction()
    }
}

user.showName(); // Outer Jhon, Inner undefined

const user1 = {
    name: 'Jhon',
    showName() {
        console.log('Outer', this.name) // Outer Jhon

        const innerFunction = () => {
            console.log('Inner', this.name) // Inner Jhon
        }
        innerFunction()
    }
}


const user2 = {
    name: 'Jhon',
    showName: () => {
        console.log('Outer', this.name) // Outer undefined
    }
}

user2.showName(); // Outer undefined

const user3 = {
    name1: 'Jhon',
    showName() {
        console.log('Outer', this.name1) // Outer Jhon
    }
}


user3.showName(); // Outer Jhon


const user4 = {
    name2: 'Jhon',
    showName: function () {
        console.log('Outer', this.name2) // Outer Jhon
    }
}
user4.showName(); // Outer Jhon