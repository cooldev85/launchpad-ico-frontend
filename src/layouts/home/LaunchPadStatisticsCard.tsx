import { Box, CardActions, Typography } from "@mui/material";
const LaunchPadStatisticsCard = (props: any) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${props?.launchpad?.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        width: {xs:"125px",sm:"265px"},
        height: "177px",
        borderRadius: {xs:"25px",sm:"10px"},
        paddingLeft: 2,
        paddingTop: 2,
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
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "34px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            textAlign: "start",
          }}
        >
          {props?.launchpad?.value}
        </Typography>
      </Box>

      <CardActions>{/*  */}</CardActions>
    </Box>
  );
};

export default LaunchPadStatisticsCard;
