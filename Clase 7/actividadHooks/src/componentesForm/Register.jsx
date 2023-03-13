import React, {useState} from "react";
import { Input } from "./CustomInput.jsx";
import {FormContainer, Container, Button} from "./StyledForm.js"
import { useFormik } from 'formik';
import * as Yup from 'yup';
const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{5,20}$/;


const inputs = [
    {id: 1, label: "name", placeholder: "Ingrese su nombre", name: "name", type: "text"},
    {id: 2, label: "email", placeholder: "Escribe tu correo", name: "email", type: "email" },
    {id: 3, label: "password", placeholder: "Escribe tu contraseña", name: "password", type: "password"},
    {id: 4, label: "repeatPassword", placeholder: "Confirme su contraseña", name: "repeatPassword", type: "password"}
]

export const Register = ({handleFetchInfo}) => {
    // const [values, setValues] = useState({
    //     name:"",
    //     apellido: "",
    //     email: "",
    //     password: "",
    //     repeatPassword: ""
    // }); 
    //  ☝ Lo Reemplaza getInitialValues

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleFetchInfo(values);
    //     setValues({
    //         name:"",
    //         apellido: "",
    //         email: "",
    //         password: "",
    //         repeatPassword: ""
    //     });
    // };
    //  ☝ Lo Reemplaza onSubmit

    // const handleChange = (e) => {
    //     const key = e.target.name;
    //     const value = e.target.value;
    //     // setValues({ ...values, [key]: value });
    // };

/*--------------------------------------------------------*/

    const getInitialValues = () =>({
        name:"",
        email:"",
        password:"",
        repeatPassword:""
    });

    const getValidationSchema = () => (
        Yup.lazy(() =>
            Yup.object().shape({
                name: Yup.string().required("Campo Obligatorio"),
                email: Yup.string().email().required("Campo Obligatorio"),
                password: Yup.string()
                  .min(5, 'La contraseña debe tener al menos 5 caracteres')
                  .max(20, 'La contraseña no debe superar los 20 caracteres')
                  .required('Campo Obligatorio')
                  .matches(VALID_PASSWORD_REGEX,
                   'La contraseña debe tener al menos 5 caracteres, una mayúscula, una minúscula, un número y un carácter especial',
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
    };

    const {values, setFieldValue, errors, handleSubmit} = useFormik({ //values, setFieldValues, errors son nombres obligatorios
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validationOnChange: false,
        validateOnBlur: false,
        onSubmit
    });//formik es un objeto

/*--------------------------------------------------------*/

    return(
        <FormContainer form="register">
            <form id="register-form" onSubmit={handleSubmit}>
                {
                    inputs.map(fields => (
                        <Container key={fields.id}>
                            <label>{fields.label}</label>
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
                                    <p style={{color: "red", fontSize: "12px"}}>{errors[fields.name]}</p>
                                )
                            }
                        </Container>
                    ))
                }
            </form>
            <Container content="row">
                <Button btn="cancel" type="button">Cancel</Button>
                <Button form="register-form" btn="submit" type="submit">Submit</Button>
            </Container>
        </FormContainer>
    )
}