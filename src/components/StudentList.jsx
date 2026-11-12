import StudentCard from './StudentCard'

function StudentList({ persons = [] }) {
    return (
        <div className="student-list">
            <h2>Наши студенты</h2>

            {persons.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <>
                    <p>Всего студентов: {persons.length}</p>
                    {persons.map(student => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </>
            )}
        </div>
    )
}

export default StudentList;
