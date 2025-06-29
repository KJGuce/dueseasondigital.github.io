import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Banner.module.css";

interface BannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.banner}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.container}>
          <p className={styles.text}>
            🌱 Founding Client Offer: Get 25% off all packages — limited to our
            first 10 clients.
          </p>
          <Link
            to="/services"
            className={`${styles.ctaButton} ${styles.hideOnMobile}`}
          >
            View Packages
          </Link>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close banner"
          >
            <FaTimes />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
