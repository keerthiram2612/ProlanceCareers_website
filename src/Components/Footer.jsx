import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Prolance Careers. All rights reserved.</p>
      <div style={styles.socials}>
        <a href="#" style={styles.link}>LinkedIn</a>
        <a href="#" style={styles.link}>Instagram</a>
        <a href="#" style={styles.link}>E-mail</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f3f4f6",
    marginTop: "40px",
  },
  socials: { marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" },
  link: { textDecoration: "none", color: "#4f46e5", fontWeight: "500" },
};

export default Footer;
