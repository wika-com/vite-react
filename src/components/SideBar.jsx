import { Box, Toolbar, ListItem, ListItemText, ListItemButton, List, Drawer, Typography, Button, Stack, TextField, Fab} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "./SideBar.css";

export default function SideBar({open,onClose}) {
    const data=useContext(AppContext);
    const names=["Ala","Ola","ELA","Kasia","Basia"];

    //kontakty z [names] dodawane na start
    const [contacts,setContacts] = useState(names);
    const [newContact,setNewContact] = useState("");

    function addContact(){
        const name = newContact.trim();
        if(!name) return;

        if(!contacts.includes(name)) setContacts([...contacts, name]);

        setNewContact("");
        data.setSelectContact(name);
        onClose();
    }

    function removeContact(name){
        const confirmed = window.confirm(`Czy na pewno chcesz usunąć kontakt ${name}?`);
        if (!confirmed) return;

        const next = contacts.filter(x => x !== name);
        setContacts(next);

        if(data.selectContact === name) data.setSelectContact(next[0] || "");
    }

    return(
        <Drawer className="sidebar" variant="temporary" open={open} onClose={onClose} sx={{width:300, [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },}}>
            <Toolbar/>
            <Box className="sideblock">
                <Stack>
                    <Typography className="contacts">Kontakty</Typography>
                </Stack>
                <Box className="stack">
                    {/*<input*/}
                    {/*    className="dodaj"*/}
                    {/*    value={newContact}*/}
                    {/*    onChange={(e)=>setNewContact(e.target.value)}*/}
                    {/*    placeholder="Dodaj kontakt..."*/}
                    {/*/>*/}
                    <TextField
                        className="dodaj"
                        label="Dodawanie"
                        multiline
                        maxRows={4}
                        variant="standard"
                        value={newContact}
                        onChange={(e)=>setNewContact(e.target.value)}
                        placeholder="Nowy kontakt"
                    />
                    <Button className="button" aria-label="plus" size="larger" onClick={addContact}>
                        <AddIcon className="icon" fontSize="medium" />
                    </Button>
                </Box>
                <List>
                    {
                        contacts.map( (name) => (
                            <ListItem id="one" key={name}>
                                <ListItemButton onClick={ () => { data.setSelectContact(name); onClose();}} selected={data.selectContact === name}>
                                    <ListItemText className="talk" primary={name} secondary="Wiadomości"/>
                                </ListItemButton>
                                <Button id="usun" size="small" onClick={(e)=>{ e.stopPropagation(); removeContact(name); }}>
                                    <RemoveIcon id="minus" className="icon" fontSize="medium" />
                                </Button>
                                {/*co robi e.stopPropagation();*/}
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
