import useTheme from "./hooks/useTheme";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles, { themeDark, themeLight } from "./GlobalStyles";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

function App() {
  const { theme, switchTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
      <GlobalStyles />
      <Wrapper>
        <Header switchTheme={switchTheme} />
        <Calculator />
        {/* <Calculator /> */}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
`;
