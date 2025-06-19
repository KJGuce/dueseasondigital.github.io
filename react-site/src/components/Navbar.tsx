import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

interface NavbarProps {
  isBannerVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isBannerVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "GEO",
      href: "/generative-engine-optimization",
      subLinks: [
        { name: "What is GEO?", href: "/generative-engine-optimization" },
        { name: "FAQ", href: "/generative-engine-optimization/faq" },
        {
          name: "Case Studies",
          href: "/generative-engine-optimization/case-studies",
        },
        { name: "Blog", href: "/generative-engine-optimization/blog" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${
        !isBannerVisible ? styles.navbarNoAlert : ""
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src="/DSDfavicon1.png"
            alt="Due Season Digital Logo"
            style={{
              height: 36,
              width: 36,
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: 10,
            }}
          />
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
            <div key={link.name} className={styles.navItem}>
              <Link
                to={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className={styles.dropdown}>
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className={styles.dropdownLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/due-season-index" className={styles.ctaButton}>
            Get Your AI Audit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
