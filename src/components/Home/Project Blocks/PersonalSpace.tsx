import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function PersonalSpace() {
  const projectImage = (
    <StaticImage
      src="../../../images/Personal Space/Project Image.png"
      style={{ width: '100%', height: '100%' }}
      alt="Personal Space Game Screenshot"
    />
  )

  return (
    <ProjectBlock
      name="Personal Space"
      Image={projectImage}
      url={links.personalSpace.home}
      coreTechnology="C# / Unity"
      githubUrl={links.personalSpace.github}
    >
      <h4>A 2D Arcade Game with Fine-Tuned Difficulty</h4>
      <p>
        This simple game aims to perfect the difficult, repeatable, addictive
        approach found in games like Flappy Bird.
      </p>
    </ProjectBlock>
  )
}
