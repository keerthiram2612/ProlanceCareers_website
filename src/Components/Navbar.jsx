import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Prolance Careers</h1>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/services">Services</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: { fontSize: "22px", fontWeight: "bold", color: "#4f46e5" },
  links: { display: "flex", gap: "25px" },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    transition: "0.3s",
  },
};

export default Navbar;
