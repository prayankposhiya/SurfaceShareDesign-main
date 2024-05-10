import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Logo from "../assets/Logo.png";
import Hidden from "@mui/material/Hidden";
import { ReactComponent as MenuIcon } from "../assets/MenuIcon.svg";
import ButtonComponent from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Services", "Contact"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setOpen(isOpen);
  };
  return (
    <AppBar position="sticky" sx={{ boxShadow: "none", backgroundColor: "#F9DD7B" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Box> */}
        <Hidden mdUp>
          <IconButton
            edge="start"
            style={{ marginRight: 16 }}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Drawer
          sx={{ backgroundColor: "transparent" }}
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        {/* </Box> */}
        <Box>
          <img src={Logo} alt="" />
        </Box>
        {/* <Box> */}
        <Hidden mdDown>
          <List sx={{ display: "flex" }}>
            {["Home", "About", "Services", "Contact"].map((text, index) => (
              <ListItem key={index} sx={{ color: "black" }}>
                {text}
              </ListItem>
            ))}
          </List>
        </Hidden>
        {/* </Box> */}
        <Box>
          <ButtonComponent btnClass="" btnText="Download" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
