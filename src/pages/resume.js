import React from 'react'
import Layout from '../components/layout'
import { Typography, Paper } from '@material-ui/core'
import Section from '../components/Home/Section'

export default function resume() {
  return (
    <Layout seoTitle="Home" usesHeader={true} usesFooter={true}>
      <Section>
      <Typography variant="h1" component="h1">Resume</Typography>
      <Typography>Note: This resume is unabridged. If I applied for a job with you. Please see the scoped resume sent with my application.</Typography>
      <Paper elevation={3}>
        <Typography>
          Stuff
        </Typography>
      </Paper>
      </Section>
    </Layout>
  )
}
