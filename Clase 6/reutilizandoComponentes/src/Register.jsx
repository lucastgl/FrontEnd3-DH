import React from 'react'
import campos from "./assets/campos.json"
import { CustomInput } from './CustomInput.jsx'
import { FormContainer} from './styles/StyledComponents.js'


const Register = () => {
    const fields = campos["registrarse"]
    return (
        <FormContainer from="register">

        {
            fields.map(campo =>(
                <CustomInput key={campo.id} name={campo}/>
            ))
        }

        {/* <CustomInput name="Name" />
        <CustomInput name="Email" />
        <CustomInput name="Password" />
        <CustomInput name="Repeat Password" /> */}

        </FormContainer>
    )
}

export default Register