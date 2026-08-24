const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 10;
        console.log(i,' -> ', arr[i])
        
    }
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

printArray(primes)

console.log('Массив после изменения:', primes)

const revArray = (arr) => {
    for (let i = 0,  j = arr.length - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

revArray(primes)
console.log('Массив после изменения1:', primes)


const revArray2 = (arr) => {
    let temp;
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}

revArray2(primes)
console.log('Массив после изменения:', primes)