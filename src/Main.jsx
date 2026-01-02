import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Layout/>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
