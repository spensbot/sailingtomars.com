import React from 'react'
import Layout from '../components/layout'
import { Typography, ThemeProvider, createMuiTheme, Box, Button } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { makeStyles } from "@material-ui/styles"
import ScreenshotFull from '../images/Lush Delay/Screenshot.jpg'
import Divider from '../components/basic/divider'
import {links} from '../data/links'
import ViewSourceCodeButton from '../components/basic/viewSourceCodeButton'

const crispyTheme = createMuiTheme({
  typography:{
    fontFamily: ' "Montserrat", "Helvetica", "Arial", sans-serif ',
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eee',
    color: '#222'
  },
  body: {

  },
  bigFont: {
    padding: '5rem 5%',
    fontSize: '10vh'
  },
  subFont: {
    fontSize: '6vh',
    marginBottom: '3rem'
  },
  header: {
    backgroundColor: '#ddd',
    color: '#333'
  },
  headerImage: {
    width: '100%',
    boxShadow: "0px 6px 25px 0px rgba(0,0,0,0.8)",
    WebkitBoxShadow: "0px 6px 25px 0px rgba(0,0,0,0.8)",
    MozBoxShadow: "0px 6px 25px 0px rgba(0,0,0,0.8)"
  },
  features: {
    textAlign: 'center',
    padding: '5rem 0 2rem 0'
  }
}))

const Crispy = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Lush Delay" usesFooter>
    <ThemeProvider theme={crispyTheme}>
    <div className={classes.root}>

      <div className={classes.header}>
        <Typography component="h1" variant="h1" className={classes.bigFont}>Make It <b>Lush</b></Typography>
        <SiteContainer>
        <Box display="flex">
          <Box display="flex" flexDirection="row" flexWrap='wrap' alignItems='top' justifyContent='left' marginX='-3%'>
            <Box flexGrow='1' marginBottom='3rem' width="40%" minWidth="15rem" marginX='3%'>
              <img className={classes.headerImage} src={ScreenshotFull} alt="Lush Delay Screenshot"/>
            </Box>
            <Box flexGrow='1' width='40%' minWidth="15rem" marginX='3%' marginBottom="3rem">
              <Typography component="h2" variant="h3" className={classes.subFont}>A Delay Plugin with lots of Versatility</Typography>
              <Typography component="h4" variant="h5">Create Timed Delays, Slap Delays, Doubling and More</Typography>
              <Typography component="h4" variant="h5">Coming soon in VST3 and AU formats</Typography>
              <Box display="flex" mt="1rem">
                <Button variant="contained" href={links.crispy.downloads.mac} disabled>Mac</Button><Spacer vertical rem="1" />
                <Button variant="contained" href={links.crispy.downloads.windows} disabled>Windows</Button>
              </Box>
              <Spacer rem={1} />
              <ViewSourceCodeButton url={links.lushDelay.github}/>
            </Box>
          </Box>
        </Box>
        </SiteContainer>
      </div>

      <SiteContainer>
        <Typography variant="h2" className={classes.features}>Features Coming Soon!!!</Typography>
        <Divider color="#222"/>
      </SiteContainer>

    </div>
    </ThemeProvider>
    </Layout>
  )
}

export default Crispy