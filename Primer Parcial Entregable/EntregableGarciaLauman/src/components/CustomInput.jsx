import React from 'react'
import { InputContainer, Input } from '../styles/styledComponents'


export const CustomInput = ({ name, value, setChange }) => {
  return (
    <InputContainer>
      <Input
        type={name.includes("Password") ? "password" : "text"}
        placeholder={`Enter your ${name}`}
        value={value}
        onChange={(e) => setChange(e.target.value)}
      />
    </InputContainer>
  )
};