import { Todos } from "./pages/Todos";
import { Header } from "./organisms/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { Users } from "./pages/Users";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
