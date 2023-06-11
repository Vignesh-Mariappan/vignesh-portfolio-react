import "./styles.css";
import React, { useState, createContext } from "react";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import ScrollToTop from "./ScrollToTop";

export const AppContext = createContext(null);

export default function App() {
  const [mode, setMode] = useState("dark");
  return (
    <div
      className="App"
      style={{
        backgroundColor: mode === "dark" ? "#131318" : "#eee",
        transition: "background-color .5s"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", overflow: "hidden" }}>
        <BrowserRouter>
          <AppContext.Provider value={{ mode, setMode }}>
            <Navbar />
            <ScrollToTop>
              <Routes>
                <Route path="/all-projects" element={<ProjectsPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </ScrollToTop>
          </AppContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}
