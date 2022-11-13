import React from 'react'

type Props = {
  vertical?: boolean
  rem: number
}

export default function Spacer({ vertical = false, rem = 5 }) {
  let size = `${rem}rem`

  return vertical ? (
    <div style={{ width: size }} />
  ) : (
    <div style={{ height: size }} />
  )
}
