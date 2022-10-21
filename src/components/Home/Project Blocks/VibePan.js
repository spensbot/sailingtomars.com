import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import CrispyProjectImage from '../../images/Crispy/ProjectImage'
import { Typography } from '@material-ui/core'

export default function VibePan() {

  const projectImage = <CrispyProjectImage />

  return (
    <ProjectBlock name="Vibratory Pan Feeder" Image={projectImage} url={links.vibePan.home} hours="300" coreTechnology="Vibratory Analysis / Prototyping">
      <Typography component="h4" variant="h5" gutterBottom>
        A low-cost material handling device concept
      </Typography>
      <Typography gutterBottom>
        
      </Typography>
    </ProjectBlock>
  )
}
