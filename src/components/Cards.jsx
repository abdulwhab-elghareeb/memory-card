import "../styles/Cards.css";
import { useState } from "react";
import Card from "./Card";
import { shuffle } from "../utils/shuffleArray";

export default function Cards(props) {
  const [pokemonNames, setPokemonNames] = useState(
    shuffle([
      "Pikachu",
      "Charizard",
      "Eevee",
      "Bulbasaur",
      "Squirtle",
      "Meowth",
      "Gengar",
      "Mewtwo",
      "Blaziken",
      "Lucario",
    ]),
  );

  function shuffleNames() {
    setPokemonNames(shuffle(pokemonNames));
  }

  return (
    <section className="cards">
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
