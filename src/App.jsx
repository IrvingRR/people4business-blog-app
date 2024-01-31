import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { lightTeheme } from "./styled/theme";
import { Router } from "./router";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTeheme}>
        <GlobalStyles/>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;