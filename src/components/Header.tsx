import React from 'react'
import SiteContainer from './SiteContainer'
import { StaticImage } from 'gatsby-plugin-image'
import { links } from '../data/links'
import styled from 'styled-components'

const Root = styled.header`
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accentText};
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Title = styled.h1``

const SubTitle = styled.h2`
  color: #bbb;
  font-size: 1rem;
`

const SubtitleLink = styled.a`
  color: #bbb;
  :hover {
    color: #ddd;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  margin-top: 1rem;
  width: 16rem;
  height: 16rem;
`

const Header = ({}) => {
  return (
    <Root>
      <SiteContainer>
        <Row>
          <Text>
            <Title>
              <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Sailing To Mars
              </a>
            </Title>
            <SubTitle>
              A Portfolio Site For Spenser Saling /{' '}
              <SubtitleLink href={links.sailingToMars.contact}>
                Contact
              </SubtitleLink>{' '}
              /{' '}
              <SubtitleLink href={links.sailingToMars.resume}>
                Resume
              </SubtitleLink>
            </SubTitle>
          </Text>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <Logo>
              <StaticImage
                src="../images/logo/logoOriginal.png"
                alt="Sailing To Mars Logo"
                placeholder="tracedSVG"
              />
            </Logo>
          </div>
        </Row>
      </SiteContainer>
    </Root>
  )
}

export default Header
