import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"
import { Typography } from "@material-ui/core"
import projectImage from "../../../images/3d-printing/geralt-sword-exploded.jpg"

export default function FdmPrinting() {
  const ProjectImage = (
    <img
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      src={projectImage}
      alt="The Witcher 3 Geralt of Rivia Sword Model - Exploded"
    />
  )

  return (
    <ProjectBlock
      name="3D Printing"
      Image={ProjectImage}
      url={links.fdmPrinting.home}
      hours="500"
      coreTechnology="Autodesk Fusion / Cura"
      githubUrl={links.crispy.github}
    >
      <Typography component="h4" variant="h5" gutterBottom></Typography>
      <Typography gutterBottom>
        I spent years working in 3D Modeling software. As a result, I can easily
        turn ideas into real 3D objects with my FDM printer.
      </Typography>
    </ProjectBlock>
  )
}
