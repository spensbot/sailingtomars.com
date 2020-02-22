//import { Link } from "gatsby"
import Link from '@material-ui/core/Link'
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '0 30px',
  },
  link: {
    '&:hover':{
      textDecoration: 'none'
    },
    color: '#000000'
  }
});

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div>
        <Typography  variant="h1">
          <Link className={classes.link}href="/">{siteTitle}</Link>
        </Typography>
        <Typography>A Portfolio Site For Spenser Saling</Typography>
      </div>
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
