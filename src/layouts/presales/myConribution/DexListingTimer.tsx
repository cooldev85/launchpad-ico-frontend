import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const DexListingTimer = () => {
  return (
    <Box
      sx={{
        backgroundColor: grey[900],
        borderRadius: "25px",
        p: 3,
        mt: 3,
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          //   textTransform: "capitalize",
          // color: "#FFFFFF",
          textAlign: "start",
        }}
      >
        Estimated DEX Listing Time:
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          //   textTransform: "capitalize",
          color: "#F20CEC",
          textAlign: "start",
        }}
      >
        00:00:00:00
      </Typography>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          textAlign: "start",
          opacity: 0.6,
          mt:1
        }}
      >
        Token Address:
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#F20CEC",
          textAlign: "start",
        }}
      >
        0xeE32AefeB41678d750FD794B11403
      </Typography>
    </Box>
  );
};

export default DexListingTimer;
