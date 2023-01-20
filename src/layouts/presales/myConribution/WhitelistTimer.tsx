import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
const WhitelistTimer = () => {
  return (
    <Box
      sx={{
        backgroundColor: grey[900],
        borderRadius: "25px",
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            textTransform: "capitalize",
            // color: "#FFFFFF",
            textAlign: "start",
          }}
        >
          Whitelist Sale Starts In:
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            textTransform: "capitalize",
            color: "#F20CEC",
            textAlign: "start",
          }}
        >
          00:00:00:00
        </Typography>
      </Box>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          textTransform: "capitalize",
          // color: "#F20CEC",
          textAlign: "center",
          opacity: 0.5,
          mt: 1,
        }}
      >
        You aren't whitelisted.0
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          textTransform: "capitalize",
          // color: "#F20CEC",
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        whitelisted addresses.
      </Typography>
    </Box>
  );
};

export default WhitelistTimer;
