import { List, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoImg from "../../assets/logo.png";
import Image from "../Image";
import { Box } from "@mui/material";
import SocialsButton from "../SocialsButtons";
import Drawer from "./Drawer";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      <List disablePadding>
        {/* Logo */}
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={LogoImg}
              sx={{ height: 30, color: "black" }}
            />
          </ListItemIcon>
          <Box>
            <ListItemText primary="Tina" />
            <ListItemText primary="LaunchPad" />
          </Box>
        </ListItemButton>

        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}

        <ListItemButton sx={{ml:1}}>
          <ListItemIcon sx={{ color: "white" }}>
            <SportsVolleyballIcon />
          </ListItemIcon>
          <Box>
          <SocialsButton />
          </Box>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
