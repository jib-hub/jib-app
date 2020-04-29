import {createGlobalStyle}  from 'styled-components';
import { RespondTo } from './components/breakpoints/RespondTo';

export const GlobalStyle = createGlobalStyle`
  body {
    transition: all 0.3s linear;
    background: ${props => props.theme.backgroundColor} !important;
    margin: 10;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.primaryColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    max-width: 30%;
  }

  header {
    padding 0 0 30px 0;
  }

  .content-body {
    padding-top: 4em;
  }
  .boxed {
    margin: 0 auto;
    width: 80%;
    ${RespondTo.xs`
    `}
    ${RespondTo.sm`
      text-align: center;
    `}
    ${RespondTo.md`
      max-width: 900px;
    `}
    ${RespondTo.lg`
      width: 70%;
    `}
  }
  .fullWidth {
    width: 100%;
  }
`;
