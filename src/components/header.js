//import { Link } from "gatsby"
import Link from '@material-ui/core/Link'
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SiteContainer from './SiteContainer'
import Box from '@material-ui/core/Box'
import LogoOriginal from './images/logo/LogoOriginal'
import {links} from '../data/links'

const useStyles = makeStyles( theme => ({
  root: {
    background: theme.palette.ss.darkSectionBG,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },

  logo: {
    marginTop: '2rem',
    width: '16rem',
    height: '16rem',
  },

  titleLink: {
    '&:hover':{
      textDecoration: 'none'
    },
    color: '#fff'
  },

  subTitle: {
    color: '#ffffffbb'
  }
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <SiteContainer>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" flexWrap="wrap">
          {/* <div className={classes.logo}>
            <ImageWhiteBGL />
          </div> */}
          <Box>
            <Typography component="h3" variant="h2">
              <Link className={classes.titleLink} href="/">Sailing To Mars</Link>
            </Typography>
            <Typography component="sub" className={classes.subTitle }>A Portfolio Site For Spenser Saling / <a className={classes.subTitle} href={links.sailingToMars.contact}>Contact</a> / <a className={classes.subTitle} href={links.sailingToMars.resume}>Resume</a></Typography>
          </Box>
          <Box flex="1" display="flex" justifyContent="center">
            <div className={classes.logo}>
              {/* <LogoOriginal /> */}
              <LogoOriginal />
            </div>
          </Box>
        </Box>
      </SiteContainer>
      {/* <div className={classes.infiniteScroll}>
        <LogoBackground />        
      </div> */}

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
