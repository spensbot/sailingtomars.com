import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 95%;
  max-width: 58rem;
`

export default function SiteContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Root>
      <Container>{children}</Container>
    </Root>
  )
}
