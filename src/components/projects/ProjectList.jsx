import WebPageViewer from "../../assets/images/webpage-viewer.jpg";
import MyWorkBook from "../../assets/images/myworkbook-home.jpg";
import A2ZDentalCare from "../../assets/images/a2z-dental-care.png";
import PasswordGenerator from "../../assets/images/all-projects/password-generator-min.PNG";
import React, { useContext } from "react";
import { AppContext } from "../../App";

const ProjectList = () => {
  const { mode } = useContext(AppContext);

  return (
    <div className="projects-container">
      {/* <a
        className="project"
        style={{
          backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
        }}
        href="https://wikipedia-viewer.vigneshmv.repl.co/"
      >
        <div className="project-image">
          <img src={WebPageViewer} alt="Webpage Search App" />
        </div>
        <div className="project-body">
          <h3 className="project-name">Webpage Search</h3>
          <p className="project-description">
            A <strong>React based application</strong> that uses
            <strong>Google Search API</strong> to search for the text the user
            entered. If the user clicks any search result, the webpage will be
            opened in new tab.
          </p>
          <div className="project-tech-used">
            Tech Used -
            <i
              className="fa-brands fa-react"
              style={{ color: "#61dafb", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              class="fa-brands fa-css3"
              style={{ color: "rgb(38,77,228)", fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </a> */}

      <a
        className="project"
        rel="noreferrer"
        style={{
          backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
        }}
        href="https://ocu168.csb.app/"
        data-aos="fade-left"
      >
        <div className="project-image">
          <img src={PasswordGenerator} alt="Webpage Search App" />
        </div>
        <div className="project-body">
          <h3 className="project-name">Password Generator</h3>
          <p className="project-description">
            A <strong>React based application</strong> that can be used to
            generate <strong>random / complex passwords.</strong> User can
            select the criteria for the password and also can copy the password
            generated to the clipboard.
          </p>
          <div className="project-tech-used">
            Tech Used -
            <i
              className="fa-brands fa-react"
              style={{ color: "#61dafb", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              class="fa-brands fa-css3"
              style={{ color: "rgb(38,77,228)", fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </a>

      <a
        rel="noreferrer"
        className="project"
        style={{
          backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
        }}
        href="https://vignesh-mariappan.github.io/vikinote-app/signin.html"
        data-aos="fade-up"
      >
        <div className="project-image">
          <img src={MyWorkBook} alt="MyWorkBook" />
        </div>
        <div className="project-body">
          <h3 className="project-name">MyWorkBook</h3>
          <p className="project-description">
            A front end <strong>Notemaking</strong> app for taking notes. Uses{" "}
            <strong>local storage</strong> to store the details of the user and
            notes.User can create a new account and login to the app and start
            note-taking.
          </p>
          <div className="project-tech-used">
            Tech Used -
            <i
              className="fa-brands fa-html5"
              style={{ color: "rgb(227,76,38)", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-css3"
              style={{ color: "rgb(38,77,228)", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-js"
              style={{ color: "rgb(249,228,15)", fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </a>

      <a
        rel="noreferrer"
        className="project"
        style={{
          backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
        }}
        href="https://a2zdentalcare.net/"
        data-aos="fade-right"
      >
        <div className="project-image">
          <img src={A2ZDentalCare} alt="A2ZDentalCare" />
        </div>
        <div className="project-body">
          <h3 className="project-name">A2ZDentalCare</h3>
          <p className="project-description">
            A <strong>dental clinic website</strong> designed, developed &
            hosted in <strong>Hostinger</strong>. Users can call, send whatsapp
            message or email & fill a form from the website.
          </p>
          <div className="project-tech-used">
            Tech Used -
            <i
              className="fa-brands fa-html5"
              style={{ color: "rgb(227,76,38)", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-css3"
              style={{ color: "rgb(38,77,228)", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-js"
              style={{ color: "rgb(249,228,15)", fontSize: "1.5rem" }}
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-bootstrap"
              style={{ color: "#7952b3", fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectList;
