import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function Crispy() {
  const projectImage = (
    <StaticImage
      src="../../../images/Crispy/Project Image.png"
      alt="Crispy Audio App Hero Image"
      objectFit="cover"
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  )

  return (
    <ProjectBlock
      name="Crispy"
      Image={projectImage}
      url={links.crispy.home}
      coreTechnology="C++ / JUCE"
      githubUrl={links.crispy.github}
    >
      <h4>A Saturation Plugin for Audio Production</h4>
      <p>
        At it's heart, Crispy is a waveshaping plugin that adds harmonics
        (saturation) to a signal. However, I implemented many additional
        features that make it more powerful for producers.
      </p>
    </ProjectBlock>
  )
}
