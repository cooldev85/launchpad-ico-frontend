import React from 'react'
import { Box, FormControl, FormGroup, TextField, Typography } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';

const TokenLockInfo = () => {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#1D1F23', width: '62%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
                <Box display="flex" columnGap="2%">
                    <Box display="flex" flexDirection="column" flex="1">
                        <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left' }}>Lock Info</FormLabel>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Total Amount Locked:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>50,000,000,000</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Total Value Locked:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>$ 5000</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Token Address:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0xeE32AefeB41678d750FD794B11403b0d3113509B</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Token Name:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>METATATE</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Token Symbol:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>CHI</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Decimal:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>18</Typography>
                        </Box>
                        <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Owner:</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>0xeE32AefeB41678d750FD794B11403b0d3113509B</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#1D1F23', width: '62%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins' }}>
                <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left', mb: '1rem'}}>Lock Record</FormLabel>
                <Box>
                    <Box sx={{ display: 'flex', color: 'white', justifyContent: 'space-between', mb: '4%' }}>
                        <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Token</Typography>
                        <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Lock Time</Typography>
                        <Typography component="h5" sx={{ fontWeight: '400', fontSize: '14px', opacity: '0.5' }}>Unlock Time</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>5,000,000,000</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>2022-11-26 18:00</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px' }}>2022-11-26 18:00</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>5,000,000,000</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>2022-11-26 18:00</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px' }}>2022-11-26 18:00</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(93, 100, 108, 1)' }}>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>5,000,000,000</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', }}>2022-11-26 18:00</Typography>
                            <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px' }}>2022-11-26 18:00</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default TokenLockInfo
