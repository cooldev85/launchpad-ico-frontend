import React from 'react'
import { ButtonBase, Box, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import capitalize from '@mui/material/utils/capitalize';
import { ColorButton } from '../../../components/Button';

function createData(property: string, amount: string) {
  return { property, amount };
}

const tableData = [
  createData('UnStaked Balance:', '100 TINA'),
  createData('Staked Balance:', '100 TINAt'),
  createData('Reward Rate Per Block:', '0.00001%'),
  createData('ROI (30 - Days Rate):', '0.8%'),
  createData('Last Block Rewarded:', '50,000,000'),
];


const StakeTab = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ px: '8%' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '12px', mb: '6px' }}>APY</Typography>
          <Typography>25%</Typography>
        </Box>
        <Box sx={{ border: '1px solid #FFFFFF', transform: 'rotate(180deg)', opacity: '0.1' }}></Box>
        <Box>
          <Typography sx={{ fontWeight: '400', fontSize: '12px', mb: '6px' }}>Total Staked</Typography>
          <Typography>50,000,000 TINA</Typography>
        </Box>
        <Box sx={{ border: '1px solid #FFFFFF', transform: 'rotate(180deg)', opacity: '0.1' }}></Box>
        <Box sx={{ paddingX: 'auto' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '12px', mb: '6px' }}>Total Rewards</Typography>
          <Typography>50,000,000 TINA</Typography>
        </Box>
      </Box>
      <Typography component="p" sx={{ textAlign: 'left', color: '#FC9823', fontWeight: '400', fontSize: '14px', mt: '6%' }}>
        First time staking Gems?<br />
        Please approve staking contract to use your Gems for staking.</Typography>
      <Box display="flex" columnGap="4%" alignItems="center" mt="4%">
        <TextField fullWidth id="outlined-basic" label="TINA Amount" autoComplete='off' defaultValue='TINA Amount'
          sx={{}} InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography component="p" sx={{ color: '#F20CEC', fontWeight: '700', fontSize: '14px', mr: '2%' }}>MAX</Typography>
                <IconButton edge="end" color="primary">
                  <ColorButton sx={{ fontWeight: '700', px: '2vw' }}>Stake</ColorButton>
                </IconButton>
              </InputAdornment>
            ),
          }} />
        <ColorButton sx={{
          fontWeight: '700', px: '2vw', bgcolor: 'rgba(20, 197, 157, 0.8)', '&:hover': {
            background: "rgba(20, 197, 157, 0.6)",
          },
        }}>Rebase</ColorButton>
      </Box>
      <Table sx={{ mt: '4%' }}>
        <TableBody>
          {
            tableData.map((row, index) => (
              <TableRow key={index} sx={{ display: 'flex', flex: '1', px: '0' }}>
                <TableCell sx={{ opacity: '0.6', fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1',py: '0.8rem',px: '0' }}>{row.property}</TableCell>
                <TableCell sx={{ fontWeight: '400', fontSize: '12px', display: 'flex', flex: '1', justifyContent: 'end',py: '0.8rem',px: '0' }}>{row.amount}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Box>
  )
}

export default StakeTab
