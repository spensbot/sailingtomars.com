import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function Captivate() {
  const ProjectImage = (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      <StaticImage
        style={{ width: '15rem', height: '15rem' }}
        src="../../../images/Captivate/icon.svg"
        alt="Captive Light and Visual Synth Logo"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Captivate"
      Image={ProjectImage}
      url={links.captivate.home}
      coreTechnology="Typescript / C++ / React / Electron / Serial Ports"
      githubUrl={links.captivate.github}
    >
      <h4>Lighting & Visual Synth</h4>
      <p>
        By far my most ambitious project to date. This cross-platform desktop
        app generates lighting and visuals that synchronize to music. Designed
        to make dynamic, professional-quality lighting accessible to musicians
        with minimal effort. Captivate runs the lights at my DJ gigs with
        breathtaking results.
      </p>
    </ProjectBlock>
  )
}
