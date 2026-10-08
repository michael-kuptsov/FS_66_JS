// Вариант 1 
const productsFromList = [
  "Milk", "MILK", "Potato", "Cucumber", "BUTTER", "Butter", "BUTTER", "Butter", ""
]

const p1 = productsFromList; 
console.log(p1 === productsFromList); 

const p2 = [...productsFromList];
console.log(p2 === productsFromList);
// Вариант 2 (объекты)
const productsFromListObj = [{
    name: "Milk",
    inFridge: true,
    inRecipe: true,
},{
    name: "Potato",
    inFridge: true,
    inRecipe: false,
},  
{
    name: "Cucumber",
    inFridge: false,
    inRecipe: false,
},
{
    name: "Butter",
    inFridge: true,
    inRecipe: true,
}
]

const p2Obj = [...productsFromListObj];
console.log(p2Obj);
// Вариант 3
const productsMap = new Map();
productsMap.set('Milk', {
    name: "Milk",
    inFridge: true,
    inRecipe: true,
})
productsMap.set('Cucumber', {
    name: "Cucumber",
    inFridge: false,
    inRecipe: false,
})
productsMap.set('Butter', {
    name: "Butter",
    inFridge: true,
    inRecipe: true,
})

// Рекурсия - пример функции для глубокого копирования объектов
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }
    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}


// Бери жлемент если приметив копируй и бери следующий если нет проваливайся внутрь (рекурсивно)