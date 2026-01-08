import {Typography, Paper, ListItem, ListItemText, List, TextField} from '@mui/material';
import {AppContext} from "../context/AppContext.jsx"
import {useContext} from "react";
import "./ChatPage.css";

export default function ChatPage(){
    const data = useContext(AppContext);
    const messages =[
        {id: 1 ,from: data.selectContact , text: "Cześć", time: "12:34" },
        {id: 2 ,from: "Ja" , text: "Cześć ...", time: "12:54" },
        {id: 3 ,from: data.selectContact , text: "Cześć..", time: "12:34" },
        {id: 4 ,from: "Ja", text: "Cześć.......", time: "13:34" },
        {id: 5 ,from: data.selectContact , text: "Cześć..........", time: "14:34" }
    ]


    return (
        <Paper id="card" sx={{p:2,minHeight:400}}>
            <Typography variant="h3">Chat</Typography>
            <Typography variant="h3">Rozmowa: {data.selectContact}</Typography>

            <List>
                <ListItem>
                    <ListItemText>

                    </ListItemText>
                </ListItem>
            </List>
            <Paper id="textfield">
                <TextField id="message" label="Hi!" variant="standard" />
            </Paper>
        </Paper>

    );
}

