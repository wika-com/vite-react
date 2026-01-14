import { Box, Toolbar, ListItem, ListItemText, ListItemButton, List, Drawer, Typography, Button, Stack, TextField, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext, useState, useEffect} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "../styles/SideBar.css";

function useFetch(url) {

    const [dataAPI,setdataAPI] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setdataAPI(json))
            .catch(err => setError(err))
            .finally(()=> setLoading(false));

    }, [url]);
     return {dataAPI, error, loading};
}

export default function SideBar({open,onClose}) {
    const data=useContext(AppContext);
    const status = ["aktywna/y","zaraz wracam","nieaktywna/y"];
    const {dataAPI, error, loading} = useFetch("https://dummyjson.com/users/?limit=4&skip=5");

    //kontakty z [names] dodawane na start
    // const [contacts,setContacts] = useState(names);
    // const [newContact,setNewContact] = useState("");
   // const [contacts,setContacts] = useState([]);
    const [newContact,setNewContact] = useState("");

    useEffect(() => {
        if (dataAPI && dataAPI.users && data.contacts.length ===0) {
            const apiNames = dataAPI.users.map(user => user.firstName);
            data.setContacts(apiNames);
            if (apiNames.length > 0 && !data.selectContact) {
                data.setSelectContact(apiNames[0]);
            }
        }
    }, [dataAPI,data])

    function randomStatus(){
        const i = Math.floor(Math.random() * status.length);
        return status[i];
    }

    function addContact(){
        const name = newContact.trim();
        if(!name) return;

        data.addContactToList(name);
        setNewContact("");
        data.setSelectContact(name);
    }

    function removeContact(name){
        const confirmed = window.confirm(`Czy na pewno chcesz usunąć kontakt ${name}?`);
        if (!confirmed) return;

        const next = data.contacts.filter(x => x !== name);
        data.setContacts(next);

        if(data.selectContact === name) data.setSelectContact(next[0] || "");
    }


    //if (loading) return <p>ładowanie</p>;
    if (error) return <p>Błąd:{error.message}</p>

    return(
        <>
            <Drawer className="sidebar" variant="temporary" open={open} onClose={onClose} sx={{display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { width: 300 },}}>
                <Toolbar/>
                <Box className="sideblock">
                    <Stack className="stack" id="stack">
                        <Typography className="contacts">Kontakty</Typography>
                    </Stack>
                    <Box className="box">
                        {/*<input*/}
                        {/*    className="dodaj"*/}
                        {/*    value={newContact}*/}
                        {/*    onChange={(e)=>setNewContact(e.target.value)}*/}
                        {/*    placeholder="Dodaj kontakt..."*/}
                        {/*/>*/}
                        <TextField className="dodaj" label="Dodawanie"
                            multiline maxRows={4} variant="standard"
                            value={newContact} onChange={(e)=>setNewContact(e.target.value)}
                            placeholder="Nowy kontakt"/>
                        <Button className="button" aria-label="plus" size="larger" onClick={addContact}>
                            <AddIcon className="icon" fontSize="medium" />
                        </Button>
                    </Box>
                    <List>
                        {
                            data.contacts.map( (name) => (
                                <ListItem id="one" key={name}>
                                    <ListItemButton onClick={ () => { data.setSelectContact(name);}} selected={data.selectContact === name}>
                                        <ListItemText className="talk" primary={name} secondary={randomStatus()}/>
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

            <Drawer className="sidebar" id="sidebar" variant="permanent" sx={{display: { xs: "none", md: "block" },
                "& .MuiDrawer-paper": {
                    width: 300,
                    boxSizing: "border-box",},}}>
                <Toolbar/>
                <Box className="sideblock">
                    <Stack className="stack" id="stack">
                        <Typography className="contacts">Kontakty</Typography>
                    </Stack>
                    <Box className="box">
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
                            data.contacts.map( (name) => (
                                <ListItem id="one" key={name}>
                                    <ListItemButton onClick={ () => { data.setSelectContact(name);}} selected={data.selectContact === name}>
                                        <ListItemText className="talk" primary={name} secondary={randomStatus()}/>
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
        </>
    )
}
