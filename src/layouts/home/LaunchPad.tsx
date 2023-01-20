import React from "react";
import { _launchpad, _launchpadStatistics } from "../../_mocks/_launchpad";
import { Box, Typography } from "@mui/material";
import { ColorButton } from "../../components/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LaunchPadCard from "./LaunchPadCard";
import LaunchPadStatisticsCard from "./LaunchPadStatisticsCard";

const LaunchPad = () => {
  return (
    <>
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "space-between",
          mt: { xs: 4, sm: 8 },
          paddingLeft: { sm: 3 },
          paddingRight: { sm: 3 },
        }}
      >
        <Box sx={{ width: { xs: "100%" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: { xs: 400, sm: 600 },
              fontSize: { xs: "42px", sm: "52px" },
              lineHeight: { xs: "52px", sm: "78px" },
              backgroundClip: "text",
              color: "#715DEC",
              textAlign: "start",
              fontStyle: "normal",
            }}
          >
            The Launchpad
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: { xs: 400, sm: 600 },
              fontSize: { xs: "42px", sm: "52px" },
              lineHeight: { xs: "52px", sm: "78px" },
              backgroundClip: "text",
              color: "#FFFFFF",
              textAlign: "start",
              fontStyle: "normal",
            }}
          >
            Protocol for Everyone!
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            display: { xs: "flex" },
            flexDirection: { xs: "column-reverse", sm: "column" },
          }}
        >
          <Box
            sx={{
              // display: "flex",
              justifyContent: { xs: "flex-start", sm: "flex-end" },
              mt: { xs: 2 },
            }}
          >
            <ColorButton variant="contained" startIcon={<AddCircleIcon />}>
              Create Launchpad
            </ColorButton>
          </Box>

          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: { xs: 400, sm: 400 },
              fontSize: { xs: "14px", sm: "18px" },
              lineHeight: { xs: "21px", sm: "27px" },
              color: "#FFFFFF",
              textAlign: "start",
              mt: 3,
              fontStyle: "normal",
            }}
          >
            Tinapad Helps everyone to create their own tokens and token sales in
            few seconds. Tokens Created on Pinksale will be varified and
            published on explorer websties.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column",sm:"row"},
          mt: {sm:5,xs:2},
          gap: { sm: 3, xs: 1 },
          width: { xs: "100%" },
          // paddingLeft:{xs:2}
        }}
      >
        {_launchpad.map((data: any) => (
          <Box key={data.id} sx={{}}>
            <LaunchPadCard launchpad={data} />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          mt: 5,
          gap: { sm: 3, xs: 1 },
          flexWrap: { xs: "wrap" },
          width: { xs: "100%" },
          // paddingLeft:{xs:2}
        }}
      >
        {_launchpadStatistics.map((data: any) => (
          <Box key={data.id}>
            <LaunchPadStatisticsCard launchpad={data} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LaunchPad;
