import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
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
      <div style={{ padding: "40px 20px 100px", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
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
            🌟 About Us
          </h1>
          <p style={{ fontSize: isMobile ? "16px" : "18px", fontWeight: 400, maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}>
            The story of five friends, one vision — building a future-ready freelancing platform.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "20px",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundImage: "url(https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: isMobile ? "40px 20px" : "80px 20px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              padding: isMobile ? "20px" : "40px",
              borderRadius: "12px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2 style={{ fontSize: isMobile ? "24px" : "30px", marginBottom: "20px", fontWeight: 700, color: "#4f46e5" }}>
              💡 Our Story
            </h2>
            <p style={{ fontSize: isMobile ? "15px" : "17px", maxWidth: "700px", margin: "0 auto", color: "#374151" }}>
              Prolance Careers was founded by five passionate individuals during our college days.
              What began as late-night brainstorming sessions has grown into a platform connecting
              businesses with talented professionals across the globe.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            marginTop: "40px",
            alignItems: "stretch",
          }}
        >
          {/* Vision */}
          <motion.div
            style={{
              padding: "20px",
              background: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#4f46e5", marginBottom: "12px" }}>🌟 Vision</h3>
            <ul style={{ paddingLeft: "20px", lineHeight: 1.8, color: "#444", fontSize: "16px" }}>
              <li>Become the most trusted freelancing partner worldwide.</li>
              <li>Deliver innovative and reliable digital solutions for every business size.</li>
              <li>Empower professionals with opportunities that fuel personal and career growth.</li>
              <li>Shape the future of freelancing through transparency, creativity, and trust.</li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            style={{
              padding: "25px",
              background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#4f46e5", marginBottom: "12px" }}>🎯 Mission</h3>
            <ul style={{ paddingLeft: isMobile ? "20px" : "40px", lineHeight: 1.8, color: "#555", fontSize: "16px" }}>
              <li>Connect businesses with skilled professionals across technology, design, writing, and analytics.</li>
              <li>Deliver high-quality services with creativity, precision, and timely execution.</li>
              <li>Make freelancing simple, transparent, and client-focused by building long-term partnerships.</li>
              <li>Empower individuals and businesses with smart solutions that drive efficiency and innovation.</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
