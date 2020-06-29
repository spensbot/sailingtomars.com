import React from 'react'
import ProjectBlock from '../projectBlock'
import { links } from '../../../data/links'
import ProjectImage from '../../../images/Lush Delay/Lush Delay UI.svg'
import { Typography } from '@material-ui/core'

export default () => {

  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(4, 35%, 25%)'
  }

  const imageStyle = {
    width: '80%',
    maxWidth: '30rem'
  }

  const projectImage = (
  <div style={containerStyle}>
    <img src={ProjectImage} style={imageStyle} alt="Lush Delay"/>
  </div>
  )

  return (
    <ProjectBlock name="Lush Delay" Image={projectImage} url={links.lushDelay.home} coreTechnology="C++ / JUCE" githubUrl={links.lushDelay.github}>
      <Typography component="h4" variant="h5" gutterBottom>
        A Delay Effect Plugin with lots of Versatility
      </Typography>
      <Typography gutterBottom>
        Quickly alternate between timed delays, doubling effects, slap delays, modulation, and more.
      </Typography>
    </ProjectBlock>
  )
}