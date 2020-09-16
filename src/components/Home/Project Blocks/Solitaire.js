import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import { Typography } from '@material-ui/core'
import projectImage from '../../../images/solitaire.jpg'

export default function Solitaire() {

  const linksRef = links.solitaire;

  const ProjectImage = (
    <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={projectImage} alt="React Solitaire" />
  )

  return (
    <ProjectBlock name="Solitaire" Image={ProjectImage} url={linksRef.home} hours="20" coreTechnology="React / Redux" githubUrl={linksRef.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        Solitaire - Made with React and Redux
      </Typography>
      <Typography gutterBottom>
        Creating solitaire with web tech seemed like a fun challenge. I was also curious how quickly I could finish the project. Took me one weekend.
      </Typography>
    </ProjectBlock>
  )
}