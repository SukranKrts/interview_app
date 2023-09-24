import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MyMenu from "./MyMenu";

function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{background: '#607d8b'}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                İnterview App
              </Typography>
              <Button color="inherit">Home</Button>
              <MyMenu/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Appbar;