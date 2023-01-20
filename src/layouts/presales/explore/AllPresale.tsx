import { Typography,Box } from "@mui/material";
import React from "react";

const AllPresale = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "29px",
          textTransform: "capitalize",
          // color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        All Presales
      </Typography>
    </Box>
  );
};

export default AllPresale;
