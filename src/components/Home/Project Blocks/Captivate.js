import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"
import { Typography } from "@material-ui/core"
import projectImage from "../../../images/Captivate/icon.svg"

export default function Captivate() {
  const ProjectImage = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <img
        style={{ width: "15rem", height: "15rem" }}
        src={projectImage}
        alt="A lit dance floor"
      />
    </div>
  )

  return (
    <ProjectBlock
      name="Captivate"
      Image={ProjectImage}
      url={links.captivate.home}
      hours="1000"
      coreTechnology="Typescript / C++ / React / Electron / Serial Ports"
      githubUrl={links.captivate.github}
    >
      <Typography component="h4" variant="h5" gutterBottom>
        Lighting & Visual Synth
      </Typography>
      <Typography gutterBottom>
        By far my most ambitious project to date. This cross-platform desktop
        app generates lighting and visuals that synchronize to music. Designed
        to make professional-quality lighting accessible to musicians with
        minimal effort. Captivate ran the lights at several of my DJ gigs with
        breathtaking results.
      </Typography>
    </ProjectBlock>
  )
}
