import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SocialIcon } from 'react-social-icons'
import SiteContainer from './SiteContainer'

import FooterList from './footerList'
import { Box, Typography} from '@material-ui/core'
import { linksOrdered } from '../data/links'
import Divider from './basic/divider'

const getStyles = makeStyles( theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    background: theme.palette.ss.darkSectionBG,
    color: theme.palette.ss.darkSectionColor
    //background: 'rgb(75,75,100)'
    //borderTop: '1px solid rgba(0,0,0,0.1)'
  },
  socialIcon: {
    margin: '.15rem',
  },
  socialIconGroup: {
    padding: '.1rem',
    borderRadius: '10rem',
    backgroundColor: '#ffffffdd',
    marginBottom: '1rem'
  }
}))

export default function footer() {
  const classes = getStyles();

  return (
    <footer className={classes.root}>
      <SiteContainer>
        <Typography variant="h5" gutterBottom={true}>More from Sailing To Mars</Typography>

        <Divider color="#ffffffdd" marginY="1rem"/>

        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {linksOrdered.byCategory.map(link => (
            <FooterList key={link.category} title={link.category} links={link.links} />
          ))}
        </Box>

        <Box display='flex' justifyContent='center'>
          <div className={classes.socialIconGroup}>
          {linksOrdered.socialMedia.map(link => (
            <SocialIcon className={classes.socialIcon} key={link} url={link} />
          ))}
          </div>
        </Box>
        © {new Date().getFullYear()} By Spenser Saling
      </SiteContainer>
    </footer>
  )
}
