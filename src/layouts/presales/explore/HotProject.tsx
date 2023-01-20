import { Box, Typography } from "@mui/material";
import Image from "../../../components/Image";
import elipseImage from "../../../assets/ellipse.png";
import Marquee from "react-fast-marquee";
import btcImg from "../../../assets/btc.png";
const commonStyles = {
  // bgcolor: '#F20CEC',
  // borderColor: '#F20CEC',
  m: 1,
  border: 1,
  width: "1.5rem",
  height: "1.5rem",
};

const HotProject = () => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={elipseImage}
            sx={{ height: 12, width: 12, mt: 1 }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "27px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              textAlign: "start",
            }}
          >
            Hot
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            textAlign: "start",
          }}
        >
          Hot Projects Today
        </Typography>
      </Box>

      <Box sx={{ width: "88%", backgroundColor: "inherit", mt: 2 }}>
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          style={{
            backgroundColor: "black",
            borderRadius: "15px",
            padding: 2,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 5,
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                CHI
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                2
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                F4H
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                3
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                SKYNET
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                4
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                IHEAVEN
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                5
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                Z4H
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                6
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                CATCOIN
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                7
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                WDS
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                8
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  textAlign: "start",
                  opacity: 0.8,
                  mt: 1.5,
                }}
              >
                3DR
              </Typography>
              <Image
                disabledEffect
                visibleByDefault
                alt="empty content"
                src={btcImg}
                sx={{ height: 20, mt: 1.2 }}
              />
            </Box>
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
};

export default HotProject;
