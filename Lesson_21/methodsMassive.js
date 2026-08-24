const numbers = [7, 3, 9, 33, 5, 1, 8, 4, 2, 6];
console.log('============Sorting numbers in ascending order============');
console.log(numbers.sort((a, b) => a - b));
numbers.sort((a, b) => b - a);
console.log('============Sorting Random============');
numbers.sort((a, b) => Math.random() - 0.5);
console.log(numbers);

console.log('============My Finding index============');

function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
}

let res = myFindIndex(numbers, (item) => item === 22); // Что тут происходит? Мы ищем индекс числа 22 в массиве numbers. Если число найдено, функция вернет его индекс, если нет - вернет -1. item === 22 - это условие, которое проверяет, равен ли текущий элемент массива числу 22. Если да, то возвращается индекс этого элемента. Если ни один элемент не удовлетворяет условию, возвращается -1.
console.log(res);

function checkEven(item) {
    return item % 2 === 0;
}
console.log('============ My Finding index with checkEven ============');
let res2 = myFindIndex(numbers, checkEven); // Что тут происходит? Мы ищем индекс первого четного числа в массиве numbers. Функция checkEven проверяет, является ли элемент четным. Если найдено четное число, функция вернет его индекс, если нет - вернет -1.
console.log(res2);

console.log('============ Objects Sorting ============');
const persons = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 }
];


persons.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name); // Сортировка по имени в алфавитном порядке, если возраст одинаковый
    }
    return a.age - b.age; // Сортировка по возрасту в порядке возрастания       

});
console.log(persons);

