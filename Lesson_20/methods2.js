const cats = [
  { name: "Whiskers", age: 2, color: "gray", weight: 4.5 },
  { name: "Fluffy", age: 5, color: "white", weight: 5.2 },
  { name: "Mittens", age: 1, color: "brown", weight: 3.8 },
  { name: "Shadow", age: 3, color: "black", weight: 4.0 },
  { name: "Simba", age: 4, color: "orange", weight: 5.0 },
];

const totalWeight = cats.reduce((acc, cat) => acc + cat.weight, 0);
console.log("Общий вес всех кошек:", totalWeight); // 22.5

const averageAge = cats.reduce((acc, cat) => acc + cat.age, 0) / cats.length;
console.log("Средний возраст всех кошек:", averageAge); // 3

const catWithAge2 = cats.find((cat) => cat.age === 2);
// console.log("Кошка с возрастом 2:", catWithAge2); // { name: "Whiskers", age: 2, color: "gray", weight: 4.5 }
if (catWithAge2) {
    console.log("Кошка с возрастом 2:", catWithAge2);
    }else {
    console.log("Кошка с возрастом 2 не найдена");
    }

    console.log('Кот с возрастом 2 года: ', catWithAge2 ? catWithAge2.name : 'не найден');