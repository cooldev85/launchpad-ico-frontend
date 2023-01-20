import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import saleIcon from "../../../assets/saleIcon.png";
import Image from "../../../components/Image";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { ColorButton } from "../../../components/Button";
import TextField from "@mui/material/TextField";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "" : "#F20CEC",
  },
}));
const WhiteListSale = () => {
  return (
    <Box
      sx={{
        backgroundColor: grey[900],
        borderRadius: "25px",
        p: 3,
        mt: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{}}>
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

        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={saleIcon}
          sx={{ height: 30 }}
        />
      </Box>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "15px",
          textTransform: "capitalize",
          textAlign: "start",
          mt: 2,
        }}
      >
        Progress [25%]
      </Typography>
      <Box sx={{ flexGrow: 1, mt: 1 }}>
        <BorderLinearProgress variant="determinate" value={25} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "8px",
            lineHeight: "12px",
            textTransform: "capitalize",
            textAlign: "start",
            mt: 1,
          }}
        >
          0 ETH
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "8px",
            lineHeight: "12px",
            textTransform: "capitalize",
            textAlign: "start",
            mt: 1,
          }}
        >
          10 ETH
        </Typography>
      </Box>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "18px",
          textTransform: "capitalize",
          textAlign: "center",
          mt: 1,
        }}
      >
        Contribute
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          sx={{ width: 150 }}
          defaultValue={0}
        />
        <ColorButton variant="contained" sx={{ width: "50%" }}>
          BUY
        </ColorButton>
      </Box>
    </Box>
  );
};

export default WhiteListSale;
