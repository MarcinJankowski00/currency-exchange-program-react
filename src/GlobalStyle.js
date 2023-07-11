import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
  
    *, ::after, ::before {
        box-sizing: inherit;
    }
  
    #root {
        font-family: 'Lato', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-size: large;
        color: ${({ theme }) => theme.color.bronze};
        background-image: url("${background}");
        background-size: cover;
        background-attachment: fixed;
    }
`;