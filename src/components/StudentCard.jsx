import StatusBadge from './StatusBadge';
function StudentCard({student}) {
    return (
        <div className ='student-card'>            
                <p>
                <span>ID: {student.id}</span>
                <StatusBadge activity={student.isActive} />
                </p>
                <p>{student.name}</p>

                <p>Возраст: {student.age}</p>
                <p>Группа: {student.group}</p>
                {student.age < 18 && <span className="student-child">Несовершеннолетний студент</span>}


        </div>
    )

}

export default  StudentCard;

//Что такое JSX - это синтаксическое расширение для JavaScript, которое позволяет писать HTML-подобный код внутри JavaScript. React использует JSX для описания структуры пользовательского интерфейса.
//Как передать в компонент JSX
//Для передачи данных в компонент JSX используются пропсы (props). В примере выше компонент StudentCard получает объект student через пропсы, а компонент StatusBadge получает значение activity через пропсы.Мое солнышко сладкое 
