import { Typography,Box } from "@mui/material";

const MyFavourite = () => {
  return (
    <Box>
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "29px",
        textTransform: "capitalize",
        // color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      My Favourite
    </Typography>
  </Box>
  )
}

export default MyFavourite