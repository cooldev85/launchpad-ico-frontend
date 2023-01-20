import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/styles'

const Question = styled(Typography)<any>(({ theme }) => ({
    fontWeight: "700",
    fontSize: "20px"
}))

export default Question
