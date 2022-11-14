import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function Music() {
  const ProjectImage = (
    <div
      style={{
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <StaticImage
        style={{
          top: '75%',
          width: '150%',
          left: '-25%',
          bottom: 0,
          objectFit: 'contain',
          position: 'absolute',
        }}
        src="../../../images/music/water.png"
        alt="Water Beneath Mars"
        placeholder="blurred"
      />
      <StaticImage
        style={{
          left: '30%',
          top: '25%',
          width: '40%',
          height: '40%',
          position: 'absolute',
        }}
        objectFit="contain"
        src="../../../images/music/mars.png"
        alt="Mars"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Sailing To Mars"
      Image={ProjectImage}
      url={links.music}
      coreTechnology="Logic Pro / Ableton / Serato / DMX"
    >
      <h4>My Personal Music Project</h4>
      <p>
        My journed with music has really driven itself. I may not be the best
        musician, vocalist, or producer out there. But that hasn't stopped me
        from trying.
      </p>
      <p>
        I've dabbled in making Singer-Songwriter, Electronic, and Indie Pop
        music.
      </p>
    </ProjectBlock>
  )
}
