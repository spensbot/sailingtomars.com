import React from 'react'
import { Box, Typography, Link } from '@material-ui/core'

//links should be an array of objects formatted as such:
//{name, url}
export default function footerList( {title, links} ) {
  return (
    <Box minWidth="8rem" display="flex" flexDirection="column" alignItems="flex-start" flex="1" marginBottom="2rem">
      <Typography component='h5'>{title}</Typography>
      {links.map(link => (
        <Link href={link.url}>{link.name}</Link>
      ))}
    </Box>
  )
}
