import React from 'react'
import Layout from '../components/layout'
import { Typography, Box } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import ViewSourceCodeButton from '../components/basic/viewSourceCodeButton'
import screenshot from '../images/The Rest of Us/The-Rest-of-Us-Short.gif'
import {links} from '../data/links'
import FullwidthVid from '../components/basic/fullwidthVid'

export default function contact() {

  const imageWrapper = {
    maxWidth: '500px',
  }

  return (
    <Layout seoTitle="The Rest Of Us" usesHeader usesFooter>
      <SiteContainer>
      <Spacer />
      <Typography variant="h2" component="h1">The Rest of Us</Typography>
      <Spacer rem={2} />
      <Typography variant="h4" component="h3" gutterBottom>A simple RPG, created with the Love2D framework in the Lua programming language.</Typography>
      <Typography>Over 2500 lines of commented code organized over 30 files.</Typography>
      <Spacer rem={2} />
      <ViewSourceCodeButton url={links.garageLights.github} />
      <Spacer rem={2}/>

      <Box width="100%" display="flex" justifyContent="center">
        <div style={imageWrapper}>
          <img width="100%" src={screenshot} alt="The Rest of Us Gameplay Screenshot"/>
        </div>
      </Box>

      <Spacer />

      <Typography variant="h3">Key Features:</Typography>
      <ul>
        <li>The map is populated with barriers, enemies, chests, and other objects based on the pixels in an image file. This means that levels can be "drawn" in a simple paint program. This same image is used as a mini-map.</li>
        <li>Extensively organized with object-oriented programming (Enemies, weapons, objects, etc.)</li>
        <li>Algorithms for square and circle collision, as well as hit detection</li>
        <li>Procedurally generated terrain</li>
        <li>All objects in the game are loaded and released from memory based on distance from the player</li>
        <li>Inventory system with weights, stats, and various categories</li>
        <li>Built in "Debug" option which prints selected variables to a window</li>
      </ul>

      <Spacer/>

      <FullwidthVid src="https://www.youtube.com/embed/AoRWV7KLuyg" />

      <Spacer />

      <Typography variant="h4">I Love The Variety of Work I Did On This Project</Typography>
      <ul>
        <li>Programming</li>
        <li>Graphic Design</li>
        <li>Sound Design</li>
        <li>Scoring (Music)</li>
      </ul>

      <Spacer />

      </SiteContainer>
    </Layout>
  )
}