import { Box, Grid, Typography } from "@mui/material";
import { _launchpadRecord } from "../../../_mocks/_launchpad";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../../../components/Image";
// Images
import rec1BackImg from "../../../assets/record1.png";
import rec2BackImg from "../../../assets/record2.png";
import rec3BackImg from "../../../assets/record3.png";
import rec4BackImg from "../../../assets/record4.png";
import rec5BackImg from "../../../assets/record5.png";

//Icon images
import bitmambaImg from "../../../assets/bitmamba.png";
import starcornImg from "../../../assets/starcorn.png";
import apeLegendImg from "../../../assets/apelegend.png";
import gamepadImg from "../../../assets/gamepad.png";
import pinkchain from "../../../assets/pinkcoin.png";

const CarouselComp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {/* <Box sx={{ flexGrow: 1, mt: 5, paddingLeft: 4 }}>
          <Grid container spacing={3}>
            {_launchpadRecord.map((data: any) => (
              <Grid xs key={data.id}>
                <CarouselCard record={data} />
              </Grid>
            ))}
          </Grid>
        </Box> */}

        {/* 1st card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec1BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap:{xs:1}
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={bitmambaImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                Bitmamba
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Decentralised Exchange
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 2nd card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec2BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                StarCorn Swap
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Decentralised Exchange
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 3rd card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec3BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={apeLegendImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                Ape Legend
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                NFT Platform
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 4th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec4BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={gamepadImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                GamePad
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Launchpad
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 5th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={pinkchain}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 6th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  ffontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 7th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 8th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 9th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>

        {/* 10th card */}
        <div>
          <Box
            sx={{
              backgroundImage: `url(${rec5BackImg})`,
              backgroundRepeat: "no-repeat",
              width: {xs:"175px",sm:"220px"},
              height: {sm:"106px",xs:"84px"},
              borderRadius: {sm:"10px",xs:"25px"},
              p: {sm:2,xs:1},
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Image
                  disabledEffect
                  visibleByDefault
                  alt="empty content"
                  src={starcornImg}
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {sm:"18px",xs:"14px"},
                  lineHeight: {sm:"22px",xs:"16px"},
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                PinkChain
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                }}
              >
                Blockchain Network
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "22px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                }}
              >
                x100
              </Typography>
            </Box>
          </Box>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselComp;
