import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
  header?: boolean
  footer?: boolean
}

const Layout = ({ children, header, footer }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {header ? <Header /> : null}
    {children}
    {footer ? <Footer /> : null}
  </ThemeProvider>
)

export default Layout
