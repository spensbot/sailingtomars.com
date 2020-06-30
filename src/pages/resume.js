import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import {links} from '../data/links'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  fullwidthContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '140%'
  },
  fullwidth: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0'
  }
}))

export default function Contact() {

  const classes = useStyles()

  return (
    <Layout seoTitle="Home" usesHeader usesFooter>
      <SiteContainer>
      <Spacer />
      <Typography variant="h3" component="h1" gutterBottom>Resume*</Typography>
      <Typography>*Note: This is a generic resume. If I applied for a job with you, please refer to the scoped resume sent with my application.</Typography>
      <div className={classes.fullwidthContainer}>
        <embed className={classes.fullwidth} src={links.sailingToMars.resumePDF} />
      </div>
      <Spacer />
      {/* <div className={classes.fullwidthContainer}>
        <iframe title="PDF Resume Viewer" className={classes.fullwidth} src={`https://docs.google.com/gview?url=${links.index}${links.sailingToMars.resumePDF}?pid=explorer&efh=false&a=v&chrome=false&embedded=true"`} frameBorder="0"></iframe>
      </div>
      <Spacer /> */}
      </SiteContainer>
    </Layout>
  )
}