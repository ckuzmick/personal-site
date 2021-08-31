import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = () => (
  <div>
    <ul 
        style={{
            listStyleType: "none",
            margin: "-1.5em",
            padding: "0",
            display: "inline"
        }}
    >
        <li style={{display: "inline", padding: "1em", fontFamily: "Crimson Text", fontSize: "25px", textDecoration: "none"}}><AniLink bg="green" to="/" style= {{textDecoration: "none"}} activeStyle={{color: "1122ff"}} >Home</AniLink></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Crimson Text", fontSize: "25px", textDecoration: "none"}}><AniLink bg="#001122" to="/laws-and-rules/" style= {{textDecoration: "none"}} activeStyle={{color: "1122ff"}} >Laws & Rules</AniLink></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Crimson Text", fontSize: "25px", textDecoration: "none"}}><AniLink bg="blue" to="/about/" style= {{textDecoration: "none"}} activeStyle={{color: "1122ff"}} >About Us</AniLink></li>
        <li style={{display: "inline", padding: "1em", fontFamily: "Crimson Text", fontSize: "25px", textDecoration: "none"}}><AniLink bg="blue" to="/gallery/" style= {{textDecoration: "none"}} activeStyle={{color: "1122ff"}} >Gallery</AniLink></li>
    </ul>
  </div>
)

export default NavBar
