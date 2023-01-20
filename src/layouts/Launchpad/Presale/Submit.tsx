import React from 'react'
import { Box, Typography } from '@mui/material'
import { ColorButton } from '../../../components/Button'

const Submit = () => {
    return (
        <Box style={{display:'flex',flexDirection: 'column', rowGap:'3rem', backgroundColor: '#1D1F23', boxSizing: 'border-box', padding: '5%', borderRadius: '20px', marginTop: '2rem' }}>
            <Box display="flex" columnGap="2%">
                <Box display="flex" flexDirection="column" flex="1">
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Launch Type:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>BitcoinXYZ</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Total Supply:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>100,000,000,000</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Lisitng Rate:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Value in Token</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Hardcap:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Maximum Buy:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Fundaraise Token:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Token Type</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Start Time [Local]:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>2022-11-26 18:00</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Estimated Dex Listing Time [Local]:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>2022-11-26 18:00</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>
                            Liquidity Unlock Time:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>XX Days</Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" flex="1">
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Sale Title:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>Title</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Presale Rate:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>
                            Value in Token</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Softcap:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Minimum Buy:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>0.1 ETH</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Liquidity:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>100%</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Fundaraise Token:</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF' }}>ETH</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>End Time [Local]</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>2022-11-26 18:00</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Unused Token</Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Burn / Refund</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >

                    </Box>
                </Box>
            </Box>
            <Box display="flex" columnGap="2%">
                <Box display="flex" flexDirection="column" flex="1">
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Website:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Twitter:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Github:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Twitter:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Youtube:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Whitelist Content:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" columnGap="20%" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Description:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF', textAlign: 'right' }}>Elrond Fight Championship is the bridge of art and value through NFTs and <Typography component="span" color="rgba(242, 12, 236, 1)">See More</Typography></Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" flex="1">
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Telegram:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Discord:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Reddit:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Reddit:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>ex. https://www.website.com</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Tier:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Common / Gold</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Anti Sniper Protection:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Yes / No</Typography>
                    </Box>
                    <Box sx={{ flex: '1', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', py: '2%' }} display="flex" alignItems="center" >
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '12px', color: '#FFFFFF', opacity: '0.6' }}>Sale Type:
                        </Typography>
                        <Typography component="p" sx={{ fontWeight: '400', fontSize: '14px', color: '#FFFFFF' }}>Public / Whitelist</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', columnGap: '1rem', justifyContent: 'end', textAlign: 'right',mt: '3%' }}>
                <ColorButton sx={{ width: '8rem', bgcolor: 'transparent', border: '1px solid #F20CEC' }}>Back
                </ColorButton>
                <ColorButton sx={{ width: '8rem' }}>Complete</ColorButton>
            </Box>
        </Box>
    )
}

export default Submit
