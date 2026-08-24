// objects

const person = {
    'First Name': 'Jhon',
    'Last Name': 'Doe',
    age: 30,
    'Full Name': function() {
        return `${this["First Name"]} ${this["Last Name"]}`; //this это объект person он ссылается на сам объект без него писать нужно было бы person["First Name"] и т.д.
    }
}

console.log(person["First Name"]);

console.log(person.age)
for (kei in person) {
    console.log(kei, person[kei]);
}

console.log(person["Full Name"]());

person.age = 345;
console.log(person.age);
console.log(person.hobby); //undefined
person.hobby = 'football';
console.log(person.hobby);

console.log('==================================================================')

const peter = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 19
}

console.log(peter);
console.log(person);

// console.log(peter.fullName()); //undefined  -  ERROR

peter.fullName = function() {
    return `${this.firstName.toUpperCase()} ${this.lastName.toWellFormed()}`;  // toWellFormed() -  метод который делает первую букву заглавной, а остальные маленькими
}
console.log(peter.fullName());

peter['hobby'] = 'gaming';
console.log(peter);

//fullName :[Function (anonymous)]  -  это функция которая находится в объекте peter, почнму она анонимная? потому что мы не дали ей имя, а просто присвоили ее в объекте, поэтому она анонимная.

let key = 'hobby';
console.log(peter.key); //undefined
console.log(peter[key]); //gaming
console.log(peter['key']); //undefined
console.log(peter['hobby']); //gaming
console.log(peter['key']); //undefined

for (k in peter) {
    console.log(k, peter[k])
    if ((typeof peter[k]) === 'function') {
        res = peter[k]()
        console.log(res)
    }
}

// peter.'My dog'= 'Bobik'; ERROR
peter['My dog'] = 'Bobik'
console.log(peter['My dog'])
console.log(peter)

const mary = new Person(2000, 'Mary', 'Popins', 30)

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(Person())
console.log(mary)

for (i in mary) {
    console.log(i, mary[i]);
}

console.log(mary.fullName());

const persons = [mary, peter, new Person(3000, 'Jack', 'Brown', 89),
{
    id:4000,
    name:'Bobik',
    golos: function (){
        console.log('gav gav')
    }
}
]

console.log(persons)