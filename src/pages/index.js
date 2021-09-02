import React, { useEffect } from "react";
import "@fontsource/atkinson-hyperlegible"
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/layout/NavBar.js"

 
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
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <head>
      <title>Home Page</title>
      </head>
      <NavBar></NavBar>
      <h1><center>hello</center></h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum. Tortor id aliquet lectus proin nibh. Sed id semper risus in. Tincidunt lobortis feugiat vivamus at. Turpis egestas maecenas pharetra convallis posuere. Urna porttitor rhoncus dolor purus non enim praesent. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Erat velit scelerisque in dictum non consectetur a erat nam. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Vel eros donec ac odio tempor orci dapibus ultrices in.
</p>
<p>
Volutpat maecenas volutpat blandit aliquam. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Turpis egestas sed tempus urna et pharetra pharetra. Sit amet dictum sit amet justo donec enim. Lectus urna duis convallis convallis tellus id interdum velit. Morbi leo urna molestie at elementum eu. Bibendum at varius vel pharetra vel turpis nunc. Amet porttitor eget dolor morbi. Turpis massa sed elementum tempus egestas sed. Orci a scelerisque purus semper eget. Turpis cursus in hac habitasse platea dictumst quisque. Sed turpis tincidunt id aliquet risus. Imperdiet massa tincidunt nunc pulvinar sapien et. Diam donec adipiscing tristique risus nec feugiat in fermentum. Praesent elementum facilisis leo vel fringilla est ullamcorper. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Consectetur a erat nam at lectus urna duis convallis convallis. Tempor orci eu lobortis elementum nibh. In fermentum et sollicitudin ac.

Semper auctor neque vitae tempus quam. Tincidunt vitae semper quis lectus nulla at volutpat. Ultrices gravida dictum fusce ut placerat orci nulla. Mi proin sed libero enim sed faucibus turpis in. Pellentesque habitant morbi tristique senectus. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Feugiat vivamus at augue eget arcu dictum. Aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Nam libero justo laoreet sit amet cursus sit amet dictum. Praesent elementum facilisis leo vel fringilla est ullamcorper.

Quisque non tellus orci ac auctor augue mauris augue. Vitae turpis massa sed elementum tempus egestas sed. Turpis cursus in hac habitasse platea dictumst. Vitae tortor condimentum lacinia quis vel eros donec ac odio. A scelerisque purus semper eget duis at tellus at urna. Fames ac turpis egestas sed. Vitae suscipit tellus mauris a diam maecenas sed enim. Et magnis dis parturient montes. Gravida neque convallis a cras semper auctor neque vitae. Faucibus ornare suspendisse sed nisi lacus. Dolor magna eget est lorem. Sed velit dignissim sodales ut eu sem integer vitae. Nisl purus in mollis nunc sed id semper. Sit amet nisl purus in mollis nunc sed id semper. Sagittis eu volutpat odio facilisis mauris sit amet. Sit amet nulla facilisi morbi tempus iaculis. At volutpat diam ut venenatis tellus in. Condimentum id venenatis a condimentum vitae sapien.

Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Consequat semper viverra nam libero justo laoreet sit amet cursus. In arcu cursus euismod quis. Consectetur adipiscing elit pellentesque habitant. Dolor sit amet consectetur adipiscing elit ut. Consectetur libero id faucibus nisl tincidunt eget nullam. Interdum varius sit amet mattis. Auctor elit sed vulputate mi sit amet mauris commodo. Senectus et netus et malesuada. Laoreet id donec ultrices tincidunt arcu non. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Vitae auctor eu augue ut lectus arcu bibendum at varius. Proin sed libero enim sed faucibus turpis in. Aliquam malesuada bibendum arcu vitae elementum curabitur.

Tristique risus nec feugiat in fermentum. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Libero justo laoreet sit amet cursus sit amet dictum. Eu facilisis sed odio morbi quis commodo odio aenean. Augue lacus viverra vitae congue eu consequat. Elementum eu facilisis sed odio morbi quis commodo odio. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tortor id aliquet lectus proin nibh nisl condimentum. Nunc id cursus metus aliquam eleifend mi. Lacinia at quis risus sed vulputate odio. Dolor sit amet consectetur adipiscing elit duis. Tellus orci ac auctor augue mauris augue.

Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Maecenas sed enim ut sem. Sed odio morbi quis commodo. Magna ac placerat vestibulum lectus mauris ultrices eros. Ac placerat vestibulum lectus mauris ultrices. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Interdum consectetur libero id faucibus. Quam vulputate dignissim suspendisse in est. Sem integer vitae justo eget magna fermentum iaculis. Ultricies integer quis auctor elit sed vulputate mi sit amet. Aliquam faucibus purus in massa. Lacus sed turpis tincidunt id aliquet risus.
</p>

<FadeVis>

<p><center>testing</center></p>

</FadeVis>

<SlideIn>

<ul>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ul>

</SlideIn>

    </main>
  )
}

export default IndexPage
