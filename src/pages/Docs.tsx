import Box from '@mui/material/Box'
import React from 'react'
import Header from '../layouts/common/Header'
import Typography from '@mui/material/Typography'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import DocImg from '../assets/DocImg.png'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Divider } from '@mui/material'


const Docs = () => {
    return (
        <>
            <Header />
            <Box sx={{ padding: '5%', display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
                <Box sx={{ bgcolor: '#D9D9D9', height: '12rem', width: '100%' }}>Image</Box>
                <Box sx={{ textAlign: 'left', px: '5%' }}>
                    <Box sx={{ mb: '4%' }}>
                        <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '36px' }}>Introducing GemPad
                        </Typography>
                        <Paragraph sx={{ fontWeight: '400', fontSize: '20px', lineHeight: '30px', opacity: '0.56' }}>GemPad is a frontline protocol for users and project-owners to launch their projects and tokens.
                        </Paragraph>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
                        <Paragraph>
                            The Launchpad for everyone who wants to launch or invest in the best projects. GemPad is the community's launchpad where our community has a say. Here we have unmatched support unlike anything out there, while still having some of the lowest fees. Choose GemPad, pick the best option for your project and community.
                        </Paragraph>
                        <Image sx={{ width: '30%' }} disabledEffect visibleByDefault
                            alt="Docs Image" src={DocImg}
                        />
                        <Paragraph>
                            GemPad is a frontline protocol for users and project-owners designed to help to launch their projects and tokens in the easiest way possible. We support Seed Rounds, Private Sales, Partial Raises, Presales, Fair Launches, Hyper launches, Stealth Hyper launches, Stealth Fair Launches and Stealth Launches which no other launchpad out there supports at the moment.
                        </Paragraph>
                        <Paragraph>
                            We have crafted an all-in-one platform, providing users with numerous features that can be used with no coding requirements. We offer an affordable, feature-rich launchpad with 2 different types of Whitelists, Liquidity and Token Locks, KYC and Audit Service along with other options as well as incubator benefits for selected, especially promising projects.
                        </Paragraph>
                        <Paragraph>
                            To easily distinguish between projects, we have come up with a system of tiers. The higher the tier, the safer and better a project is. Our tiers go from common to gold to platinum and lastly diamond. We also have a standalone tier called Alpha. Find out more about tiers here.
                        </Paragraph>
                        <Paragraph>
                            Having a system of tiers allows us to be a launchpad for all projects, from the smallest ones to the really big and already established ones. That is why we do not only offer presales, but special sales as well as many other launch types which you can read about here.
                        </Paragraph>
                        <Paragraph>
                            Whether you want to launch a project, invest in one or become an agent, this is the place to learn all about it.
                        </Paragraph>
                        <Paragraph>
                            If anything is unclear please do not hesitate to contact any of the members of our team who can all be found in our telegram.
                        </Paragraph>
                        <Box sx={{ bgcolor: '#201E1E', height: '15rem', width: '100%' }}>
                            Video
                        </Box>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />} sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', border: '0.2px solid rgba(184, 181, 181, 1)', color: '#838181' }}>
                            <Box sx={{ textAlign: 'left' }}>
                                <Paragraph sx={{ fontWeight: '400', fontSize: '12px', color: 'white', opacity: '0.5' }}>Next</Paragraph>
                                <Paragraph sx={{ fontWeight: '600', fontSize: '16px', color: 'white' }}>Overview of features </Paragraph>
                            </Box>
                        </Button>
                        <Box>
                            <Divider />
                            <Paragraph sx={{ opacity: '0.5', mt: '2%' }}>Last modified 19d ago</Paragraph>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Docs
