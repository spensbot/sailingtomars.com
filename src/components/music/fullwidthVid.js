import React from 'react'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  fullwidthVidContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%'
  },
  fullwidthVid: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0'
  }
}))

const FullwidthVid= ({src}) => {

  const classes = useStyles();

  return (
    <div className={classes.fullwidthVidContainer}>
      <iframe className={classes.fullwidthVid} src={src} allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default FullwidthVid