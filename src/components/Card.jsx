import ".styles/Card.css"
import { useEffect, useState } from "react";

export default function Card({
  currentScore,
  highestScore,
  setCurrentScore,
  setHighestScore,
  resetGame,
  pokemonName,
  shuffleNames,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    async function fetchPokemonImg() {
      const url = `https://pokeapi.co/api/v2/pokemon-form/${pokemonName}/`;
      const options = { method: "GET" };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setImgUrl(data.sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemonImg();
  }, [pokemonName]);

  function handleClick() {
    if (isClicked) {
      currentScore > highestScore ? setHighestScore(currentScore) : null;
      resetGame();
    } else {
      setIsClicked(true);
      setCurrentScore(currentScore + 1);
      shuffleNames();
    }
  }

  return (
    <button onClick={handleClick}>
      <img src={imgUrl} />
      {pokemonName}
    </button>
  );
}
