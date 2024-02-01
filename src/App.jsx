import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { darkTheme, lightTeheme } from "./styled/theme";
import { Router } from "./router";
import { useContext } from "react";
import { ThemeModeContext } from "./contexts/ThemeModeContext";
import { ConnectionAlert, Toast } from "./components/composite";
import { InternetConnectionContext } from "./contexts/InternetConnectionContext";

function App() {

  const { isDarkMode } = useContext(ThemeModeContext);
  const { isOffline } = useContext(InternetConnectionContext);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTeheme}>
        <GlobalStyles/>
        {isOffline && <ConnectionAlert/>}
        <Toast/>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;