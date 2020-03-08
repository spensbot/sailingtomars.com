import React from 'react'
import { Button } from '@material-ui/core'

export default function viewSourceCodeButton({url}) {

  const onClick = e => {
    console.log(url)
  }

  return (
    <Button variant="contained" href={url} onClick={onClick}>View Source Code On Github</Button>
  )
}
