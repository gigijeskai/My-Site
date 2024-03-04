import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./screen/home-screen";
import Skills from "./screen/skill-screen";
import Projects from "./screen/projects-screen";
import Experiences from "./screen/esperiences-screen";
import Resume from "./screen/resume-screen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;