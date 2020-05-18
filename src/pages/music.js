import React from 'react'
import Layout from '../components/layout'
import { Typography, ThemeProvider, createMuiTheme, Box } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { makeStyles } from "@material-ui/styles";
import WaterImage from '../components/images/music/water'
import MarsImage from '../components/images/music/mars'
import FullwidthVid from '../components/basic/fullwidthVid'
import LabeledDivider from '../components/basic/labeledDivider'

const crispyTheme = createMuiTheme({
  typography:{
    fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif ',
  },
  palette: {
    type: 'dark'
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    color: '#eee',

    //Should allow parallax
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  headerImage: {
    width: '50rem',
    height: '50rem'
  },
  raisedText: {
    color: '#ffffffbb',
    position: 'relative',
    marginTop: '-70vh',
    padding: '0 5% 10rem 5%',
    maxWidth: '40rem',
    margin: 'auto',
    minHeight: '70vh',
    textAlign: 'center'
  },

  parallaxPerspective: {
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  parallaxGroup: {
    position: 'relative',
    height: '100vh',
    transformStyle: 'preserve-3d'
  },
  parallaxText: {
    fontFamily: ' "Ostrich Sans Inline", "Helvetica", "Arial", sans-serif ',
    fontSize: '15vh',
    lineHeight: '13vh',
    position: 'absolute',
    top: '0%',
    right: '0',
    bottom: '0%',
    left: '5%',
    transform: 'translateZ(-4px) scale(5)',
  },
  parallaxWater: {
    position: 'absolute',
    display: 'relative',
    top: '80%',
    right: '0',
    bottom: '-80%',
    left: '0',
    transform: 'translateZ(0)'
  },
  parallaxMars: {
    position: 'absolute',
    top: '0%',
    right: '0',
    bottom: '10%',
    left: '0',
    transform: 'translateZ(-1px) scale(2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Music = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Crispy Saturator" usesFooter>
    <ThemeProvider theme={crispyTheme}>
    <div className={classes.root}>
      <div className={classes.parallaxPerspective}>
        <div className={`${classes.header} `}>
          <Typography component="h1" className={classes.parallaxText}>Sailing To Mars</Typography>
          <div className={classes.parallaxMars}>
            <Box width="40vw" height="40vw" maxWidth="20rem" maxHeight="20rem">
              <MarsImage />
            </Box>
          </div>
          <div className={classes.parallaxWater}>
            <WaterImage />

            <div className={classes.raisedText}>
              <Typography gutterBottom component="h4" variant="h5">
                A while ago, someone asked me how I would spend my time if money weren't an object.
              </Typography>
              <Typography gutterBottom component="h4" variant="h5">
                I thought about if for a while, and responded that I would spend my time creating things: software, games, music, and music videos.
              </Typography>
              <Typography gutterBottom component="h4" variant="h5">
                Then I realized; That's already how I spend my time.
              </Typography>
            </div>

            <SiteContainer>

            <iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/687556917&color=%23476999&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            
            <LabeledDivider text="I made this music video for my song - Stargazing" />
            <FullwidthVid src="https://www.youtube.com/embed/xHt1SIBlqsw" />

            <LabeledDivider text="The 1975's Robbers is one of my favorite songs ever.
              Here's a piano adaptation I wrote" />
            <FullwidthVid src="https://www.youtube.com/embed/fGJxCxITUBo" />

            <LabeledDivider text="I've been kinda obsessed with Robbers, so I also developed this Music video screenplay for the song." />
            <FullwidthVid src="https://www.youtube.com/embed/8eFln_xz5Hc" />

            </SiteContainer>
            <Spacer />
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
    </Layout>
  )
}

export default Music