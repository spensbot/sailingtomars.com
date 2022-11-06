import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import Spacer from "../components/basic/Spacer"
import SiteContainer from "../components/SiteContainer"
// IMAGE IMPORTS
import imgCiriBelt from "../images/3d-printing/ciri-belt.jpg"
import imgCiriSwordExploded from "../images/3d-printing/ciri-sword-exploded.png"
import imgCiriSword from "../images/3d-printing/ciri-sword.jpg"
import imgGeraltSwordExploded from "../images/3d-printing/geralt-sword-exploded.png"
import imgGeralSword from "../images/3d-printing/geralt-sword.jpg"
import imgKanyeBearModel from "../images/3d-printing/kanye-bear-model.png"
import imgKanyeBear from "../images/3d-printing/kanye-bear.jpg"
import imgLightFixtureBracket from "../images/3d-printing/light-fixture-bracket.png"
import imgLongboardHanger from "../images/3d-printing/longboard-hanger.jpg"
import imgPianoSliderBracket from "../images/3d-printing/piano-slider-bracket.png"
import imgPingPongTrophy from "../images/3d-printing/ping-pong-trophy.png"

function Image(src, alt, rem) {
  return (
    <div
      style={{
        width: rem ? `${rem}rem` : undefined,
        maxWidth: "100%",
        margin: "1rem",
      }}
    >
      <img alt={alt} src={src} width="100%" height="auto" />
    </div>
  )
}

function Group({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -1rem 0 -1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}

export default function FdmPrinting() {
  return (
    <Layout seoTitle="Fdm Printing" usesHeader usesFooter>
      <SiteContainer>
        <Spacer />
        <Typography variant="h3" component="h1" gutterBottom>
          3D Printing
        </Typography>
        <Typography variant="p" gutterBottom>
          I love the fast-paced prototyping and iteration allowed by a 3D
          printer. My background in 3D-modeling and mechanical analysis allow me
          to go from concept to product as efficiently as possible.
        </Typography>
        <br />
        <br />
        <Typography variant="p" gutterBottom>
          This page showcases a fraction of what I have designed and printed
        </Typography>
        <Spacer rem={3} />
        <Typography variant="h4" component="h2" gutterBottom>
          The Witcher Cosplay
        </Typography>
        <Typography>
          My girlfriend and I once cosplayed Geralt and Ciri from the Witcher 3.
          I designed and printed 1:1 models of Geralt and Ciri's swords as
          props. They turned out great! The blades are humorously short because
          they had to be sheathed during comic-con.
        </Typography>
        <Spacer rem={2} />
        <Typography variant="h5" component="h3">
          Ciri's Sword
        </Typography>
        {/* {Image(imgCiriBelt)} */}
        <Group>
          {Image(
            imgCiriSwordExploded,
            "Exploded model of Ciri's sword from the Witcher 3"
          )}
          {Image(imgCiriSword, "Ciri's sword from the Witcher 3", 30)}
        </Group>
        <Spacer rem={1} />
        <Typography variant="h5" component="h3">
          Geralt's Sword
        </Typography>
        <Group>
          {Image(
            imgGeraltSwordExploded,
            "Exploded model of Geralts's sword from the Witcher 3"
          )}
          {Image(imgGeralSword, "Geralt's sword from the Witcher 3", 30)}
        </Group>
        <Spacer rem={3} />
        <Typography variant="h4" component="h2" gutterBottom>
          Ping Pong Tournament Trophy
        </Typography>
        <Typography>
          I started an annual Ping Pong tournament at my current company. I
          designed this trophy to award to each year's victor.
        </Typography>
        <Spacer rem={2} />
        <Group>
          {Image(imgPingPongTrophy, "3D Model of a Ping Pong Trophy", 40)}
        </Group>
        <Spacer rem={3} />
        <Typography variant="h4" component="h2" gutterBottom>
          Dropout Bear
        </Typography>
        <Typography>
          My brother has always been a fan of Kanye's music. I designed and
          printed this rendition of "Dropout Bear" from the cover of the album
          "Graduation" for Christmas one year
        </Typography>
        <Spacer rem={2} />
        <Group>
          {Image(
            imgKanyeBearModel,
            "3D Model of Kanye West's Dropout Bear",
            25
          )}
          {Image(imgKanyeBear, "Kanye West's Dropout Bear model", 20)}
        </Group>
        <Spacer rem={3} />
        <Typography variant="h4" component="h2" gutterBottom>
          Brackets
        </Typography>
        <Typography>
          I have designed and printed dozens of brackets over the years. These
          are used to install light fixtures, install a slide-out keyboard under
          my standing desk, hang things, and much more.
        </Typography>
        <Group>
          {Image(
            imgLightFixtureBracket,
            "A bracket for installing a lighting fixture",
            25
          )}
          {Image(
            imgPianoSliderBracket,
            "A bracket for installing a piano under a desk using drawer slides",
            25
          )}
          {Image(imgLongboardHanger, "A bracket for hanging a Longboard")}
        </Group>
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
