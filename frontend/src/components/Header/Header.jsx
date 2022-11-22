import React from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../../Images/logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar 
        navColor1="#9ccddc"
        navColor2="#062c43"
        burgerColor="#ced7e0"
        burgerColorHover="#ced7e0"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        logoWidth="250px"
        logoHoverColor="white"
        logo={logo}
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link1Color="#ced7e0"
        link1ColorHover="white"
        link1Size="1.5rem"
        link1Padding="3vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        ProfileIconColor="#ced7e0"
        ProfileIconColorHover="white"
    />
  )
}

export default Header
