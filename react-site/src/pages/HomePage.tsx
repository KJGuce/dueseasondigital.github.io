import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaCheck,
  FaQuoteLeft,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import styles from "./HomePage.module.css";

const MotionLink = motion(Link);

const HomePage: React.FC = () => {
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
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>
              Comprehensive SEO solutions powered by artificial intelligence
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {[
              {
                icon: <FaSearch />,
                title: "Keyword Research",
                description:
                  "AI-powered keyword analysis to find the most valuable opportunities for your business.",
              },
              {
                icon: <FaChartLine />,
                title: "Content Optimization",
                description:
                  "Smart content recommendations to improve your rankings and engage your audience.",
              },
              {
                icon: <FaUsers />,
                title: "Technical SEO",
                description:
                  "Advanced technical optimization to ensure search engines can crawl and index your site effectively.",
              },
              {
                icon: <FaRobot />,
                title: "AI Analytics",
                description:
                  "Deep insights and predictions to stay ahead of your competition.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Us</h2>
            <p>Experience the power of AI-driven SEO</p>
          </div>
          <div className={styles.benefitsGrid}>
            {[
              "AI-powered keyword research and analysis",
              "Data-driven content optimization",
              "Advanced technical SEO solutions",
              "Real-time performance tracking",
              "Customized SEO strategies",
              "Expert team of SEO professionals",
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCheck className={styles.checkIcon} />
                <p>{benefit}</p>
              </motion.div>
            ))}
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
          <div className={styles.testimonialGrid}>
            {[
              {
                quote:
                  "Due Season Digital's AI-powered SEO has transformed our online presence. Our organic traffic has increased by 200% in just 3 months!",
                author: "Sarah Johnson",
                role: "Marketing Director, TechStart",
              },
              {
                quote:
                  "The team's expertise in AI and SEO is unmatched. They've helped us rank for competitive keywords we never thought possible.",
                author: "Michael Chen",
                role: "CEO, GrowthLabs",
              },
              {
                quote:
                  "Working with Due Season Digital has been a game-changer for our business. Their AI-driven approach delivers real results.",
                author: "Emily Rodriguez",
                role: "Founder, EcoStyle",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className={styles.chatIcon} />
                <p>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free SEO Audit
          </motion.a>
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
