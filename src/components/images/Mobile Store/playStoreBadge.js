import React from "react"
import source from '../../../images/Mobile Store Icons/google-play-badge.svg'

const Image = () => {
  const style = {
    maxWidth: '100%',
    height: 'auto'
  }

  return <img alt="Google Play Store Badge" src={source} style={style} />
}

export default Image