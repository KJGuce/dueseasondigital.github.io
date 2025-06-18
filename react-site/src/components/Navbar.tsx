import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertClosed, setIsAlertClosed] = useState(false);

  useEffect(() => {
    // Check if alert banner is closed
    const alertClosed = localStorage.getItem("alertClosed");
    setIsAlertClosed(alertClosed === "true");
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Due Season Index", href: "/index-tool" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${
        isAlertClosed ? styles.navbarNoAlert : ""
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Due Season Digital
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className={styles.ctaButton}>
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
