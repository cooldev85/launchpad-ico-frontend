import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import BackgroundImg from "../../../assets/backContribution.png";
import headerImg from "../../../assets/contri.png";
import btcImg from "../../../assets/btc.png";
import Image from "../../../components/Image";
import SocialsButton from "../../../components/SocialsButtons";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import WhitelistTimer from "./WhitelistTimer";
import { grey } from "@mui/material/colors";
import WhiteListSale from "./WhiteListSale";
import DexListingTimer from "./DexListingTimer";
import Tokenomix from "./Tokenomix";

const Content = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={8} sx={{ mb: 5, mt: 4 }}>
      <Box
        sx={{
          backgroundColor: grey[900],
          //   backgroundImage: `url(${BackgroundImg})`,
          //   backgroundRepeat: "no-repeat",
          width: "fix-layout",
          height: "fix-layout",
          borderRadius: "25px",
          // p: 2,
          mb: 2,
        }}
      >
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={headerImg}
          sx={{ width: "100%" }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
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
                Metatate
              </Typography>
              <SocialsButton />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
            <Chip label="Audit" color="success" size="small" />
            <Chip label="Upcoming" color="success" size="small" />
            <Chip label="KYC" color="success" size="small" />
          </Box>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "start",
            }}
          >
            Welcome to Metatate™, where mental health met web3 wellness and
            created the quintessential “M2E (Meditate-To-Earn)” Ecosystem. At
            the core of Metatate’s M2E Ecosystem, you can find its FREE
            governing multi-purpose meditation mobile application Metatate™,
            while throughout the ecosystem’s veins you can find “$CHI”, its
            native ERC-20 token.
            <br />
            The Metatate™ team’s united goal is to put wellness at the forefront
            of other industries, specifically to aid the mental health crisis.
            Metatate™ believes whole- heartedly that by encouraging a more
            positive outlook on the benefits of wellness and its many subgenres,
            we can better our whole world. Metatate™ encourages everyone to
            download their FREE app on both iOS and Android in order to start
            earning $CHI.
            <br />
            As well, presalers who sell less than 50% of their presale tokens
            will be airdropped a "$CHI KEY NFT", which gives them exclusive
            benefits such as the potential to earn extra $CHI and not view ads
            on the Metatate™ app, the ability to help make future critical
            decisions revolving around the Metatate™ community, and much more!{" "}
            <br />
            Join Metatate's Telegram today to learn more: t.me/metatateapp
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Presale Address:
          </Typography>
          <Box>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
                textTransform: "capitalize",
                color: "#F20CEC",
                textAlign: "start",
              }}
            >
              0xeE32AefeB41678d750FD794B11403b0d3113509B
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "15px",
                textTransform: "capitalize",
                textAlign: "start",
                opacity: 0.6,
                mixBlendMode: "normal",
              }}
            >
              Do not send ETH directly to the presale address!
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Token Name:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            Metatate
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Token Symbol:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            MTT
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Total Supply:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            15,000,000,000
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Token for Presale:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            5,000,000,000
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Soft Cap:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            10 ETH
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
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
            }}
          >
            10 ETH
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Presale Start Time:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            2022-11-26 18:00
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Presale End Time:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            2022-11-26 18:00
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Unused Token:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            Refund
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Liquidity Percent:
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            51%
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Divider sx={{ width: "100%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              // color: "#FFFFFF",
              textAlign: "start",
              opacity: 0.6,
            }}
          >
            Liquidity Unlock Time (UTC):
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            2022-11-26 18:00
          </Typography>
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} md={4} sx={{ mb: 5, mt: 4 }}>
      <WhitelistTimer />
      <WhiteListSale />
      <DexListingTimer />
      <Tokenomix />
    </Grid>
  </Grid>
);

export default Content;
