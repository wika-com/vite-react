import {Box, Toolbar, ListItem, ListItemText, ListItemButton, List, Drawer, Typography} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

export default function SideBar() {
    // const data=useContext(AppContext);
    const names=["Ala","Ola","ELA","Kasia","Basia"];
    return(
        <Drawer variant="permanent" sx={{width:300, [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },}}>
            <Toolbar/>
            <Box>
                <Typography>Kontakty</Typography>
                <List>
                    {
                        names.map( (name) => (
                            <ListItem>
                                <ListItemButton>
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
