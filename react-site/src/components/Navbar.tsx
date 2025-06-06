import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Due Season Index", href: "/index-tool" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Due Season Digital
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={styles.navLink}
              onClick={() => setIsOpen(false)}
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
