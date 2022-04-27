import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/about.module.css"

export default function About({ data }) {
  const headshot = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <GatsbyImage
        image={headshot}
        alt="Headshot"
        className={styles.headshot}
      ></GatsbyImage>
      <div className={styles.header}>
        <h1>About</h1>
        <p>Hello! I'm Paul Brasfield.</p>
        <p>
          I'm a <b>web developer and UX designer</b> based in Birmingham, AL. I
          specialize in building amazing web applications and user interfaces
          using a variety of different technologies and tools. I hold a Bachelor
          of Science in Computer Information Systems from{" "}
          <b>Jacksonville State University</b>.
        </p>
        <p>
          I recently worked as a <b>Front End Developer</b> for Quotum
          Technologies, providing web development work for a number of clients.
          My <b>career goal</b> is to one day build my own company that provides
          digital solutions such as web services and development to businesses
          worldwide.
        </p>
        <p>
          My main tech stack includes:{" "}
          <b>React, Gatsby, Firebase, HTML, CSS, JavaScript, and Vue</b>. I am
          always researching new technologies and love learning and implementing
          new things in my projects! I am also self-taught in{" "}
          <b>Adobe Photoshop</b> and <b>Adobe XD</b> for UI/UX design.
        </p>
        <p>
          Outside of work, I enjoy building gaming PCs, collecting retro video
          games, playing acoustic guitar ("playing" as in knowing a few notes to
          three songs), and watching anime. The typical geek stuff, so to speak.
        </p>
        <br />
        <p>
          If you are interested in taking a look at my previous work, check out
          my{" "}
          <Link to="/portfolio">
            <strong>Portfolio</strong>
          </Link>{" "}
          page which list all of my projects along with their tech stacks.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Headshot {
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
