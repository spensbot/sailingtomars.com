import React from 'react'
import Layout from '../components/layout'
import { Typography, ThemeProvider, createMuiTheme, Box, Button } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { makeStyles } from "@material-ui/styles"
import ScreenshotFull from '../components/images/Crispy/ScreenshotFull'
import CrispySection from '../components/crispy/CrispySection'
import Divider from '../components/basic/divider'
import {links} from '../data/links'
import imageAutoGain from '../images/Crispy/auto-gain.png'
import imageBypass from '../images/Crispy/bypass.png'
import imageDryWet from '../images/Crispy/drywet.png'
import imageEven from '../images/Crispy/even.png'
import imageHighLow from '../images/Crispy/highlow.png'
import imageOdd from '../images/Crispy/odd.png'
import imageOversampling from '../images/Crispy/oversampling.png'
import ViewSourceCodeButton from '../components/basic/viewSourceCodeButton'

const crispyTheme = createMuiTheme({
  typography:{
    fontFamily: ' "Montserrat", "Helvetica", "Arial", sans-serif ',
  }
})

const colors = {
  orange: '#ff4444',
  green: 'hsl(100, 50%, 50%)',
  blue: '#6666cc',
  pink: 'hsl(330, 80%, 50%)',
  lightGrey: '#aaa',
  darkGrey: '#333'
}

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
    backgroundColor: colors.green,
    color: '#eee'
  },
  headerImage: {
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
    <Layout seoTitle="Crispy Saturator" usesFooter>
    <ThemeProvider theme={crispyTheme}>
    <div className={classes.root}>

      <div className={classes.header}>
        <Typography component="h1" variant="h1" className={classes.bigFont}>Make It <b>Crispy</b></Typography>
        <SiteContainer>
        <Box display="flex">
          <Box display="flex" flexDirection="row" flexWrap='wrap' alignItems='top' justifyContent='left' marginX='-3%'>
            <Box flexGrow='1' marginBottom='3rem' width="40%" minWidth="15rem" marginX='3%' className={classes.headerImage}>
              <ScreenshotFull />
            </Box>
            <Box flexGrow='1' width='40%' minWidth="15rem" marginX='3%' marginBottom="3rem">
              <Typography component="h2" variant="h3" className={classes.subFont}>A powerful saturation plugin for music production</Typography>
              <Typography component="h4" variant="h5">Available in VST3 and AU formats</Typography>
              <Box display="flex" mt="1rem">
                <Button variant="contained" href={links.crispy.downloads.mac}>Mac</Button><Spacer vertical rem="1" />
                <Button variant="contained" href={links.crispy.downloads.windows}>Windows</Button>
              </Box>
              <Spacer rem={1}/>
              <ViewSourceCodeButton url={links.crispy.github}/>
            </Box>
          </Box>
        </Box>
        </SiteContainer>
      </div>

      <SiteContainer>
        <Typography variant="h2" className={classes.features}>Features</Typography>
        <Divider color="#222"/>
      </SiteContainer>
      
      <CrispySection header="Odd Saturation Knob"
        content="Adds odd harmonics to a signal. This is the biggest knob, and represents Crispy's primary function.
          The 'Saturation Visualizer' behind this knob demonstrates the effect the
          saturation algorithm has on a sin wave with a gain of 0 dB. Real-world audio, which is made up of many sin waves,
          will behave differently when saturated."
        src={imageOdd}
      />
      <CrispySection color="#6666cc" header="Even Saturation Mix"
        content="Adds even harmonics to a signal. This slider is intended to change the color of saturation.
        It should be used in combination to the odd saturation knob."
        src={imageEven}
      />
      <CrispySection header="High/Low Pass Filters"
        content="These High and Low Pass knobs filter the signal before the saturator.
        This allows you to target and saturate a specific frequency range. In this way, Crispy can act like a harmonic exciter."
        src={imageHighLow}
      />
      <CrispySection color="hsl(330, 80%, 50%)" header="Oversampling"
        content="Oversampling is important to reduce/remove aliasing when dealing with heavy saturation and/or high frequencies. 
        However, this knob should be used with caution; High oversampling can add significant CPU load.
        Saturation adds harmonics to a signal. This can introduce frequencies too high for standard 
        sample rates to capture. These uncapturable frequencies manifest as lower, aliased frequencies that create noise in a mix.
        2x - 4x oversampling is often enough to remove audible artifacts, and is recommended in most cases.
        High oversampling rates should only be used when necessary. A 44.1kHz signal, 
        oversampled 16x requires the algorithm to process over 705,000 samples per second!"
        src={imageOversampling}
      />
      <CrispySection header="Dry/Wet Mix"
        content="A Standard Dry/Wet Mix. This allows you to mix the processed (wet) and unprocessed (dry) signal." 
        src={imageDryWet}
      />
      <CrispySection color="#ff4444" header="Matched Bypass"
        content="Bypasses the plugin, while adding gain to match the RMS volume of the current dry/wet mix.
        Saturation adds volume to a signal, so most saturation plugins sound better when bypassed simply because the sound is louder.
        This feature is incredibly helpful. It allows you to hear how Crispy is changing your sound without volume bias."
        src={imageBypass}
      />
      <CrispySection header="Auto-Gain"
        content="Adds gain to provide the saturation algorithm with an ideal signal level.
        When fed a quiet signal, crispy mostly just adds volume.
        Auto-Gain allows the full dynamic range of the mix to be saturated more evenly.
        Added gain is removed after saturation. The end result is similar to compression."
        src={imageAutoGain}
      />


    </div>
    </ThemeProvider>
    </Layout>
  )
}

export default Crispy