import { useState } from "react";
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";

export default function Game({ resetGame, highestScore, setHighestScore }) {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <header>
        <h1>Pokémon Memory Game</h1>
      </header>

      <main>
        <Scoreboard currentScore={currentScore} highestScore={highestScore} />
        <Cards
          currentScore={currentScore}
          highestScore={highestScore}
          setCurrentScore={setCurrentScore}
          setHighestScore={setHighestScore}
          resetGame={resetGame}
        />
      </main>
    </>
  );
}
