import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'
import screenshot from '../images/Particle System Designer/screenshot.png'
import { links } from '../data/links'
import FullwidthVid from '../components/basic/FullwidthVid'

export default function contact() {
  const imageWrapper = {
    maxWidth: '700px',
  }

  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>Particle System Designer</h1>
        <p>
          A Simple Program That Allows Users To Interactively Tweak Settings In
          The Love2D Particle System Engine
        </p>
        <ViewSourceCodeButton url={links.particleSystemDesigner.github} />
        <Spacer rem={2} />

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <div style={imageWrapper}>
            <img
              width="100%"
              src={screenshot}
              alt="Particle System Designer Screenshot"
            />
          </div>
        </div>

        <Spacer />

        <h4>A Quick, Simple, Elegant Solution</h4>

        {/* <Spacer rem={3} /> */}

        <p>
          I made this program as a way to test particle system settings for my
          game "The Rest of Us". When I couldn't find what I was looking for
          online, I decided to make it myself.
        </p>
        <p>
          The entire project consists of 300 lines of commented code, and an
          open-source library for the sliders.
        </p>
        <Spacer rem={2} />

        <FullwidthVid src="https://www.youtube.com/embed/0SDxvDiOexE" />

        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
