import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/layout"
import ImageMe from '../components/images/Home/me'
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles( theme => ({
  root: {
    
  },

}));

const IndexPage = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Home" usesHeader={true} usesFooter={true}>
      <Box display="flex" flexDirection="row" alignItems="top" flexWrap="wrap">
        <Box flex="2" minWidth="15rem">
          <Typography component="h3" variant="h4">
            A Passionate, Creative, and Extroverted Engineer
          </Typography>
          <Typography>
            <p>I am happiest when creating something I care about. I'm currently exploring all my interests, in hopes that it will lead me to a career where I have the most to give.</p>
            <p>In July 2019, I quit my job as a Mechanical engineer to pursue a career in software design.</p>
            <p>This site showcases a few of the skills and projects I developed through personal interest.</p>
            <p>Thanks for visiting,</p>
            <p>Spenser Saling</p>
          </Typography>
          
        </Box>

        <Box flex="1" minWidth="15rem">
          <ImageMe />
        </Box>
        <Typography>
          About The Name
          In high school, a friend Sean Mars and I joked about starting a band called Saling To Mars.  When I started playing acoustic shows around Eugene, I used the name as a placeholder for a stage name.  Eventually, the placeholder took on a significance that really stuck with me. You can't sail to Mars, obviously. But what if that didn't stop you? I dismiss so many opportunities and dreams because I assume i'm not capable. Maybe you shouldn't let your circumstances dictate what you strive for. If happiness is in the journey, does it matter if you don't reach the destination?

          Don't have a spaceship, just a boat?...

          Sail to Mars.
          Cheesy, I know. But I like it.
          </Typography>
      </Box>
    </Layout>
  )
}

export default IndexPage
