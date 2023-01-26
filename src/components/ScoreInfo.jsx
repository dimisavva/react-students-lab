const ScoreInfo = ({score}) => {
  return ( 
    <>
    <div>
      <p>Date: {score.date} Score: {score.score}</p>
    </div>
    </>
  );
}

export default ScoreInfo;