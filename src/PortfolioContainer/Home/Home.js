import React from "react";
import Profile from "./Profile/Profile";
import './Home.css'

import AboutMe from "../AboutMe/AboutMe";
import ContractMe from "../ContractMe/ContractMe";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import FooterHome from "./Footer/FooterHome";
import Header from "../Home/Header/Header"


export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="home-container" id="home">
      <Profile> </Profile> 
      <FooterHome></FooterHome>
      </div>
     <Projects></Projects>
     <AboutMe></AboutMe>
     <ContractMe></ContractMe>
     
     <Footer></Footer>
    </div>
  );
}
