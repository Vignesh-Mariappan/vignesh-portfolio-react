import SectionHeading from "../shared/SectionHeading";
import ProjectList from "../components/projects/ProjectList";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../App";

const Projects = () => {
  const { mode } = useContext(AppContext);

  const seeMoreContainerStyling = {
    marginBottom: "2rem",
    // color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem .5rem",
    width: "150px",
    // background: "rgb(75, 75, 75)",
    borderRadius: "10px",
    color: mode === "dark" ? "white" : "black"
  };

  const seeMoreBtnStyling = {
    paddingRight: "5px"
  };

  return (
    <div className="Projects">
      <SectionHeading secHeading="Projects" />
      <ProjectList />
      <Link
        to="/all-projects"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div style={seeMoreContainerStyling}>
          <span style={seeMoreBtnStyling}>See more</span>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
