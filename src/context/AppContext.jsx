import React,  {createContext, useState, useEffect} from "react";
import { toast } from 'react-toastify';
// import {dark} from "@mui/material/styles/createPalette.d.ts";

export const AppContext = createContext(null);

export function AppProvider({children}) {
    const LS_USER_KEY= "ChatUsername";
    const LS_CHAT_KEY="ChatMessages";

    const [showTime,setShowTime] = useState(true);
    const [contacts,setContacts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [userName,setUserName] = useState(localStorage.getItem(LS_USER_KEY) || "");
    const [chatMap, setChatMap] = useState(() => {
        const saved = localStorage.getItem(LS_CHAT_KEY);
        return saved ? JSON.parse(saved) : {};
    });
    const [selectContact,setSelectContact] = useState("Ala");
    const [darkTheme,setDarkTheme] = useState(false);
    //const [chatMap,setChatMap] = useState({});
    // const [control,setControl] = useState(localStorage.setItem("availability") || "Nieaktywna/y");
    const [control, setControl] = useState(localStorage.getItem("availability") || "Nieaktywna/y");


    useEffect(() => {
        localStorage.setItem(LS_USER_KEY,userName)
    }, []);

    useEffect(() => {
        localStorage.setItem(LS_USER_KEY,userName)
    }, [userName]);

    useEffect(() => {
        localStorage.setItem(LS_CHAT_KEY, JSON.stringify(chatMap));
    }, [chatMap]);

    useEffect(() => {
        localStorage.setItem("availability",control)
    }, [control]);

    function isAvailable(available) {
        setControl(available)
    }

    function addMessage(contact, from, text){
        setChatMap(prev => {
            const key = contact;
            const list = prev[key] || [];
            return { ...prev, [key]: [...list, {from, text, time: new Date().toLocaleTimeString()}] };
        });
    }
    function addContactToList(name) {
        if(!contacts.includes(name)) {
            setContacts([...contacts, name]);
        }
    }

    function login(name) {
        const nameClean = (name || "").trim();
        if (!nameClean) {
            toast.error("Niepoprawny login..");
            return false;
        }
        if (nameClean.length<=3) {
            toast.error("Za krótki login");
            return false;
        }
        // if (nameClean.includes(/[,!?@%*]/)) {
        // if (/[,!?@%*]/.test(nameClean)) {
        //     toast.error("Login zawiera niedozwolone znaki: , ! @ % ?");
        //     return false;
        // }
        setUserName(nameClean);
        toast.success('Zalogowany!');
        return true;
    }

    function darkside() {
        setDarkTheme(!darkTheme);
        if (!darkTheme) {
            toast('Witamy na ciemnej stronie mocy...',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }

    function logout() {
        setUserName("");
        setChatMap({});
        localStorage.removeItem("ChatMessages");

    }

    const value={
        showTime,setShowTime,
        userName,setUserName,
        selectContact,setSelectContact,
        darkTheme,setDarkTheme,
        chatMap,setChatMap,
        addMessage,
        login,logout,
        darkside,
        isAvailable,
        control,setControl,
        anchorEl,setAnchorEl,
        addContactToList,
        contacts,setContacts
    };
    return  <AppContext.Provider value={value} > {children} </AppContext.Provider>;
}
