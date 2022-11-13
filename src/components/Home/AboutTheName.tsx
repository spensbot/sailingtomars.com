import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../../components/SiteContainer'
import Spacer from '../basic/Spacer'

const Title = styled.h3`
  margin-bottom: 1rem;
`

export default function AboutTheName() {
  return (
    <SiteContainer>
      <Spacer />
      <Title>About The Name</Title>
      <p>
        In high school, a friend Sean Mars and I joked about starting a band
        called Saling To Mars. When I started playing acoustic shows around
        Eugene, I used the name as a placeholder for a stage name. Eventually,
        the placeholder took on a significance that really stuck with me. You
        can't sail to Mars, obviously, but what if that didn't stop you? I
        dismiss so many opportunities and dreams because I assume i'm not
        capable. Maybe you shouldn't let your circumstances dictate what you
        strive for. If happiness is in the journey, does it matter if you reach
        the destination?
      </p>
      <p>Don't have a spaceship, just a boat?...</p>
      <p>Sail to Mars.</p>
      <p>Cheesy, I know. But I like it.</p>
      <Spacer />
    </SiteContainer>
  )
}
