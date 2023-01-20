import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Image from "../../../components/Image";
import Form_youtubeImg from "../../../assets/Form_youtube.png";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import { ColorButton } from "../../../components/Button";
import StepForm2 from "./PresaleInformation";
import StepForm3 from "./ProjectInformation";
import StepForm4 from "./Submit";


export default function ApproveToken() {
  const steps = [
    {
      id: 1,
      label: "Approve Token",
      subLable: "Enter the token address and approve",
    },
    {
      id: 2,
      label: "Presale Information",
      subLable:
        "Enter the Presale information, in case of trouble check our Docs",
    },
    {
      id: 3,
      label: "Project Information",
      subLable: "Add project links, description and select tie",
    },
    {
      id: 4,
      label: "Submit",
      subLable: "Submit your presale",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%", my: "3rem" }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((o, index) => (
          <Step key={o.id} completed={completed[index]}>
            <StepButton onClick={handleStep(index)}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                {o?.label}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "12px",
                  opacity: 0.8,
                }}
              >
                {o?.subLable}
              </Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <Box>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep == 0 ? (
                <FormControl
                  sx={{
                    backgroundColor: "#1D1F23",
                    height: "",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "8vh",
                    borderRadius: "20px",
                    padding: "3rem",
                  }}
                >
                  <Box sx={{ display: "flex", columnGap: "2rem" }}>
                    <Box sx={{ flex: 2 }}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Token Address"
                        variant="outlined"
                        sx={{ mt: "0.2rem", mb: "1rem" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton edge="end" color="primary">
                                <ColorButton sx={{ fontWeight: "700" }}>
                                  Create Token
                                </ColorButton>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                        <Box
                          sx={{
                            flex: "1",
                            justifyContent: "space-between",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            py: "1.4%",
                          }}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                              opacity: "0.6",
                            }}
                          >
                            Token Name:
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                            }}
                          >
                            BitcoinXYZ
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            flex: "1",
                            justifyContent: "space-between",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            py: "1.4%",
                          }}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                              opacity: "0.6",
                            }}
                          >
                            Symbol:
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                            }}
                          >
                            BXYZ
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            flex: "1",
                            justifyContent: "space-between",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            py: "1.4%",
                          }}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                              opacity: "0.6",
                            }}
                          >
                            Total Supply:
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#FFFFFF",
                            }}
                          >
                            100,000,000,000
                          </Typography>
                        </Box>
                      </FormControl>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Image
                        disabledEffect
                        visibleByDefault
                        alt="empty content"
                        src={Form_youtubeImg}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "6 rem",
                    }}
                  >
                    <ColorButton
                      sx={{ fontWeight: "700", float: "left", width: "8rem" }}
                    >
                      Approve
                    </ColorButton>
                    <Typography
                      component="p"
                      sx={{
                        float: "left",
                        width: "70%",
                        textAlign: "left",
                        mt: "6px",
                        color: "#FC9823",
                      }}
                    >
                      Make sure token has “Exclude transfer fee” and “Exclude
                      Max Transaction” if you use tax/Fees or Max Transaction
                      limits.
                    </Typography>
                  </Box>
                </FormControl>
              ) : activeStep == 1 ? (
                <StepForm2 />
              ) : activeStep === 2 ? (
                <StepForm3 />
              ) : (
                <StepForm4 />
              )}
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
