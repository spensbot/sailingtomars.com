import React from "react"
import Layout from "../components/layout"
import ProjectCategory from '../components/Home/projectCategory'
import AboutTheName from '../components/Home/AboutTheName'
import Intro from '../components/Home/Intro'
import PersonalSpace from '../components/Home/Project Blocks/PersonalSpace'
import SailingToMars from '../components/Home/Project Blocks/SailingToMars'
import FeelWithMe from "../components/Home/Project Blocks/FeelWithMe"
import Crispy from '../components/Home/Project Blocks/Crispy'
import GarageLights from '../components/Home/Project Blocks/GarageLights'
import TheRestOfUs from '../components/Home/Project Blocks/TheRestOfUs'
import ParticleSystemDesigner from '../components/Home/Project Blocks/ParticleSystemDesigner'
import Spacer from '../components/basic/Spacer'
import LushDelay from "../components/Home/Project Blocks/LushDelay"

const IndexPage = () => {

  return (
    <Layout seoTitle="Home" usesHeader usesFooter>

      <Intro />

      <ProjectCategory name="Web Development" description="I love web development because of it's wide range of applications. Javascript is an incredible, unique language, shaped by the asynchronous nature of the web. Using technologies like Node, Electron, and React, I can create cross-platform desktop, mobile, and web apps.">
        <FeelWithMe />
        <Spacer />
        <SailingToMars />

      </ProjectCategory>

      <ProjectCategory name="Game Development" description="I love game development because of it's variety. When working on a game, I get to design graphics, music, sound, and program structure. Games also have a deeply object-oriented nature that makes them incredibly satisfying to work with.">
        <PersonalSpace />
        <Spacer />
        <TheRestOfUs />
        <Spacer />
        <ParticleSystemDesigner />
      </ProjectCategory>

      <ProjectCategory name="Music Software" description="I have worked in music production software for about 10 years now. I always had ideas for plugins, and a few years ago I realized I had the skillset to create those plugins.">
        <LushDelay />
        <Spacer />
        <Crispy />
        <Spacer />
        <GarageLights />
      </ProjectCategory>

      <AboutTheName />

    </Layout>
  )
}

export default IndexPage
