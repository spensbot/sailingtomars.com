import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import Spacer from "../components/basic/Spacer"
import SiteContainer from "../components/SiteContainer"
// IMAGE IMPORTS
import imgCiriBelt from "../images/3d-printing/ciri-belt.jpg"
import imgCiriSwordExploded from "../images/3d-printing/ciri-sword-exploded.jpg"
import imgCiriSword from "../images/3d-printing/ciri-sword.jpg"
import imgGeraltSwordExploded from "../images/3d-printing/geralt-sword-exploded.jpg"
import imgGeralSword from "../images/3d-printing/geralt-sword.jpg"
import imgKanyeBearModel from "../images/3d-printing/kanye-bear-model.jpg"
import imgKanyeBear from "../images/3d-printing/kanye-bear.jpg"
import imgLightFixtureBracket from "../images/3d-printing/light-fixture-bracket.jpg"
import imgLongboardHanger from "../images/3d-printing/longboard-hanger.jpg"
import imgPianoSliderBracket from "../images/3d-printing/piano-slider-bracket.jpg"
import imgPingPongTrophy from "../images/3d-printing/ping-pong-trophy.jpg"

function Image(src) {
  return (
    <div style={{ width: "10rem" }}>
      <img src={src} width="100%" height="auto" />
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
        {Image(imgCiriBelt)}
        {Image(imgCiriSword)}
        {Image(imgCiriSwordExploded)}
        {Image(imgGeralSword)}
        {Image(imgGeraltSwordExploded)}
        {Image(imgKanyeBear)}
        {Image(imgKanyeBearModel)}
        {Image(imgLightFixtureBracket)}
        {Image(imgLongboardHanger)}
        {Image(imgPianoSliderBracket)}
        {Image(imgPingPongTrophy)}
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}
