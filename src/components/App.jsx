import { useState } from "react";
import Game from "./Game";

export default function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [key, setKey] = useState(0);

  return (
    <Game
      key={key}
      resetGame={() => setKey(key + 1)}
      highestScore={highestScore}
      setHighestScore={setHighestScore}
    />
  );
}
