import {useState} from 'react';
import './App.css';
import { studentData} from './data/data';
import StudentList from './components/StudentList';


function App() {
  const [studentList, setStudentList] = useState(studentData)
  return (
    <div>
      <StudentList sList={studentList}/>
    </div>
  );
}

export default App;
