import {Typography, Paper, FormControlLabel, Switch, Stack,Radio, RadioGroup, FormControl,FormLabel} from '@mui/material';
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "../styles/SettingPage.css";

export default function SettingPage(){
    const data=useContext(AppContext)

    const handleChange = (event) => {
        data.isAvailable(event.target.value);
    }
    return (
        <Paper id="setcard">
            <Typography className="text" id="text1" variant="h2">Settings</Typography>
            <Stack sx={{ width: '100%', maxWidth: '600px' }}>
                <FormControlLabel control={<Switch checked={data.showTime} onChange={() => data.setShowTime(!data.showTime)} /> } label="Pokaż/Ukryj godzinę wiadomości" />
                <FormControlLabel control={<Switch checked={data.darkTheme} onChange={data.darkside}/>} label="Motyw ciemny/jasny" />
                <Typography className="text" id="text2" variant="h4">Dostępność</Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        className="radio"
                        value={data.control}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Aktywna/y" control={<Radio />} label="Aktywna/y" />
                        <FormControlLabel value="Zaraz wracam" control={<Radio />} label="Zaraz wracam" />
                        <FormControlLabel value="Nieaktywna/y" control={<Radio />} label="Nieaktywna/y" />
                    </RadioGroup>
                </FormControl>
            </Stack>

        </Paper>
    );
}