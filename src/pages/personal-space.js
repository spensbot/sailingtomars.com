import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Typography, createMuiTheme, ThemeProvider, Box, Paper, Button } from "@material-ui/core"
import Layout from "../components/layout"

import ParticleBackground from '../components/Personal Space/particleBackground'
import Graphic from '../components/images/Personal Space/graphic'
import Player from '../components/images/Personal Space/player'
import Enemy from '../components/images/Personal Space/enemy'
import MobileStoreButton from 'react-mobile-store-button';
import DifficultyGraph from '../components/images/Personal Space/difficultyGraph'

const personalSpaceTheme = createMuiTheme({
  typography:{
    fontFamily: '"Amatic SC", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    ss: {
      darkSectionBG: 'rgb(70,70,100)',
      darkSectionColor: 'rgb(240,240,240)'
    },
  },
})

const useStyles = makeStyles(theme => ({
  root: {
  },
  reallyBigHeader: {
    color: '#fff',
    minHeight: '100vh',
    textAlign: 'center'
  },
  headerText: {
    fontSize: '5rem'
  },
  subHeaderText: {
    fontSize: '3rem',
    textAlign: 'center'
  },
  paper: {
    padding: personalSpaceTheme.spacing(2),
  },
  graphic: {
    maxHeight: '60vh',
    maxWidth: '50rem',
    widht: 'auto'
  },
  player: {
    width: '8rem',
    height: '8rem',
    animation: '$wave 10s ease-in-out infinite',
    transform: 'scaleX(50%)',
    margin: '1rem'
  },
  enemy: {
    width: '8rem',
    height: '8rem',
    margin: '1rem',
    animation: '$spin 10s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  '@keyframes wave':{
    '0%': {
      transform: 'rotate(0deg) translate(0rem,0)'
    },
    '50%': {
      transform: 'rotate(-90deg) translate(0rem,0)'
    },
    '100%': {
      tranform: 'rotate(0deg) translate(0rem,0)'
    }
  }
}))

const PersonalSpace = () => {
  const classes = useStyles();

  return (
    <Layout seoTitle="Personal Space" usesFooter={true}>
      <ThemeProvider theme={personalSpaceTheme}>
        <div className={classes.root}>
          <ParticleBackground/>
          <div className={classes.reallyBigHeader}>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
              <div className={classes.player}>
                <Player  />
              </div>
              <Typography component="h1" className={classes.headerText}>
                Personal Space
              </Typography>
              <div className={classes.enemy}>
                <Enemy/>
              </div>
            </Box>

            {/* <Box width='100%' minHeight='60vh' display="flex" justifyContent="center">
              <div className={classes.graphic}>
                <Graphic />
              </div>
            </Box> */}
            <iframe width="270" height="514" src="https://www.youtube.com/embed/sas6KopcWWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography component="h2" className={classes.subHeaderText}>
              A Game About Fighting For Your God-Given Right To Privacy
            </Typography>

          </div>
          <Paper className={classes.paper} elevation={3}>
            <Typography component="h2" className={classes.subHeaderText}>
              Defend Your Personal Space Today
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              <MobileStoreButton
                store="android"
                url={"/"}
                linkProps={{ title: 'Google Play Store Button' }}
              />
              <MobileStoreButton
                store="ios"
                url={"/"}
                linkProps={{ title: 'iOS Store Button' }}
              />
              
            </Box>
          </Paper>


          <Typography component="h2" className={classes.subHeaderText}>
              Fine-Tuned Difficulty
          </Typography>
          {/* <Typography component="h2" className={classes.subHeaderText}>
              The Game Starts-out playable, but quickly becomes a challenge
          </Typography> */}
          <DifficultyGraph />

          <Typography component="h2" className={classes.subHeaderText}>
              Weave Your Way Through Enemies To Activate Bombs!
          </Typography>

          <Typography component="h2" className={classes.subHeaderText}>
              Personal Space is Built with Unity
          </Typography>
          <Typography component="h2" className={classes.subHeaderText}>
              If you're the programming type
          </Typography>
          <Button variant="contained">view the source code on github</Button>


        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default PersonalSpace