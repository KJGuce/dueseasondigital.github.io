import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaCheck,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaSeedling,
  FaLeaf,
  FaTag,
  FaBrain,
  FaStar,
  FaMapMarkerAlt,
  FaHandshake,
  FaBullseye,
  FaHeart,
} from "react-icons/fa";
import styles from "./HomePage.module.css";

const MotionLink = motion(Link);

const HomePage: React.FC = () => {
  const packages = [
    {
      name: "Seed Package",
      description: "Start your visibility journey.",
      fullPrice: "895",
      betaPrice: "675",
      period: "one-time",
      features: [
        "AI + Local Search Audit",
        "Google Business Profile Optimization",
        "Listings Setup (Yelp, Bing, Apple, etc.)",
        "Basic On-Site SEO (1–2 pages)",
        "FAQ + Schema Markup (1 page)",
        "'Ask the AI' Report (PDF)",
        "Implementation Guide & Checklist",
      ],
      icon: <FaSeedling className={styles.packageIcon} />,
      cta: "🌱 Plant My Visibility",
      popular: false,
    },
    {
      name: "Sprout Package",
      description: "Grow trust and get seen.",
      fullPrice: "749",
      betaPrice: "560",
      period: "month",
      setupFullPrice: "850",
      setupBetaPrice: "640",
      features: [
        "Everything in Seed",
        "Monthly Blog/FAQ Post",
        "Review Automation System",
        "Ongoing Listing Management (5/mo)",
        "Monthly AI Visibility Report",
        "1 Local PR Pitch (Month 2)",
      ],
      icon: <FaLeaf className={styles.packageIcon} />,
      cta: "🌿 Nurture My Growth",
      popular: true,
    },
    {
      name: "Harvest Package",
      description: "Reap results in due season.",
      fullPrice: "1,800",
      betaPrice: "1,350",
      period: "month",
      setupFullPrice: "2,999",
      setupBetaPrice: "2,250",
      features: [
        "Everything in Sprout",
        "Full Website Refresh (up to 5 pages)",
        "Advanced Schema + Technical SEO",
        "2x PR Pitches (Quarterly)",
        "Brand Visibility Dashboard",
        "Quarterly Strategy Report",
        "Priority Email & Voice Note Support",
      ],
      icon: <FaChartLine className={styles.packageIcon} />,
      cta: "🌾 Let's Harvest the Results",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: <FaBrain className={styles.benefitIcon} />,
      title: "AI-First, Not AI-Only",
      description:
        "We specialize in visibility across AI tools like ChatGPT and Google—but never lose the human touch.",
    },
    {
      icon: <FaStar className={styles.benefitIcon} />,
      title: "Rooted in Purpose & Integrity",
      description:
        "We lead with honesty, alignment, and long-term impact—because the why behind your business matters.",
    },
    {
      icon: <FaMapMarkerAlt className={styles.benefitIcon} />,
      title: "Local SEO Expertise",
      description:
        "From Google Maps to Apple Business, we help you stand out in the search results that actually convert.",
    },
    {
      icon: <FaHandshake className={styles.benefitIcon} />,
      title: "People Before Pixels",
      description:
        "You're more than data—we partner with purpose, not just deliverables.",
    },
    {
      icon: <FaBullseye className={styles.benefitIcon} />,
      title: "Designed to Convert",
      description:
        "Smart strategy meets beautiful execution. We write, design, and optimize with ROI in mind.",
    },
    {
      icon: <FaHeart className={styles.benefitIcon} />,
      title: "Small Team, Big Heart",
      description:
        "You won't get lost in a dashboard. We walk with you, not just talk to you.",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Supercharge Your <span className={styles.highlight}>SEO</span> with{" "}
            <span className={styles.highlightAI}>AI</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help businesses in Toronto rank higher, drive more traffic, and
            grow their online presence using cutting-edge AI technology.
          </motion.p>
          <MotionLink
            to="/contact"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </MotionLink>
        </div>
        <div className={styles.heroGraphic}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaRobot className={styles.robotIcon} />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="pricing-plans" className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>AI-Powered Visibility Plans</h2>
            <p>
              Get found on Google, ChatGPT, and everywhere your customers search
              — with AI-enhanced local SEO built for real results.
            </p>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`${styles.package} ${
                  pkg.popular ? styles.popular : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {pkg.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                <div className={styles.packageHeader}>
                  {pkg.icon}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                </div>
                <div className={styles.price}>
                  <div className={styles.fullPrice}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{pkg.fullPrice}</span>
                    <span className={styles.period}>/{pkg.period}</span>
                  </div>
                  <div className={styles.betaPrice}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{pkg.betaPrice}</span>
                    <span className={styles.period}>/{pkg.period}</span>
                  </div>
                  {pkg.setupFullPrice && (
                    <div className={styles.setup}>
                      <div className={styles.fullPrice}>
                        + ${pkg.setupFullPrice} setup
                      </div>
                      <div className={styles.betaPrice}>
                        + ${pkg.setupBetaPrice} setup
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.betaBadge}>
                  <FaTag className={styles.betaIcon} />
                  <span>Beta Pricing Available</span>
                </div>
                <ul className={styles.features}>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className={styles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <MotionLink
                  to="/contact"
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pkg.cta}
                </MotionLink>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={styles.postSectionCTA}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>Not sure which plan is right for you?</p>
            <MotionLink
              to="/index-tool"
              className={styles.secondaryCtaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🧭 Get a Free Visibility Check
            </MotionLink>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs} id="why-dsd">
        <div className={styles.whyUsContent}>
          <div className={styles.sectionHeader}>
            <h2>Rooted in Values. Built for Visibility.</h2>
            <p>
              Why modern brands, local businesses, and founders choose Due
              Season Digital.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                {benefit.icon}
                <div className={styles.benefitContent}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.whyUsCta}>
            <p>✨ Ready to work with a partner who actually sees you?</p>
            <Link to="/contact" className={styles.secondaryCtaButton}>
              Book a Free Visibility Check
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Client Success Stories</h2>
            <p>See what our clients say about our AI-powered SEO services</p>
          </div>
          <motion.div
            className={styles.comingSoon}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Coming Soon</h3>
            <p>
              We're working on gathering our first success stories. Check back
              soon!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className={styles.bigCta}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your SEO?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the AI revolution and start ranking higher today
          </motion.p>
          <MotionLink
            to="/index-tool"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free SEO Audit
          </MotionLink>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.socialLinks}>
            <motion.a
              href="https://facebook.com/dueseasondigital"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://linkedin.com/company/dueseasondigital"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://instagram.com/dueseasondigital"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
          <p>© 2025 Due Season Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
