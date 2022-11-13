import React from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  fullwidthVidContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
  },
  fullwidthVid: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0',
  },
}

const FullwidthVid = ({ src }: { src: string }) => {
  return (
    <div style={styles.fullwidthVidContainer}>
      <iframe
        title="FullWidth YouTube Video"
        style={styles.fullwidthVid}
        src={src}
        allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default FullwidthVid
