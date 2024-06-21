import React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/logo.jpg"
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png"

const IndexPage = () => (
  <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
    <Helmet>
      <title>Carte de visite - Cyriaque</title>
      <meta name="description" content="Bienvenue sur ma page de carte de visite en ligne." />
      <link rel="icon" href={logo} />
    </Helmet>
    <img src={logo} alt="Logo" style={{ width: "150px", height: "150px" }} />
    <div style={{ marginTop: "20px" }}>
      <a href="https://www.linkedin.com/in/cyriaque-delaveau-7b3038219/" style={{ margin: "0 10px" }}>
        <img src={linkedinIcon} alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
      </a>
      <a href="https://github.com/cdelaveau" style={{ margin: "0 10px" }}>
        <img src={githubIcon} alt="GitHub" style={{ width: "40px", height: "40px" }} />
      </a>
    </div>
  </main>
)

export default IndexPage
