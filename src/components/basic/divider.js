import React from 'react'

export default function divider({vertical, color, thickness, marginX, marginY}) {
  const Color = color || '#ffffff'
  const Thickness = thickness || '1px'
  const MarginX = marginX || '0'
  const MarginY = marginY || '0'

  const style = {
    backgroundColor: Color,
    width: vertical ? Thickness : 'auto',
    height: vertical ? 'auto' : Thickness,
    margin: `${MarginY} ${MarginX}`
  };

  return (
    <div style={style}></div>
  )
}
