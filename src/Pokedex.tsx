import pokedexImage from "./assets/pokedex.png";
import { PokedexContainer, PokedexImage } from "./PokedexStyle";

const Pokedex = () => {
  return (
    <PokedexContainer>
      <PokedexImage src={pokedexImage} alt="pokedex" />;
    </PokedexContainer>
  );
};

export default Pokedex;
