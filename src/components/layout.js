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

import Header from "./header"
import Footer from "./footer"
import SiteContainer from './SiteContainer'
import theme from './theme'
import Content from './content'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Header siteTitle={"Sailing To Mars"} />
        <Content>
          { children }
        </Content>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
