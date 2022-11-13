import React from 'react'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import Layout from '../components/Layout'

export default function contact() {
  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>Contact</h1>
        <p>Spenser Saling</p>
        <p>+1 (503) 853 5767</p>
        <p>Gresham, OR USA</p>
        <p>spenser0saling@gmail.com</p>
        <Spacer rem={1} />
        <p>If you are interested in working together, let me know!</p>
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
