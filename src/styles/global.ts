import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0
  }

  body{
    background-color:#43085D;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  input {
    border-style: none;
    background: transparent;
    outline: none;
  }

  button {
    padding: 0;
    background: none;
    border: none;
    outline: none;
  }

`;
