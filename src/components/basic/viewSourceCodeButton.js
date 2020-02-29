import React from 'react'
import { Button } from '@material-ui/core'

export default function viewSourceCodeButton({url}) {
  return (
    <Button variant="contained" href={url}>View Source Code On Github</Button>
  )
}
