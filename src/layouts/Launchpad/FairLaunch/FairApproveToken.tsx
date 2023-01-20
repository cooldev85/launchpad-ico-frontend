import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Image from "../../../components/Image"
import BigYtubeImg from "../../../assets/BigYtubeImg.png"
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton'
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ColorButton } from '../../../components/Button';

const FairApproveToken = () => {
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
    <FormControl sx={{ backgroundColor: '#1D1F23', height: '', marginTop: '2rem', marginBottom: '3rem', display: 'flex', flexDirection: 'column', rowGap: '2vh', borderRadius: '20px', padding: '3rem' }}>
      <Box sx={{ display: 'flex', columnGap: '2rem' }}>
        <FormControl sx={{ display: 'flex', flex: '1' }}>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            label="Launch a stealth sole" />
        </FormControl>
      </Box>
      <TextField fullWidth id="outlined-basic" label="Token Address" variant="outlined" sx={{ mb: '1rem' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                <ColorButton sx={{ fontWeight: '700' }}>Create Token</ColorButton>
              </IconButton>
            </InputAdornment>
          ),
        }} />
      <Box sx={{ flex: 1, mt: '1rem' }}>
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={BigYtubeImg}
        />
      </Box>
    </FormControl>
  )
}

export default FairApproveToken
