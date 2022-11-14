import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function FdmPrinting() {
  const ProjectImage = (
    <StaticImage
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      src="../../../images/3d-printing/geralt-sword-exploded.jpg"
      alt="The Witcher 3 Geralt of Rivia Sword Model - Exploded"
      placeholder="blurred"
    />
  )

  return (
    <ProjectBlock
      name="3D Printing"
      Image={ProjectImage}
      url={links.fdmPrinting.home}
      coreTechnology="Autodesk Fusion / Cura"
      githubUrl={links.crispy.github}
    >
      <h4>A ton of rapid prototype concepts</h4>
      <p>
        I spent years working in 3D Modeling software. As a result, I can easily
        turn ideas into real 3D objects with my FDM printer.
      </p>
    </ProjectBlock>
  )
}
