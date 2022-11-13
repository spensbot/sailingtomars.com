import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function ParticleSystemDesigner() {
  const ProjectImage = (
    <StaticImage
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="../../../images/Particle System Designer/screenshot2.png"
      alt="Particle System Designer"
    />
  )

  return (
    <ProjectBlock
      name="Particle System Designer"
      Image={ProjectImage}
      url={links.particleSystemDesigner.home}
      coreTechnology="Lua / Love2D"
      githubUrl={links.particleSystemDesigner.github}
    >
      <h4>A Live Particle System Editor</h4>
      <p>
        Allows users to interactively tweak settings in the Love2D Particle
        System Engine.
      </p>
    </ProjectBlock>
  )
}
