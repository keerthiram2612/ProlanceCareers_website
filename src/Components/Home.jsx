// src/Components/Home.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={styles.title}>🚀 Prolance Careers</h1>
        <p style={styles.subtitle}>
          Building <span style={{ fontWeight: "600" }}>Future-Ready Careers</span> in Tech
        </p>
        <motion.a
          href="/contact"
          style={styles.button}
          whileHover={{ scale: 1.1, backgroundColor: "#4338ca", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.a>
      </motion.section>

      {/* Services */}
      <motion.section
        style={styles.services}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.heading}>💼 Our Expertise</h2>
        <div style={styles.grid}>
          {[
            { title: "Web Development", desc: "Scalable modern apps with React & Node.js" },
            { title: "UI/UX Design", desc: "Pixel-perfect, user-focused interfaces" },
            { title: "Cloud Solutions", desc: "Deployment & scaling for startups" },
            { title: "Careers & Training", desc: "Upskilling talent for the future" },
          ].map((s, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        style={styles.about}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.heading}>🌟 Why Prolance?</h2>
        <p style={styles.text}>
          At <strong>Prolance Careers</strong>, we empower businesses and individuals
          with cutting-edge technology, meaningful projects, and career growth opportunities.  
          Our mission is to bridge the gap between <em>talent</em> and <em>opportunity</em>.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "15px", fontWeight: "700" }}>
          Ready to Grow with Prolance?
        </h2>
        <motion.a
          href="/contact"
          style={styles.buttonCTA}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#4f46e5" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const styles = {
  page: { fontFamily: "Poppins, sans-serif", color: "#333" },

  /* Hero */
  hero: {
    textAlign: "center",
    padding: "140px 20px",
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "#fff",
  },
  title: { fontSize: "56px", fontWeight: "800", marginBottom: "20px" },
  subtitle: {
    fontSize: "22px",
    marginBottom: "35px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.5",
  },
  button: {
    display: "inline-block",
    padding: "16px 32px",
    background: "#fff",
    color: "#4f46e5",
    borderRadius: "50px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  },

  /* Services */
  services: { padding: "80px 20px", background: "#f9fafb" },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "40px",
    color: "#4f46e5",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    padding: "25px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "0.3s",
  },
  cardTitle: { fontSize: "22px", marginBottom: "12px", color: "#4f46e5", fontWeight: "600" },
  cardDesc: { fontSize: "16px", color: "#555" },

  /* About */
  about: { padding: "80px 20px", textAlign: "center", background: "#fff" },
  text: {
    maxWidth: "650px",
    margin: "0 auto",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#374151",
  },

  /* CTA */
  cta: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "#fff",
  },
  buttonCTA: {
    display: "inline-block",
    padding: "16px 32px",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "50px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
    border: "2px solid #fff",
  },
};

export default Home;
