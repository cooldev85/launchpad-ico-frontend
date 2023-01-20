import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "../../../components/Image";
import GraphImg from "../../../assets/Frame.png";
import { flexbox } from "@mui/system";
const Tokenomix = () => {
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
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "19.36px",
          textTransform: "capitalize",
          // color: "#FFFFFF",
          textAlign: "start",
        }}
      >
        Tokenomics - Supply Distribution
      </Typography>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          textTransform: "capitalize",
          // color: "#FFFFFF",
          textAlign: "start",
          mt: 1,
        }}
      >
        Estimated Market Cap: $ 50,000
      </Typography>

      <Box
        sx={{
          mt: 2,
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "50%",
          height: "100%",
          width: "100%",
          p: 1,
        }}
      >
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={GraphImg}
          sx={{}}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{ p: 1, backgroundColor: "#F20CEC", borderRadius: "50%" }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Presale
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{ p: 1, backgroundColor: "#F20CEC", borderRadius: "50%" }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Liquidity
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              p: 1,
              backgroundColor: "rgba(242, 12, 236, 0.6)",
              borderRadius: "50%",
            }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Team Vesting
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{ p: 1, backgroundColor: "#F20CEC", borderRadius: "50%" }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Locked
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{ p: 1, backgroundColor: "#F20CEC", borderRadius: "50%" }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Unlocked
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              p: 1,
              backgroundColor: "rgba(242, 12, 236, 0.6)",
              borderRadius: "50%",
            }}
          ></Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              letterSpacing: "0.01em",
            }}
          >
            Burn
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          textTransform: "capitalize",
          textAlign: "start",
          mt: 4,
          opacity: 0.6,
        }}
      >
        Locked Address:
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          textTransform: "capitalize",
          textAlign: "start",
          color: "#FF6B36",
        }}
      >
        0xeE32AefeB41678d750FD794B11403b0d3113509B
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          20,000,000,000
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          2022-11-26 18:00
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          20,000,000,000
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          2022-11-26 18:00
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          20,000,000,000
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
          }}
        >
          2022-11-26 18:00
        </Typography>
      </Box>
    </Box>
  );
};

export default Tokenomix;
