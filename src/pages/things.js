import React, { useEffect } from "react";
import "@fontsource/atkinson-hyperlegible"
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/layout/NavBar.js"
import "../components/layout.css"
import { lineHeight, textAlign } from "styled-system";

 
// styles
const pageStyles = {
  color: "#232129",
  padding: "15%",
  fontFamily: "Atkinson Hyperlegible",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 30,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 70,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

function FadeVis({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 }
      }}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { position: 200 },
        hidden: { position: -200  }
      }}
    >
      {children}
    </motion.div>
  );
}


// markup
const ThingsPage = () => {
  return (
    <main style={pageStyles}>
      <head>
      <title>Home Page</title>
      </head>
      <NavBar></NavBar>

        <div class="container">
            <div class="item">
                <h1 style={{
                    margin: "30px",
                    lineHeight: "1.5em",
                    textAlign: "center"
                }}>Obsidian</h1>

            </div>
            <div class="divider"></div>
            <div class="item">
                thing
            </div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>

    </main>
  )
}

export default ThingsPage
