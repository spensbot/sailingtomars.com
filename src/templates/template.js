import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SiteContainer from '../components/SiteContainer'
import Spacer from "../components/basic/Spacer"
import './styles.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout seoTitle="Home" usesHeader usesFooter>
      <SiteContainer>
      <Spacer rem={2}/>
      <div >
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Spacer rem={5}/>
      </SiteContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
