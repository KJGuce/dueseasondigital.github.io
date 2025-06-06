import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <span>Due Season Digital</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              Let's Talk
            </motion.button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.mobileMenuButton}
        >
          {isOpen ? (
            <FaTimes className={styles.menuIcon} />
          ) : (
            <FaBars className={styles.menuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileNav}
          >
            <div className={styles.mobileNavContent}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                >
                  {link.name}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={styles.mobileCtaButton}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
