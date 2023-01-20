import React, { useState } from "react";
import { Box } from "@mui/material";
import { ColorButton } from "../../../components/Button";
import QuickView from "./QuickView";
import AllPresale from "./AllPresale";
import MyContribution from "./MyContribution";
import MyFavourite from "./MyFavourite";
import MyAlarms from "./MyAlarms";
import MyCreatedPresales from "./MyCreatedPresales";


const SpecialPresales = () => {
    const [quickView, setQuickView] = useState(false);
    const [allPresale, setAllPresale] = useState(false);
    const [contribution, setContribution] = useState(false);
    const [favourite, setFavourite] = useState(false);
    const [myAlarms, setMyAlarms] = useState(false);
    const [createdPresales, setCreatedPresales] = useState(true);

    const onClickQuickViewTab = () => {
        setQuickView(true);
        setAllPresale(false);
        setContribution(false);
        setFavourite(false);
        setMyAlarms(false)
        setCreatedPresales(false);
    };

    const onClickAllPresaleTab = () => {
        setQuickView(false);
        setAllPresale(true);
        setContribution(false);
        setFavourite(false);
        setMyAlarms(false)
        setCreatedPresales(false);
    };

    const onClickContributionTab = () => {
        setQuickView(false);
        setAllPresale(false);
        setContribution(true);
        setFavourite(false);
        setMyAlarms(false)
        setCreatedPresales(false);
    };

    const onClickFavouriteTab = () => {
        setQuickView(false);
        setAllPresale(false);
        setContribution(false);
        setFavourite(true);
        setMyAlarms(false)
        setCreatedPresales(false);
    };

    const onClickMyAlarmsTab = () => {
        setQuickView(false);
        setAllPresale(false);
        setContribution(false);
        setFavourite(false);
        setMyAlarms(true)
        setCreatedPresales(false);
    };
    const onClickCreatedPresalesTab = () => {
        setQuickView(false);
        setAllPresale(false);
        setContribution(false);
        setFavourite(false);
        setMyAlarms(false)
        setCreatedPresales(true);
    };

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 2, }}>
                <ColorButton onClick={onClickQuickViewTab} variant="contained" sx={{
                    bgcolor: `${quickView === false ? 'transparent' : ''}`,
                    boxShadow: `${quickView === false ? 'none' : ''}`,
                }}>
                    Quick View
                </ColorButton>
                <ColorButton onClick={onClickAllPresaleTab} variant="contained" sx={{
                    bgcolor: `${allPresale === false ? 'transparent' : ''}`,
                    boxShadow: `${allPresale === false ? 'none' : ''}`,
                }}>
                    AllPresale
                </ColorButton>
                <ColorButton onClick={onClickContributionTab} variant="contained" sx={{
                    bgcolor: `${contribution === false ? 'transparent' : ''}`,
                    boxShadow: `${contribution === false ? 'none' : ''}`,
                }}>
                    My Contribution
                </ColorButton>
                <ColorButton onClick={onClickFavouriteTab} variant="contained" sx={{
                    bgcolor: `${favourite === false ? 'transparent' : ''}`,
                    boxShadow: `${favourite === false ? 'none' : ''}`,
                }}>
                    My Favorites
                </ColorButton>
                <ColorButton onClick={onClickMyAlarmsTab} variant="contained" sx={{
                    bgcolor: `${myAlarms === false ? 'transparent' : ''}`,
                    boxShadow: `${myAlarms === false ? 'none' : ''}`,
                }}>
                    My Alarms
                </ColorButton>
                <ColorButton onClick={onClickCreatedPresalesTab} variant="contained" sx={{
                    bgcolor: `${createdPresales === false ? 'transparent' : ''}`,
                    boxShadow: `${createdPresales === false ? 'none' : ''}`,
                }}>
                    My Created Presales
                </ColorButton>
            </Box>

            <Box sx={{ mt: 2 }}>
                {quickView ? <QuickView /> : <></>}
                {allPresale ? <AllPresale /> : <></>}
                {contribution ? <MyContribution /> : <></>}
                {favourite ? <MyFavourite /> : <></>}
                {myAlarms ? <MyAlarms /> : <></>}
                {createdPresales ? <MyCreatedPresales /> : <></>}
            </Box>
        </Box>
    );
};

export default SpecialPresales;
