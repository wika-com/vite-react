import {Typography, Paper, TextField, Button, Stack, Box} from '@mui/material';
import {useContext, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";

export default function ChatPage(){
    const data = useContext(AppContext);
    const nav= useNavigate();
    const [name,setName] = useState("")

    function handleLogin() {
        const is_login = data.login(name);
        if (is_login) nav("/chat")
    }
    return (
        <Paper id="block">
            <Box id="box">
                <Typography id="text" variant="h3">Login</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField label="Login" variant="outlined" onChange={(el) => setName(el.target.value)}/>
                    <Button id="button" variant="contained" onClick={handleLogin}>Przejdź dalej</Button>
                </Stack>
            </Box>
        </Paper>
    );
}