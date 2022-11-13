import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import FullwidthVid from '../components/basic/FullwidthVid'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const FontFamily = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background-color: #000;
  color: #fff;
`

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    color: '#eee',

    //Should allow parallax
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  headerImage: {
    width: '50rem',
    height: '50rem',
  },
  raisedText: {
    color: '#ffffffbb',
    position: 'relative',
    marginTop: '-70vh',
    padding: '0 5% 10rem 5%',
    maxWidth: '40rem',
    margin: 'auto',
    minHeight: '70vh',
    textAlign: 'center',
  },

  parallaxPerspective: {
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  parallaxGroup: {
    position: 'relative',
    height: '100vh',
    transformStyle: 'preserve-3d',
  },
  parallaxText: {
    fontFamily: ' "Ostrich Sans Inline", "Helvetica", "Arial", sans-serif ',
    fontSize: '15vh',
    lineHeight: '13vh',
    position: 'absolute',
    top: '0%',
    right: '0',
    bottom: '0%',
    left: '5%',
    transform: 'translateZ(-4px) scale(5)',
  },
  parallaxWater: {
    position: 'absolute',
    display: 'relative',
    top: '80%',
    right: '0',
    bottom: '-80%',
    left: '0',
    transform: 'translateZ(0)',
  },
  parallaxMars: {
    position: 'absolute',
    top: '0%',
    right: '0',
    bottom: '10%',
    left: '0',
    transform: 'translateZ(-1px) scale(2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Music = () => {
  return (
    <Layout footer>
      <FontFamily>
        <div style={styles.root}>
          <div style={styles.parallaxPerspective}>
            <div style={styles.header}>
              <h1 style={styles.parallaxText}>Sailing To Mars</h1>
              <div style={styles.parallaxMars}>
                <div
                  style={{
                    width: '40vw',
                    height: '40vw',
                    maxWidth: '20rem',
                    maxHeight: '20rem',
                  }}
                >
                  <StaticImage
                    src="../images/music/mars.png"
                    alt="A falsified image of mars over the water"
                  />
                </div>
              </div>
              <div style={styles.parallaxWater}>
                <StaticImage
                  src="../images/music/water.png"
                  alt="A body of water at night"
                />

                <div style={styles.raisedText}>
                  <h4>
                    A while ago, someone asked me how I would spend my time if
                    money weren't an object.
                  </h4>
                  <h4>
                    I thought about if for a while, and responded that I would
                    spend my time creating things: software, games, music, and
                    music videos.
                  </h4>
                  <h4>Then I realized; That's already how I spend my time.</h4>
                </div>

                <SiteContainer>
                  <iframe
                    title="SoundCloud Player"
                    width="100%"
                    height="600"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/687556917&color=%23476999&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>

                  <h4>
                    I performed my song 'Stargazing' for an Apple of His Eye
                    charity event
                  </h4>
                  <FullwidthVid src="https://www.youtube.com/embed/aKo-q7t5wzg" />

                  <h4>
                    A collage of slow-mo videos taken in Spain, Portugal,
                    Panama, and Columbia. Set to a short, original song called
                    Never.
                  </h4>
                  <FullwidthVid src="https://www.youtube.com/embed/dfw6rv2vtao" />

                  <h4>
                    The 1975's Robbers is one of my favorite songs ever. Here's
                    a piano adaptation I wrote
                  </h4>
                  <FullwidthVid src="https://www.youtube.com/embed/fGJxCxITUBo" />

                  <h4>I made this music video for my song - Stargazing</h4>
                  <FullwidthVid src="https://www.youtube.com/embed/xHt1SIBlqsw" />

                  <h4>
                    I've been kinda obsessed with Robbers, so I also developed
                    this Music video screenplay for the song.
                  </h4>
                  <FullwidthVid src="https://www.youtube.com/embed/8eFln_xz5Hc" />
                </SiteContainer>
                <Spacer />
              </div>
            </div>
          </div>
        </div>
      </FontFamily>
    </Layout>
  )
}

export default Music
