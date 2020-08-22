import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    /* background: #37474f; */
    background: #121214;
    /* color: #37474f; */
    color: #A8A8B3;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    /* text-transform: uppercase; */
  }

  button{
    cursor: pointer;
  }
  
`;

export default GlobalStyled;
