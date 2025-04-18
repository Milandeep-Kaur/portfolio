import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import About from "./About.jsx";
import Project from "./Project.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
