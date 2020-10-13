import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.days === props.value ? "#ae75ca" : "#660199" };
    border: ${props => props.days === props.value ? "2px solid #660199" : "0" };
    font-family: font-family: 'Roboto', sans-serif;
    font-size: 1.4 em;
    color: white;
    height: 110px;
    width: 200px;
    outline: none;
    margin: 3px;
    transition-duration: 0.25s;
     -webkit-transition-duration: 0.25s;
    -moz-transition-duration: 0.25s;
    &:hover {
        background-color: #ae75ca;
        border: 1px solid #660199;
        box-shadow: 2px 2px 3px #660199;
    }
    @media (min-width: 600px) {
        height: 70px;
        margin: 5px;
        width: 70px;
        font-size: 2em;
    }
`;

export default StyledButton
