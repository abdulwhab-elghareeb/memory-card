import { useState } from "react";
import Game from "./Game";

export default function App() {
  const [key, setKey] = useState(0);

  return <Game key={key} resetGame={() => setKey(key + 1)} />;
}
