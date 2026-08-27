async function printWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
  console.log(
    "--------Результат работы метода fetch() await синтаксис----------------",
  );
  console.log(response);
  const jsonObject = await response.json();
  console.log("------Результат работы метода json()----------------");
  console.log(jsonObject);
  console.log("=============================================");
  console.log("Широта: " + latitude + "\nДолгота: " + longitude);
  console.log("Скорость ветра: " + jsonObject.current_weather.windspeed);
  console.log("Температура: " + jsonObject.current_weather.temperature);
}

const latitude = 44.49;
const longitude = 20.27;
printWeather(latitude, longitude);

//fetch(url) -отправляет get  запрос по адресу url и возвращает промис, который разрешается в объект Response, представляющий ответ на запрос. Этот объект содержит информацию о статусе ответа, заголовках и теле ответа. Метод fetch() используется для получения данных с сервера и является частью Fetch API, который предоставляет современный способ работы с HTTP-запросами в JavaScript.
