function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


const result1 = add(5, 3);
const result2 = subtract(5, 3);
const result3 = multiply(5, 3);

console.log(result1);
console.log(result2);
console.log(result3);

const users = [
    {id: 1, name: "John", age: 30,}
    ,{id: 2, name: "Jane", age: 17}
    ,{id: 3, name: "Bob", age: 40}
]

function getAdultUsers(users) {
    return users.filter(user => user.age >= 18);
}

const adultUsers = getAdultUsers(users);
console.log(adultUsers);

const result = document.querySelector("#result");


function renderUsers(users) {
    users.forEach(user => {
        const userElement = document.createElement("p");
        userElement.textContent = `${user.name} (${user.age})`;
        result.append(userElement);
    });
}
renderUsers(adultUsers);