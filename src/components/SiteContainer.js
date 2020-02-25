import React from 'react'
import { Container } from '@material-ui/core'

export default function SiteContainer({children}) {
  return (
    <Container maxWidth="md">
      {children}
    </Container>
  )
}

