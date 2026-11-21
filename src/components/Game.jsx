import { useState } from "react";
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";

export default function Game({ resetGame }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <main>
      <h1>Pokémon Memory Game</h1>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Cards
        setCurrentScore={setCurrentScore}
        setHighestScore={setHighestScore}
        resetGame={resetGame}
      />
    </main>
  );
}
