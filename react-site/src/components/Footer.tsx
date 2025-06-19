import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.sections}>
        {/* Navigation */}
        <nav className={styles.navSection} aria-label="Primary Navigation">
          <h3 className={styles.sectionTitle}>Navigate</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Due Season Digital</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/geofaq">Generative Engine Optimization FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {/* Legal */}
        <nav className={styles.legalSection} aria-label="Legal and Policies">
          <h3 className={styles.sectionTitle}>Legal</h3>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </nav>
        {/* Contact */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <ul>
            <li>
              <a
                href="mailto:kristenjoy@dueseasondigital.com"
                className={styles.contactLink}
              >
                kristenjoy@dueseasondigital.com
              </a>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/company/due-season-digital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577034625612"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/dueseason.digital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Due Season Digital. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
