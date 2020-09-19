import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.days === props.value ? "#660199" : "#660199" };
    border: 0;
    font-family: font-family: 'Roboto', sans-serif;
    font-size: 2em;
    color: white;
    height: 70px;
    width: 70px;
    margin: 5px;
    transition-duration: 0.25s;
     -webkit-transition-duration: 0.25s;
    -moz-transition-duration: 0.25s;
    &:hover {
        background-color: #ae75ca;
        border: 1px solid #660199;
        box-shadow: 2px 2px 3px #660199;
    }
`;
// ae75ca
export default StyledButton
