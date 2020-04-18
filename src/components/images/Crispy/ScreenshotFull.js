import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Crispy/BorderLess.png" }) {
        childImageSharp {
          fluid(maxWidth: 808, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 808, height: 1558) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img style={{width: '100%', height: '100%'}} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image