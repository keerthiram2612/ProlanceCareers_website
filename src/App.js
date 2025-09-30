import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    </Router>
  );
}

export default App;
