// async function printWeather() {
//     fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true')
//     .then(response => response.json())
//     // .then(d => console.log(d))
//     .then(d => console.log('Wind Speed:', d.current_weather.windspeed, '\nTemperature:', d.current_weather.temperature, '\nWeather Code:', d.current_weather.weathercode))
//     .then(() => console.log('--------JSON Stringify from Response--------'))
//     .catch(error => console.log('Error:', error));
// }

// printWeather();

async function printWeather(latitude, longitude) {
    console.log("Широта: "+latitude+"\nДолгота: "+longitude);
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => response.json())
    // .then(d => console.log(d))
    .then(d => console.log("Скорость ветра: "+d.current_weather.windspeed+"\nТемпература: "+d.current_weather.temperature))
    .then(() => console.log("------Вот и все----------------"))
    .catch(err => console.log(err));
}
const latitude = -90.0;
const longitude = 0.0;
printWeather(latitude, longitude);