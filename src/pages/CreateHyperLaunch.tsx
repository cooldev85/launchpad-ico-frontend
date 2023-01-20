import React from 'react'
import { Container } from "@mui/system";
import Header from "../layouts/common/Header";
import StepForm from "../layouts/Launchpad/Presale/ApproveToken";
import HyperStepForm from '../layouts/Launchpad/HyperLaunch/HyperApproveToken';

const CreateHyperLaunch = () => {
    return (
        <Container maxWidth="xl">
            <Header />
            <HyperStepForm />
        </Container>
    )
}

export default CreateHyperLaunch
