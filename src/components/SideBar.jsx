import {
    Box,
    Toolbar,
    ListItem,
    ListItemText,
    ListItemButton,
    List,
    Drawer,
    Typography,
    Button,
    Stack
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import "./SideBar.css";

export default function SideBar() {
    const data=useContext(AppContext);
    const names=["Ala","Ola","ELA","Kasia","Basia"];
    return(
        <Drawer id="box" variant="permanent" sx={{width:300, [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },}}>
            <Toolbar/>
            <Box id="sideblock">
                <Stack id="stack">
                    <Typography id="contacts">Kontakty</Typography>
                    <IconButton id="icon" aria-label="plus" size="larger">
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </Stack>

                <List>
                    {
                        names.map( (name) => (
                            <ListItem key={name}>
                                <ListItemButton id="one" onClick={ () => data.setSelectContact(name)} selected={data.selectContact === name}>
                                    <ListItemText primary={name} secondary="Treść rozmowy.."/>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
