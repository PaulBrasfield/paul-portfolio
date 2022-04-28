import React from "react"
import Navbar from "./Navbar"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <div className="footer">
        <div className="socials">
          <a
            href="https://twitter.com/PaulBrasfield"
            alt="Twitter"
            title="Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://linkedin.com/in/paul-brasfield"
            alt="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://GitHub.com/PaulBrasfield"
            alt="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <p>Copyright 2022 Paul Brasfield. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
