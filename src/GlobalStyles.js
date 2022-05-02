import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
      color: inherit;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
`;

const themeLight = {
  src: "black",
  color: "#000",
  foregroundColor: "#fff",
  backgroundColor: "rgb(237,241,245)",
};

const themeDark = {
  src: "white",
  color: "#fff",
  foregroundColor: "rgb(21,31,46)",
  backgroundColor: "rgb(11, 22, 34)",
};

export default GlobalStyles;
export { themeLight, themeDark, Container };
