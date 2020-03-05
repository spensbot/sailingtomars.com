import React from 'react'
import { Typography, Box } from '@material-ui/core'
import SiteContainer from '../SiteContainer'
import Spacer from '../basic/Spacer'

export default function AboutTheName() {
  return (
    <SiteContainer>
      <Spacer />
      <Typography component='h3' variant='h3' gutterBottom={true}>About The Name</Typography>
      <Typography component='p' gutterBottom={true}>
        In high school, a friend Sean Mars and I joked about starting a band called Saling To Mars.  When I started playing acoustic shows around Eugene, I used the name as a placeholder for a stage name.  Eventually, the placeholder took on a significance that really stuck with me. You can't sail to Mars, obviously, but what if that didn't stop you? I dismiss so many opportunities and dreams because I assume i'm not capable. Maybe you shouldn't let your circumstances dictate what you strive for. If happiness is in the journey, does it matter if you don't reach the destination?
      </Typography>   
      <Typography component='p' gutterBottom={true}>
        Don't have a spaceship, just a boat?...
      </Typography>
      <Typography component="h4" variant="h4" gutterBottom >Sail to Mars.</Typography>
      <Typography component='p' gutterBottom={true}>
        Cheesy, I know. But I like it.
      </Typography>
      <Spacer />
    </SiteContainer>
  )
}
