import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { links } from '../data/links'
import styled from 'styled-components'

const FWContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 130%;
`

const FullWidth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

export default function Contact() {
  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>Resume*</h1>
        <p>
          *Note: This is a generic resume. If I applied for a job with you,
          please refer to the scoped resume sent with my application.
        </p>
        <FWContainer>
          <iframe
            title="Resume PDF Viewer"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              border: '0',
            }}
            src={links.sailingToMars.resumePDF}
            frameBorder={0}
          ></iframe>
        </FWContainer>
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
