import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <div className={styles.header}>
        <h1>Contact</h1>
        <p>
          If you would like to request more info, inquire about services, or
          have any questions, please fill out the form below and I will get back
          to you as soon as possible!
        </p>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.form}>
          <form
            name="contact"
            method="post"
            action="https://getform.io/f/36b6d5b0-520e-4bba-bfc7-9662066f2ef9"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <aside className={styles.required}>
              <span>*</span>Required
            </aside>
            <label>
              <span>*</span>Name:
              <input name="name" placeholder="John Smith" required></input>
            </label>
            <label>
              <span>*</span>Email:
              <input
                name="email"
                type="email"
                placeholder="jsmith@email.com"
                required
              ></input>
            </label>
            <label>
              Company:
              <input name="company" placeholder="Company"></input>
            </label>
            <label>
              <span>*</span>Message:
              <textarea
                name="message"
                placeholder="Enter your message here"
                className={styles.msgInput}
                required
              ></textarea>
            </label>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
