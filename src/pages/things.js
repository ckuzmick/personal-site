import React, { useEffect, useState, isOpen, setOpen } from "react";
import "@fontsource/atkinson-hyperlegible"
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/layout/NavBar.js"
import { lineHeight, textAlign } from "styled-system";
import "@fontsource/source-code-pro";
import "@fontsource/crimson-text";
import TestArticle from "../components/TestArticle.js"
import "../components/masonry.css"
import Masonry from 'react-masonry-css'
import { Turn as Hamburger } from 'hamburger-react'
import Menu from "../components/layout/Menu.js";
 
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
      transition={{ duration: 1, type: "spring" }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 200, opacity: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

//markup
const ThingsPage = () => {
  return (
    <main style={pageStyles}>
      <head>
      <title>Home Page</title>
      </head>
      <Menu/>
      <br/>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          <SlideIn><div class="item">
            <a class="title" href="/things/obsidian/">Minecraft</a>

            <br/>

            <p class="desc">
              I've been playing Minecraft on-off for over 6 years at this point, but it was in July 2020 when I got Java Edition for the first time is when i started playing again. 
            </p>
          </div></SlideIn>
          <SlideIn><div class="item">
            <a class="title" href="/things/">"Politics"</a>

            <br/>

            <p class="desc">
              In June 2021, Conrad ran for Treasurer of his student council under the slogan "make the budget thick agian" He became one of the most powerful politicians in the entire world after that. 
            </p>
          </div></SlideIn>
          <SlideIn><div class="item">
            <a class="title" href="/things/obsidian/">Coding For The Web</a>

            <br/>

            <p class="desc">
              Mostly in Gatsby, like what I built this site in, but I've done some things in plain html, like my first ever site(it's not very good, you can find it <a href="https://ckuzmick.github.io/cgkdesign/">here</a>) Just looked back on it, it's really bad
            </p>
          </div></SlideIn>
          <SlideIn><div class="item">
            <a class="title" href="/things/obsidian/">Obsidian For Notes</a>

            <br/>

            <p class="desc">
              Obsidian is a locally-based, plain text mardown editing service used by at least 3 people worldwide. Out of the 1 markdown editor I've used regularly, this one is definently the best. Joking aside however, Obsidian is one of the best free markdown editors I've seen.
            </p>
          </div></SlideIn>
          <SlideIn><div class="item">
            <a class="title" href="/things/obsidian/">Video Editing</a>

            <br/>

            <p class="desc">
              I started doing various things with video editing in October 2020, but before that
            </p>
          </div></SlideIn>       
        </Masonry>        
    </main>
  )
}

export default ThingsPage
