import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default () => {
  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(4, 35%, 25%)',
  }

  const imageStyle = {
    width: '25rem',
    height: '15rem',
  }

  const projectImage = (
    <div style={containerStyle}>
      <StaticImage
        src="../../../images/Lush Delay/Lush Delay UI.svg"
        style={imageStyle}
        alt="Lush Delay"
        objectFit="contain"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Lush Delay"
      Image={projectImage}
      url={links.lushDelay.home}
      coreTechnology="C++ / JUCE"
      githubUrl={links.lushDelay.github}
    >
      <h4>A Delay Effect Plugin with lots of Versatility</h4>
      <p>
        Quickly alternate between timed delays, doubling effects, slap delays,
        modulation, and more.
      </p>
    </ProjectBlock>
  )
}
