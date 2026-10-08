//fetch axios
let password = "123456";
let userPassword = "123456";

if (password === userPassword) {
  console.log("Password is correct");
} else {
  console.log("Password is incorrect");
}

// Переменная среды есть несколько способов

const apiKey = process.env.GEMINI_API_KEY;

console.log(apiKey ? "Ключ найден" : "Ключ не найден");
console.log("apiKey:", apiKey);