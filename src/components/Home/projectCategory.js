import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core';
import SiteContainer from '../SiteContainer';

const getStyles = makeStyles(theme => ({
  root:{
    background: 'rgb(61,101,161)',
    background: 'linear-gradient(180deg, rgba(150,150,150,1) 0%, rgba(240,240,240,1) 100%)',
    padding: '5rem 0',
    width: '100%'
  },
  title: {
    marginBottom: '5rem'
  }
}))

export default function projectCategory({name, children}) {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <SiteContainer>
        <Typography variant='h3' component='h3' className={classes.title}>
          {name}
        </Typography>  
        {children}
      </SiteContainer>
    </div>
  )
}
