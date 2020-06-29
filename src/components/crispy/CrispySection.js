import React from 'react'
import { Typography } from '@material-ui/core'
import SiteContainer from '../SiteContainer'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    color: '#eee',
    padding: '4rem 0'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -2rem',
    justifyContent: 'center'
  },
  image: {
    margin: '0 2rem',
    flexGrow: '1',
    maxWidth: '20rem',
    height: 'auto',
  },
  text: {
    margin: '0 2rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0'
  },
}))

const CrispySection = ({src, header, content, color}) => {

  const classes = useStyles();

  const rootStyle = {
    backgroundColor: color || '#eee',
    color: color ? '#eee' : '#222'
  }

  const containerStyle = {
    flexWrap: color ? 'wrap-reverse' : 'wrap'
  }

  const image = (
    <div className={classes.image}>
      <img style={{objectFit: "contain"}} width="100%" height="100%" src={src} alt="Crispy Plugin Project"/>
    </div>
  )

  return (
    <div className={classes.root} style={rootStyle}>
      <SiteContainer>
        <div className={classes.container} style={containerStyle}>
          {color ? image : null}
          <div className={classes.text}>
            <Typography component="h3" variant="h4">{header}</Typography>
            <Typography component="p" variant="p">{content}</Typography>
          </div>
          {color ? null : image}
        </div>
      </SiteContainer>
    </div>
  )
}

export default CrispySection