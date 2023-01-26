import {useState} from 'react';
import './App.css';
import { studentData} from './data/data';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [studentList, setStudentList] = useState(studentData)
  return (
    <div>
      <StudentList sList={studentList}/>
    </div>
  );
}

export default App;
