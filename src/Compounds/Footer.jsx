import { motion } from "framer-motion";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="newsletter">
        <h3>🍲 Get Food Updates</h3>
        <input type="email" placeholder="Enter email..." />
        <button>Subscribe</button>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodExplorer | All Rights Reserved ❤️</p>
      </div>

    </motion.footer>
  );
}

export default Footer;