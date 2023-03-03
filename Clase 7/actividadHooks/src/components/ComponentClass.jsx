import React, {Component} from "react";
import {Container, Value, BotonContainer, BotonSt} from '../styles/StyledComponents'

class ComponentClass extends Component{

    state = {
        counterValue: this.props.value
    };

    operation = (param) => {
        if (param === "minus"){
            this.setState(prevState => ({ counterValue: prevState.counterValue -1}));
        }else{
            this.setState(prevValue => ({ counterValue: prevValue.counterValue + 1 }));
        } 
    }

    render(){
        return(
            <div>
                <h2>Contador con componentes de clases</h2>
                <Container>
                    <Value>{this.state.counterValue}</Value>
                    <BotonContainer>
                        <BotonSt onClick={() => this.operation("plus")}>+</BotonSt>
                        <BotonSt onClick={() => this.operation("minus")}>-</BotonSt>
                    </BotonContainer>
                </Container>
            </div>
        )
    }
}

export default ComponentClass;