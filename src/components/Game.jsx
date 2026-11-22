import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import { useState } from "react";

export default function Game({ highestScore, setHighestScore, resetGame }) {
  const [currentScore, setCurrentScore] = useState(0);

  function incrementScore() {
    setCurrentScore(currentScore + 1);
  }

  function handleGameEnd() {
    if (currentScore > highestScore) setHighestScore(currentScore);
    resetGame();
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Cards incrementScore={incrementScore} handleGameEnd={handleGameEnd} />
    </>
  );
}
