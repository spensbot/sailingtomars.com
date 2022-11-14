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
  backgroundColor: 'rgb(200,70,90)',
}

const imageStyle = {
  width: '15rem',
  height: '15rem',
}

export default () => {
  const projectImage = (
    <div style={containerStyle}>
      <StaticImage
        style={imageStyle}
        src="../../../images/Feel With Me/logo512nbg.png"
        alt="Feel With Me Hero image"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Feel With Me"
      Image={projectImage}
      url={links.feelWithMe.home}
      coreTechnology="Node / GraphQL / MongoDB / React"
      githubUrl={links.feelWithMe.github}
    >
      <h4>
        A Social Networking Site That Connects People Based On Mutual Music
        Interest [Deactivated]
      </h4>
      <p>
        Definitely one of the coolest things I've made. I originally build this
        project with a REST API and Redux. Towards completion, I began learning
        about GraphQL and Apollo. I decided to rebuild the entire project.
      </p>
      <p>The site's servers were deactivated to cut costs</p>
    </ProjectBlock>
  )
}
