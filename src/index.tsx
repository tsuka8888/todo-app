import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import { ThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/core";

const theme = unstable_createMuiStrictModeTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: ["Roboto", "Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "sans-serif"].join(),
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
