import React, { ReactNode } from 'react'
import Layout from '../components/Layout'
import Spacer from '../components/basic/Spacer'
import SiteContainer from '../components/SiteContainer'
// IMAGE IMPORTS
import { StaticImage } from 'gatsby-plugin-image'

function Image({ children, rem }: { children: React.ReactNode; rem?: number }) {
  return (
    <div
      style={{
        width: rem ? `${rem}rem` : undefined,
        maxWidth: '100%',
        margin: '1rem',
      }}
    >
      {children}
    </div>
  )
}

function Group({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -1rem 0 -1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default function FdmPrinting() {
  return (
    <Layout header footer>
      <SiteContainer>
        <Spacer />
        <h1>3D Printing</h1>
        <p>
          I love the fast-paced prototyping and iteration allowed by a 3D
          printer. My background in 3D-modeling and mechanical analysis allow me
          to go from concept to product as efficiently as possible.
        </p>
        <p>
          This page showcases a fraction of what I have designed and printed
        </p>
        <Spacer rem={3} />
        <h2>The Witcher Cosplay</h2>
        <p>
          My girlfriend and I once cosplayed Geralt and Ciri from the Witcher 3.
          I designed and printed 1:1 models of Geralt and Ciri's swords as
          props. They turned out great! The blades are humorously short because
          they had to be sheathed during comic-con.
        </p>
        <Spacer rem={2} />
        <h3>Ciri's Sword</h3>
        <Group>
          <Image>
            <StaticImage
              alt="Exploded model of Ciri's sword from the Witcher 3"
              src="../images/3d-printing/ciri-sword-exploded.png"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
          <Image>
            <StaticImage
              alt="Ciri's sword from the Witcher 3"
              src="../images/3d-printing/ciri-sword.jpg"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
        </Group>
        <Spacer rem={1} />
        <h3>Geralt's Sword</h3>
        <Group>
          <Image>
            <StaticImage
              src="../images/3d-printing/geralt-sword-exploded.png"
              alt="Exploded model of Geralts's sword from the Witcher 3"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
          <Image>
            <StaticImage
              src="../images/3d-printing/geralt-sword.jpg"
              alt="Geralt's sword from the Witcher 3"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
        </Group>
        <Spacer rem={3} />
        <h2>Ping Pong Tournament Trophy</h2>
        <p>
          I started an annual Ping Pong tournament at my current company. I
          designed this trophy to award to each year's victor.
        </p>
        <Spacer rem={2} />
        <Group>
          <Image rem={40}>
            <StaticImage
              src="../images/3d-printing/ping-pong-trophy.png"
              alt="3D Model of a Ping Pong Trophy"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
        </Group>
        <Spacer rem={3} />
        <h2>Dropout Bear</h2>
        <p>
          My brother has always been a fan of Kanye's music. I designed and
          printed this rendition of "Dropout Bear" from the cover of the album
          "Graduation" for Christmas one year
        </p>
        <Spacer rem={2} />
        <Group>
          <Image rem={25}>
            <StaticImage
              src="../images/3d-printing/kanye-bear-model.png"
              alt="3D Model of Kanye West's Dropout Bear"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
          <Image rem={20}>
            <StaticImage
              src="../images/3d-printing/kanye-bear.jpg"
              alt="Kanye West's Dropout Bear model"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
        </Group>
        <Spacer rem={3} />
        <h2>Brackets</h2>
        <p>
          I have designed and printed dozens of brackets over the years. These
          are used to install light fixtures, install a slide-out keyboard under
          my standing desk, hang things, and much more.
        </p>
        <Group>
          <Image rem={25}>
            <StaticImage
              src="../images/3d-printing/light-fixture-bracket.png"
              alt="A bracket for installing a lighting fixture"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
          <Image rem={25}>
            <StaticImage
              src="../images/3d-printing/piano-slider-bracket.png"
              alt="A bracket for installing a piano under a desk using drawer slides"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
          <Image>
            <StaticImage
              src="../images/3d-printing/longboard-hanger.jpg"
              alt="A bracket for hanging a Longboard"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blurred"
            />
          </Image>
        </Group>
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
