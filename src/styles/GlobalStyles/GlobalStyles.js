import { createGlobalStyle } from "styled-components";
import "../fonts/OpenSans.css";
import "../fonts/Ubuntu.css"

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Ubuntu, "sans-serif";
    }
`