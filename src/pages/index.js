import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/layout"
import SEO from "../components/seo"
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
    <Layout>
      <SEO title="Home" />
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
      </Box>
    </Layout>
  )
}

export default IndexPage
