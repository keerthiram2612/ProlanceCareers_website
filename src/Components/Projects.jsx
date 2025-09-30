// src/Components/Projects.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  const projectList = [
    {
      title: "Spark-Academy-website",
      desc: "The Spark Academy Website is a modern and responsive platform designed for an educational institute.",
      img: "/images/Spark-Academy.png",
      link: "https://github.com/keerthiram2612/Spark-Academy-website",
    },
    {
      title: "Query Translator",
      desc: "An intelligent SQL assistant that converts natural language queries into SQL Output and statements.",
      img: "/images/Nlp-Sql.png",
      link: "https://github.com/DhanurMathy/Query_Translator",
    },
    {
      title: "Grocer-Webapp",
      desc: "A modern and responsive grocery e-commerce platform designed to showcase organic products.",
      img: "/images/Grocery-Webapp.png",
      link: "https://github.com",
    },
    {
      title: "Face-Trace",
      desc: "Machine learning system to detect fake IDs and forged images on social media such as instagram.",
      img: "/images/Face-Trace.jpg",
      link: "https://github.com/Varshakalyan/Frace_Trace",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ fontFamily: "Inter, sans-serif", padding: "40px 20px", minHeight: "100vh", background: "#f9fafb",lineHeight: 1.6 }}>
        {/* Header */}
          {/* Hero Section */}
                <motion.div
                  style={{
                    textAlign: "center",
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: isMobile ? "40px 20px" : "60px 20px",
                    marginBottom: "50px",
                  }}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: 800, marginBottom: "20px", letterSpacing: "-1px" }}>
                    🌟 Projects
                  </h1>
                  <p style={{ fontSize: isMobile ? "16px" : "18px", fontWeight: 400, maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}>
                                Discover some of the projects we have developed to empower businesses and professionals.
                  </p>
                </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {projectList.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                padding: isMobile ? "20px" : "30px",
                borderRadius: "16px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#4f46e5", marginBottom: "10px" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#374151", marginBottom: "15px", lineHeight: 1.5 }}>
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "#4f46e5",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#7c3aed")}
                onMouseLeave={(e) => (e.target.style.background = "#4f46e5")}
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
