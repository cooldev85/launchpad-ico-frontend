import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ColorButton } from '../../../components/Button';
import CalendarIcon from '../../../assets/CalendarIcon.png'


const PresaleInformation = () => {

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

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },]

    return (
        <Box>
            <Box style={{ backgroundColor: '#1D1F23', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField label="Sale Title" type="text" sx={{ display: 'flex', flex: '1' }} />
                    <TextField label="Total Supply" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <Autocomplete disablePortal options={top100Films} sx={{ display: 'flex', flex: '1' }}
                        renderInput={(params) => <TextField {...params} label="Fund Raising Token" />} />
                    <TextField label="Custom Fund Raising Token" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField label="Presale Rate" type="text" sx={{ display: 'flex', flex: '1' }} />
                    <TextField label="Dex Listing Rate" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField label="Dex Liquidity [%]" type="text" sx={{ display: 'flex', flex: '1' }} />
                    <TextField label="Liquidity Locked [Days]" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField label="Soft Cap [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
                    <TextField label="Hard Cap [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField label="Minimum Buy [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
                    <TextField label="Maximum Buy [BNB]" type="text" sx={{ display: 'flex', flex: '1' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField sx={{ display: 'flex', flex: '1' }}
                        id="datetime-local" label="Start Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30"
                       />
                    <TextField sx={{ display: 'flex', flex: '1' }}
                        id="datetime-local" label="End Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <TextField sx={{ display: 'flex', flex: '1' }}
                        id="datetime-local" label="Estimated DEX Listing Date [local]"
                        type="datetime-local" defaultValue="2017-05-24T10:30" />
                    <Autocomplete disablePortal options={top100Films} sx={{ display: 'flex', flex: '1' }}
                        renderInput={(params) => <TextField {...params} label="Select what happens to Unsold Tokens" />} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '3%', boxSizing: 'border-box' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                        <Autocomplete disablePortal options={top100Films} sx={{ display: 'flex', flex: '1' }}
                            renderInput={(params) => <TextField {...params} label="Presale Type" />} />
                        <Typography component="p" sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem' }}>
                            Read more about Presale Type here Docs
                        </Typography>
                    </Box>
                    <TextField sx={{ display: 'flex', flex: '1' }} label="Whitelist Timer" type="text" />
                </Box>
                <Box sx={{ width: '48%' }}>
                    <TextField label="Stealth Wallet" type="text" sx={{ display: 'flex' }} />
                    <Typography component="p" sx={{ color: '#FC9823', textAlign: 'left', mt: '0.5rem' }}>
                        Read more about Presale Type here Docs
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'end' }}>
                    <FormControl sx={{ display: 'flex', flex: '1' }}>
                        <FormLabel component="legend" sx={{ textAlign: 'left' }}>Optional Features:</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="warning"/>}
                                label="Anti Sniper Protection" />
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                label="Add Team Token Vesting" />
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                label="Add Presale Vesting" />
                        </FormGroup>
                    </FormControl>
                    <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column', rowGap: '0.5rem', justifyContent: 'end' }}>
                        <Typography component="p" sx={{ color: '#FC9823', textAlign: 'right', mt: '0.5rem' }}>
                            0 $coin Needed to Create Pool!
                        </Typography>
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
        </Box >


    )
}

export default PresaleInformation
