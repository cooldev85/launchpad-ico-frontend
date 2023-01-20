import React, { useState } from 'react'
import { ButtonBase, Box, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import StakeTab from '../layouts/Utility&Tools/Stake/StakeTab';
import UnstakeTab from '../layouts/Utility&Tools/Stake/UnstakeTab';

const Stake = () => {
    const [opentab, setOpentab] = useState('Stake')

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
        <Box sx={{ backgroundColor: '#1D1F23', width: '65%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', py: '5%', px: '4.5%', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
            <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left' }}>TinaPad’s Staking Vault
                </FormLabel>
                <Box sx={{ display: 'flex', columnGap: '5%' }}>
                    <ButtonBase onClick={() => { setOpentab('Stake') }}
                        sx={{
                            fontWeight: '600', fontSize: '14px', height: 'fit-content', color: 'white',
                            borderRadius: '12px', padding: '0.5rem',
                            bgcolor: `${opentab === 'Stake' ? "#F20CEC" : ""}`,
                        }}>Stake</ButtonBase>
                    <ButtonBase onClick={() => { setOpentab('Unstake') }}
                        sx={{
                            fontWeight: '600', fontSize: '14px', height: 'fit-content', color: 'white',
                            borderRadius: '12px', padding: '0.5rem',
                            bgcolor: `${opentab === 'Unstake' ? "#F20CEC" : ""}`
                        }}>Unstake</ButtonBase>
                </Box>
            </FormControl>
            {
                opentab === 'Stake' ? <StakeTab /> : opentab === 'Unstake' ? <UnstakeTab /> : ''
            }
        </Box>
    )
}

export default Stake
