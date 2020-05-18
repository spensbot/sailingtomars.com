import React from 'react'
import Layout from '../components/layout'
import { Typography, Box } from '@material-ui/core'
import SiteContainer from '../components/SiteContainer'
import Spacer from '../components/basic/Spacer'

export default function resume() {

  return (
    <Layout seoTitle="Home" usesHeader={true} usesFooter={true}>
    <SiteContainer>
      {/* <Spacer />
      <Typography variant="h3" component="h1" gutterBottom>My Resume</Typography>
      <Typography variant="caption">Note: This resume is unabridged</Typography>
      <br />
      <Typography variant="caption" gutterBottom>If I applied for a job with you, please see the scoped resume sent with my application</Typography>
      <div >
      <iframe title="Google Docs Resume" width="100%" height="1800px" src="https://docs.google.com/document/d/e/2PACX-1vQQknZbG3ji-TKui2kSy8ExJswO6YHFrAaajwxg1rHgHimWzORKoaL1APgFkMSusRbm0471o4ABV-mb/pub?embedded=true"></iframe>
      </div>
      <Spacer /> */}

      <Typography>
        486 SE Gabbert Rd <br />
        Gresham, Oregon 97080 <br />
        USA <br />
        +1 (503) 853-5767 <br />
        SPENSER0SALING@GMAIL.COM
      </Typography>

    </SiteContainer>
    </Layout>
  )
}
