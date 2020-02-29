import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Paper, Box } from '@material-ui/core';
import ViewSourceCodeButton from '../basic/viewSourceCodeButton';

const getStyles = makeStyles(theme => ({
  root:{
    padding: '2rem',
    width: '100%'
  },
  section: {
    padding: '1rem',
    backgroundColor: '#dddddd',
    margin: '1rem'
  }
}))

export default function projectBlock({name, githubLink}) {
  const classes = getStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant='h3' component='h3'>
        {name}
      </Typography>
      <Box display='flex' flexWrap='wrap'>
        <Box flexGrow='2' className={classes.section}>
          <Typography>
            Project Overview
          </Typography>
        </Box>
        <Box flexGrow='1' className={classes.section}>
          <Typography>
            Key Technologies
          </Typography>
        </Box>
      </Box>
      <Typography className={classes.section}>
        What I learned
      </Typography>
      <Typography className={classes.section}>
        Time Frame
      </Typography>
      <ViewSourceCodeButton></ViewSourceCodeButton>
    </Paper>
  )
}
