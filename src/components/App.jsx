import "../styles/App.css";
import { useState } from "react";
import Game from "./Game";
import Header from "./Header";

export default function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [key, setKey] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <Game
        highestScore={highestScore}
        setHighestScore={setHighestScore}
        key={key}
        resetGame={() => setKey(key + 1)}
      />
    </div>
  );
}
