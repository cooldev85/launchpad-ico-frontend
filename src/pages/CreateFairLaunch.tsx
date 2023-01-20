import { Container } from "@mui/system";
import React from "react";
import Header from "../layouts/common/Header";
import FairStepper from "../layouts/Launchpad/FairLaunch/FairStepper";

const CreateFairLaunch = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <FairStepper/>
    </Container>
  )
}

export default CreateFairLaunch