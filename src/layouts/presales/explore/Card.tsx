import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../../../components/Image";
import btcImg from "../../../assets/btc.png";
import Chip from "@mui/material/Chip";
import ETHImg from "../../../assets/ETH.png";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import notifyImg from "../../../assets/bell.png";
import heartImg from "../../../assets/Heart.png";

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

const Card = (props: any) => {
  return (
    // <Badge badgeContent={props?.explore?.badge} color="primary" >
      <Box
        sx={{
          backgroundImage: `url(${props?.explore?.background})`,
          width: "352px",
          height: "332px",
          borderRadius: "25px",
          p: 2,
          mb: 2, 
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box>
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={btcImg}
              sx={{ height: 40, mt: 1 }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                // color: "#FFFFFF",
                textAlign: "start",
              }}
            >
              {props?.explore?.title}
            </Typography>
            {props?.explore?.tags.map((o: any) => (
              <Chip label={o} color="success" size="small" />
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            Max Contribution:{props?.explore?.maxContribution}
          </Typography>

          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={ETHImg}
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
            mt: 1,
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

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Hard Cap:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            $ {props?.explore?.hardcap}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Liquidity:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            {props?.explore?.liquidity} %
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
              opacity: 0.6,
              mixBlendMode: "normal",
            }}
          >
            Lock Time:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
              mt: 1,
            }}
          >
            {props?.explore?.lockTime} Days
          </Typography>
        </Box>
        <Divider sx={{ width: "100%", mt: 1 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
                textTransform: "capitalize",
                textAlign: "start",
                mt: 1,
              }}
            >
              Sale Starts In:
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
                textTransform: "capitalize",
                textAlign: "start",
                mt: 1,
              }}
            >
              00:00:00:00
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={notifyImg}
              sx={{ height: 30, mt: 1 }}
            />
            <Image
              disabledEffect
              visibleByDefault
              alt="empty content"
              src={heartImg}
              sx={{ height: 30, mt: 1 }}
            />
          </Box>
        </Box>
      </Box>
  //  </Badge>
  );
};

export default Card;
