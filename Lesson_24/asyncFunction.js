// Программа запрашивает наименование продуктов в вашем холодильнике и их количество.После ввода всех продуктов,программа выводит список всех продуктов с их количеством и сохранет данные в виде JSON в файл в корне проекта
//readline.createInterface() - создает интерфейс для чтения данных из потока ввода и вывода
//(stdin) - стандартный поток ввода, (stdout) - стандартный поток вывода

//=================================================================================================

// JSON.stringify(fridge, null, 2) - преобразует объект JavaScript в строку JSON с отступами для удобного чтения
// нле null ознаает что не используется функция замены, а 2 - количество пробелов для отступа

// fs.writeFileSync('fridge.json', jsonData) - синхронно записывает данные в файл 'fridge.json'. Если файл не существует, он будет создан. Если существует, его содержимое будет перезаписано.

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
  const rl = readline.createInterface({ input, output });
  const fridge = [];
  console.log("Программа для учета продуктов в вашем холодильнике.");
  console.log(
    "Введите продукты в вашем холодильнике. Для завершения введите 'exit'.",
  );

  while (true) {
    const productName = await rl.question("Введите наименование продукта: ");
    const trimmedName = productName.trim();

    if (trimmedName.toLowerCase() === "exit") {
      break;
    }
    if (trimmedName === "") {
      // Проверка на пустую строку !trimmedName
      console.log(
        "Наименование продукта не может быть пустым. Пожалуйста, попробуйте снова.",
      );
      continue;
    }
    const countInput = await rl.question(
      `Введите количество продукта: ${trimmedName}: `,
    );
    // const count = parseInt(countInput.trim(), 10); Когда видите, что пользователь может ввести не число, используйте parseInt с основанием 10 для преобразования строки в целое число. Если ввод не является числом, parseInt вернет NaN.
    const count = Number(countInput.trim());
    if (isNaN(count) || count < 0) {
      console.log(
        "Количество продукта должно быть положительным числом. Пожалуйста, попробуйте снова.",
      );
      continue;
    }
    fridge.push({ name: trimmedName, count: isNaN(count) ? 0 : count });

    console.log(
      `Продукт "${trimmedName}" с количеством ${count} добавлен в холодильник.`,
    );
  }
  rl.close();

  if (fridge.length > 0) {
    // const filePath = path.resolve(process.cwd(), 'fridge.json');
    const filePath = path.resolve("fridge.json");
    try {
      // Сохраняем данные в файл
      await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");
      console.log(`Данные о продуктах сохранены в файл: ${filePath}`);
      // Читаем данные из файла и выводим их в консоль
      console.log("Считывание данных из файла:");
      const fileData = await readFile(filePath, "utf-8");
      console.log("Данные из файла:", fileData);
      const savedProducts = JSON.parse(fileData);
      console.log("Данные из файла(объект):", savedProducts);
      // Выводим список продуктов с их количеством красиво
      console.log("1.Список продуктов с их количеством:");
      savedProducts.forEach((product) => {
        console.log(`Продукт: ${product.name}, Количество: ${product.count}`);
      });

      console.log("2. Список продуктов в холодильнике:");
      console.table(savedProducts);
    } catch (error) {
      console.error(`Ошибка при работе с файлом: ${error.message}`);
    }
  } else {
    console.log("Вы не ввели ни одного продукта. Данные не будут сохранены.");
  }
}

runFridgeApp();
