import React from 'react'
import SiteContainer from '../SiteContainer'
import Spacer from '../basic/Spacer'
import styled from 'styled-components'

type Props = {
  name: string
  description: string
  children: React.ReactNode
}

const Root = styled.div`
  background-color: linear-gradient(
    180deg,
    #fff 0%,
    rgba(200, 200, 200, 1) 100%
  );
  padding: 5rem 0;
  width: 100%;
`

export default function projectCategory({
  name,
  description,
  children,
}: Props) {
  return (
    <Root>
      <SiteContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <Spacer rem={3} />
        {children}
      </SiteContainer>
    </Root>
  )
}
