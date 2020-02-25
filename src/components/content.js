import React from 'react'
import SiteContainer from './SiteContainer'
import { makeStyles, ThemeProvider } from '@material-ui/styles'

const getStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
}))

export default function content({children}) {
  const classes = getStyles()

  return (
    <main className={classes.root}>
      <SiteContainer>
        {children}
      </SiteContainer>
    </main>
  )
}
