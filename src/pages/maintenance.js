import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.css"

export default function NotFound({ data }) {
  return (
    <Layout>
      <div className={styles.notFound}>
        <h1>This page is folklore!</h1>
      </div>
    </Layout>
  )
}
