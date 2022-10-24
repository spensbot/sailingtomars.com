import React from "react"
import { Typography, Box } from "@material-ui/core"
import SiteContainer from "../SiteContainer"
import ImageMe from "../images/Home/me"
import Spacer from "../basic/Spacer"

export default function AboutTheName() {
  return (
    <SiteContainer>
      <Spacer />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="top"
        flexWrap="wrap"
        mx="-20px"
      >
        <Box flex="2" minWidth="15rem" pb={3} mx="20px">
          <Typography component="h3" variant="h4" gutterBottom>
            A Passionate, Creative Engineer
            {/* A Passionate, Creative, and Extroverted Engineer */}
          </Typography>
          {/* <Typography component="p" gutterBottom>
          I'm happiest when creating something I care about.
        </Typography>
        <Typography component="p" gutterBottom>
          In 2015, I started work as a Mechanical Engineer. I was bored, and really started asking myself what I'm most passionate about. I explored anything of interest: programming, art, technology, language, etc. I traveled the world, and pushed myself at every chance.
        </Typography>
        <Typography component="p" gutterBottom>
          In 2019, I quit my job to focus on the three areas I am most excited about. Web Development, Game Development, and Music Software Development.
        </Typography> */}
          <Typography component="p" gutterBottom>
            I'm happiest when learning about or creating something incredible.
          </Typography>
          <Typography component="p" gutterBottom>
            Since graduating as a Mechanical Engineer in 2015, I have explored
            anything of interest: programming, art, technology, language, etc. I
            traveled the world, and pushed myself at every chance.
          </Typography>
          <Typography component="p" gutterBottom>
            I stumbled upon a personal cirriculum I like to call project-based
            learning. First, I find something I want to create. Then, I learn
            whatever is necessary to make it happen. As a result, I've created a
            few cool things.
          </Typography>
          <Typography component="h6" variant="h6" gutterBottom>
            This site showcases the projects I am most proud of.
          </Typography>
          <Typography component="p" gutterBottom>
            Thanks for visiting,
          </Typography>
          <Typography component="p" gutterBottom>
            Spenser Saling
          </Typography>
        </Box>
        <Box flex="1" minWidth="15rem" pb={3} mx="20px">
          <ImageMe />
        </Box>
      </Box>
    </SiteContainer>
  )
}
