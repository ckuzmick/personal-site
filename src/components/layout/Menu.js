import React from "react";
import { css } from "@emotion/css";
import "@fontsource/montserrat/700.css";

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

const menuBtn = css`
  position: absolute;
  z-index: 3;
  right: 38px;
  top: 38px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
`;

const btnLine = css`
  width: 28px;
  height: 2px;
  margin: 0 0 7.33px 0;
  background-color: #141414;
  ${easeSlow};
  &.closer {
    background-color: #141414;  
    &:nth-child(1) {
      transform: rotate(45deg) translate(12.33px, 0px);
      width: 28px;
    }
    &:nth-child(2) {
      transform: rotate(-45deg) translateX(-100px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(12.33px, 0px);
      width: 28px;
    }
  }
`;

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100vh;
  width: 40vw;
  transform: translateX(100%);
  transition: all 350ms ease-in-out;
  &.show {
    background-color: #d4d4d4;
    transform: translateX(0%); 
  }
  nav {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 50px;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 35px;
    a {
      height: 50px;
      text-decoration: none;
      color: #141414;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      &:hover {
        color: #8334eb;
      } 
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

class Menu extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () =>
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

  render() {
    const { isMenuOpen } = this.state;
    return (
      <React.Fragment>
        <div
          className={`${menuBtn} ${isMenuOpen ? "closer" : null}`}
          onClick={this.toggleMenu}
        >
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        </div>
        <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
          <nav>
            <a href="/">Home</a>
            <a href="/about/">About</a>
            <a href="/things/">Things</a>
            <a style={{ marginTop:"50px" }}href="https://github.com/ckuzmick">GitHub</a>

          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;