import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme["neutral-2"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["neutral-2"]};
  }

  ul {
    list-style: none;
  }

  h1, h2, p {
    font-weight: 300;
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3.5rem;
      max-width: 100%;
    }

    font-size: 2.5rem;
    line-height: 3.75rem;
  }
  
  strong {
    color: ${(props) => props.theme["neutral-1"]};
    font-weight: 600;
  }
`;
