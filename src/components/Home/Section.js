import React from 'react'
import SiteContainer from '../SiteContainer'

export default function Section({children}) {

  const style={
    padding: '3rem 0'
  }

  return (
    <SiteContainer >
      <div style={style}>
        {children}
      </div>
    </SiteContainer>
  )
}
