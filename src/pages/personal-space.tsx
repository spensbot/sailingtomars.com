import React from 'react'
import Layout from '../components/Layout'
import ParticleBackground from '../components/ParticleBackground'
import { links } from '../data/links'
import SiteContainer from '../components/SiteContainer'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Spacer from '../components/basic/Spacer'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'

const FontFamily = styled.div`
  font-family: 'Amatic SC', 'Helvetica', 'Arial', sans-serif;
  color: rgb(240, 240, 240);
`

const BORDER_INNER_RADIUS = 1.2
const SILVER_LINING = 0.1
const BORDER_THICKNESS = 0.6
const BORDER_OUTER_RADIUS = BORDER_INNER_RADIUS + BORDER_THICKNESS

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    color: '#fff',
    // position: 'relative',
  },
  reallyBigHeader: {
    color: '#fff',
    textAlign: 'center',
  },
  headerText: {
    fontSize: '5rem',
  },
  subHeaderText: {
    fontSize: '3rem',
    textAlign: 'center',
  },
  paper: {
    padding: '2rem',
  },
  graphic: {
    flexGrow: '1',
    maxWidth: '30rem',
  },
  player: {
    width: '6rem',
    height: '6rem',
    animation: '$wave 10s ease-in-out infinite',
    transform: 'rotate(45deg)',
    margin: '1rem',
  },
  enemy: {
    width: '7rem',
    height: '7rem',
    margin: '1rem',
    animation: '$spin 10s linear infinite',
  },
  giantEmoji: {
    fontSize: '10rem',
    textAlign: 'center',
  },
  promoVideo: {
    padding: `${BORDER_THICKNESS}rem`,
    backgroundColor: '#111111',
    border: `${SILVER_LINING}rem solid silver`,
    borderRadius: `${BORDER_OUTER_RADIUS}rem`,
    display: 'inline-block',
    // '-webkit-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    // '-moz-box-shadow': '0px 5px 17px 4px rgba(0,0,0,0.49)',
    boxShadow: '0px 5px 17px 4px rgba(0,0,0,0.49)',
    margin: '1rem 0 2rem 0',
  },
  section: {
    marginBottom: '3rem',
  },
  button: {
    fontSize: '2rem',
  },
  // '@keyframes spin': {
  //   '0%': {
  //     transform: 'rotate(0deg)'
  //   },
  //   '100%': {
  //     transform: 'rotate(360deg)'
  //   }
  // }
}

const PersonalSpace = () => {
  return (
    <Layout footer>
      <ParticleBackground />
      <FontFamily>
        <SiteContainer>
          <div style={styles.root}>
            <Spacer rem={3} />
            <div style={styles.reallyBigHeader}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <div style={styles.player}>
                  <StaticImage
                    src="../images/Personal Space/Player.svg"
                    alt="The Personal Space Player"
                    placeholder="blurred"
                  />
                </div>
                <h1 style={styles.headerText}>Personal Space</h1>
                <div style={styles.enemy}>
                  <StaticImage
                    src="../images/Personal Space/Enemy.svg"
                    alt="The Personal Space Enemy"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <Spacer rem={3} />

              <div style={styles.promoVideo}>
                <div
                  style={{
                    borderRadius: `${BORDER_INNER_RADIUS}rem`,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    title="Personal Space Promo Video"
                    width="270"
                    height="514"
                    src="https://www.youtube.com/embed/sas6KopcWWs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div style={styles.section}>
                <h4 style={{ ...styles.subHeaderText, fontSize: '1.5rem' }}>
                  A Game About Fighting For Your God-Given Right To Privacy
                </h4>
              </div>
            </div>
            <Spacer rem={3} />
            {/* <div style={styles.section}>
              <div style={styles.paper}>
                <h2 style={styles.subHeaderText}>
                  Defend Your Personal Space Today
                </h2>
              </div>
            </div> */}

            <div style={styles.section}>
              <h2 style={styles.subHeaderText}>
                Weave Your Way Through Enemies To Activate Bombs!
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={styles.graphic}>
                  <StaticImage
                    src="../images/Personal Space/Enemies Graphic.png"
                    alt="A bunch of enemies around the player"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <Spacer rem={3} />
            <div style={styles.section}>
              <h2 style={styles.subHeaderText}>
                Hit bombs in the center for a bigger explosion!
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={styles.graphic}>
                  <StaticImage
                    src="../images/Personal Space/Bomb Graphic.png"
                    alt="The Player Activating Bombss"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <Spacer rem={3} />
            <div style={styles.section}>
              <h2 style={styles.subHeaderText}>
                The game ends when an enemy successfully invades your personal
                space
              </h2>
              <div style={{ textAlign: 'center' }}>
                <span
                  role="img"
                  aria-label="Crying Emoji"
                  style={styles.giantEmoji}
                >
                  😭
                </span>
              </div>
            </div>
            <Spacer rem={3} />
            <div style={styles.section}>
              <h2 style={styles.subHeaderText}>
                Experience Fine-Tuned Difficulty
              </h2>
              <Spacer rem={1} />
              <StaticImage
                src="../images/Personal Space/Difficulty Graph.png"
                alt="The Personal Space Player"
                placeholder="blurred"
              />
            </div>

            <div style={styles.section}>
              <div style={styles.paper}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h4>Built with Unity</h4>
                  <Spacer rem={1} />
                  <ViewSourceCodeButton url={links.personalSpace.github} />
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </FontFamily>
    </Layout>
  )
}

const Button = styled.a``

export default PersonalSpace
