import React from 'react'
import { Box, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const getStyles = makeStyles(theme => ({
  heading: {
    color: '#ffffffcc',
    textAlign: 'left'
  },
  link: {
    color: '#ffffffff',
    textAlign: 'left'
  }
}))

//links should be an array of objects formatted as such:
//{name, url}
export default function footerList( {title, links} ) {
  const classes = getStyles()

  return (
    <Box minWidth="8rem" display="flex" flexDirection="column" alignItems="flex-start" flex="1" margin="0rem .5rem 2rem .5rem">
      <Typography variant='h6' className={classes.heading}>{title}</Typography>
      {links.map(link => (
        <Link href={link.url} className={classes.link}>{link.name}</Link>
      ))}
    </Box>
  )
}
