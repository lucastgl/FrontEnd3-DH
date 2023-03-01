import React from 'react'
import campos from "./assets/campos.json"
import { FormContainer} from './styles/StyledComponents.js'
import { CustomInput } from './CustomInput.jsx'

const Login = () => {
  const fields = campos["login"]
  return (
    <FormContainer from="login">

      {
        fields.map(campo =>(
          <CustomInput key={campo.id} name={campo}/>
        ))
      }


      {/* <CustomInput name="Email" />
      <CustomInput name="Password" /> */}
    </FormContainer>
  )
}

export default Login