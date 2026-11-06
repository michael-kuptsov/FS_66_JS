import StudentCard from './StudentCard'

function StudentList({persons}){
    const cards = persons.map(student => <StudentCard key={student.id} student={student} />)
    
    return(
        <div className="student-list">
            <h2>Наши студенты</h2>
            <p>{persons.length}</p>
            {cards}
        </div>
    )
}

export default StudentList;