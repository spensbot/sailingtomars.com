import React from 'react'
import Layout from '../components/Layout'
// import ParticleBackground from '../components/Personal Space/particleBackground'
import { links } from '../data/links'
import SiteContainer from '../components/SiteContainer'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Spacer from '../components/basic/Spacer'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'

const ParticleBackground = styled.div`
  background-color: #444;
`

const FontFamily = styled.div`
  font-family: 'Amatic SC', 'Helvetica', 'Arial', sans-serif;
  background-color: rgb(70, 70, 100);
  color: rgb(240, 240, 240);
`

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    color: '#fff',
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
    padding: '1rem .5rem',
    backgroundColor: '#111111',
    border: '.2rem solid silver',
    borderRadius: '1.5rem',
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
      <FontFamily>
        <SiteContainer>
          <div style={styles.root}>
            <ParticleBackground />
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
                  />
                </div>
                <h1 style={styles.headerText}>Personal Space</h1>
                <div style={styles.enemy}>
                  <StaticImage
                    src="../images/Personal Space/Enemy.svg"
                    alt="The Personal Space Enemy"
                  />
                </div>
              </div>
              <Spacer rem={3} />

              <div style={styles.promoVideo}>
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
              <StaticImage
                src="../images/Personal Space/Difficulty Graph.png"
                alt="The Personal Space Player"
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
                  <h4>Personal Space is Built with Unity</h4>
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
