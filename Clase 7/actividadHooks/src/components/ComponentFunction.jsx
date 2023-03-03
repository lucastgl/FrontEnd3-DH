import React, {useState}  from "react";
import Boton from "./Boton";
import {Value, BotonContainer, Container} from "../styles/StyledComponents.js"

const CounterFunction = () => {
    const [counterValue, setCounterValue] = useState(0);

    function incrementar() {
        setCounterValue(counterValue + 1);
    }
    
    function decrementar() {
        if(counterValue > 0){
            setCounterValue(counterValue - 1);
        }
    }

    return(
        <div>
            <h2>Contador con componentes funcionales</h2>
            <Container>
                <Value>
                    <div>{counterValue}</div>
                </Value>
                <BotonContainer>
                    <Boton handleClick={incrementar} contenido={"+"}/>
                    <Boton handleClick={decrementar} contenido={"-"}/>
                </BotonContainer>
            </Container>
        </div>
    )
}

export default CounterFunction
