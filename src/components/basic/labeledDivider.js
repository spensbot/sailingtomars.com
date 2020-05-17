import React from 'react'
import Divider from './divider'
import { Box, Typography } from '@material-ui/core'
import Spacer from './Spacer'

export default function labeledDivider({text}) {
  return (
    <Box margin="10rem 0 0 0">
    
    <Typography component="h3" variant="h5" color="textSecondary">{text}</Typography>
    <Divider color="#fff" marginY="1rem"/>
    <Spacer rem="2" />
    </Box>
  )
}
