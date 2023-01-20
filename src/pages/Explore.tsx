import { Container } from "@mui/material";
import React from "react";
import Header from "../layouts/common/Header";
import LaunchPadRecord from "../layouts/common/LaunchPadRecord";
import Content from "../layouts/presales/explore/Content";
import HotProject from "../layouts/presales/explore/HotProject";
const Explore = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <LaunchPadRecord />
      <HotProject />
      <Content />
    </Container>
  );
};

export default Explore;
