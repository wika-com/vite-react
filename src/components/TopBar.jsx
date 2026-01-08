import {Typography, Toolbar, AppBar, Box, Button} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "./TopBar.css";
import ChatPage from "../pages/ChatPage.jsx";

export default function TopBar() {
    const data= useContext(AppContext);
    const nav = useNavigate();

    function logSystem() {
        data.logout();
        nav("/login");
    }

    return (
        <AppBar id="bar" position="fixed" sx={{zIndex:(theme) => theme.zIndex.drawer+1 }}>
            <Toolbar>
                <Typography id="name" variant="h6">BlablaChat</Typography>
                <Box sx={{ml:2, display:"flex", gap:1}}>
                    <Button color="inherit" component={Link} to="/chat">Chat</Button>
                    <Button color="inherit" component={Link} to ="/settings">Settings</Button>
                    <Button color="inherit" component={Link} to ="/login">Login</Button>
                </Box>
                <Box id="box" sx={{flexGrow:1}}>
                    <Typography id="user" variant="body2">Użytkownik: {data.userName}</Typography>
                    <Button id="button" color="inherit" onClick={logSystem}>Wyloguj</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
