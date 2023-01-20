import React from "react";
import { RouteType } from "../../routes/config";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";


type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return item.sidebarProps && item.path ? (
    <>
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          backgroundColor:
            appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          color:
            appState === item.state
              ? colorConfigs.sidebar.activeColor
              : "unset",
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <ListItemIcon
          sx={{
            color: colorConfigs.sidebar.color,
          }}
        >
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>

        <ListItemText primary={item.sidebarProps.displayText} />
      </ListItemButton>
    </>
  ) : null;
};

export default SidebarItem;
