import {Typography, Paper, ListItem, IconButton, ListItemText, List, TextField, Button, Box, Popover} from '@mui/material';
import {AppContext} from "../context/AppContext.jsx"
import {useContext, useState} from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import "./ChatPage.css";
import { mess } from "./messages";
import SideBar from "../components/SideBar.jsx";

export default function ChatPage(){
    const data = useContext(AppContext);
    const [text,setText] = useState("");
    const messages = data.chatMap[data.selectContact] || [];
    //const [drawerOpen, setDrawerOpen] = useState(false);
    const emoji = ["😀","😄","😁","😆","😅","😂","🙂","🙃","🫠","😉","😊","😇","🥰","😍","🤩","😘","😚","🥲","😋","😛","😜","🤪","😝","🤑","🤔","😐","😑","😏","😒","😬","😌","😔","😴","🤮","🤧","🥵","🥶","😵","🤠","🥳","😎","😮","😢","😭","😠"];


    // function handleDrawer() {
    //     setDrawerOpen(!drawerOpen);
    // }

    function setEmoji(emoji){
        setText(prev => prev + emoji);
        data.setAnchorEl(null);
    }

    const handleClose = () => {
        data.setAnchorEl(null);
    };

    const handleClick = (event) => {
        data.setAnchorEl(event.currentTarget); // przycisk kliknięty
    };

    const open = Boolean(data.anchorEl);

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
        <Box className="mainchat" sx={{display:"flex", minHeight: "auto"}}>
            <SideBar/>
            <Paper id="chat">
                    <Typography variant="h6">BlablaChat</Typography>
                    <Typography variant="h4">Rozmowa z {data.selectContact}</Typography>
                <List id="list"> {
                    messages.map((m,index) => (
                        <ListItem
                            loading="lazy"
                            key={index}
                            className={m.from === "ja" ? "myMessage" : "theirMessage"}
                        >
                            <Box className="cloud">
                                <Typography className="author">
                                    {m.from === "ja" ? data.userName : data.selectContact}
                                </Typography>
                                <Typography className="text">
                                    {m.text}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))
                }
                </List>
                <Paper id="textfield">
                    <TextField fullWidth id="message" label="Wiadomość" variant="standard" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{ if(e.key==="Enter") send(); }} />
                    <Button id="button" onClick={handleClick}>
                        <EmojiEmotionsRoundedIcon className="icon" fontSize="large" />
                    </Button>
                    <Popover
                        open={open}
                        anchorEl={data.anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        {/* Wyświetlanie emoji w siatce 6 kolumn */}
                        <Box sx={{ p: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1 }}>
                            {emoji.map((em, index) => (
                                <IconButton key={index} onClick={() => setEmoji(em)} sx={{ fontSize: '1.5rem' }}>
                                    {em}
                                </IconButton>
                            ))}
                        </Box>
                    </Popover>
                    {/*<Popover*/}
                    {/*    open={open}*/}
                    {/*    anchorEl={anchorEl}*/}
                    {/*    onClose={handleClose}*/}
                    {/*    anchorOrigin={{*/}
                    {/*        vertical: 'top',*/}
                    {/*        horizontal: 'right',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <List id="list"> {*/}
                    {/*        emoji.map((em,index) => (*/}
                    {/*            <ListItem key={index}>*/}
                    {/*                <Button onClick={() => setEmoji(em)}>{em}</Button>*/}
                    {/*            </ListItem>*/}
                    {/*        ))}*/}
                    {/*    </List>*/}
                    {/*</Popover>*/}
                    <Button id="button" onClick={send}>
                        <SendRoundedIcon className="icon" fontSize="large" />
                    </Button>
                </Paper>
            </Paper>
        </Box>
    );
}
//
// import React, {useEffect, useState} from "react";
// import {Paper, Typography} from "@mui/material";
//
// function useFetch(url) {
//
//     const [dataAPI,setdataAPI] = useState(null);
//     const [error,setError] = useState(null);
//     const [loading,setLoading] = useState(true);
//
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(json => setdataAPI(json))
//             .catch(err => setError(err))
//             .finally(()=> setLoading(false));
//
//     }, [url]);
//      return {dataAPI, error, loading};
// }
//
//
// export default function ChatPage() {
//     const {dataAPI, error, loading} = useFetch("https://dummyjson.com/users/?limit=4&skip=5&select=key1");
//
//     if (loading) return <p>ładowanie</p>;
//     if (error) return <p>Błąd:{error.message}</p>
//
//     return (
//         <div>
//             <h1>{dataAPI.firstName}</h1>
//             <h2>aa</h2>
//         </div>
//     );
// }
//

