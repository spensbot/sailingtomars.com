import React from 'react'
import ProjectBlock from '../Home/projectBlock'
import { links } from '../../data/links'

import SailingToMarsProjectImage from '../images/Home/ProjectImage'
import { Typography } from '@material-ui/core'

export default function PersonalSpace() {

  const projectImage = <SailingToMarsProjectImage />

  return (
    <ProjectBlock name="Sailing To Mars" Image={projectImage} url={links.sailingToMars.home} hours="20" coreTechnology="JS / React / Gatsby" githubLink={links.sailingToMars.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A Pre-Rendered Portfolio Site
      </Typography>
      <Typography gutterBottom>
        I chose the static site generator, Gatsby, for this portfolio site to maximize speed and SEO.
      </Typography>
    </ProjectBlock>
  )
}
