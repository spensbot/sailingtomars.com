import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Crispy/Project Image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img style={{width: '100%', height: '100%'}} fluid={data.placeholderImage.childImageSharp.fluid} />
  // imgStyle={{objectFit: "cover"}}
}