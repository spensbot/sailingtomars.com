import React from 'react'
import ProjectBlock from '../Home/projectBlock'
import { links } from '../../data/links'

import PersonalSpaceProjectImage from '../images/Personal Space/projectImage'
import { Typography } from '@material-ui/core'

export default function PersonalSpace() {

  const projectImage = <PersonalSpaceProjectImage />

  return (
    <ProjectBlock name="Personal Space" Image={projectImage} url={links.personalSpace.home} hours="3.5" coreTechnology="C# / Unity" githubLink={links.personalSpace.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A 2D Arcade Game with Fine-Tuned Difficulty
      </Typography>
      <Typography gutterBottom>
        This simple game aims to perfect the difficult, repeatable, addictive approach found in games like Flappy Bird.
      </Typography>
    </ProjectBlock>
  )
}
