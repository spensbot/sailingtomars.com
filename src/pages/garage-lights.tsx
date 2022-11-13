import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import gif from '../images/Garage Lights/screenshot.gif'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'
import screenshot from '../images/Garage Lights/screenshot.png'
import { links } from '../data/links'
import FullwidthVid from '../components/basic/FullwidthVid'

export default function contact() {
  const imageWrapper = {
    maxWidth: '500px',
  }

  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>Garage Lights</h1>
        <Spacer rem={2} />
        <h3>
          A VST plugin that allows users to control a DMX lighting universe from
          their DAW (digital audio workstation).
        </h3>
        <Spacer rem={2} />
        <ViewSourceCodeButton url={links.garageLights.github} />
        <Spacer rem={2} />

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={imageWrapper}>
            <img width="100%" src={screenshot} alt="Garage Lights Screenshot" />
          </div>
        </div>

        <Spacer />
        <h3>Key Features</h3>
        <ul>
          <li>
            Garage lights is programmed to communicate with any Open DMX
            compatible USB interface.
          </li>
          <li>
            Users get a full 512 parameters that can be controlled/automated
            from within a DAW to control a DMX universe.
          </li>
        </ul>
        <Spacer rem={3} />

        <h3>What I learned</h3>
        <ul>
          <li>C++</li>
          <li>Object Oriented Programming</li>
          <li>VST plugin development using the Juce application framework</li>
          <li>Working with Serial Port devices</li>
        </ul>
        <Spacer />

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <div style={imageWrapper}>
            <img
              width="100%"
              src={gif}
              alt="Garage Lights Moving Screenshot GIF"
            />
          </div>
        </div>

        <Spacer />
        <h4>Garage Lights demo in Ableton Live</h4>
        <p>
          This software allows for live control of stage-lights with a midi
          controller
        </p>
        <Spacer rem={1} />

        <FullwidthVid src="https://www.youtube.com/embed/se_ilqRNLNU" />

        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
