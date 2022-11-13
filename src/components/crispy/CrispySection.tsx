import React from 'react'
import SiteContainer from '../SiteContainer'
import styled from 'styled-components'

const Root = styled.div`
  color: #eee;
  padding: 4rem 0;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
  justify-content: center;
`

const Image = styled.div`
  margin: 0 2rem;
  flex-grow: 1;
  max-width: 20rem;
  height: auto;
`

const Text = styled.div`
  margin: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`

type Props = {
  src: string
  header: string
  content: string
  color?: string
}

const CrispySection = ({ src, header, content, color }: Props) => {
  const rootStyle = {
    backgroundColor: color || '#eee',
    color: color ? '#eee' : '#222',
  }

  const containerStyle: React.CSSProperties = {
    flexWrap: color ? 'wrap-reverse' : 'wrap',
  }

  const image = (
    <Image>
      <img
        style={{ objectFit: 'contain' }}
        width="100%"
        height="100%"
        src={src}
        alt="Crispy Plugin Project"
      />
    </Image>
  )

  return (
    <Root style={rootStyle}>
      <SiteContainer>
        <Container style={containerStyle}>
          {color ? image : null}
          <Text>
            <h3>{header}</h3>
            <p>{content}</p>
          </Text>
          {color ? null : image}
        </Container>
      </SiteContainer>
    </Root>
  )
}

export default CrispySection
