/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import CssBaseLine from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles';

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import theme from './theme'

const Layout = ({ children, seoTitle, usesHeader, usesFooter }) => {
  if (!seoTitle){
    console.error("Missing SEO Title!")
  }

  return (
    <>
      <SEO title={seoTitle} />
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        { usesHeader ? <Header /> : null }
        { children }
        { usesFooter ? <Footer /> : null }
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
