// src/Components/Services.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Services = () => {
  const categories = [
    {
      name: "IT & Tech",
      gradient: "linear-gradient(135deg, #4f46e5, #6366f1)",
      services: [
        "Web Development",
        "App Development",
        "Database Management",
        "AI / ML",
        "Cloud Services",
      ],
    },
    {
      name: "Creative & Design",
      gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
      services: ["Logo Design", "Video Editing", "UI/UX Design"],
    },
    {
      name: "Writing & Content",
      gradient: "linear-gradient(135deg, #10b981, #34d399)",
      services: [
        "Blog Writing",
        "Technical Writing",
        "Copywriting",
        "Resume Writing",
      ],
    },
    {
      name: "Data & Analytics",
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      services: ["Data Entry", "Data Visualization"],
    },
  ];

  const whyChoose = [
    "✅ Skilled & Experienced Professionals",
    "⚡ Modern Tech Stack & Tools",
    "🎯 Customized Solutions for Every Client",
    "💰 Affordable Pricing & Flexible Plans",
    "⏳ On-Time Delivery & Quality Assurance",
  ];

  const processSteps = [
    { step: "Consultation", desc: "We understand your needs." },
    { step: "Planning", desc: "We create the roadmap." },
    { step: "Execution", desc: "Our team builds the solution." },
    { step: "Review", desc: "We refine together." },
    { step: "Delivery", desc: "Launch with confidence." },
  ];

  const techStack = [
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "Python",
    "Django",
    "AWS",
    "Firebase",
    "Figma",
    "Adobe XD",
    "TensorFlow",
  ];

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        {/* Hero */}
        <motion.div
          style={styles.hero}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>🌟 Our Services</h1>
          <p style={styles.heroSubtitle}>
            Empowering your business with cutting-edge tech, creative design,
            and impactful content.
          </p>
          <motion.a
            href="/contact"
            style={styles.heroBtn}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Your Journey
          </motion.a>
        </motion.div>

        {/* Services Section */}
        <div style={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.card,
                background: cat.gradient,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
              }}
            >
              <h2 style={styles.cardTitle}>{cat.name}</h2>
              <ul style={styles.list}>
                {cat.services.map((s, j) => (
                  <motion.li
                    key={j}
                    style={styles.listItem}
                    whileHover={{ x: 6 }}
                  >
                    ✅ {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.h2 style={styles.subHeading}>💡 Why Choose Us?</motion.h2>
        <div style={styles.whyGrid}>
          {whyChoose.map((reason, i) => (
            <motion.div
              key={i}
              style={styles.whyCard}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              {reason}
            </motion.div>
          ))}
        </div>

        {/* Our Process - redesigned as small cards */}
        <motion.h2 style={styles.subHeading}>⚡ Our Process</motion.h2>
        <div style={styles.processGrid}>
          {processSteps.map((p, i) => (
            <motion.div
              key={i}
              style={styles.processCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.08,
                background: "#4f46e5",
                color: "#fff",
              }}
            >
              <h3 style={styles.processTitle}>Step {i + 1}</h3>
              <p style={{ fontWeight: "600" }}>{p.step}</p>
              <p style={{ fontSize: "14px", opacity: 0.9 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.h2 style={styles.subHeading}>🛠️ Technologies We Use</motion.h2>
        <div style={styles.techGrid}>
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              style={styles.techCard}
              whileHover={{
                scale: 1.1,
                background: "#4f46e5",
                color: "#fff",
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px 100px",
    fontFamily: "Poppins, Inter, sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
    minHeight: "100vh",
  },
  hero: {
    textAlign: "center",
    marginBottom: "70px",
    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
    borderRadius: "20px",
    padding: "60px 20px",
    color: "#fff",
  },
  heroTitle: { fontSize: "56px", fontWeight: "800", marginBottom: "20px" },
  heroSubtitle: {
    fontSize: "20px",
    fontWeight: "300",
    maxWidth: "700px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
  },
  heroBtn: {
    padding: "16px 32px",
    background: "#fff",
    color: "#4f46e5",
    borderRadius: "50px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  grid: {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    marginBottom: "70px",
  },
  card: {
    padding: "30px",
    borderRadius: "20px",
    color: "#fff",
    backdropFilter: "blur(12px)",
    border: "2px solid rgba(255,255,255,0.2)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
  cardTitle: { fontSize: "26px", marginBottom: "20px", fontWeight: "700" },
  list: { listStyle: "none", padding: 0, margin: 0, fontSize: "17px" },
  listItem: { marginBottom: "12px" },

  subHeading: {
    fontSize: "36px",
    textAlign: "center",
    margin: "70px 0 30px",
    fontWeight: "700",
    color: "#1f2937",
  },
  whyGrid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginBottom: "60px",
  },
  whyCard: {
    padding: "20px",
    borderRadius: "15px",
    background: "#4f46e5",
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "16px",
  },

  // Redesigned Process Grid
  processGrid: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginBottom: "60px",
  },
  processCard: {
    padding: "25px",
    borderRadius: "15px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "0.3s",
  },
  processTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#4f46e5",
  },

  techGrid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    marginBottom: "60px",
  },
  techCard: {
    padding: "15px",
    borderRadius: "12px",
    background: "#4f46e5",
    textAlign: "center",
    fontWeight: "600",
    border: "1px solid #ddd",
    transition: "0.3s",
  },
};

export default Services;
