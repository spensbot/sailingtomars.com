//import { Link } from "gatsby"
import Link from '@material-ui/core/Link'
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SiteContainer from './SiteContainer'
import Box from '@material-ui/core/Box'
import LogoOriginal from './images/logo/LogoOriginal'

const animationPeriod = 7; //seconds

const useStyles = makeStyles( theme => ({
  root: {
    background: theme.palette.ss.darkSectionBG,
    border: 0,
    //padding: theme.spacing(1),
    //borderBottom: '1px solid rgba(0,0,0,0.1)',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },

  logo: {
    marginTop: '2rem',
    width: '20rem',
    height: '20rem',
    //animation: `$ani ${animationPeriod}s infinite ease-in-out`
  },

  '@keyframes ani': {
    '0': {
      transform: 'rotate(0deg) translate(0,0)',
    },
    '50%':{
      transform: 'rotate(-23deg) translate(0,-1rem)',
    },
    '100%':{
      transform: 'rotate(0deg) translate(0,0rem)'
    }
  },

  infiniteScroll: {
    position: 'absolute',
    top: '-6rem',
    //height: '10rem',
    width: '200vw',
    animation: `$scroll ${animationPeriod * 2}s infinite linear`,
    zIndex: '1'
  },

  '@keyframes scroll': {
    'from':{
      left: '0'
    },
    'to':{
      left: '-100vw'
    }
  },

  link: {
    '&:hover':{
      textDecoration: 'none'
    },
    color: '#fff'
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
            <Typography component="h1" variant="h2">
              <Link className={classes.link}href="/">Sailing To Mars</Link>
            </Typography>
            <Typography>A Portfolio Site For Spenser Saling</Typography>
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
