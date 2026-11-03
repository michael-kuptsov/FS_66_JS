//Количество студентов
let numberOfStudents = 10;

const studentsCount = document.querySelector("#studentCount");
studentsCount.textContent = `Количество студентов: ${numberOfStudents}`;

numberOfStudents = 11;
studentsCount.textContent = `Количество студентов: ${numberOfStudents}`;
//Вручную обновили количество студентов на странице
//Список из 100 студентов,форма добавления студентов,поиск по имени,фильтр по учебной группе,статистика,кнопки редактирования и удаления и другие функции будут реализованы позже
// На ваниотном джава скрипте нормальный сайт не написать максимум сайт визитка 

//Сегодня мы учим Реакт и JSX 
//JSX - это синтаксическое расширение для JavaScript, которое позволяет писать HTML-подобный код внутри JavaScript.
//React использует JSX для описания структуры пользовательского интерфейса, а затем преобразует его в обычный JavaScript, который браузер может понять.
//Пример JSX:
//const element = <h1>Привет, мир!</h1>;
//ReactDOM.render(element, document.getElementById('root'));