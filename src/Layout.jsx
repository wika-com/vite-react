import {Typography, Paper, Box, ListItemText, ListItemButton, ListItem, List, Drawer, Toolbar, AppBar} from '@mui/material';
import {Routes, Route} from "react-router-dom";


import TopBar from "./components/TopBar.jsx";
import SideBar from "./components/SideBar.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";

 export default function Layout() {


    return (
        <Box sx={{display:"flex", minHeight:"100vh"}}>


            <TopBar/>
            <SideBar/>
            <Box component="main" sx={{flexGrow:1, p:2}}>
                <Toolbar/>
                {/*<Paper sx={{p:2,minHeight:400}}>*/}
                {/*    <Typography variant="h6">tEKST</Typography>*/}
                {/*    <Typography variant="body1" sx={{mt:1}}>dłuższy Tekst</Typography>*/}
                {/*</Paper>*/}

                <Routes>
                    <Route path="/"  element={<ChatPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/settings" element={<SettingPage/>} />
                </Routes>
            </Box>
        </Box>
    );
}
