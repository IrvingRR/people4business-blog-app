import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { lightTeheme } from "./styled/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTeheme}>
        <GlobalStyles/>
        <h2>people4business Blog</h2>
      </ThemeProvider>
    </>
  );
}

export default App;