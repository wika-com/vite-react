import {Typography, Toolbar, AppBar, Box, Button} from '@mui/material';
import {Link} from "react-router-dom";

export default function topBar() {

    return (
        <AppBar position="fixed" sx={{zIndex:(theme) => theme.zIndex.drawer+1 }}>
            <Toolbar>
                <Typography variant="h6">ToolBar</Typography>
                <Box sx={{ml:2, display:"flex", gap:1}}>
                    <Button color="inherit" component={Link} to="/">Chat</Button>
                    <Button color="inherit" component={Link} to ="/login">Login</Button>
                    <Button color="inherit" component={Link} to ="/settings">Settings</Button>
                </Box>
                <Box sx={{flexGrow:1}}>
                    <Typography>Użytkownik: brak</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
