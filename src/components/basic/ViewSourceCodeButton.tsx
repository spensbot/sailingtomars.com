import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  background-color: #fff;
  color: #111;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
  border-radius: 5rem;
  :hover {
    text-decoration: underline;
  }
`

const Logo = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`

export default function ViewSourceCodeButton({ url }: { url: string }) {
  return (
    <Button href={url}>
      <Logo>
        <img src="/github.svg" width="100%" height="100%" />
      </Logo>
      View Source Code On Github
    </Button>
  )
}
