import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  links: Link[]
}

type Link = {
  name: string
  url: string
}

export default function FooterList({ title, links }: Props) {
  return (
    <Root>
      <Heading>{title}</Heading>
      {links.map((link) => (
        <Link key={link.name} href={link.url}>
          {link.name}
        </Link>
      ))}
    </Root>
  )
}

const Root = styled.div`
  min-width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin: 0 0.5rem 2rem 0.5rem;
`

const Heading = styled.h6`
  color: #eee;
  text-align: left;
  margin-bottom: 0.4rem;
`

const Link = styled.a`
  color: #aaa;
  text-align: left;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: #ddd;
  }
  margin-bottom: 0.3rem;
`
