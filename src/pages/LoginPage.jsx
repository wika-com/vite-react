import {Typography, Paper, TextField, Button, Stack} from '@mui/material';

export default function ChatPage(){

    return (
        <Paper sx={{p:2,minHeight:400}}>
            <Typography variant="h3">Login</Typography>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Login" variant="outlined" />
                <Button variant="contained">Zapisz</Button>
            </Stack>
        </Paper>
    );
}