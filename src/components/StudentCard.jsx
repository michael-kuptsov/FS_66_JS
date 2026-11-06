import StatusBage from './StatusBage';
function StudentCard({student}) {
    return (
        <div className ='student-card'>            
            <p>ID: {student.id}      Status: <StatusBage activity={student.isActive}/></p>
            <p>{student.name}</p>
            <p>Возраст: {student.age}</p>
            <p>Группа: {student.group}</p>

        </div>
    )

}

export default  StudentCard;