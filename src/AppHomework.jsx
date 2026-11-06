import Header from './components/Header'
import Footer from './components/Footer'
import StudentList from './components/StudentList'
import { students } from './components/data/students';
function AppHomework() {
  return (
    <>
      <Header />
      <StudentList persons={students} />
      <Footer />
    </>
  )
}

export default AppHomework;
