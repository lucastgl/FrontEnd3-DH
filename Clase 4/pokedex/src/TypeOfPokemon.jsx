import pokemonData from "../src/assets/pokemons.json";
import Pokemon from "./Pokemon.jsx";

const TypeOfPokemon = ({type}) =>{
    const data = pokemonData[type]

    return(
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {
          data.map(pokemon => (
            <Pokemon key={pokemon.id} {...pokemon} type={type}/>
          ))
        }
      </div>
        </div>
    )
}

export default TypeOfPokemon;
