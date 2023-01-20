import { Container } from "@mui/material";
import React from "react";
import Header from "../layouts/common/Header";
import LaunchPadRecord from "../layouts/common/LaunchPadRecord";
const MyAlarm = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <LaunchPadRecord />
    </Container>
  )
}

export default MyAlarm