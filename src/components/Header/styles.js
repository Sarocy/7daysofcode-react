import styled from "styled-components";

export const Container = styled.div`
    height: 48vh;
    text-align: left;
    background: url('/images/header.jpg') center/cover no-repeat;
    position: relative;
    z-index: 1; 
    width: 100vw;



    @media (max-width: 768px) {
        height: 35vh; 
        width: 100vw;
    }
`;

export const Title = styled.h1`
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: #fff;
    position: absolute;
    left: 85px;
    top: 20vh;



    @media (max-width: 768px) {
        font-size: 20px; 
        left: 20px; 
        top: 15vh;
        text-align: center;
    }
`;


