import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Footer from "../Shared/Footer/Footer";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
