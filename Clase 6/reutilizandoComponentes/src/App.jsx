import React from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { Container } from './styles/StyledComponents.js' ;

const App = () => {
  return (
    <Container content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App
