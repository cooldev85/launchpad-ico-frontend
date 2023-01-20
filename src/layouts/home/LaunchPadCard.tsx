import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LaunchPadCard = (props: any) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${props?.launchpad?.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        width: {sm:"265px",xs:"265px"},
        height: "177px",
        borderRadius: "10px",
        paddingLeft: 2,
        paddingTop: 2,
        // opacity:0.5
        mt:{xs:1}
      }}
    >
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
        {props?.launchpad?.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "17px",
          textTransform: "capitalize",
          color: "#FFFFFF",
          textAlign: "start",
          opacity: 0.5,
          mt: 0.5,
        }}
      >
        {props?.launchpad?.subtitle}
      </Typography>
      <Box sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            color: `${props?.launchpad?.typographyColor}`,
          }}
        >
          <Typography
            sx={{
              color: `${props?.launchpad?.typographyColor}`,
              textAlign: "start",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            {props?.launchpad?.link1}
          </Typography>
          <ChevronRightIcon />
        </Box>
      </Box>
      {props?.launchpad?.link2 ? (
        <>
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                cursor: "pointer",
                color: `${props?.launchpad?.typographyColor}`,
              }}
            >
              <Typography
                sx={{
                  color: `${props?.launchpad?.typographyColor}`,
                  textAlign: "start",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
              >
                {props?.launchpad?.link2}
              </Typography>
              <ChevronRightIcon />
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default LaunchPadCard;
