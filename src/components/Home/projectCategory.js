import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core';
import SiteContainer from '../SiteContainer';
import Spacer from '../basic/Spacer';

const getStyles = makeStyles(theme => ({
  root:{
    background: 'rgb(61,101,161)',
    background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(200, 200, 200, 1) 100%)`,
    padding: '5rem 0',
    width: '100%'
  },
  title: {
    marginBottom: '1rem'
  }
}))

export default function projectCategory({name, description, children}) {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <SiteContainer>
        <Typography variant='h3' component='h3' className={classes.title}>
          {name}
        </Typography>  
        <Typography>
          {description}
        </Typography>  
        <Spacer />
        {children}
      </SiteContainer>
    </div>
  )
}
