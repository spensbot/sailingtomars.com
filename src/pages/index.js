import React from "react"
import Layout from "../components/layout"
import ProjectCategory from "../components/Home/projectCategory"
import AboutTheName from "../components/Home/AboutTheName"
import Intro from "../components/Home/Intro"
import PersonalSpace from "../components/Home/Project Blocks/PersonalSpace"
import SailingToMars from "../components/Home/Project Blocks/SailingToMars"
import FeelWithMe from "../components/Home/Project Blocks/FeelWithMe"
import Crispy from "../components/Home/Project Blocks/Crispy"
import GarageLights from "../components/Home/Project Blocks/GarageLights"
import TheRestOfUs from "../components/Home/Project Blocks/TheRestOfUs"
import ParticleSystemDesigner from "../components/Home/Project Blocks/ParticleSystemDesigner"
import Spacer from "../components/basic/Spacer"
import LushDelay from "../components/Home/Project Blocks/LushDelay"
import Captivate from "../components/Home/Project Blocks/Captivate"
import Djing from "../components/Home/Project Blocks/Djing"
import FdmPrinting from "../components/Home/Project Blocks/FdmPrinting"
import VibePan from "../components/Home/Project Blocks/VibePan"
import Solitaire from "../components/Home/Project Blocks/Solitaire"
import Music from "../components/Home/Project Blocks/Music"

const IndexPage = () => {
  return (
    <Layout seoTitle="Home" usesHeader usesFooter>
      <Intro />
      <ProjectCategory
        name="Software Development"
        description="When you combine today's technology with a fluency in programming, the sky is the limit as to what you can create."
      >
        <Captivate />
        <Spacer />
        <FeelWithMe />
        <Spacer />
        <SailingToMars />
        <Spacer />
        <LushDelay />
        <Spacer />
        <Crispy />
      </ProjectCategory>

      <ProjectCategory
        name="Music"
        description="I have always been obsessed with the feeling of awe and energy that the perfect event creates. No matter what interest I explore, it always ties back to this."
      >
        <Djing />
        <Spacer />
        <Music />
        {/* <Spacer />
        <GarageLights /> */}
      </ProjectCategory>

      <ProjectCategory
        name="Mechanical Engineering"
        description="My foundation in mechanical engineering empowers me to bring my ideas to the real world. I regularly utilize 3D-modeling & printing, electrical system design, structural analysis, and more."
      >
        <VibePan />
        <Spacer />
        <FdmPrinting />
      </ProjectCategory>

      <ProjectCategory
        name="Game Development"
        description="I love game development because of it's variety. When working on a game, I get to design graphics, music, sound, and program structure. Games also have a deeply object-oriented nature that makes them incredibly satisfying to work with."
      >
        <PersonalSpace />
        <Spacer />
        <TheRestOfUs />
        <Spacer />
        <ParticleSystemDesigner />
      </ProjectCategory>

      {/* <ProjectCategory
        name="Web Development"
        description="I love web development because of it's wide range of applications. Javascript is an incredible, unique language, shaped by the asynchronous nature of the web. Using technologies like Node, Electron, and React, I can create cross-platform desktop, mobile, and web apps."
      >
        <FeelWithMe />
        <Spacer />
        <SailingToMars />
        <Spacer />
        <Solitaire />
      </ProjectCategory> */}

      {/* <ProjectCategory name="Music Software" description="I have worked in music production software for about 10 years now. I always had ideas for plugins, and a few years ago I realized I had the skillset to create those plugins.">
        <LushDelay />
        <Spacer />
        <Crispy />
        <Spacer />
        <GarageLights />
      </ProjectCategory> */}

      <AboutTheName />
    </Layout>
  )
}

export default IndexPage
