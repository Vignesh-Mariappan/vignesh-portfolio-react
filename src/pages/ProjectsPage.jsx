import React, { useState, useEffect, useContext } from "react";
import { allProjects } from "../assets/data/all-projects";
import { AppContext } from "../App";

const ProjectsPage = () => {
  const { mode } = useContext(AppContext);
  const [filterBy, setFilterBy] = useState("");
  const [projects, setProjects] = useState(allProjects);

  useEffect(() => {
    if (filterBy === "react") {
      setProjects(allProjects.filter((project) => project.type === "React"));
    } else if (filterBy === "javascript") {
      setProjects(
        allProjects.filter((project) => project.type === "JavaScript")
      );
    } else {
      setProjects(allProjects);
    }
  }, [filterBy]);

  const filterByDropdownChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="ProjectsPage">
      <h1 style={{ textAlign: "center", color: "#006097", margin: "2rem" }}>
        Vignesh's Projects
      </h1>

      <div
        className="filter-by-container"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <h4 style={{ margin: "0 0 2.5rem 0", color: "rgb(75, 75, 75)" }}>
          Filter By{" "}
        </h4>
        <select
          className="filter-by-dropdown"
          style={{
            backgroundColor: mode == "dark" ? "rgb(75, 75, 75)" : "#bbb",
            color: mode == "dark" ? "white" : "black"
          }}
          onChange={filterByDropdownChange}
        >
          <option value=""></option>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      <div className="cards-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <a className="card-link" href={project.link} target="_blank" rel="noreferrer">
              <div className="card-img">
                <img src={project.imgSrc} alt={project.title} />
              </div>
              <div className="card-meta-info">
                <div className="card-title">{project.title}</div>
                <div className="card-description">{project.description}</div>
                <div className="card-tech-used">{project.technologies}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
