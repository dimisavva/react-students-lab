import Student from "./Student";

const StudentList = (props) => {
  return ( 
    <>
    <div>
      {props.sList.map(student => 
        <Student key={student.name} student={student}/>
      )}
    </div>
    </>
  );
}

export default StudentList;