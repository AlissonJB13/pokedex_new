import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oxanium', cursive;
}

body {
    text-align: center;
    background: linear-gradient(to bottom, #6ab7f5, #fff);
    min-height: 100vh;
}
`
