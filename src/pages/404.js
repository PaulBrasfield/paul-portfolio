import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/404.module.css"

export default function NotFound({ data }) {
  const thalassa = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className={styles.notFound}>
        <h1>This page is folklore!</h1>
        <p>
          Just like an{" "}
          <Link
            to="https://en.wikipedia.org/wiki/Ichthyocentaurs"
            className={styles.ichthyocentaur}
          >
            Ichthyocentaur
          </Link>
          , this page does not exist! Try going a different way.
        </p>

        <figure className={styles.figure}>
          <GatsbyImage
            image={thalassa}
            alt="Banner"
            className={styles.thalassa}
          />
        </figure>
        <figcaption className={styles.judgingYou}>Judging you...</figcaption>
        <figcaption className={styles.attribution}>
          Image: © Following Hadrian /{" "}
          <Link to="https://www.flickr.com/photos/41523983@N08/50735906172/">
            Flickr
          </Link>{" "}
          / CC-BY-SA-2.0
        </figcaption>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Thalassa {
    file(relativePath: { eq: "Thalassa.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
