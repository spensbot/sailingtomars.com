import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/layout"
import ProjectCategory from '../components/Home/projectCategory'
import AboutTheName from '../components/Home/AboutTheName'
import Intro from '../components/Home/Intro'
import PersonalSpace from '../components/Project Blocks/PersonalSpace'
import SailingToMars from '../components/Project Blocks/SailingToMars'

const useStyles = makeStyles( theme => ({
  root: {
    
  },
  arrow: {
    width: '7rem',
    height: '7rem'
  }
}));

const IndexPage = () => {

  const classes = useStyles();

  return (
    <Layout seoTitle="Home" usesHeader usesFooter>

      <Intro />

      <ProjectCategory name="Web Development" description="I love web development because of it's wide range of applications. Javascript is an incredible, unique language, shaped by the asynchronous nature of the web. Using technologies like Node, Electron, and React, I can create cross-platform desktop, mobile, and web apps.">
        <SailingToMars />
      </ProjectCategory>

      <ProjectCategory name="Game Development" description="I love game development because of it's variety. When working on a game, I get to design graphics, music, sound, and program structure. Games also have a deeply object-oriented nature that makes them incredibly satisfying to work with.">
        <PersonalSpace />
      </ProjectCategory>

      <ProjectCategory name="Music Software" description="I have worked in music production software for about 10 years now. I always had ideas for plugins, and a few years ago I realized I had the skillset to create those plugins.">
      </ProjectCategory>

      <AboutTheName />

    </Layout>
  )
}

export default IndexPage
