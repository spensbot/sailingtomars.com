import React from 'react'
import Layout from '../components/layout'
import { Typography, ThemeProvider, createMuiTheme, Box } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { makeStyles } from "@material-ui/styles"
import ScreenshotFull from '../components/images/Crispy/ScreenshotFull'

const crispyTheme = createMuiTheme({
  typography:{
    fontFamily: ' "Montserrat", "Helvetica", "Arial", sans-serif ',
  }
})

const useStyles = makeStyles(theme => ({
  root: {

  },
  header: {
    backgroundColor: '#000',
    color: '#eee',
    padding: '5%'
  },
  headerImage: {
    width: '50rem',
    height: '50rem'
  }
}))

const Crispy = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Crispy Saturator" usesFooter>
    <ThemeProvider theme={crispyTheme}>
    <div className={classes.root}>

      <div className={classes.header}>
        <Typography variant="h1">Make It Crispy</Typography>
        <Box display="flex">
          <Box display="flex" flexDirection="column" flex="1 1 auto">
            <Typography variant="h3">A powerful saturation plugin for music producers</Typography>
          </Box>
          <ScreenshotFull className={classes.headerImage}/>
        </Box>
        <Spacer rem="10" />
      </div>

      <div className={classes.body}>
      <SiteContainer>
      
      </SiteContainer>
      </div>

    </div>
    </ThemeProvider>
    </Layout>
  )
}

export default Crispy