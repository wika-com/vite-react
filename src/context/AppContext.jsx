import React,  {createContext, useState} from "react";

export const AppContext = createContext(null);

export function AppProvider({children}) {
    const [showTime,setShowTime] = useState(true);
    const [userName,setUserName] = useState("");
    const [selectContact,setSelectContact] = useState("Ala");
    const [darkTheme,setDarkTheme] = useState(false);

    const value={showTime,setShowTime,userName,setUserName,selectContact,setSelectContact,darkTheme,setDarkTheme};

    return  <AppContext.Provider value={value} > {children} </AppContext.Provider>;
}