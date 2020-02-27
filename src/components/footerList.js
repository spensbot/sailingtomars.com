import React from 'react'
import { Box, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const getStyles = makeStyles(theme => ({
  heading: {
    color: '#ffffffcc',
  },
  link: {
    color: '#ffffffff'
  }
}))

//links should be an array of objects formatted as such:
//{name, url}
export default function footerList( {title, links} ) {
  const classes = getStyles()

  return (
    <Box minWidth="8rem" display="flex" flexDirection="column" alignItems="flex-start" flex="1" marginBottom="2rem">
      <Typography variant='h6' className={classes.heading}>{title}</Typography>
      {links.map(link => (
        <Link href={link.url} className={classes.link}>{link.name}</Link>
      ))}
    </Box>
  )
}
