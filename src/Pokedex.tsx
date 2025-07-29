import { useState, type ChangeEvent, type FormEvent } from "react";
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
  const [data, setData] = useState<IPokemon>();
  const [pokemonInput, setPokemonInput] = useState(""); // controle do input
  const [pokemonImage, setPokemonImage] = useState<string>();

  const fetchPokemon = async (pokemon: string) => {
    const apiResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    if (!apiResponse.ok) {
      throw new Error("Pokémon não encontrado");
    }
    const data = await apiResponse.json();
    return data;
  };

  const renderPokemon = async (pokemon: string) => {
    try {
      const data = await fetchPokemon(pokemon);
      setData(data);
      setPokemonImage(
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      );
    } catch (error) {
      console.error(error);
      setData(undefined);
      setPokemonImage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = pokemonInput.trim().toLowerCase();
    if (!value) return;
    await renderPokemon(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonInput(e.target.value);
  };

  return (
    <PokedexContainer>
      {pokemonImage && <PokemonImage src={pokemonImage} alt="pokemon" />}
      {data && (
        <h1>
          <span className="poke_number">{data.id}</span>-
          <span className="poke_name">{data.name}</span>
        </h1>
      )}
      <PokemonSearch onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Name or Number"
          required
          value={pokemonInput}
          onChange={handleInputChange}
        />
      </PokemonSearch>
      <PokemonButtons>
        <button>&lt; Prev</button>
        <button>Next &gt;</button>
      </PokemonButtons>
      <PokedexImage src={pokedexImage} alt="pokedex" />
    </PokedexContainer>
  );
};

export default Pokedex;
