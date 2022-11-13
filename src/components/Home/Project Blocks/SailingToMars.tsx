import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(55,55,70)',
}

const imageStyle = {
  width: '15rem',
  height: '15rem',
}

export default function PersonalSpace() {
  const projectImage = (
    <div style={containerStyle}>
      <StaticImage
        style={imageStyle}
        src="../../../images/logo/logoOriginal.png"
        alt="Sailing To Mars Hero Logo. It's a cute sailboat!"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Sailing To Mars"
      Image={projectImage}
      url={links.sailingToMars.home}
      coreTechnology="JS / React / Gatsby"
      githubUrl={links.sailingToMars.github}
    >
      <h4>A Pre-Rendered Portfolio Site</h4>
      <p>
        I chose the static site generator, Gatsby, for this portfolio site to
        maximize speed and SEO.
      </p>
    </ProjectBlock>
  )
}
