/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import CssBaseLine from '@material-ui/core/CssBaseline'

import Header from "./header"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography:{
    //fontFamily: '"Amatic SC", "Helvetica", "Arial", sans-serif',
  }
});

const Layout = ({ children }) => {
  console.log(lightTheme);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
      <CssBaseLine />
      <Header siteTitle={"Sailing To Mars"} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
