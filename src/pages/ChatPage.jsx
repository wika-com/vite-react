import {Typography, Paper, ListItem, ListItemText, List, TextField, Button, Box} from '@mui/material';
import {AppContext} from "../context/AppContext.jsx"
import {useContext, useState} from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./ChatPage.css";
import { mess } from "./messages";

export default function ChatPage(){
    const data = useContext(AppContext);
    const [text,setText] = useState("");
    const messages = data.chatMap[data.selectContact] || [];

    function pickReply(){
        const i = Math.floor(Math.random() * mess.length);
        return mess[i];
    }

    function send(){
        const clean = (text || "").trim();

        if(!clean) return;

        const contact = data.selectContact;
        data.addMessage(contact,"ja",clean);
        setText("");

        setTimeout(() => {
            data.addMessage(contact,"them",pickReply()); }, 2000);
    }
    return (
        <Paper id="chat" sx={{p:2,minHeight:400, alignItems: "stretch"}}>
                <Typography variant="h6">BlablaChat</Typography>
                <Typography variant="h4">Rozmowa z {data.selectContact}</Typography>
            <List id="list"> {
                messages.map((m,index) => (
                    <ListItem key={index}>
                        <ListItemText primary={m.from==="ja" ? data.userName : data.selectContact} secondary={m.text}/>
                    </ListItem>
                ))
            }
            </List>
            <Paper id="textfield">
                <TextField fullWidth id="message" label="Wiadomość" variant="standard" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{ if(e.key==="Enter") send(); }} />
                <Button id="button" onClick={send}>
                    <SendRoundedIcon className="icon" fontSize="large" />
                </Button>
            </Paper>
        </Paper>
    );
}