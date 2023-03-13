import React from 'react'
import { FormContainer, ContainerDatos } from '../styles/styledComponents'

const styles = {
  headers: {
    margin: "20px",
    color: "#ffffff"
  },
  user: {
    color: "#11bfbf"
  }
}

export const Card = ({ name, email, password })=> {
  const nickName = name.includes(" ") ? name.split(" ")[0] : name;
  return (
    <FormContainer>
          <h2 style={styles.headers}>Bienvenido <span style={styles.user}>{nickName}!</span></h2>
          <ContainerDatos>
              <p style={styles.headers}>Nombre completo: <span style={styles.user}>{name}</span></p>
              <p style={styles.headers}>Email: <span style={styles.user}>{email}</span></p>
              <p style={styles.headers}>Password: <span style={styles.user}>{password}</span></p>
          </ContainerDatos>
    </FormContainer>
  )
}
