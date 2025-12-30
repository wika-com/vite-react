// import App from "./App.jsx";
// import App2 from "./App2.jsx";
// import App3 from "./App3.jsx";
// import "./Layout.css";
//
// export default function Layout() {
//
//     return (
//         <div className="main">
//             <div className="card1">
//                 <h2>Lewo (App1)</h2>
//                 <App />
//             </div>
//             <div className="card1">
//                 <h2>Środek (App2)</h2>
//                 <App2 />
//             </div>
//             <div className="card2">
//                 <h2>Prawo (App3)</h2>
//                 <App3 />
//             </div>
//         </div>
//     );
// }

import {Typography, Paper, Box, ListItemText, ListItemButton, ListItem, List, Drawer, Toolbar, AppBar} from '@mui/material';
export default function Layout() {
    return (
        <Box sx={{display:"flex", minHeight:"100vh"}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">ToolBar</Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" sx={{width:"300", [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },}}>
                <Toolbar/>
                <Box>
                    <Typography>
                        Tekst
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="tekst"/>
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>


            </Drawer>
        </Box>
    );
}
