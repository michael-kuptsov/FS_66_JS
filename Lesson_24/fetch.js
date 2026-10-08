// Запрос данных пользователя
//1 Установка расширения под VS Code: Inquirer Prompts или vscode.window.showInputBox
//2 Использование системных модальных окон ОС для ввода данных поверх всех окон операционной системы(например, с помощью библиотеки node-notifier)
//dialog-node
//3 Интерактивный ввод данных в консоли с помощью Node.js - внутри вкладки тTerminal в VS Code, используя библиотеку Inquirer.js - Inquirer Prompts

//cli консольное приложение 
import {input, select, confirm, password} from "@inquirer/prompts";

async function runCli() {
    try {
        // 1. Текстовое поле с дефолтным значением
        const name = await input({ message: "Введите ваше имя:" , default : "Аноним"});

        // 2. Поле с выбором из списка
        const color = await select({
            message: "Выберите ваш любимый цвет:",
            choices: ["Красный", "Зеленый", "Синий"],
        });

        const roll = await select({
            message: "Выберите вашу любимую роль:",
            choices: [
                {name: "Администратор", value: "admin"},
                {name: "Пользователь", value: "user"},
                {name: "Гость", value: "guest"},
            ],
        });
        //Поле с подтверждением
        const isConfirmed = await confirm({
            message: "Вы уверены, что хотите продолжить?",
            default: false,
        });
        
        // Поле для ввода пароля(скрытый ввод)
        const userPassword = await password({
            message: "Введите ваш пароль:",
            mask: "*",
        });

        // Вывод введенных данных
        console.log("Имя:", name);
        console.log("Любимый цвет:", color);
        console.log("Роль:", roll);
        console.log("Подтверждено:", isConfirmed);
        console.log("Пароль:", userPassword);
    } 
    catch (error) {
        console.error("Ошибка при вводе данных", error);
        console.log("Пожалуйста, попробуйте снова.");
    }
}

runCli();


