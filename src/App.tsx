import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@material-ui/core";

import { Routes } from "./Routes";

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
