import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import CrispyProjectImage from '../../images/Crispy/ProjectImage'
import { Typography } from '@material-ui/core'

export default function FdmPrinting() {

  const projectImage = <CrispyProjectImage />

  return (
    <ProjectBlock name="3D Printing" Image={projectImage} url={links.fdmPrinting.home} hours="500" coreTechnology="Autodesk Fusion / Cura" githubUrl={links.crispy.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        
      </Typography>
      <Typography gutterBottom>
        All sorts of random things that were made for form or function
      </Typography>
    </ProjectBlock>
  )
}
