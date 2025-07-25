import { useEffect, useState } from "react";
import pokedexImage from "./assets/pokedex.png";
import {
  PokedexContainer,
  PokedexImage,
  PokemonButtons,
  PokemonImage,
  PokemonSearch,
} from "./PokedexStyle";
import type { IPokemon } from "./IPokemon";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("6");
  const [data, setData] = useState<IPokemon>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(`falha ao buscar ${pokemonName}: ${error}`);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  console.log(data);

  const pokemonImage =
    data?.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  return (
    <PokedexContainer>
      <PokemonImage src={pokemonImage} alt="pokemon" />
      <h1>
        <span className="poke_number">{data?.id}</span>-
        <span className="poke_name">{data?.name}</span>
      </h1>
      <PokemonSearch>
        <input type="search" placeholder="Name or Number" required />
      </PokemonSearch>
      <PokemonButtons>
        <button>&lt; Prev</button>
        <button>Next &gt;</button>
      </PokemonButtons>
      <PokedexImage src={pokedexImage} alt="pokedex" />;
    </PokedexContainer>
  );
};

export default Pokedex;
