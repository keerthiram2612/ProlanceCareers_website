import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_nz5jmg6",
        "template_p7jjl2c",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "38ePMLJZjFtN964Ut"
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px 20px 100px", fontFamily: "Poppins, sans-serif" }}>
        {/* Hero */}
        <motion.div
          style={{
            textAlign: "center",
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            borderRadius: "20px",
            padding: isMobile ? "40px 20px" : "60px 20px",
            marginBottom: "50px",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: isMobile ? "32px" : "52px", fontWeight: 800, marginBottom: "20px" }}>📩 Contact Us</h1>
          <p style={{ fontSize: isMobile ? "16px" : "20px", maxWidth: "700px", margin: "0 auto" }}>
            Have a project in mind? Let’s make it happen.
          </p>
        </motion.div>

        {/* Contact Form + Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <motion.div
            style={{
              background: "#f9fafb",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2>📍 Get in Touch</h2>
            <p>Email: prolance.careers@gmail.com</p>
            <p>Phone: +91 79040 29364</p>
            <p>Location: Chennai, India</p>
          </motion.div>

          <motion.form
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }}
              required
            ></textarea>
            <button
              type="submit"
              style={{ padding: "14px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}
            >
              Send Message
            </button>
            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
