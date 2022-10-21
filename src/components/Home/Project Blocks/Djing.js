import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import CrispyProjectImage from '../../images/Crispy/ProjectImage'
import { Typography } from '@material-ui/core'

export default function Djing() {

  const projectImage = <CrispyProjectImage />

  return (
    <ProjectBlock name="Wedding DJing" Image={projectImage} url={links.djing.home} hours="500" coreTechnology="Serato / DMX">
      <Typography component="h4" variant="h5" gutterBottom>
        
      </Typography>
      <Typography gutterBottom>
        There's nothing like the thrill of DJing a wedding, the most special day in a couple's life. As a result, it requires an incredible amount of care and planning. And you need redundancy to handle any reasonable failure case.
      </Typography>
    </ProjectBlock>
  )
}
