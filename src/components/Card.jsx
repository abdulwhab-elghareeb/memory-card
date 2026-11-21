import { useEffect, useState } from "react";

export default function Card({
  setCurrentScore,
  setHighestScore,
  resetGame,
  pokemonName,
  shuffleNames,
}) {
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

  return (
    <button>
      <img src={imgUrl} />
      {pokemonName}
    </button>
  );
}
