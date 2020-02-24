//import { Link } from "gatsby"
import Link from '@material-ui/core/Link'
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ImageWhiteBGL from './images/logo/WhiteBGL'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles( theme => ({
  root: {
    //background: '#555555',
    border: 0,
    //padding: theme.spacing(1),
    //borderBottom: '1px solid rgba(0,0,0,0.1)',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  logo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: theme.spacing(2),
    //background: '#333333',
    borderRadius: '50%'
  },
  link: {
    '&:hover':{
      textDecoration: 'none'
    },
    //color: theme.palette.secondary.main
  }
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="left">
          {/* <div className={classes.logo}>
            <ImageWhiteBGL />
          </div> */}
          <Box>
            <Typography component="h1" variant="h2">
              <Link className={classes.link}href="/">{siteTitle}</Link>
            </Typography>
            <Typography>A Portfolio Site For Spenser Saling</Typography>
          </Box>
        </Box>
      </Container>
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
