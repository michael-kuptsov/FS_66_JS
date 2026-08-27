async function printWeather() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
        console.log(response);
    }

console.log('========Fetch Without Await========');

let res = fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');

console.log(res);

console.log('========Fetch With Await========');

printWeather();

// await =  Дождись выполнения и после того как дождешься, то верни результат. await можно использовать только внутри async функции.
// Пример не правильного использования await в коде верзнего уровня, так как await можно использовать только внутри async функции.
// console.log(await fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true'));
//const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');









