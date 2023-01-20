import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, bottomNavigationActionClasses, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ColorButton } from '../../../components/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const HyperProjectInform = () => {
  return (
    <Box style={{ backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
          <TextField label="Logo URL" type="text" sx={{ display: 'flex', flex: '1' }} />
          <Typography component="p" sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem' }}>
            URL must end with a supported image extension png, jpg, jpeg or gif. You can upload your image on https://postimages.org/
          </Typography>
        </Box>
        <TextField label="Total Supply" type="text" sx={{ display: 'flex', flex: '1' }} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </InputAdornment>
          ),
        }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Website" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Telegram" type="text" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Github" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Twitter" type="text" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Discord" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Youtube " type="text" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
        <TextField label="Whitelist Contest" type="text" sx={{ display: 'flex', flex: '1' }} />
        <TextField label="Reddit" type="text" sx={{ display: 'flex', flex: '1' }} />
      </Box>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        placeholder="Description Text Here"
      />
      <fieldset style={{ display: 'flex', gap: '2%' }}>
        <legend style={{ textAlign: 'left' }}>Select Tier</legend>
        <Card sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#FFFFFF1A', width: '12rem', height: '12rem', borderRadius: '22px',cursor: 'pointer'
        }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }} >
              Common Tier
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }} >
              Common Tier without any special Perks
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F20CEC' }} >
              Fee 0.1 ETH
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#FFFFFF1A', width: '12rem', height: '12rem', borderRadius: '22px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }} >
              Gold
            </Typography>
            <Box sx={{ fontSize: '14px', fontWeight: '400' }} >
              <Typography component="p" sx={{ fontSize: '14px', fontWeight: '400' }}>-Gold Border</Typography>
              <Typography component="p" sx={{ fontSize: '14px', fontWeight: '400' }}>-Audit Option</Typography>
              <Typography component="p" sx={{ fontSize: '14px', fontWeight: '400' }}>-KYC Option</Typography>
            </Box>
            <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F20CEC' }} >
              Fee 0.2 ETH
            </Typography>
          </CardContent>
        </Card>
      </fieldset>
      <Typography component="p" sx={{ color: '#FC9823', textAlign: 'left' }}>
        You can contact us for a higher tier or apply here after you create your presale.
      </Typography>
      <Box sx={{ display: 'flex', columnGap: '1rem', justifyContent: 'end', textAlign: 'right', mt: '5%' }}>
        <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back
        </ColorButton>
        <ColorButton sx={{ width: '8rem' }}>Next</ColorButton>
      </Box>
    </Box>
  )
}

export default HyperProjectInform
