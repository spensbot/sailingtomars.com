import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'
import screenshot from '../images/The Rest of Us/The-Rest-of-Us-Short.gif'
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
        <h1>The Rest of Us</h1>
        <p>
          A simple RPG, created with the Love2D framework in the Lua programming
          language.
        </p>
        <p>Over 2500 lines of commented code organized over 30 files.</p>
        <ViewSourceCodeButton url={links.garageLights.github} />
        <Spacer rem={2} />

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <div style={imageWrapper}>
            <img
              width="100%"
              src={screenshot}
              alt="The Rest of Us Gameplay Screenshot"
            />
          </div>
        </div>

        <Spacer />

        <h3>Key Features:</h3>
        <ul>
          <li>
            The map is populated with barriers, enemies, chests, and other
            objects based on the pixels in an image file. This means that levels
            can be "drawn" in a simple paint program. This same image is used as
            a mini-map.
          </li>
          <li>
            Extensively organized with object-oriented programming (Enemies,
            weapons, objects, etc.)
          </li>
          <li>
            Algorithms for square and circle collision, as well as hit detection
          </li>
          <li>Procedurally generated terrain</li>
          <li>
            All objects in the game are loaded and released from memory based on
            distance from the player
          </li>
          <li>Inventory system with weights, stats, and various categories</li>
          <li>
            Built in "Debug" option which prints selected variables to a window
          </li>
        </ul>

        <Spacer rem={2} />

        <FullwidthVid src="https://www.youtube.com/embed/AoRWV7KLuyg" />

        <Spacer />

        <h4>I Love The Variety of Work I Did On This Project</h4>
        <ul>
          <li>Programming</li>
          <li>Graphic Design</li>
          <li>Sound Design</li>
          <li>Scoring (Music)</li>
        </ul>

        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
