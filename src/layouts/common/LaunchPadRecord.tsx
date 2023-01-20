import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "./Corousel/Carousel";
const LaunchPadRecord = () => {
  return (
    <>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: {xs:0,sm:3},
          paddingRight:  {xs:0,sm:3},
          width: { xs: "100%"}
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "27px",
              color: "#FFFFFF",
              textAlign: "start",
            }}
          >
            Launchpad Record
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#FFFFFF",
              textAlign: "start",
            }}
          >
            Projects All Time High on our Platform
          </Typography>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#FFFFFF",
            }}
          >
            View All
          </Typography>
          <ChevronRightIcon />
        </Box>
      </Box>
      <Carousel />
    </>
  );
};

export default LaunchPadRecord;
