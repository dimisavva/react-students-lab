import Score from "./Score";
import { Card } from "react-bootstrap";


const Student = ({student}) => {
  return ( 
    <>
      <Card>
      <Card.Body>
        <Card.Title>
      <h1>{student.name}</h1>
        </Card.Title>
      <h5>{student.name}'s Bio:</h5>
      <p>{student.bio}</p>
      <Score key={student.name} scores={student.scores}/>

      </Card.Body>

    </Card>

    </>
   );
}

export default Student;