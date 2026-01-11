import {Typography, Paper, Box, ListItemText, ListItemButton, ListItem, List, Drawer, Toolbar, AppBar} from '@mui/material';
import {Routes, Route, Navigate} from "react-router-dom";

import {useContext, useState} from "react";
import {AppContext} from "./context/AppContext.jsx";

import TopBar from "./components/TopBar.jsx";
import SideBar from "./components/SideBar.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";

 export default function Layout() {
   const data = useContext(AppContext);

    function requireLogin(el) {
        if(!data.userName){
            return <Navigate to="/login" replace/>
        }
        return el;
    }

    return (
        <Box sx={{display:"flex", minHeight:"100vh"}}>
            <TopBar/>

            {/*{data.userName ? <SideBar/> : null}*/}
            null

            <Box component="main" sx={{flexGrow:1, p:2}}>
                <Toolbar/>
                <Routes>
                    <Route path="/"  element={<Navigate to="/login" replace/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/chat" element={requireLogin(<ChatPage/>)} />
                    <Route path="/settings" element={requireLogin(<SettingPage/>)} />
                    <Route path="*"  element={<Navigate to="/login" replace/>} />
                </Routes>
            </Box>
        </Box>
    );
}
