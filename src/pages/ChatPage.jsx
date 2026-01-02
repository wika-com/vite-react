import {Typography, Paper} from '@mui/material';

export default function ChatPage(){

    return (
        <Paper sx={{p:2,minHeight:400}}>
            <Typography variant="h3">Chat</Typography>
            <Typography variant="body1" sx={{mt:1}}>dłuższy Tekst</Typography>
        </Paper>
    );
}

