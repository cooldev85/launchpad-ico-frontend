import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../components/Image";
import tokeroImg from "../../assets/tokero.png";
import rikkeiImg from "../../assets/rikkeicapital.png";
import codevixImg from "../../assets/codevix.png";
import copperImg from "../../assets/copper.png";
import elrondImg from "../../assets/elrond.png";
const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        //   display: "flex",
        //   justifyContent: "space-between",
        paddingLeft: 3,
        paddingRight: 3,
        mb: 4,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize:{xs:"42px",sm:"52px"},
            lineHeight:{xs:"63px",sm:"78px"},
            color: "#FFFFFF",
            textAlign: "start",
            backgroundClip: "text",
          }}
        >
          Partners
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize:{xs:"14px",sm:"18px"},
            lineHeight:{xs:"21px",sm:"27px"},
            color: "#FFFFFF",
            textAlign: "start",
            // opacity:0.5
          }}
        >
          Tinapad is honored and thrilled to be backed by leading Venture
          Capitals in blockchain industry.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap:{xs:"wrap"},
          gap:{xs:1},
          mt: 2,
          width: "100%",
          justifyContent: {sm:"space-between"},
        }}
      >
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={tokeroImg}
          sx={{ height: {xs:20,sm:30} }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={rikkeiImg}
          sx={{  height: {xs:20,sm:30} }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={elrondImg}
          sx={{  height: {xs:20,sm:30} }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={codevixImg}
          sx={{  height: {xs:20,sm:30} }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={copperImg}
          sx={{  height: {xs:20,sm:30} }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
