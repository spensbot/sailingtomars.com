import React from 'react'
import SiteContainer from '../SiteContainer'
import { StaticImage } from 'gatsby-plugin-image'
import Spacer from '../basic/Spacer'
import styled from 'styled-components'

const margin = '1rem'

const Row = styled.div`
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  margin: 0 -${margin};
`

const RowItem = styled.div`
  min-width: 15rem;
  margin: ${margin};
`

export default function AboutTheName() {
  return (
    <SiteContainer>
      <Spacer />
      <Row>
        <RowItem style={{ flex: '2' }}>
          <h3>
            A Passionate, Creative Engineer
            {/* A Passionate, Creative, and Extroverted Engineer */}
          </h3>
          {/* <p>
          I'm happiest when creating something I care about.
        </p>
        <p>
          In 2015, I started work as a Mechanical Engineer. I was bored, and really started asking myself what I'm most passionate about. I explored anything of interest: programming, art, technology, language, etc. I traveled the world, and pushed myself at every chance.
        </p>
        <p>
          In 2019, I quit my job to focus on the three areas I am most excited about. Web Development, Game Development, and Music Software Development.
        </p> */}
          <p>
            I'm happiest when learning about or creating something incredible.
          </p>
          <p>
            Since graduating as a Mechanical Engineer in 2015, I have explored
            anything of interest: programming, art, technology, language, etc. I
            traveled the world, and pushed myself at every chance.
          </p>
          <p>
            I stumbled upon a personal cirriculum I like to call project-based
            learning. First, I find something I want to create. Then, I learn
            whatever is necessary to make it happen. As a result, I've created a
            few cool things.
          </p>
        </RowItem>
        <RowItem style={{ flex: '1' }}>
          <StaticImage
            src="../../images/home/me.jpg"
            alt="Spenser Saling. Creative Engineer"
          />
        </RowItem>
      </Row>
      <Spacer />
      <h4>This site showcases the projects I am most proud of.</h4>
      <p>Thanks for visiting,</p>
      <p>Spenser Saling</p>
    </SiteContainer>
  )
}
