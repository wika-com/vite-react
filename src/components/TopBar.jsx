import {Typography, Toolbar, AppBar, Box, Button} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "./TopBar.css";

export default function TopBar() {
    const data= useContext(AppContext);
    const nav = useNavigate();

    function logSystem() {
        data.logout();
        nav("/login");
    }

    return (
        <AppBar className="topbar" position="fixed" sx={{zIndex:(theme) => theme.zIndex.drawer+1, backgroundColor: "#77A68A"}}>
            <Toolbar className="toolbar">
                <Typography id="name" variant="h6">BlablaChat:)</Typography>
                <Box sx={{ml:2, display:"flex", gap:1, flexGrow:1}}>
                    {/*ml=margin-left*/}
                    <Button color="inherit" component={Link} to="/chat">Chat</Button>
                    <Button color="inherit" component={Link} to ="/settings">Settings</Button>
                    {/*<Button color="inherit" component={Link} to ="/login">Login</Button>*/}
                </Box>
                <Box id="bar" className="atma-semibold">
                    <Typography id="user" >Użytkownik: {data.userName}</Typography>
                    <Typography id="status" variant="subtitle1">Status: {data.control}</Typography>
                </Box>
                <Button className="button" color="inherit" onClick={logSystem}>Wyloguj</Button>
            </Toolbar>
        </AppBar>
    )
}
