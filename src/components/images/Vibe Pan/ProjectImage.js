import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "vibe-pan/vibe-pan-title.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ width: "100%", height: "100%", objectFit: "fit" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
  // imgStyle={{objectFit: "cover"}}
}
