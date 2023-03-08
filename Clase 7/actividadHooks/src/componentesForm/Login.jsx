import React, {useState} from 'react'
import { Input } from "./CustomInput.jsx"
import {FormContainer, Container, Button} from "./StyledForm.js"

const inputs = [
    {id: 1, label: "email", placeholder: "Escribe tu correo", name: "email", type: "email" },
    {id: 2, label: "password", placeholder: "Escribe tu contraseña", name: "password", type: "password"}
]

export const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({
            email: "",
            password: ""
        });
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [key]: value });
    };

    return(
        <FormContainer form="login">
            <form id="login-form" onSubmit={handleSubmit}>
                {
                    inputs.map(fields => (
                        <Container key={fields.id}>
                            <label>{fields.label}</label>
                            <Input
                                name={fields.name}
                                placeholder={fields.placeholder}
                                value={values[fields.name]}
                                onChange={handleChange}
                            />
                        </Container>
                    ))
                }
            </form>
            <Container content="row">
                <Button btn="cancel">Cancel</Button>
                <Button form="login-form" btn="submit">Submit</Button>
            </Container>
        </FormContainer>
    )

}
