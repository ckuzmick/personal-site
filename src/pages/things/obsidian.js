import React, { useEffect } from "react";
import "@fontsource/atkinson-hyperlegible"
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../../components/layout/NavBar"
import "../../components/thingspages.css"
import "@fontsource/source-code-pro";
import "@fontsource/crimson-text";
import "@fontsource/zilla-slab"
import "@fontsource/share-tech-mono"

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

// markup
const ObsidanPage = () => {
    return (
      <main style={pageStyles}>
        <head>
        <title>Obsidian</title>
        </head>
        <NavBar></NavBar>
        <h1 class="page-title">Obsidian</h1>
        <p class="page-text">
            Obsidian is a relatively new entrant in the increasingly crowded Markdown knowledge base and note-taking market. Obsidian’s excellent Markdown support and its simple, straightforward design makes it a standout application in the category. Desktop and mobile applications are available.
        </p>
        <p style={{
            marginTop: "-20px",
            fontWeight: "600"
        }} >text from <a href="https://www.markdownguide.org/tools/obsidian/">mardownguide.org</a></p>
        
        <div class="codeblock">
            .<br/>
            |- Daily Notes<br/>
            |&nbsp;&nbsp;|- Different Months<br/>
            |- Work Things<br/>
            |- Personal Things<br/>
        </div>
  
      </main>
    )
  }
  
  export default ObsidanPage