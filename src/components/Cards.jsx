import { useState } from "react";
import Card from "./Card";
import { shuffle } from "../utils/shuffleArray";

export default function Cards(props) {
  const [pokemonNames, setPokemonNames] = useState([
    "Pikachu",
    "Charizard",
    "Eevee",
    "Bulbasaur",
    "Squirtle",
    "Meowth",
    "Gengar",
    "Mewtwo",
    "Blaziken",
  ]);

  function shuffleNames() {
    setPokemonNames(shuffle(pokemonNames));
  }

  return (
    <section>
      {pokemonNames.map((pokemonName) => {
        return (
          <Card
            key={pokemonName}
            pokemonName={pokemonName}
            shuffleNames={shuffleNames}
            {...props}
          />
        );
      })}
    </section>
  );
}
