import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"
import { Typography } from "@material-ui/core"
import projectImage2 from "../../../images/vibe-pan/vibe-pan-title.jpg"

export default function VibePan() {
  const projectImage = (
    <img
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      src={projectImage2}
      alt="Vibe Pan Concept Design Overview"
    />
  )

  return (
    <ProjectBlock
      name="Vibratory Pan Feeder"
      Image={projectImage}
      url={links.vibePan.home}
      hours="300"
      coreTechnology="Harmonic Analysis / 3D Printing / Laser Cutting / Arduino"
    >
      <Typography component="h4" variant="h5" gutterBottom>
        A revolutionary concept for a low-cost material handling device
      </Typography>
      <Typography gutterBottom>
        This project involved making several prototypes of various scale, and
        filing a provisional patent before shopping the idea to prospective
        manufactuers
      </Typography>
    </ProjectBlock>
  )
}
