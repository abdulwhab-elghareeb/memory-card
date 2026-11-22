import "../styles/Card.css";
import { useState } from "react";

export default function Card({
  handleValidClick,
  handleGameEnd,
  pokemonUrl,
  pokemonName,
}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (isClicked) {
      handleGameEnd();
      setIsClicked(false);
    } else {
      handleValidClick();
      setIsClicked(true);
    }
  }

  return (
    <span>
      <button className="pixel-corners" onClick={handleClick}>
        <img src={pokemonUrl} height={200} width={200} alt="" />
        {pokemonName}
      </button>
    </span>
  );
}
