import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton'
import Typography from '@mui/material/Typography';
import FairApproveToken from './FairApproveToken';
import FairPresaleInform from './FairPresaleInform';
import FairProjectInform from './FairProjectInform';
import FairSubmit from './FairSubmit';

const FairStepper = () => {
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
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean; }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
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
    <Box sx={{ width: '100%', my: '3rem' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
     {/* ...............................................Steps_Pages............................................... */}
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {
                activeStep == 0 ?
                  <FairApproveToken />
                  :
                  activeStep == 1 ?
                    <FairPresaleInform />
                    :
                    activeStep === 2 ?
                      <FairProjectInform />
                      :
                      <FairSubmit />
              }
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}

export default FairStepper
