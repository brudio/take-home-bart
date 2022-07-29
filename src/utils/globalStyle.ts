import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export default createGlobalStyle`
  *, *::before, *::after {
    font-variant-ligatures: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 1rem;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, button, input {
    font-family: 'Lato', sans-serif;
    color: ${colors.MIDNIGHT};
  }
  
  button {
    padding: 0.625rem;
    border-radius: 0.25rem;
    border: none;
    font-weight: 700;
    cursor: pointer;
    background: ${colors.BLUE};
    color: ${colors.WHITE};
  }
`;
