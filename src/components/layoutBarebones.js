import React from "react"
import PropTypes from "prop-types"
import CssBaseLine from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles';

import Header from "./header"
import Footer from "./footer"
import theme from './theme'
import Content from './content'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      { children }
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
