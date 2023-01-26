const ScoreInfo = ({score}) => {
  return ( 
    <>
    <div>
    <p className="student-info">Date: {score.date} Score: {score.score}</p>
    </div>
    </>
  );
}

export default ScoreInfo;