import {Typography, Toolbar, AppBar, Box, Button} from '@mui/material';
import {Link} from "react-router-dom";

export default function topBar() {

    return (
        <AppBar position="fixed" sx={{zIndex:(theme) => theme.zIndex.drawer+1 }}>
            <Toolbar>
                <Typography variant="h6">ToolBar</Typography>
                <Box sx={{ml:2, display:"flex", gap:2}}>
                    <button component={Link} to="/">Chat</button>
                    <button component={Link} to ="/login">Login</button>
                    <button component={Link} to ="/setting">Settings</button>
                </Box>
                <Box sx={{flexGrow:1}}>
                    <Typography>Użytkownik: brak</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
