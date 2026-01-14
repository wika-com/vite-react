import React, {useContext, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppProvider, AppContext} from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";


function ThemedApp() {
    const { darkTheme } = useContext(AppContext);
    useEffect(() => {
        document.body.classList.toggle("dark", darkTheme);
    }, [darkTheme]);

    const theme = createTheme({
        palette: {
            mode: darkTheme ? "dark" : "light",
        },
        typography: {
            fontFamily: `"Roboto Slab", "Atma"`,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer position="bottom-right" autoClose={2000} reverseOrder={false} />
            <Layout />
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter> // Wykorzystanie biblioteki React Router
            <AppProvider>
                <ThemedApp/>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
