import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: 0;
  }

  body {
    background: #fff;
    color: #2B2866;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button {
    border: none;

    &:hover {
      filter: brightness(85%);
      transition: .3s ease-out;
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #2B2866;
    --purpleLight: #6C63FF;
    --purple: #9F99FF;
    --buttonColor: #E7E5FF;
    --inputColor: #F4F3FF;
    --cancel: #FF8484;
    --blueLight: #67F0F0;
    --white: #fff;
    --black: #000;
    --gray: #ECECEC;
    --textGray: #A9A9A9;
  }
`;
