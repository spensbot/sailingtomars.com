import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'

export default function TheRestOfUs() {
  const ProjectImage = (
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="/The-Rest-of-Us-Short.gif"
      alt="The Rest of Us Project"
    />
  )

  return (
    <ProjectBlock
      name="The Rest of Us"
      Image={ProjectImage}
      url={links.theRestOfUs.home}
      coreTechnology="Lua / Love2D"
      githubUrl={links.theRestOfUs.github}
    >
      <h4>A Simple RPG</h4>
      <p>
        Created with the Love2D framework in the Lua programming language. Over
        2500 lines of commented code organized over 30 files.
      </p>
    </ProjectBlock>
  )
}
