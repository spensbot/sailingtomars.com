import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"
import { Typography } from "@material-ui/core"
import WaterImage from "../../../images/music/water.png"
import MarsImage from "../../../images/music/mars.png"

export default function Music() {
  const ProjectImage = (
    <div
      style={{
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          top: "75%",
          width: "150%",
          left: "-25%",
          bottom: 0,
          objectFit: "contain",
          position: "absolute",
        }}
        src={WaterImage}
        alt="Water Beneath Mars"
      />
      <img
        style={{
          left: "30%",
          top: "25%",
          width: "40%",
          height: "40%",
          objectFit: "contain",
          position: "absolute",
        }}
        src={MarsImage}
        alt="Mars"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Sailing To Mars"
      Image={ProjectImage}
      url={links.music}
      hours="500"
      coreTechnology="Logic Pro / Ableton / Serato / DMX"
    >
      <Typography component="h4" variant="h5" gutterBottom>
        My Personal Music Project
      </Typography>
      <Typography gutterBottom>
        My journey with music progressed very naturally. I never forced myself
        to practice. It's one of those rare passions that perpetuates itself. I
        released a number of songs in various genres from singer-songwriter to
        indie pop.
      </Typography>
    </ProjectBlock>
  )
}
