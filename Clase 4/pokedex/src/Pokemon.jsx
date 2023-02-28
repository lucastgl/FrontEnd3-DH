import "./styles/pokemonCard.css";
import {CardBody, Name, PL} from "./styles/styledPokemon";


// const colorPicket = (type) => {
//     switch (type) {
//       case "fire":
//         return "https://media.tenor.com/OOR9Cz2LcK4AAAAC/volcano-lava.gif"
//       case "water":
//         return "https://media.tenor.com/9lG5WcgF-P8AAAAC/sea-mar.gif"
//       case "electric":
//         return "https://media.tenor.com/s0EGjVj1eP4AAAAC/lightning-strikes-sweet-dreams.gif"
//       case "air":
//       default:
//         return "https://media.tenor.com/t3CI63UqdOAAAAAC/clouds-heaven.gif";
//     }
// }
  
const Pokemon = ({ id, name, avatar, powerLevel, type }) => {
    return (
      <CardBody tipo={type}>
        <Name>{name}</Name>
        <img className="img" style={{width: "100%"}} src={avatar} alt={name} />
        <PL>Power level: {powerLevel}</PL>
      </CardBody>
    )
}
  
export default Pokemon;