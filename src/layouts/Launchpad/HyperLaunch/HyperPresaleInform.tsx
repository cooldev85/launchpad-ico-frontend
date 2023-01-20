import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ColorButton } from '../../../components/Button';

const HyperPresaleInform = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


  return (
    <Box style={{ backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem' }}>
      <TextField id="outlined-required" label="Sale Title" defaultValue="Type Input Here" />
      <TextField id="outlined-required" label="Total Supply" />
      <Autocomplete disablePortal options={top100Films} sx={{ display: 'flex', flex: '1' }}
        renderInput={(params) => <TextField {...params} label="Select what happens to Unsold Tokens" />} />
      <Box sx={{ width: '100%' }}>
        <TextField id="outlined-required" label="Sale Title" sx={{ display: 'flex', flex: '1' }} />
        <Typography component="p" sx={{ color: '#F20CEC', textAlign: 'left', mt: '1rem' }}>Total amount of tokens for hyper launch</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Dex Listing Rate" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Liquidity Locked [Days]" type="text" sx={{ display: 'flex', flex: '1' }} defaultValue="Liquidity Locked [Days]" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Soft Cap [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Maximum Contributors" type="text" sx={{ display: 'flex', flex: '1' }} defaultValue="0" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Minimum Buy [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
        <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="Add maximum buy limit" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField id="outlined-required" label="Start Date [UTC]" defaultValue="12/27/2022 02:14 pm" sx={{ display: 'flex', flex: '1' }} />
        <TextField id="outlined-required" label="End Date [UTC]" defaultValue="26/36/22" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField id="outlined-required" label="Estimated Dex Listing Date (UTC)" defaultValue="12/27/2022 02:14 pm" sx={{ display: 'flex', flex: '1' }} />
        <TextField id="outlined-required" label="Select what happens to Unsold Tokens" defaultValue="Burn" sx={{ display: 'flex', flex: '1' }}
        />
      </Box>
      <TextField id="outlined-required" label="*UTC Time is displayed" defaultValue="Read more about Presale Type here Docs"
        sx={{ display: 'flex', flex: '1' }} />
      <Autocomplete options={top100Films} renderInput={(params) => <TextField {...params} label="Presales" />} sx={{ display: 'flex', flex: '1' }} />
      <TextField id="outlined-required" defaultValue="Tip: Use another (stealth) wallet for uploading the tokens & finalization." label="Presale Type" sx={{ display: 'flex', flex: '1' }} />
      <TextField id="outlined-required" label="Presales Type" defaultValue="Stealth wallet"
        sx={{ display: 'flex', flex: '1' }} />
      <ColorButton sx={{ width: 'fit-content', py: '0.5rem', marginX: 'auto', textTransform: 'lowercase' }}>Lock your team tokens with a vesting schedule for further transparency and trust.</ColorButton>
      <Box sx={{ display: 'flex', alignItems: 'end',mt: '2rem' }}>
        <FormControl sx={{ display: 'flex', flex: '1' }}>
          <FormLabel component="legend" sx={{ textAlign: 'left' }}>Optional Features:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="Anti Sniper Protection" />
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="Add Team Token Vesting" />
          </FormGroup>
        </FormControl>
        <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column', rowGap: '0.5rem', justifyContent: 'end' }}>
          <Typography component="p" sx={{ color: '#F20CEC', textAlign: 'right', mt: '0.5rem' }}>
            Estimated Mcap 0$
          </Typography>
          <Box sx={{ display: 'flex', columnGap: '1rem', justifyContent: 'end', textAlign: 'right' }}>
            <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back</ColorButton>
            <ColorButton sx={{ width: '8rem' }}>Next</ColorButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HyperPresaleInform
