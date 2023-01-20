import React, { useState } from "react";
import { Box, TextField } from '@mui/material'
import { ColorButton } from "../../../components/Button";
import GemPresaleLock from "./GemPresaleLock";
import OtherLiqLock from "./OtherLiqLock";
import MyGemPresaleLock from "./MyGemPresaleLock";
import MyOtherLiqlocks from "./MyOtherLiqlocks";
import Header from "../../common/Header";


const LiquidityLock = () => {

  const [gemPresaleLock, setGemPresaleLock] = useState(true);
  const [otherLiqLock, setOtherLiqLock] = useState(false);
  const [myGemPresaleLock, setMyGemPresaleLock] = useState(false);
  const [myOtherLiqlocks, setMyOtherLiqlocks] = useState(false);

  const onClickGemPresaleLockTab = () => {
    setGemPresaleLock(true);
    setOtherLiqLock(false);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(false);
  };

  const onClickOtherLiqLockTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(true);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(false);
  };

  const onClickMyGemPresaleLockTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(false);
    setMyGemPresaleLock(false);
    setMyOtherLiqlocks(true);
  };

  const onClickMyOtherLiqlocksTab = () => {
    setGemPresaleLock(false);
    setOtherLiqLock(false);
    setMyGemPresaleLock(true);
    setMyOtherLiqlocks(false);
  };


  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: `${gemPresaleLock || otherLiqLock === true? '#1D1F23' : ''}`, width: '92%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
        <TextField label="Search by LP Adress" fullWidth></TextField>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 2, }}>
            <ColorButton onClick={onClickGemPresaleLockTab} variant="contained"
              sx={{
                bgcolor: `${gemPresaleLock === false ? 'transparent' : ''}`,
                boxShadow: `${gemPresaleLock === false ? 'none' : ''}`,
              }}>
              Gem Presale Lock
            </ColorButton>
            <ColorButton onClick={onClickOtherLiqLockTab} variant="contained"
              sx={{
                bgcolor: `${otherLiqLock === false ? 'transparent' : ''}`,
                boxShadow: `${otherLiqLock === false ? 'none' : ''}`,
              }}>
              Other Liq Lock
            </ColorButton>
            <ColorButton onClick={onClickMyOtherLiqlocksTab} variant="contained"
              sx={{
                bgcolor: `${myGemPresaleLock === false ? 'transparent' : ''}`,
                boxShadow: `${myGemPresaleLock === false ? 'none' : ''}`,
              }}>
              My  Gem Presale Lock
            </ColorButton>
            <ColorButton onClick={onClickMyGemPresaleLockTab} variant="contained"
              sx={{
                bgcolor: `${myOtherLiqlocks === false ? 'transparent' : ''}`,
                boxShadow: `${myOtherLiqlocks === false ? 'none' : ''}`,
              }}>
              My Other Liq locks
            </ColorButton>
          </Box>

          <Box sx={{ mt: 2 }}>
            {gemPresaleLock ? <GemPresaleLock /> : <></>}
            {otherLiqLock ? <OtherLiqLock /> : <></>}
            {myOtherLiqlocks ? <MyOtherLiqlocks /> : <></>}
            {myGemPresaleLock ? <MyGemPresaleLock /> : <></>}
          </Box>
        </Box>
      </Box>
    </>
  );

}

export default LiquidityLock
