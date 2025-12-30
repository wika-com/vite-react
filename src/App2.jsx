import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function App2() {
    const [liczba, setLiczba] = useState(0);

    function bigger() {
        setLiczba(liczba + 1);
    }

    return (
        <Paper elevation={1} >
            <Box>
                <Button variant="contained" onClick={bigger}>Przycisk</Button>
                {liczba}
                <Typography variant="h2" gutterBottom>
                    {liczba}
                </Typography>
            </Box>
        </Paper>




    );
}