import {Box, Toolbar, ListItem, ListItemText, ListItemButton, List, Drawer, Typography} from "@mui/material";

export default function SideBar() {

    return(
        <Drawer variant="permanent" sx={{width:300, [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },}}>
            <Toolbar/>
            <Box>
                <Typography>Kontakty</Typography>
                <List>
                    {
                        ["Ala","Ola","ELA","Kasia","Basia"].map( (name) => (
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
