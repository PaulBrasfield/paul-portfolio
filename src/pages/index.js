import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const banner = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <Helmet>
        <title>Paul Brasfield's Portfolio</title>
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2 className>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer & UX Designed based in Birmingham, AL</p>
          <Link className={styles.btn} to="/projects">
            Learn More
          </Link>
        </div>
        <a
          className={styles.bannerLink}
          href="https://www.vecteezy.com/free-vector/web-development"
        >
          <GatsbyImage image={banner} alt="Banner" className={styles.banner} />
          Web Development Vectors by Vecteezy
        </a>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
