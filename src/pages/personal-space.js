import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Typography, createMuiTheme, ThemeProvider, Box, Paper, Button } from "@material-ui/core"
import Layout from "../components/layout"

import ParticleBackground from '../components/Personal Space/particleBackground'
import GraphicBomb from '../components/images/Personal Space/graphicBomb'
import GraphicEnemies from '../components/images/Personal Space/graphicEnemies'
import Player from '../components/images/Personal Space/player'
import Enemy from '../components/images/Personal Space/enemy'
import DifficultyGraph from '../components/images/Personal Space/difficultyGraph'
import AppStoreButton from '../components/basic/appStoreButton'
import links from '../data/links'

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
    color: '#fff'
  },
  reallyBigHeader: {
    color: '#fff',
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
    padding: personalSpaceTheme.spacing(4),
  },
  graphic: {
    flexGrow: '1',
    maxWidth: '30rem'
  },
  player: {
    width: '6rem',
    height: '6rem',
    animation: '$wave 10s ease-in-out infinite',
    transform: 'rotate(45deg)',
    margin: '1rem',
  },
  enemy: {
    width: '7rem',
    height: '7rem',
    margin: '1rem',
    animation: '$spin 10s linear infinite',
  },
  giantEmoji: {
    fontSize: '10rem',
    textAlign: 'center'
  },
  promoVideo: {
    padding: '1rem .5rem',
    backgroundColor: '#111111',
    border: '.2rem solid silver',
    borderRadius: '1.5rem',
    display: 'inline-block',
    '-webkit-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    '-moz-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    boxShadow: '0px 5px 17px 4px rgba(0,0,0,0.49)',
    margin: '1rem 0 2rem 0'
  },
  section: {
    marginBottom: '3rem'
  },
  button: {
    fontSize: '2rem'
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
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

            <div className={classes.promoVideo}>
              <iframe title="Personal Space Promo Video" width="270" height="514" src="https://www.youtube.com/embed/sas6KopcWWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div className={classes.section}> 
              <Typography component="h2" className={classes.subHeaderText}>
                A Game About Fighting For Your God-Given Right To Privacy
              </Typography>
            </div>

          </div>
          <div className={classes.section}>
          <Paper className={classes.paper} elevation={3}>
            <Typography component="h2" className={classes.subHeaderText} gutterBottom={true}>
              Defend Your Personal Space Today
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              <AppStoreButton link={links.external.personalSpace.iosStoreUrl} />
              <AppStoreButton link={links.external.personalSpace.googlePlayStoreUrl} isAndroid />
            </Box>
          </Paper>
          </div>

          <div className={classes.section}>
            <Typography component="h2" className={classes.subHeaderText}>
                Weave Your Way Through Enemies To Activate Bombs!
            </Typography>
            <Box display='flex' justifyContent='center'>
            <div className={classes.graphic}><GraphicEnemies /></div>
            </Box>
          </div>

          <div className={classes.section}>
            <Typography component="h2" className={classes.subHeaderText}>
                Hit bombs in the center for a bigger explosion!
            </Typography>
            <Box display='flex' justifyContent='center'>
              <div className={classes.graphic}><GraphicBomb /></div>
            </Box>
          </div>

          <div className={classes.section}>
            <Typography component="h2" className={classes.subHeaderText}>
                The game ends when an enemy successfully invades your personal space
            </Typography>
            <Box textAlign='center'>
            <span role="img" aria-label="Crying Emoji" className={classes.giantEmoji}>😭</span>
            </Box>
          </div>

          <div className={classes.section}>
            <Typography component="h2" className={classes.subHeaderText} gutterBottom={true}>
                Experience Fine-Tuned Difficulty
            </Typography>
            <DifficultyGraph />
          </div>

          <div className={classes.section}>
          <Paper className={classes.paper} elevation={3}>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography component="h2" className={classes.subHeaderText} gutterBottom={true}>
                  Personal Space is Built with Unity
              </Typography>
              <Button variant="contained" ><span className={classes.button}>-> view the source code on github</span></Button>
            </Box>
          </Paper>
          </div>

        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default PersonalSpace