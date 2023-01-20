import React, { useState } from 'react'
import { ButtonBase, Box, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import AirdropTokens from '../layouts/Utility&Tools/Airdrop/AirdropTokens';
import AirdropETH from '../layouts/Utility&Tools/Airdrop/AirdropETH';
import FormControl from '@mui/material/FormControl';

const Airdrop = () => {
    const [opentab, setOpentab] = useState('Tokens')

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
        <Box sx={{ backgroundColor: '#1D1F23', width: '65%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
            <FormControl sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left' }}>Airdrop Tokens
                </FormLabel>
                <Box sx={{ display: 'flex', columnGap: '5%' }}>
                    <ButtonBase onClick={() => { setOpentab('Tokens') }}
                        sx={{
                            fontWeight: '600', fontSize: '14px', height: 'fit-content', color: 'white',
                            borderRadius: '12px', padding: '0.5rem',
                            bgcolor: `${opentab === 'Tokens' ? "#F20CEC" : ""}`,
                        }}>Tokens</ButtonBase>
                    <ButtonBase onClick={() => { setOpentab('ETH') }}
                        sx={{
                            fontWeight: '600', fontSize: '14px', height: 'fit-content', color: 'white',
                            borderRadius: '12px', padding: '0.5rem',
                            bgcolor: `${opentab === 'ETH' ? "#F20CEC" : ""}`
                        }}>ETH</ButtonBase>
                </Box>
            </FormControl>
            {
                opentab === 'Tokens' ? <AirdropTokens /> : opentab === 'ETH' ? <AirdropETH /> : ''
            }
        </Box>
    )
}

export default Airdrop
