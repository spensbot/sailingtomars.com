import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
// const SocialIcon = styled.div`
//   width: 3rem;
//   height: 3rem;
//   border-radius: 3rem;
//   background-color: #777;
//   margin: 0.1rem;
// `
import SiteContainer from './SiteContainer'
import FooterList from './FooterList'
import { linksOrdered } from '../data/links'
import Divider from './basic/Divider'

const Root = styled.footer`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accentText};
`

const Header = styled.h5`
  margin-bottom: 1rem;
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`

const IconWrapper = styled.div`
  margin: 0.15rem;
`

const SocialIconGroup = styled.div`
  padding: 0.1rem;
  border-radius: 10rem;
  background-color: #ffffffdd;
  margin-bottom: 1rem;
  display: flex;
`

export default function footer() {
  return (
    <Root>
      <SiteContainer>
        <Header>More from Sailing To Mars</Header>
        <Divider vertical={false} color="#fff" marginY="1rem" />
        <Links>
          {linksOrdered.byCategory.map((link) => (
            <FooterList
              key={link.category}
              title={link.category}
              links={link.links}
            />
          ))}
        </Links>
        <SocialIcons>
          <SocialIconGroup>
            {linksOrdered.socialMedia.map((link) => (
              <SocialIcon
                key={link}
                url={link}
                style={{
                  margin: '0.15rem',
                }}
              />
            ))}
          </SocialIconGroup>
        </SocialIcons>
        © {new Date().getFullYear()} By Spenser Saling
      </SiteContainer>
    </Root>
  )
}
