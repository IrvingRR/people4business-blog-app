import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { darkTheme, lightTeheme } from "./styled/theme";
import { Router } from "./router";
import { useContext } from "react";
import { ThemeModeContext } from "./contexts/ThemeModeContext";

function App() {

  const { isDarkMode } = useContext(ThemeModeContext);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTeheme}>
        <GlobalStyles/>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;