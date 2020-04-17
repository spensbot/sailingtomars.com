import React from 'react'
import { Box } from '@material-ui/core'

export default function Spacer({vertical, rem}) {

  let size = "5rem"

  if (rem) {
    size = rem + "rem"
  }

  return (
    vertical ? <Box width={size}/> : <Box height={size}/>
  )
}
