import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@material-ui/core'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'

export default function contact() {
  return (
    <Layout seoTitle="Home" usesHeader usesFooter>
      <SiteContainer>
      <Spacer />
      <Typography variant="h3" component="h1" gutterBottom>Contact</Typography>
      <Typography>Spenser Saling</Typography>
      <Typography>+1 (503) 853 5767</Typography>
      <Typography>Gresham, OR USA</Typography>
      <Typography gutterButtom>spenser0saling@gmail.com</Typography>
      <Spacer />
      <Typography variant="h5" component="h1" gutterBottom>If you are interested in working together, let me know!</Typography>
      <Spacer />
      </SiteContainer>
    </Layout>
  )
}