import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/logoOriginal.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const classes = getStyles()

  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(55,55,70)'
  }

  const imageStyle = {
    width: '15rem',
    height: '15rem'
  }

  return <div style={containerStyle}><Img style={imageStyle} fluid={data.placeholderImage.childImageSharp.fluid} /></div>
}
