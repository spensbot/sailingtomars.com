import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function GarageLights() {
  const ProjectImage = (
    <StaticImage
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="../../../images/Garage Lights/hollywoodHouse.jpg"
      alt="Garage Lights in action at my apartment in north Hollywood"
      placeholder="blurred"
    />
  )

  return (
    <ProjectBlock
      name="Garage Lights"
      Image={ProjectImage}
      url={links.garageLights.home}
      coreTechnology="C++ / JUCE"
      githubUrl={links.garageLights.github}
    >
      <h4>Software that allows lights to be dynamically synced to music.</h4>
      <p>
        A VST plugin that allows users to control a DMX lighting universe from
        their DAW (digital audio workstation).
      </p>
    </ProjectBlock>
  )
}
