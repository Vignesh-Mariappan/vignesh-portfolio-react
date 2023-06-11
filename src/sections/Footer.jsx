import React, { useContext } from "react";
import { AppContext } from "../App";

const Footer = () => {
  const { mode } = useContext(AppContext);

  const footerIconStyling = {
    color: mode === "dark" ? "white" : "black"
  };

  return (
    <footer>
      <a
        style={footerIconStyling}
        href="https://www.linkedin.com/in/vignesh-m-432606139"
      >
        <i class="fa-brands fa-linkedin" style={footerIconStyling}></i>
      </a>
      <a style={footerIconStyling} href="https://github.com/Vignesh-Mariappan">
        <i class="fa-brands fa-github"></i>
      </a>
      {/* <a
        style={footerIconStyling}
        href="https://vignesh-mariappan.github.io/vignesh-projects/"
      >
        <i class="fa-brands fa-safari"></i>
      </a> */}
      <a
        style={footerIconStyling}
        href="../assets/Vignesh-Mariappan Resume - Latest.pdf"
        download
      >
        <i class="fa-solid fa-file"></i>
      </a>
      <a
        style={footerIconStyling}
        href="mailto:vigneshmv2312@gmail.com"
        download
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;
