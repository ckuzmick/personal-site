import React, { useEffect } from "react";
import "@fontsource/atkinson-hyperlegible"
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/layout/NavBar.js"
import "@fontsource/montserrat/900.css"
import Menu from "../components/layout/Menu.js";

//styles

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
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, scale: 1, position: 100 },
          hidden: { opacity: 0, scale: 1, position: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

//markup
const AboutPage = () => (
  <main style={pageStyles}>
    <Menu/>
    <center>

    <div style={{
      marginBottom: "min(max(1000px), 100vh)"
    }}>
      <h3 style={{
        fontSize:"25px",
        marginBottom:"0px"
      }}>About the Author</h3>

      <img src="/arrow.gif" style={{
       width: "50px"
      }}></img>
    </div>
   
    </center>

    <h1 style={{
        fontFamily:"Montserrat",
        fontSize:"min(max(5em), 10vw)"
    }}>Conrad is a</h1>
    <FadeVis>
        <h1 
            style={{
                fontFamily:"Montserrat",
                fontSize:"min(max(5em), 10vw)",
                color:"#8334eb",
                lineHeight:"40%"
        }}>person.</h1>
    </FadeVis>

    <br/>

    <h1 style={{
        fontFamily:"Montserrat",
        fontSize:"min(max(5em), 10vw)"
    }}>Conrad is a</h1>
    <FadeVis>
        <h1 
            style={{
                fontFamily:"Montserrat",
                fontSize:"min(max(5em), 10vw)",
                color:"#8334eb",
                lineHeight:"40%"
        }}>computerer.</h1>
    </FadeVis>

    <br/>

    <h1 style={{
        fontFamily:"Montserrat",
        fontSize:"min(max(5em), 10vw)"
    }}>Conrad is a</h1>
    <FadeVis>
        <h1 
        
            style={{
                fontFamily:"Montserrat",
                fontSize:"min(max(5em), 10vw)",
                color:"#8334eb",
                lineHeight:"40%"
        }}>politician.</h1>
    </FadeVis>


    
      
    
  </main>
)

export default AboutPage