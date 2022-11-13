import React from 'react'
import styled from 'styled-components'

const Button = styled.a``

export default function ViewSourceCodeButton({ url }: { url: string }) {
  return <Button href={url}>View Source Code On Github</Button>
}
