import {ThemeProvider } from "@material-ui/core";
import theme from './Theme';
import MainPage from "./MainPage";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
