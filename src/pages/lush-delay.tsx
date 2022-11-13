import React from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
import ScreenshotFull from '../images/Lush Delay/Screenshot.jpg'
import Divider from '../components/basic/Divider'
import { links } from '../data/links'
import ViewSourceCodeButton from '../components/basic/ViewSourceCodeButton'
import styled from 'styled-components'

const FontFamily = styled.div`
  font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
`

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    backgroundColor: '#eee',
    color: '#222',
  },
  body: {},
  bigFont: {
    padding: '5rem 5%',
    fontSize: '10vh',
  },
  subFont: {
    fontSize: '6vh',
    marginBottom: '3rem',
  },
  header: {
    backgroundColor: '#ddd',
    color: '#333',
  },
  headerImage: {
    width: '100%',
    boxShadow: '0px 6px 25px 0px rgba(0,0,0,0.8)',
    WebkitBoxShadow: '0px 6px 25px 0px rgba(0,0,0,0.8)',
    MozBoxShadow: '0px 6px 25px 0px rgba(0,0,0,0.8)',
  },
  features: {
    textAlign: 'center',
    padding: '5rem 0 2rem 0',
  },
}

const Button = styled.a``

const Crispy = () => {
  return (
    <Layout footer>
      <FontFamily>
        <div style={styles.root}>
          <div style={styles.header}>
            <h1 style={styles.bigFont}>
              Make It <b>Lush</b>
            </h1>
            <SiteContainer>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'top',
                    justifyContent: 'left',
                    margin: '0 -3%',
                  }}
                >
                  <div
                    style={{
                      flexGrow: '1',
                      width: '40%',
                      minWidth: '15rem',
                      margin: '0 3% 3rem 3%',
                    }}
                  >
                    <img
                      style={styles.headerImage}
                      src={ScreenshotFull}
                      alt="Lush Delay Screenshot"
                    />
                  </div>
                  <div
                    style={{
                      flexGrow: '1',
                      width: '40%',
                      minWidth: '15rem',
                      margin: '0 3%',
                      marginBottom: '3rem',
                    }}
                  >
                    <h2 style={styles.subFont}>
                      A Delay Plugin with lots of Versatility
                    </h2>
                    <h4>Create Timed Delays, Slap Delays, Doubling and More</h4>
                    <h4>Coming soon in VST3 and AU formats</h4>
                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                      <Button href={links.crispy.downloads.mac}>Mac</Button>
                      <Spacer vertical rem={1} />
                      <Button href={links.crispy.downloads.windows}>
                        Windows
                      </Button>
                    </div>
                    <Spacer rem={1} />
                    <ViewSourceCodeButton url={links.lushDelay.github} />
                  </div>
                </div>
              </div>
            </SiteContainer>
          </div>

          <SiteContainer>
            <h2 style={styles.features}>Features Coming Soon!!!</h2>
            <Divider color="#222" />
          </SiteContainer>
        </div>
      </FontFamily>
    </Layout>
  )
}

export default Crispy
