import React, { useState } from 'react'
import { FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Bitcoinimg from '../assets/Bitcoin.png';
import Image from '../components/Image';

const TokenLock = () => {
    const [opentab, setOpentab] = useState('All')

    return (
        <Box sx={{ backgroundColor: '#1D1F23', width: '62%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
            <FormControl>
                <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left', mb: '4%' }}>
                    Token Locks </FormLabel>
                <FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
                    <TextField id="outlined-required"
                        label="Token or LP Token Adress"
                        defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
                    />
                    <Box sx={{ display: 'flex', columnGap: '2%', justifyContent: 'end' }}>
                        <Button onClick={() => { setOpentab('All') }}
                            sx={{
                                height: 'fit-content', color: 'white', borderRadius: '15px',
                                bgcolor: `${opentab === 'All' ? "#F20CEC" : ""}`,
                            }}>All</Button>
                        <Button onClick={() => { setOpentab('My Lock') }}
                            sx={{
                                height: 'fit-content', color: 'white', borderRadius: '15px',
                                bgcolor: `${opentab === 'My Lock' ? "#F20CEC" : ""}`
                            }}>My Lock</Button>
                    </Box>
                </FormGroup>
                {
                    opentab === 'All' ?
                        <Box>
                            <Box sx={{ display: 'flex', color: 'white', columnGap: '44%', mb: '4%' }}>
                                <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Token</Typography>
                                <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Amount</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                        <Box>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                        </Box>
                                    </Box>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                        <Box>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                        </Box>
                                    </Box>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                        <Box>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                        </Box>
                                    </Box>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image sx={{ width: '2rem', height: '2rem', mr: '1rem' }} alt="empty content" src={Bitcoinimg} />
                                        <Box>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', }}>Metatate</Typography>
                                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>CHI</Typography>
                                        </Box>
                                    </Box>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>50,000,000</Typography>
                                    <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#F20CEC' }}>View</Typography>
                                </Box>
                            </Box>
                        </Box>
                        :
                        <Box> My Lock</Box>

                }
            </FormControl>
        </Box>
    )
}

export default TokenLock
