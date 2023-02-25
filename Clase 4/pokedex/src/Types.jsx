import pokemonData from "../src/assets/pokemons.json";
import TypeOfPokemon from "./TypeOfPokemon";

const TypesOfPokemons = () =>{
    const pokemonTypes =  Object.keys(pokemonData);
    return (
        <div>
            {pokemonTypes.map((type, index) => (
                <TypeOfPokemon key={index} type={type}/>    
            ))}
        </div>
    )
}

export default TypesOfPokemons;