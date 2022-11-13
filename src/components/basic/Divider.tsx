import React from 'react'

type Props = {
  vertical?: boolean
  color?: string
  thickness?: string
  marginX?: string
  marginY?: string
}

export default function Divider({
  vertical = true,
  color = '#fff',
  thickness = '1px',
  marginX = '0',
  marginY = '0',
}: Props) {
  const style = {
    backgroundColor: color,
    // width: '5rem',
    width: vertical ? thickness : 'auto',
    height: vertical ? 'auto' : thickness,
    margin: `${marginY} ${marginX}`,
  }

  return <div style={style}></div>
}
