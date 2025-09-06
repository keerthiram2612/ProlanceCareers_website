import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      {/* Logo + Text */}
      <div style={styles.logoContainer}>
        <img src="/ProLance-logo.png" alt="Prolance Logo" style={styles.logoImg} />
        <h1 style={styles.logoText}>ProLance Careers</h1>
      </div>

      {/* Desktop Links */}
      <div style={{ ...styles.links, ...(menuOpen ? styles.showMenu : {}) }}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/services">Services</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>

      {/* Mobile Toggle */}
      <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 40px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoImg: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "2px solid #4f46e5",
    padding: "4px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  link: {
    position: "relative",
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: "17px",
    padding: "8px 0",
    transition: "color 0.3s ease",
  },
  menuIcon: {
    display: "none",
    fontSize: "28px",
    cursor: "pointer",
  },
  showMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    right: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    gap: "15px",
  },
};

// Add custom hover underline effect
styles.link["::after"] = {
  content: "''",
  position: "absolute",
  width: "0%",
  height: "2px",
  bottom: "-4px",
  left: "0",
  background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
  transition: "width 0.3s ease",
};

styles.link[":hover"] = {
  color: "#4f46e5",
};

styles.link[":hover::after"] = {
  width: "100%",
};

export default Navbar;
