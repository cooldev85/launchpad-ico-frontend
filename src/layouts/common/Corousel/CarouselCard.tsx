import React from 'react'
import Card from "@mui/material/Card";
import { Box, Button, CardHeader, Typography } from "@mui/material";

const CarouselCard = (props:any) => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${props?.record?.backgroundImg})`,
      backgroundRepeat: "no-repeat",
      width: "220px",
      height: "106px",
      borderRadius: "10px",
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
        {props?.record?.title}
      </Typography>
    </Box>
  )
}

export default CarouselCard