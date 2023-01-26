import Score from "./Score";

const Student = ({student}) => {
  return ( 
    <>
      <h1>{student.name}</h1>
      <h5>{student.name}'s Bio:</h5>
      <p>{student.bio}</p>
      <Score key={student.name} scores={student.scores}/>
    </>
   );
}

export default Student;