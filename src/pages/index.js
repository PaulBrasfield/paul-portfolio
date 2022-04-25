import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 className>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer & UX Designed based in Birmingham, AL</p>
          <Link className={styles.btn} to="/projects">
            Learn More
          </Link>
        </div>
        <img
          src="banner.png"
          alt="Site banner"
          style={{ maxWidth: "100%" }}
        ></img>
      </section>
    </Layout>
  )
}
