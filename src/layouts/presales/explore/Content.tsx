import React, { useState } from "react";
import { Box } from "@mui/material";
import Filter from "./Filter";
import { ColorButton } from "../../../components/Button";
import QuickView from "./QuickView";
import AllPresale from "./AllPresale";
import MyContribution from "./MyContribution";
import MyFavourite from "./MyFavourite";
import MyCreatedPresales from "./MyCreatedPresales";
import Pagination from '@mui/material/Pagination';


const Content = () => {
  const [quickView, setQuickView] = useState(true);
  const [allPresale, setAllPresale] = useState(false);
  const [contribution, setContriibution] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [createdPresales, setCreatedPresales] = useState(false);

  const onClickQuickViewTab = () => {
    setQuickView(true);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickAllPresaleTab = () => {
    setQuickView(false);
    setAllPresale(true);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickContributionTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(true);
    setFavourite(false);
    setCreatedPresales(false);
  };

  const onClickFavouriteTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(true);
    setCreatedPresales(false);
  };

  const onClickCreatePresaleTab = () => {
    setQuickView(false);
    setAllPresale(false);
    setContriibution(false);
    setFavourite(false);
    setCreatedPresales(true);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <ColorButton onClick={onClickQuickViewTab} variant="contained">
          Quick View
        </ColorButton>
        <ColorButton onClick={onClickAllPresaleTab} variant="contained">
          AllPresale
        </ColorButton>
        <ColorButton onClick={onClickContributionTab} variant="contained">
          My Contribution
        </ColorButton>
        <ColorButton onClick={onClickFavouriteTab} variant="contained">
          My Favorites
        </ColorButton>
        <ColorButton onClick={onClickCreatePresaleTab} variant="contained">
          My Created Presales
        </ColorButton>
      </Box>
      <Filter />

      <Box sx={{mb:10}}>
        {quickView ? <QuickView /> : <></>}
        {allPresale ? <AllPresale /> : <></>}
        {contribution ? <MyContribution /> : <></>}
        {favourite ? <MyFavourite /> : <></>}
        {createdPresales ? <MyCreatedPresales /> : <></>}
        <Pagination count={50} sx={{mt:4}} />
      </Box>

    </Box>
  );
};

export default Content;
