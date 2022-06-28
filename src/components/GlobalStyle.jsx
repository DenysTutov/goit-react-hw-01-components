import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }

  // html {
  //   scroll-behavior: smooth;
  // }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #e7ecf2;
    color: #010101;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
