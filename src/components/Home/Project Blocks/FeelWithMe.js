import React from "react"
import ProjectBlock from "../projectBlock"
import { links } from "../../../data/links"

import ProjectImage from "../../images/Feel With Me/ProjectImage"
import { Typography } from "@material-ui/core"

export default () => {
  const projectImage = <ProjectImage />

  return (
    <ProjectBlock
      name="Feel With Me [Deactivated]"
      Image={projectImage}
      url={links.feelWithMe.home}
      hours="3.5"
      coreTechnology="Node / GraphQL / MongoDB / React"
      githubUrl={links.feelWithMe.github}
    >
      <Typography component="h4" variant="h5" gutterBottom>
        A Social Networking Site That Connects People Based On Mutual Music
        Interest
      </Typography>
      <Typography gutterBottom>
        Definitely one of the coolest things I've made. I originally build this
        project with a REST API and Redux. Towards completion, I began learning
        about GraphQL and Apollo. I decided to rebuild the entire project.
      </Typography>
      <Typography gutterBottom>
        The site's servers were deactivated to cut costs
      </Typography>
    </ProjectBlock>
  )
}
