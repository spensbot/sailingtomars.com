import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function VibePan() {
  const projectImage = (
    <StaticImage
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      src="../../../images/vibe-pan/vibe-pan-title.jpg"
      alt="Vibe Pan Concept Design Overview"
      placeholder="blurred"
    />
  )

  return (
    <ProjectBlock
      name="Vibe Pan"
      Image={projectImage}
      url={links.vibePan.home}
      coreTechnology="Harmonic Analysis / 3D Printing / Laser Cutting / Arduino"
    >
      <h4>A revolutionary concept for a low-cost material handling device</h4>
      <p>
        This project involved making several prototypes of various scale, and
        filing a provisional patent before shopping the idea to prospective
        manufactuers
      </p>
    </ProjectBlock>
  )
}
