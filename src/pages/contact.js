import React from 'react'
import Layout from '../components/layout'
import { Typography } from '@material-ui/core'
import Section from '../components/Home/Section'

export default function resume() {
  return (
    <Layout seoTitle="Home" usesHeader={true} usesFooter={true}>
      <Section>
      <Typography variant="h1" component="h1" gutterBottom>Contact</Typography>
      <Typography>Spenser Saling</Typography>
      <Typography>+1 (503) 853 5767</Typography>
      <Typography>Gresham, Or USA</Typography>
      <Typography>spenser0saling@gmail.com</Typography>
      </Section>
    </Layout>
  )
}