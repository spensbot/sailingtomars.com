import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"
import CrispyProjectImage from "../../images/Crispy/ProjectImage"
import { Typography } from "@material-ui/core"
import projectImage from "../../../images/djing/DanceFar2.jpg"

export default function Djing() {
  const ProjectImage = (
    <img
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={projectImage}
      alt="A lit dance floor"
    />
  )

  return (
    <ProjectBlock
      name="Wedding DJing"
      Image={ProjectImage}
      url={links.djing.home}
      hours="500"
      coreTechnology="Serato / DMX"
    >
      <Typography component="h4" variant="h5" gutterBottom></Typography>
      <Typography gutterBottom>
        There's nothing like the thrill of DJing a wedding, the most special day
        in a couple's life. The MC is responsible for creating an atmosphere
        that is loving, fun, emotional, and energetic. It requires an incredible
        amount of care and planning. I have been entrusted with this special day
        6 times now. I love the unique challenges that each wedding brings
      </Typography>
    </ProjectBlock>
  )
}
