import React from 'react'
import { Typography, Box } from '@material-ui/core'
import SiteContainer from '../SiteContainer'
import ImageMe from '../images/Home/me'
import Spacer from '../basic/Spacer'

export default function AboutTheName() {
  return (
    
    <SiteContainer>
    <Spacer />
    <Box display="flex" flexDirection="row" alignItems="top" flexWrap="wrap">
      <Box flex="2" minWidth="15rem" pb={3}>
        <Typography component="h3" variant="h4" gutterBottom={true}>
          A Passionate, Creative Engineer
          {/* A Passionate, Creative, and Extroverted Engineer */}
        </Typography>
        <Typography component="p" gutterBottom={true}>
          I'm happiest when creating something I care about.
        </Typography>
        <Typography component="p" gutterBottom={true}>
          In 2015, I started work as a Mechanical Engineer. I was bored, and really started asking myself what I'm most passionate about. I explored anything of interest: programming, art, technology, language, etc. I traveled the world, and pushed myself at every chance.
        </Typography>
        <Typography component="p" gutterBottom={true}>
          In 2019, I quit my job to focus on the three areas I am most excited about. Web Development, Game Development, and Music Software Development.
        </Typography>
        <Typography component="h6" variant="h6" gutterBottom={true}>
          This site showcases the projects I am most proud of.
        </Typography>
        <Typography component="p" gutterBottom={true}>
          Thanks for visiting, 
        </Typography>
        <Typography component="p" gutterBottom={true}>
          Spenser Saling
        </Typography>
      </Box>
      <Spacer vertical rem='3'/>
      <Box flex="1" minWidth="15rem" pb={3}>
        <ImageMe />
      </Box>

    </Box>
    </SiteContainer>
    
  )
}