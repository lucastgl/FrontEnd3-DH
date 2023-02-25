// import './styles/pokemonCards.css';

const colorPicket = (type) => {
    switch (type) {
      case "fire":
        return "https://media.tenor.com/OOR9Cz2LcK4AAAAC/volcano-lava.gif"
      case "water":
        return "https://media.tenor.com/9lG5WcgF-P8AAAAC/sea-mar.gif"
      case "electric":
        return "https://media.tenor.com/s0EGjVj1eP4AAAAC/lightning-strikes-sweet-dreams.gif"
      case "air":
      default:
        return "https://media.tenor.com/t3CI63UqdOAAAAAC/clouds-heaven.gif";
    }
}
  
const Pokemon = ({ id, name, avatar, powerLevel, type }) => {
    return (
      <div className='nieto'
        style={{
          width: "300px",
          color: "white",
          fontWeight: "bolder",
          marginTop: "20px",
          borderRadius: "20px",
          backgroundImage: `url(${colorPicket(type)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <p style={{
            background: "white",
            padding: "2px",
            margin: "5px",
            color: "black",
            borderRadius: "20px",
        }}>{name}</p>

        <img style={{ width: "100%" }} src={avatar} alt={name} />
        
        <p style={{
            background: "#b083cd",
            padding: "2px",
            margin: "5px",
            color: "black",
            borderRadius: "20px",
        }}>Power level: {powerLevel}</p>
      </div>
    )
}
  
export default Pokemon;