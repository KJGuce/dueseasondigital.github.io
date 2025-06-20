import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaChevronDown, FaChevronUp, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./PackageCard.module.css";

// Define the types for the package props
interface Package {
  name: string;
  description: string;
  fullPrice: string;
  betaPrice: string;
  period: string;
  setupFee?: string;
  setupBetaFee?: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  isVip?: boolean;
  vipBadge?: string;
  commitment?: string;
  annualDiscount?: string;
  paymentPlan?: string;
  cta: string;
  link: string;
}

interface PackageCardProps {
  pkg: Package;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const featureListVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto" },
  };

  const visibleFeatures = isExpanded ? pkg.features : pkg.features.slice(0, 4);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${styles.package} ${pkg.popular ? styles.popular : ""} ${
        pkg.isVip ? styles.vip : ""
      }`}
    >
      {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
      {pkg.isVip && (
        <div className={styles.vipBadge}>
          <FaCrown className={styles.crownIcon} />
          <span>VIP</span>
        </div>
      )}

      <div className={styles.packageHeader}>
        {pkg.icon}
        <h3>{pkg.name}</h3>
        <p>{pkg.description}</p>
      </div>

      <div className={styles.price}>
        <div className={styles.fullPrice}>${pkg.fullPrice}</div>
        <div className={styles.betaPrice}>
          <span className={styles.currency}>$</span>
          {pkg.betaPrice}
          <span className={styles.period}>/{pkg.period}</span>
        </div>
        {pkg.setupFee && (
          <div className={styles.setup}>
            <div className={styles.fullPrice}>+ ${pkg.setupFee} setup</div>
            <div className={styles.betaPrice}>+ ${pkg.setupBetaFee} setup</div>
          </div>
        )}
      </div>

      <motion.ul
        className={styles.features}
        variants={featureListVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {visibleFeatures.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaCheck className={styles.checkIcon} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {pkg.features.length > 4 && (
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show Less" : "See All Features"}
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}

      {pkg.commitment && (
        <div className={styles.commitment}>
          <span>{pkg.commitment}</span>
        </div>
      )}

      {pkg.annualDiscount && (
        <div className={styles.annualDiscount}>
          <span>💎 {pkg.annualDiscount}</span>
        </div>
      )}

      {pkg.paymentPlan && (
        <div className={styles.paymentPlan}>
          <span>💳 {pkg.paymentPlan}</span>
        </div>
      )}

      <div className={styles.ctaWrapper}>
        <Link to={pkg.link} className={styles.ctaButton}>
          {pkg.cta}
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;
