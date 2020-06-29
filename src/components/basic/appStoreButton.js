import React from 'react'
import PlayStoreBadge from '../images/Mobile Store/playStoreBadge'
import IosStoreBadge from '../images/Mobile Store/iosStoreBadge'

export default function googlePlayStoreButton({link, isAndroid}) {

  const iosWidth = 15
  let width = isAndroid ? iosWidth * 1.127 : iosWidth
  width = `${width}rem`

  const style = {
    width: width,
    margin: '1rem'
  }

  const openNewWindow = (e) => {
    e.preventDefault()
    window.open(link)
  }

  return (
    <div role="button" tabIndex={0} onKeyDown={openNewWindow} onClick={openNewWindow} style={style}>
      {isAndroid ?
        <PlayStoreBadge /> :
        <IosStoreBadge />
      }
    </div>
  )
}