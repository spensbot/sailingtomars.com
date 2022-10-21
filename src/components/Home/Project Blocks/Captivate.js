import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import CrispyProjectImage from '../../images/Crispy/ProjectImage'
import { Typography } from '@material-ui/core'

export default function Captivate() {

  const projectImage = <CrispyProjectImage />

  return (
    <ProjectBlock name="Captivate" Image={projectImage} url={links.captivate.home} hours="1000" coreTechnology="Captivate" githubUrl={links.captivate.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        Lighting & Visual Synth
      </Typography>
      <Typography gutterBottom>
        By far my most ambitious project to date. Captivate generates live lighting and visuals that synchronize to music. Designed to make professional-quality lighting accessible to musicians with minimal effort.
      </Typography>
    </ProjectBlock>
  )
}
