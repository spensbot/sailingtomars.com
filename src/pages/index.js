import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/layout"
import ImageMe from '../components/images/Home/me'
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'
import ProjectCategory from '../components/Home/projectCategory'
import ProjectBlock from "../components/Home/projectBlock"
import { links } from "../data/links"
import Section from '../components/Home/Section'

const useStyles = makeStyles( theme => ({
  root: {
    
  },

}));

const IndexPage = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Home" usesHeader={true} usesFooter={true}>
      <Section>
      <Box display="flex" flexDirection="row" alignItems="top" flexWrap="wrap">
        <Box flex="2" minWidth="15rem">
          <Typography component="h3" variant="h4" gutterBottom={true}>
            A Passionate, Creative, and Extroverted Engineer
          </Typography>
          <Typography component="p" gutterBottom={true}>
            I am happiest when creating or learning about something I care for. I'm currently exploring all my interests, in hopes that it will lead me to a career where I have the most to give.
          </Typography>
          <Typography component="p" gutterBottom={true}>
            In July 2019, I quit my job as a Mechanical engineer to pursue a career in software design.
          </Typography>
          <Typography component="p" gutterBottom={true}>
            This site showcases a few of the skills and projects I developed through personal interest.
          </Typography>
          <Typography component="p" gutterBottom={true}>
          Thanks for visiting, 
          </Typography>
          <Typography component="p" gutterBottom={true}>
          Spenser Saling
          </Typography>
        </Box>

        <Box width="2rem"></Box>

        <Box flex="1" minWidth="15rem">
          <ImageMe />
        </Box>

      </Box>
      </Section>

      <ProjectCategory name="Web Development">
        <ProjectBlock name="Sailing To Mars" githubLink={links.sailingToMars.github}/>
      </ProjectCategory>

      <ProjectCategory name="Game Development">
        <ProjectBlock name="Personal Space" githubLink={links.personalSpace.github} />
      </ProjectCategory>

      <ProjectCategory name="Music Software">

      </ProjectCategory>

      <Section>
      <Typography component='h3' variant='h3' gutterBottom={true}>About The Name</Typography>
      <Typography component='p' gutterBottom={true}>
        In high school, a friend Sean Mars and I joked about starting a band called Saling To Mars.  When I started playing acoustic shows around Eugene, I used the name as a placeholder for a stage name.  Eventually, the placeholder took on a significance that really stuck with me. You can't sail to Mars, obviously. But what if that didn't stop you? I dismiss so many opportunities and dreams because I assume i'm not capable. Maybe you shouldn't let your circumstances dictate what you strive for. If happiness is in the journey, does it matter if you don't reach the destination?
      </Typography>   
      <Typography component='p' gutterBottom={true}>
        Don't have a spaceship, just a boat?...
      </Typography>
      <Typography component='p' gutterBottom={true}>
        Sail to Mars.
        Cheesy, I know. But I like it.
      </Typography>
      </Section>
    </Layout>
  )
}

export default IndexPage
