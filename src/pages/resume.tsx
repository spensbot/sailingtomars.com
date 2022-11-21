import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import { links } from '../data/links'
import styled from 'styled-components'

const SvgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`

const PdfContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 130%;
`

const SvgWrapper = styled.div`
  width: 50rem;
  -webkit-box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 5px 17px 4px rgba(0, 0, 0, 0.49);
  margin: 0;
  padding: 0;
`

export default function Contact() {
  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>Resume</h1>
        <p>
          <a href={links.sailingToMars.resumePDF}>PDF Download</a>
        </p>
        <SvgContainer>
          <SvgWrapper>
            <img src={links.sailingToMars.resumeSVG} width="100%" />
          </SvgWrapper>
        </SvgContainer>
        {/* <PdfContainer>
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
        </PdfContainer> */}
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
