import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Paper, Box } from '@material-ui/core';
import ViewSourceCodeButton from '../basic/viewSourceCodeButton';
import ProjectImage from '../images/Personal Space/projectImage';

const getStyles = makeStyles(theme => ({
  root:{
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    '-webkit-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    '-moz-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    boxShadow: '0px 5px 17px 4px rgba(0,0,0,0.49)',
    overflow: 'hidden',
  },
  header: {
    height: '30rem',
    width: '100%',
    position: 'relative'
  },
  title: {
    padding: '1rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000088',
    flexWrap: 'wrap',
    color: '#ffffff',
    position: "relative",
    zIndex: 1000
  },
  titleInfo: {
    textAlign: 'right',
    
  },
  titleImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden'
  },
  section: {
    padding: '1rem',
    backgroundColor: '#dddddd',
    margin: '1rem'
  },
  children: {
    padding: '1rem'
  }
}))

export default function projectBlock({name, Image, hours, coreTechnology, githubLink, children}) {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.titleImage}>{Image}</div>
        <div className={classes.title}>
          <Typography variant="h3" component="h3">{name}</Typography>
          <div className={classes.titleInfo}>
            <Typography>{hours} hours</Typography>
            <Typography>{coreTechnology}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.children}>
        {children}
        <ViewSourceCodeButton />
      </div>

    </div>




    // <Paper className={classes.root}>
    //   <Typography variant='h3' component='h3'>
    //     {name}
    //   </Typography>
    //   <Box display='flex' flexWrap='wrap'>
    //     <Box flexGrow='2' className={classes.section}>
    //       <Typography>
    //         Project Overview
    //       </Typography>
    //     </Box>
    //     <Box flexGrow='1' className={classes.section}>
    //       <Typography>
    //         Key Technologies
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <Typography className={classes.section}>
    //     What I learned
    //   </Typography>
    //   <Typography className={classes.section}>
    //     Time Frame
    //   </Typography>
    //   <ViewSourceCodeButton></ViewSourceCodeButton>
    // </Paper>
  )
}
