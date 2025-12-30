// import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function App3() {
    // const [napis,setNapis] = useState("Podaj napis:");
    //
    // function dodaj_napis() {
    //
    // }
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <Paper>
            <Box>
                <Typography variant="h6" gutterBottom>
                    czeka na tekst
                </Typography>
                <TextField id="outlined-basic" label="Kolumna a" variant="outlined" />
                <TextField id="outlined-basic" label="Kolumna b" variant="outlined" />
                <Button variant="contained">Przycisk</Button>
                
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Numer</TableCell>
                            <TableCell align="right">Wartość a</TableCell>
                            <TableCell align="right">Wartość b</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell align="right">wartosc z kolumny a</TableCell>
                                <TableCell align="right">wartosc z kolumny b</TableCell>
                            </TableRow>

                    </TableBody>
                </Table>
            </Box>
        </Paper>
    );
}