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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const NavMenus=[
    {
      title:"Home",
      link:'/'
    },
    {
      title:"About",
      link:'/aboutUs'
    },
    {
      title:"Services",
      link:'/featurePage'
    },
    {
      title:"Contact",
      link:'/contactUs'
    },
  ]

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavMenus.map((menu, index) => (
          <ListItem className="cursor-pointer" key={index} onClick={()=>navigate(menu?.link)}>
            <ListItemText primary={menu.title} />
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
            {NavMenus.map((menu, index) => (
              <ListItem className="cursor-pointer" key={index} sx={{ color: "black" }} onClick={()=>navigate(menu?.link)}>
                {menu.title}
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
