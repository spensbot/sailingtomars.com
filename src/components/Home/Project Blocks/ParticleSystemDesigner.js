import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import { Typography } from '@material-ui/core'
import projectImage from '../../../images/Particle System Designer/screenshot2.png'

export default function ParticleSystemDesigner() {

  const ProjectImage = (
    <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={projectImage} />
  )

  return (
    <ProjectBlock name="Particle System Designer" Image={ProjectImage} url={links.particleSystemDesigner.home} hours="20" coreTechnology="Lua / Love2D" githubUrl={links.particleSystemDesigner.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A Live Particle System Editor
      </Typography>
      <Typography gutterBottom>
        Allows users to interactively tweak settings in the Love2D Particle System Engine.
      </Typography>
    </ProjectBlock>
  )
}