import styled, { css } from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    justify-content: center; 
    height: 100vh;
    align-items: center;
`;

export const FormContainer = styled.div`
    
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }
    
    margin-top: 20px;
    background: #191c29;
    width: 450px;
    height: 60vh;
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: white;
    
    &::before {
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 2.5s linear infinite;
    }
  
    &::after {
        position: absolute;
        content: "";
        top: 10vh;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(15vh);
        background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }
  
    @keyframes spin {
        0% {
        --rotate: 0deg;
        }
        100% {
        --rotate: 360deg;
    }
`;

export const Button = styled.button`
    margin-top: 30px;
    background: #4b4949;
    color: #ccc;
    width: 100px;
    height: 30px;
    border: 0;
    font-size: 18px;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    transition: .8s;
    overflow: hidden;
    &:focus{
        outline: 0;
    }
    &:hover{
        background: #419fbd;
        cursor: pointer;
        &:before{
        transform: translateX(300px)  skewX(-15deg);  
        opacity: 0.6;
        transition: .7s;
        }
        &:after{
        transform: translateX(300px) skewX(-15deg);  
        opacity: 1;
        transition: .7s;
        }
    }
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
`;

export const Container = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    // border: solid;
    // border-color: red;
`;


export const ContainerDatos = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    margin: 5px 30px;
    // border: solid;
    // border-color: red;
`;

export const Error = styled.p`
    z-index: 100;
    position: relative;
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #419fbd;
`;