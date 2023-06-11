import React from "react";
import Header from "../sections/Header";
import About from "../sections/About";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import SoftwareDevelopment from "../sections/SoftwareDevelopment";
import Location from "../sections/Location";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="wrapper">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <SoftwareDevelopment />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
