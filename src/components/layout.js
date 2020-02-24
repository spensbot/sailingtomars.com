/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import CssBaseLine from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from "./header"
import Footer from "./footer"
import { Container } from "@material-ui/core";


const lightTheme = createMuiTheme({
  typography:{
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    ssPrimary: {
      
    },
    ssDark: {

    }
  }
});

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseLine />
        <Header siteTitle={"Sailing To Mars"} />
        <Container maxWidth="md">
          <main>{children}</main>
        </Container>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
