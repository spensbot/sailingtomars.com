import React from "react"
import Layout from "../components/layout"
import Spacer from "../components/basic/Spacer"
import SiteContainer from "../components/SiteContainer"

const IndexPage = () => {
  return (
    <Layout seoTitle="Vibratory Apparatus " usesHeader usesFooter>
      <SiteContainer>
        <Spacer />
        <h1>Vibratory Apparatus</h1>
        <p>
          A concept for a material handling device. This project involved an
          incredible variety of disciplines. It involved the creation of a small
          and medium-size prototype and a provisional patent.
        </p>
        <h2>Pitch Presentation</h2>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSFFW2QvwhwGq9gewI5IZ5PnVw3YTssHb630obM17mqiVEq3DskpDnfwsuaTqbyRx84Dxbd2qRLejjD/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="100%"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
        <h2>How It Started</h2>
        <p>
          I used to work for a material handling company called Bulk Handling
          Systems. We integrated many "vibe pans" in our facilities as a means
          of providing and even material spread to a sorting machine. These
          machines are typically expensive, large, and transit an incredible
          amount of vibrational energy into the structure that supports them.
        </p>
        <h3>The First Prototype</h3>
        <p>
          One weekend, I had the idea to for a leaf spring with 2 distict spring
          systems and an isolated mount point that could be manufactured from a
          single sheet of material. I ran some basic calulations and quickly
          3d-printed a small-scale prototype. It was far too flimsy. I iterated
          on the idea 3 more times, and to my surprise, the 4th prototype worked
          perfectly.
        </p>
        <h3>Gaining Faith In The Idea - The Second Prototype</h3>
        <p>
          At this point I believed I could have something revolutionary. I
          designed a medium scale prototype based on my calculations. This
          prototype involved a plasma-cut piece of 3/16" sheet steel and an
          industrial vibe motor. I then wired and programmed an Arduino Nano to
          run the motor and read the system's frequency with an accelerometer.
          It worked perfectly. Then I created a provisional patent so I could
          shop the idea around to companies without the expense of creating a
          full utility patent
        </p>
        <h3>Where The Project Is Now</h3>
        <p>
          I pitch the idea to a prospective manufacturer. They were very
          interested, and assigned me a small team of people to work on the idea
          with. After a few weeks of work, we realized that benefits of the
          design would be offset by manufacturing costs necessary to allow the
          leaf spring to withstand the high-stress cyclic loading required by
          the design.
        </p>
        <p>
          I would like to pursue the idea further, but at this point, the
          provisional patent application has expired, and I don't have the
          resources to make a full-scale prototype for further testing
        </p>
        <h2>Prototype Overview</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YP7oXAfUVPI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>Provisional Patent</h2>
        <iframe
          width="100%"
          height="500"
          src="https://docs.google.com/document/d/e/2PACX-1vRhH84-_G4nXIlEeunBDfDNYUskLabUGiF8cRjNdGsnw1kmMgiJt2RAu1GKJd9D8s1hF0QFx6QUVF_7/pub?embedded=true"
        ></iframe>
        <h2>Design Analysis Spreadsheet</h2>
        <iframe
          width="100%"
          height="500"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTlKIkary6VqYtpBsnjDLq2Qo8k97Th4OoDoL9go3wAEdUkEHS-1o5KWWW0IH7R7Z10iaAcy73J1umA/pubhtml?widget=true&amp;headers=false"
        ></iframe>
        <h2>Prototype Analysis</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zuL6xwOEX44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Spacer />
      </SiteContainer>
    </Layout>
  )
}

export default IndexPage
