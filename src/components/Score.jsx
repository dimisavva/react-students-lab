import ScoreInfo from "./ScoreInfo";

const Score = ({scores}) => {
  return ( 
    <>
      <h5>Scores:</h5>
      {scores.map(gameScore =>
        <ScoreInfo key={gameScore.date} score={gameScore}/>
        )}
    </>
  );
}

export default Score;