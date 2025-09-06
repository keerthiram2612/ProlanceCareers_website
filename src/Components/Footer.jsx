import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Prolance Careers. All rights reserved.</p>
      <div style={styles.socials}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/prolance-careers"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaLinkedin size={28} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/prolance.careers"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaInstagram size={28} />
        </a>

        {/* Email */}
        <a href="mailto:prolance.careers@gmail.com" style={styles.link}>
          <MdEmail size={28} />
        </a>
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
  socials: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#4f46e5",
    transition: "0.3s ease",
  },
};

export default Footer;
