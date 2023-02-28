import styled from "styled-components";

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

//props => props.color

export const CardBody = styled.div
`
    width: 300px;
    color: white;
    font-weight: bolder;
    margin-top: 20px;
    border-radius: 20px;
    background-image: url(${props => colorPicket(props.tipo)});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Name = styled.p`
    background: white;
    padding: 2px;
    margin: 5px;
    color: black;
    border-radius: 20px;
`

export const PL = styled.p`
    background: #b083cd;
    padding: 2px;
    margin: 5px;
    color: black;
    border-radius: 20px; 
`