import React, { useState } from 'react'
import { ButtonBase, FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { ColorButton } from '../../../components/Button';

const AirdropETH = () => {
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
        color: '#FFC0CB',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#F20CEC' : '#65C466',
          opacity: 0.15,
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
    <FormControl>
      <FormLabel sx={{ fontWeight: '700', fontSize: '14px', color: '#FC9823', my: '2rem' }}>You have <Typography component="span" sx={{ fontWeight: '700', fontSize: '16px' }}>0.00149 BNB</Typography>
      </FormLabel>
      <FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning" />}
            label="Anti Sniper Protection"
          />
        </FormGroup>
        <FormGroup sx={{ my: '2rem', display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
          <TextField id="outlined-required"
            label="Token or LP Token Adress"
            defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="Default Value"
          />
        </FormGroup>
        <ColorButton sx={{ width: 'fit-content', mx: 'auto', px: '8%', mt: '3%' }}>OK</ColorButton>
      </FormGroup>
    </FormControl>
  )
}

export default AirdropETH
