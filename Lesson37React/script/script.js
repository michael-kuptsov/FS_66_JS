
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const hello = <h1>Наш учебный центр</h1>;
const header = <div>
    <h1>Наш учебный центр</h1>
    <p>Добро пожаловать в наш учебный центр!</p>
</div>

root.render(header);

const studentName = 'Иван';

const studentNameElement = <h1>Имя студента: {studentName}</h1>;
//какие ошибки могут быть?
// {} Не поставить - будет ошибка, так как React не сможет интерпретировать переменную внутри JSX без фигурных скобок
//Не правильно закрыть тег - будет ошибка, так как JSX требует правильного закрытия всех тегов
//Использовать зарезервированные слова JavaScript как имена атрибутов - будет ошибка, так как JSX имеет свои правила именования атрибутов (например, className вместо class)
//Попытка вставить объект напрямую в JSX - будет ошибка, так как React не может рендерить объекты напрямую, нужно использовать строки или массивы элементов
//Использование некорректного синтаксиса JavaScript внутри JSX - будет ошибка, так как JSX требует корректного синтаксиса JavaScript внутри фигурных скобок
const myStyle = {color: 'red', fontWeight: 'bold'};
root.render(studentNameElement);
const a = 30;
const b = 40;
const college = 'Наш колледж Tel Ran';
const address = {
    city: 'Москва',
    street: 'Тверская',
    zip: '123456'

}
const age = 25;
const fragment = <>
    <h1 style = {{color: 'blue', fontSize: '24px'}}>Фрагмент</h1> 
    {/* Обязательное использование 2 фигурных скобок для inline-стилей в JSX.Но почему? */}
    {/* Первая пара скобок обозначает, что внутри JSX будет JavaScript-выражение, вторая пара скобок создаёт объект стилей. */}
    <p>Это пример использования фрагмента в React.</p>
    <p>Наш колледж: {college.toLocaleUpperCase()}</p>
    <p>Сумма a и b: {a + b}</p>
    <p>Город: {address.city}</p>
    <p>Улица: {address.street}</p>
    <p>Индекс: {address.zip}</p>
    <p style={myStyle}>Возраст: {age}</p>
    <p>{age>=18 ? 'Совершеннолетний' : 'Несовершеннолетний'}</p>
    {/* if не будет работать внутри JSX, нужно использовать тернарный оператор или IIFE */}
    <p>Наш колледж: {(() => {
        let result = '';
        for(let key in address) {
            result += address[key] + ' ';
        }
        return result;
    })()}</p>
</>;
root.render(fragment);