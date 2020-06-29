import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import { Typography } from '@material-ui/core'
import projectImage from '../../../images/The Rest of Us/The-Rest-of-Us-Short.gif'

export default function TheRestOfUs() {

  const ProjectImage = (
    <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={projectImage} alt="The Rest of Us Project" />
  )

  return (
    <ProjectBlock name="The Rest of Us" Image={ProjectImage} url={links.theRestOfUs.home} hours="20" coreTechnology="Lua / Love2D" githubUrl={links.theRestOfUs.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A Simple RPG
      </Typography>
      <Typography gutterBottom>
        Created with the Love2D framework in the Lua programming language. Over 2500 lines of commented code organized over 30 files.
      </Typography>
    </ProjectBlock>
  )
}