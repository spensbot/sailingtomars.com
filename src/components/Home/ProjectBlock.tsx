import React from 'react'
import styled from 'styled-components'
import ViewSourceCodeButton from '../basic/ViewSourceCodeButton'

type Props = {
  name: string
  Image: React.ReactNode
  url: string
  coreTechnology: string
  githubUrl?: string
  children: React.ReactNode
}

export default function projectBlock({
  name,
  Image,
  url,
  coreTechnology,
  githubUrl,
  children,
}: Props) {
  const onClick = (e: any) => {
    e.preventDefault()

    console.log('Navigate to ' + url)

    window.location.href = url
  }

  return (
    <Root>
      <Header role="button" onClick={onClick}>
        <TitleImage>{Image}</TitleImage>
        <Title>
          <h3>{name}</h3>
          <TitleInfo>
            {/* <Typography>{hours} hours<p> */}
            <p>{coreTechnology}</p>
          </TitleInfo>
        </Title>
      </Header>
      <Children>
        {children}
        {githubUrl && <ViewSourceCodeButton url={githubUrl} />}
      </Children>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  overflow: hidden;
`

const Header = styled.div`
  height: 30rem;
  position: relative;
  cursor: pointer;
`

const Title = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #00000088;
  flex-wrap: wrap;
  color: #ffffff;
  position: relative;
  z-index: 1000;
  box-sizing: border-box;
`

const TitleInfo = styled.div`
  text-align: right;
  flex-grow: 1;
`

const TitleImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`

const Children = styled.div`
  padding: 1rem;
`
