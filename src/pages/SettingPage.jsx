import {Typography, Paper, FormControlLabel, Switch} from '@mui/material';
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

export default function ChatPage(){


    const data=useContext(AppContext)
    return (
        <Paper sx={{p:2,minHeight:400}}>
            <Typography variant="h3">Settings</Typography>
            <FormControlLabel control={<Switch checked={data.showTime} onChange={() => data.setShowTime(!data.showTime)} /> } label="Pokaż/Ukryj godzinę wiadomości" />
            <FormControlLabel control={<Switch checked={data.darkTheme} onChange={() => data.setDarkTheme(!data.darkTheme)}/>} label="Motyw ciemny/jasny" />
        </Paper>
    );
}