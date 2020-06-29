import React from 'react'
import Layout from '../components/layout'
import { Typography, Box } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import ViewSourceCodeButton from '../components/basic/viewSourceCodeButton'
import screenshot from '../images/Particle System Designer/screenshot.png'
import {links} from '../data/links'
import FullwidthVid from '../components/basic/fullwidthVid'

export default function contact() {

  const imageWrapper = {
    maxWidth: '700px',
  }

  return (
    <Layout seoTitle="Particle System Designer" usesHeader usesFooter>
      <SiteContainer>
      <Spacer />
      <Typography variant="h2" component="h1">Particle System Designer</Typography>
      <Spacer rem={2} />
      <Typography variant="h4" component="h3">A Simple Program That Allows Users To Interactively Tweak Settings In The Love2D Particle System Engine</Typography>
      <Spacer rem={2} />
      <ViewSourceCodeButton url={links.particleSystemDesigner.github} />
      <Spacer rem={2}/>

      <Box width="100%" display="flex" justifyContent="center">
        <div style={imageWrapper}>
          <img width="100%" src={screenshot} alt="Particle System Designer Screenshot"/>
        </div>
      </Box>
      
      <Spacer />
      
      <Typography variant="h4">The Focus of This Project Was To Find A Simple, Elegant Solution As Quickly As Possible</Typography>

      <Spacer rem={3}/>

      <Typography>I made this program as a way to test particle system settings for my game "The Rest of Us". When I couldn't find what I was looking for online, I decided to make it myself.</Typography>
      <Spacer rem={1}/>
      <Typography >The entire project consists of 300 lines of commented code, and an open-source library for the sliders.</Typography>
      <Spacer />

      <FullwidthVid src="https://www.youtube.com/embed/0SDxvDiOexE" />

      <Spacer />

      </SiteContainer>
    </Layout>
  )
}