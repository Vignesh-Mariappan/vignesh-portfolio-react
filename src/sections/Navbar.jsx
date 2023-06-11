import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../App";

const Navbar = () => {
  const { mode, setMode } = useContext(AppContext);

  const modeIconStyling = {
    fontSize: "2rem",
    color: mode === "dark" ? "#131318" : "#eee"
  };

  let activeStyle = {
    marginTop: "5px",
    color: "rgb(0, 109, 172)",
    borderBottom: "5px solid rgb(0, 109, 172)",
    borderTop: "1px solid rgb(0, 109, 172)",
    borderLeft: "1px solid rgb(0, 109, 172)",
    borderRight: "1px solid rgb(0, 109, 172)"
  };

  const inactiveStyle = {
    color: mode === "dark" ? "white" : "black"
  };

  const modeStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "20px",
    backgroundColor: "rgb(105, 105, 105)"
  };

  const changeMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  const location = useLocation();

  const pathMatchRoute = (route) => route === location.pathname;

  return (
    <nav className="navbar">
      {mode === "light" ? (
        <div style={modeStyling} onClick={changeMode}>
          <i className="fa-solid fa-sun" style={modeIconStyling}></i>
          <span style={{ marginLeft: "5px", color: "#eee" }}>Light</span>
        </div>
      ) : (
        <div style={modeStyling} onClick={changeMode}>
          <i className="fa-solid fa-moon" style={modeIconStyling}></i>
          <span style={{ marginLeft: "5px", color: "#131318" }}>Dark</span>
        </div>
      )}
      <div className="navbar-items">
        <Link
          to="/"
          className="navbar-item"
          style={pathMatchRoute("/") ? activeStyle : inactiveStyle}
        >
          <i
            className="fa-solid fa-house-user"
            style={{ color: "inherit" }}
          ></i>
          <div
            style={{
              paddingLeft: "5px",
              color: "inherit"
            }}
          >
            Home
          </div>
        </Link>
        <Link
          to="/all-projects"
          className="navbar-item"
          style={pathMatchRoute("/all-projects") ? activeStyle : inactiveStyle}
        >
          <i
            className="fa-solid fa-table-list"
            style={{ color: "inherit" }}
          ></i>
          <div
            style={{
              paddingLeft: "5px",
              color: "inherit"
            }}
          >
            Projects
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
