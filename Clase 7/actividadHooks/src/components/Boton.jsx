import React from "react"; 
import {BotonSt} from "../styles/StyledComponents.js"


const Boton = (props) =>{
    return(
        <div>
            <BotonSt onClick={props.handleClick}>{props.contenido}</BotonSt>
        </div>
    )
}

export default Boton;