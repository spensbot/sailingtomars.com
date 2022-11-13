import React from 'react'
import ProjectBlock from '../ProjectBlock'
import { links } from '../../../data/links'
import { StaticImage } from 'gatsby-plugin-image'

export default function Djing() {
  const ProjectImage = (
    <StaticImage
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="../../../images/djing/DanceFar2.jpg"
      alt="A lit dance floor"
    />
  )

  return (
    <ProjectBlock
      name="Wedding DJing"
      Image={ProjectImage}
      url={links.djing.home}
      coreTechnology="Serato / DMX"
    >
      <h4>I've been the DJ & MC at multiple weddings</h4>
      <p>
        There's nothing like the thrill of DJing a wedding, the most special day
        in a couple's life. The MC is responsible for creating an atmosphere
        that is loving, fun, emotional, and energetic. It requires an incredible
        amount of care and planning. I have been entrusted with this special day
        6 times now. I love the unique challenges that each wedding brings
      </p>
    </ProjectBlock>
  )
}
