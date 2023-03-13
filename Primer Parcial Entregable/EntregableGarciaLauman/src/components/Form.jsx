import React from 'react';
import {FormContainer, Container, Button, Input, Error} from '../styles/styledComponents'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/;
const VALID_ELEMENT = /^(?!\s)(\s*\S){2,}$/;
;

const inputs = [
    {id: 1, label: "Name", placeholder: "Ingrese su nombre", name: "name", type: "text"},
    {id: 2, label: "Email", placeholder: "Escribe tu correo", name: "email", type: "email" },
    {id: 3, label: "Password", placeholder: "Escribe tu contraseña", name: "password", type: "password"},
    {id: 4, label: "Repeat your Password", placeholder: "Confirme su contraseña", name: "repeatPassword", type: "password"}
]

export const Form = ({handleFetchInfo}) => {

    const getInitialValues = () =>({
        name:"",
        email:"",
        password:"",
        repeatPassword:""
    });

    const getValidationSchema = () => (
        Yup.lazy(() =>
            Yup.object().shape({
                name: Yup.string()
                    .min(5, 'El campo debe tener al menos 3 caracteres')
                    .required("Campo Obligatorio")
                    .matches(VALID_ELEMENT,
                     'No puede haber espacios al inicio ni al final de este campo',
                    ),
                email: Yup.string().email().required("Campo Obligatorio"),
                password: Yup.string()
                  .min(5, 'La contraseña debe tener al menos 6 caracteres')
                  .max(20, 'La contraseña no debe superar los 20 caracteres')
                  .required('Campo Obligatorio')
                  .matches(VALID_PASSWORD_REGEX,
                   'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial',
                ),
                repeatPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 
                  'Las contraseñas no  coinciden')
                  .required('Campo Obligatorio'),
            })
        )
    );

    const onSubmit = (values) =>{
        console.log(values);
        handleFetchInfo(values);
    };

    const {values, setFieldValue, errors, handleSubmit} = useFormik({ 
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validationOnChange: false,
        validateOnBlur: false,
        onSubmit
    });


  return (
    <FormContainer form="register">
        <form  id="register-form" onSubmit={handleSubmit}>
        {   
            inputs.map(fields => (
                <Container key={fields.id}>
                    <label style={{paddingBottom: "12px"}}>{fields.label}</label>
                    <Input
                        name={fields.name}
                        placeholder={fields.placeholder}
                        value={values[fields.name]}
                        onChange={(e) => setFieldValue(fields.name, e.target.value)}
                                        // ☝ el primer parámetro es el nombre de la propiedad a afectar, 
                                        //el segundo es valor que quiero guardar en la propiedad
                    />
                    {
                        errors[fields.name] &&(
                            <Error>{errors[fields.name]}</Error>
                        )
                    }
                </Container>
            ))
        }
        </form>
        <Button form="register-form" btn="submit" type="submit">Submit</Button>
    </FormContainer>
  )
}