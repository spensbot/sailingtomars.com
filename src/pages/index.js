import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>A Passionate, Creative, and Extroverted Engineer</h1>
    <p>I am happiest when creating something I care about. I'm currently exploring all my interests, in hopes that it will lead me to a career where I have the most to give.</p>

    <p>In July 2019, I quit my job as a Mechanical engineer to pursue a career in software design.</p>

    <p>This site showcases a few of the skills and projects I developed through personal interest.</p>

    <p>Thanks for visiting,</p>

    <p>Spenser Saling</p>
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
