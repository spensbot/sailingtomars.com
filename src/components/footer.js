import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

import FooterList from './footerList';
import { Box } from '@material-ui/core';

const getStyles = makeStyles( theme => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(5),
    //borderTop: '1px solid rgba(0,0,0,0.1)'
  },
  socialIcon: {
    marginLeft: '5px'
  }
}))

export default function footer() {
  const classes = getStyles();
  const socialLinks = [
    "https://www.facebook.com/spenser.saling",
    "https://www.instagram.com/spenser_saling/",
    "https://www.linkedin.com/in/spenser-saling-4a0833aa/",
    "https://github.com/spensbot",
    "https://soundcloud.com/salingtomars"
  ]

  return (
    <footer className={classes.root}>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <FooterList title="Games"
            links={[
              {name: 'SadBoy', url: '/'},
              {name: 'Personal Space', url: '/'}
            ]}
          ></FooterList>
          <FooterList title="Websites"
            links={[
              {name: 'Feel With Me', url: '/'},
              {name: 'This Website!', url: '/'}
            ]}
          ></FooterList>
          <FooterList title="Music Software"
            links={[
              {name: 'Crispy Saturator', url: '/'},
              {name: 'Crispy Synth', url: '/'},
              {name: 'Lush', url: '/'},
              {name: 'Lush Verb', url: '/'},
              {name: 'Garage Lights', url: '/'}
            ]}
          ></FooterList>
        </Box>
        <div>
        {socialLinks.map(link => (
          <SocialIcon className={classes.socialIcon} key={link} url={link} />
        ))}
        </div>
        © {new Date().getFullYear()} By Spenser Saling
    </footer>
  )
}
