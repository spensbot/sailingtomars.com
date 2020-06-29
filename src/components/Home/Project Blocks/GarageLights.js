import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import { Typography } from '@material-ui/core'
import projectImage from '../../../images/Garage Lights/hollywoodHouse.jpg'

export default function GarageLights() {

  const ProjectImage = (
    <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={projectImage} alt="Garage Lights" />
  )

  return (
    <ProjectBlock name="Garage Lights" Image={ProjectImage} url={links.garageLights.home} hours="20" coreTechnology="C++ / JUCE" githubUrl={links.garageLights.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        Software that allows lights to be dynamically synced to music.
      </Typography>
      <Typography gutterBottom>
        A VST plugin that allows users to control a DMX lighting universe from their DAW (digital audio workstation).
      </Typography>
    </ProjectBlock>
  )
}