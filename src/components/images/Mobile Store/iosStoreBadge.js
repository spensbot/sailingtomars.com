import React from "react"
import source from '../../../images/Mobile Store Icons/ios-store-badge.svg'

const Image = () => {
  const style = {
    maxWidth: '100%',
    height: 'auto'
  }

  return <img alt="ios App Store Badge" src={source} style={style} />
}

export default Image