import React from 'react'
import Layout from '../components/layout'
import { Typography, Box } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import gif from '../images/Garage Lights/screenshot.gif'
import ViewSourceCodeButton from '../components/basic/viewSourceCodeButton'
import screenshot from '../images/Garage Lights/screenshot.png'
import {links} from '../data/links'
import FullwidthVid from '../components/basic/fullwidthVid'

export default function contact() {

  const imageWrapper = {
    maxWidth: '500px',
  }

  return (
    <Layout seoTitle="Garage Lights" usesHeader usesFooter>
      <SiteContainer>
      <Spacer />
      <Typography variant="h2" component="h1">Garage Lights</Typography>
      <Spacer rem={2} />
      <Typography variant="h4" component="h3">A VST plugin that allows users to control a DMX lighting universe from their DAW (digital audio workstation).</Typography>
      <Spacer rem={2} />
      <ViewSourceCodeButton url={links.garageLights.github} />
      <Spacer rem={2}/>

      <Box width="100%" display="flex" justifyContent="center">
        <div style={imageWrapper}>
          <img width="100%" src={screenshot} alt="Garage Lights Screenshot"/>
        </div>
      </Box>
      
      <Spacer />
      <Typography variant="h3">Key Features</Typography>
      <ul>
        <li>Garage lights is programmed to communicate with any Open DMX compatible USB interface.</li>
        <li>Users get a full 512 parameters that can be controlled/automated from within a DAW to control a DMX universe.</li>
      </ul>
      <Spacer rem={3}/>

      <Typography variant="h3">What I learned</Typography>
      <ul>
        <li>C++</li>
        <li>Object Oriented Programming</li>
        <li>VST plugin development using the Juce application framework</li>
        <li>Working with Serial Port devices</li>
      </ul>
      <Spacer />

      <Box width="100%" display="flex" justifyContent="center">
        <div style={imageWrapper}>
          <img width="100%" src={gif} alt="Garage Lights Moving Screenshot GIF"/>
        </div>
      </Box>
      

      <Spacer />
      <Typography variant="h4">Garage Lights demo in Ableton Live</Typography>
      <Typography variant="p">This software allows for live control of stage-lights with a midi controller</Typography>
      <Spacer rem={1}/>

      <FullwidthVid src="https://www.youtube.com/embed/se_ilqRNLNU" />

      <Spacer />

      </SiteContainer>
    </Layout>
  )
}