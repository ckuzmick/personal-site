import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "@fontsource/atkinson-hyperlegible"

const NavBar = () => (
  <div>
    <center>
    <ul 
        style={{
            listStyleType: "none",
            margin: "-1.5em",
            padding: "0",
            display: "inline",
            marginBottom: "500px"
        }}
    >
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}><a href="https://github.com/ckuzmick">GitHub</a></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}/>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}/>
    </ul>
    </center>
  </div>
)

export default NavBar
