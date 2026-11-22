import "../styles/Cards.css";
import { useState } from "react";
import Card from "./Card";
import pokemonNames from "../data/pokemonNames";
import shuffle from "../utils/shuffleArray";
import mapNamesToUrls from "../utils/mapNamesToUrls";
import Loading from "./Loading";

/* 
I don't see any benefit from using "useEffect" here.
Since there will only be 1 instance of this component, 
and I only need to fetch data once because the data will 
never change, it makes sense to fetch it at the top of the module 
and use it whenever a new instance of this component gets created
*/
const pokemonMap = await mapNamesToUrls(pokemonNames);

export default function Cards({ incrementScore, handleGameEnd }) {
  const [pokemonData, setPokemonData] = useState(shuffle(pokemonMap));

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
