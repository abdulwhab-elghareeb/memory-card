import "../styles/Card.css";
import { useState } from "react";
import Loading from "./Loading";

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
        {pokemonUrl ? (
          <img src={pokemonUrl} height={200} width={200} />
        ) : (
          <Loading />
        )}
        {pokemonName}
      </button>
    </span>
  );
}
