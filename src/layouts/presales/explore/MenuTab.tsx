import { Box } from "@mui/material";
import React from "react";
import { ColorButton } from "../../../components/Button";

const MenuTab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        mt: 2,
      }}
    >
      <ColorButton variant="contained">Quick View</ColorButton>
      <ColorButton variant="contained">AllPresale</ColorButton>
      <ColorButton variant="contained">My Contribution</ColorButton>
      <ColorButton variant="contained">My Favorites</ColorButton>
      <ColorButton variant="contained">My Created Presales</ColorButton>
    </Box>
  );
};

export default MenuTab;
