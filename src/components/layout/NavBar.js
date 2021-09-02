import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "@fontsource/atkinson-hyperlegible"
import { motion, useAnimation } from "framer-motion";

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
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}><a href="https://github.com/ckuzmick" style={{textDecoration: "none"}}>GitHub</a></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}><a href="/about/" style={{textDecoration: "none"}}>About</a></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}><a href="/" style={{textDecoration: "none"}}>Home</a></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Atkinson Hyperlegible", fontSize: "25px", textDecoration: "none"}}><a href="/things/" style={{textDecoration: "none"}}>Things</a></li>
    </ul>
    </center>
    <br/>
  </div>
)

export default NavBar
