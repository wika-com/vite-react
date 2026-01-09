import React,  {createContext, useState, useEffect} from "react";
import { toast } from 'react-toastify';
// import {dark} from "@mui/material/styles/createPalette.d.ts";

export const AppContext = createContext(null);

export function AppProvider({children}) {
    const LS_USER_KEY= "ChatUsername"

    const [showTime,setShowTime] = useState(true);
    const [userName,setUserName] = useState(localStorage.getItem(LS_USER_KEY) || "");
    const [selectContact,setSelectContact] = useState("Ala");
    const [darkTheme,setDarkTheme] = useState(false);

    useEffect(() => {
        localStorage.setItem(LS_USER_KEY,userName)
    }, []);

    function login(name) {
        const nameClean = (name || "").trim();
        if (!nameClean) {
            toast.error("Niepoprawny login..")
            return false;
        }
        setUserName(nameClean);
        toast.success('Zalogowany!')
        return true;
    }

    function darkside() {
        if (!darkTheme) {
            setDarkTheme(!darkTheme);
            toast('Witamy po ciemnej stronie mocy...',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } else {
            setDarkTheme(!darkTheme);

        }

    }

    function logout() {
        setUserName("");
    }

    const value={
        showTime,setShowTime,
        userName,setUserName,
        selectContact,setSelectContact,
        darkTheme,setDarkTheme,
        login,logout,
        darkside
    };
    return  <AppContext.Provider value={value} > {children} </AppContext.Provider>;
}