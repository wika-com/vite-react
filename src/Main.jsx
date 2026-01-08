import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <ToastContainer position="top-right" autoClose={3000} />
                <Layout/>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
