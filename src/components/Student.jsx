import { useState } from "react";
import Score from "./Score";
import { Card } from "react-bootstrap";


const Student = ({student}) => {
  const [showScore, setShowScore] = useState(false)
  function handleScoreClick() {
    setShowScore(!showScore)
  }
  return ( 
    <>
      <Card>
      <Card.Body className="student-card">
        <Card.Title className="student-info">
      <h1>{student.name}</h1>
        </Card.Title>
        <h5 className="student-info">{student.name}'s Bio:</h5>
        <p className="student-info">{student.bio}</p>
      <button onClick={handleScoreClick}>
        {showScore ? 'Hide' : 'Show'} Scores
      </button>
      {showScore && <Score key={student.name} scores={student.scores}/>}
      {/* <Score key={student.name} scores={student.scores}/> */}
      </Card.Body>

    </Card>

    </>
   );
}

export default Student;