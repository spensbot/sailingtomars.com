import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import CrispyProjectImage from '../../images/Crispy/ProjectImage'
import { Typography } from '@material-ui/core'

export default function Crispy() {

  const projectImage = <CrispyProjectImage />

  return (
    <ProjectBlock name="Crispy" Image={projectImage} url={links.crispy.home} hours="20" coreTechnology="C++ / JUCE" githubUrl={links.crispy.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A Saturation Plugin for Audio Production
      </Typography>
      <Typography gutterBottom>
        At it's heart, Crispy is a waveshaping plugin that adds harmonics (saturation) to a signal. However, I implemented many additional features that make it more powerful for producers.
      </Typography>
    </ProjectBlock>
  )
}
