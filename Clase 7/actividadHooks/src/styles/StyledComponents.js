import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Value = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    maring-top: 10px;
    z-index: 100;
    position: relative;
    top: 16px;

`;

export const BotonContainer = styled.div`
    display: flex;
`;

export const BotonSt = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #858486;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
`;
