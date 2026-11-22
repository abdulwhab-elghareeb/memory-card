import "../styles/Cards.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import pokemonNames from "../data/pokemonNames";
import shuffle from "../utils/shuffleArray";
import mapNamesToUrls from "../utils/mapNamesToUrls";
import Loading from "./Loading";

/* Saving it at the top of the module so each new instance starts with it as its default value */
let pokemonMap;

export default function Cards({ incrementScore, handleGameEnd }) {
  const [pokemonData, setPokemonData] = useState(shuffle(pokemonMap));

  useEffect(() => {
    if (!pokemonMap) {
      async function fetchPokemonData() {
        const data = await mapNamesToUrls(pokemonNames);
        pokemonMap = data;
        setPokemonData(shuffle(data));
      }
      fetchPokemonData();
    }
  }, []);

  function handleValidClick() {
    incrementScore();
    setPokemonData(shuffle(pokemonData));
  }

  return (
    <main className="cards">
      {pokemonData ? (
        pokemonData.map((pokemon) => {
          return (
            <Card
              key={pokemon.name}
              pokemonUrl={pokemon.url}
              pokemonName={pokemon.name}
              handleValidClick={handleValidClick}
              handleGameEnd={handleGameEnd}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </main>
  );
}
