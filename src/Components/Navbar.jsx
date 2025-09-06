import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.navbar}>
      {/* Logo + Text */}
      <div style={styles.logoContainer}>
        <img src="/ProLance-logo.png" alt="Prolance Logo" style={styles.logoImg} />
        <h1 style={styles.logoText}>ProLance Careers</h1>
      </div>

      {/* Desktop / Mobile Links */}
      {(menuOpen || !isMobile) && (
        <div style={{ ...styles.links, ...(isMobile ? styles.mobileMenu : {}) }}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/services">Services</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </div>
      )}

      {/* Mobile Toggle */}
      {isMobile && (
        <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
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
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "2px solid #4f46e5",
    padding: "4px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
  },
  logoText: {
    fontSize: "20px",
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
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: "16px",
    position: "relative",
    padding: "5px 0",
  },
  mobileMenu: {
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    right: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    gap: "15px",
    width: "200px",
  },
  menuIcon: {
    display: "block",
    fontSize: "28px",
    cursor: "pointer",
  },
};

export default Navbar;
