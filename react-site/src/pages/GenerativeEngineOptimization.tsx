import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaSearch,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./GenerativeEngineOptimization.module.css";

const GenerativeEngineOptimization: React.FC = () => {
  const benefits = [
    {
      icon: <FaBrain />,
      title: "AI-First Optimization",
      description:
        "Strategic optimization for AI understanding and trust, ensuring your business becomes a recommended source.",
    },
    {
      icon: <FaRobot />,
      title: "Multi-Platform Presence",
      description:
        "Optimized visibility across ChatGPT, Google Gemini, Bing Chat, and other AI assistants.",
    },
    {
      icon: <FaSearch />,
      title: "Conversational Search Ready",
      description:
        "Content structured for natural language queries and AI-powered search interactions.",
    },
    {
      icon: <FaChartLine />,
      title: "Measurable Results",
      description:
        "Track AI recommendation frequency, trust signals, and conversion rates from AI-driven traffic.",
    },
  ];

  return (
    <div className={styles.geoPage}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <h1>Generative Engine Optimization (GEO)</h1>
          <p className={styles.subtitle}>
            The Future of Search is Here: Get Actively Recommended by AI
            Assistants
          </p>
          <div className={styles.heroCta}>
            <Link to="/contact" className={styles.primaryButton}>
              Get Your AI Recommendation Audit
            </Link>
            <Link
              to="/generative-engine-optimization/faq"
              className={styles.secondaryButton}
            >
              Learn More About GEO
            </Link>
          </div>
        </motion.div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>What is Generative Engine Optimization?</h2>
          <p>
            Generative Engine Optimization (GEO) is the strategic process of
            optimizing your online presence to become actively recommended by AI
            assistants like ChatGPT, Google Gemini, and Bing Chat. As AI
            platforms increasingly become the primary way people search for
            information and recommendations, GEO ensures your business is
            positioned as a trusted authority that AI assistants confidently
            suggest to users.
          </p>
          <div className={styles.benefits}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2>How GEO Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>1. AI Understanding</h3>
              <p>
                We implement advanced schema markup and structured data that
                helps AI assistants understand your business details, services,
                and authority in your industry.
              </p>
            </div>
            <div className={styles.step}>
              <h3>2. Trust Building</h3>
              <p>
                Through strategic content optimization and verified profiles, we
                establish your business as a trusted source that AI platforms
                can confidently recommend.
              </p>
            </div>
            <div className={styles.step}>
              <h3>3. Authority Signals</h3>
              <p>
                We create and maintain strong authority signals through
                strategic content placement, local citations, and
                industry-relevant partnerships.
              </p>
            </div>
            <div className={styles.step}>
              <h3>4. Continuous Optimization</h3>
              <p>
                Regular monitoring and adjustment of your GEO strategy ensures
                sustained growth in AI recommendation frequency and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.resources}>
        <div className={styles.container}>
          <h2>GEO Resources</h2>
          <div className={styles.resourceGrid}>
            <Link
              to="/generative-engine-optimization/faq"
              className={styles.resourceCard}
            >
              <h3>
                GEO FAQ <FaArrowRight />
              </h3>
              <p>
                Get answers to common questions about Generative Engine
                Optimization.
              </p>
            </Link>
            <Link
              to="/generative-engine-optimization/case-studies"
              className={styles.resourceCard}
            >
              <h3>
                Case Studies <FaArrowRight />
              </h3>
              <p>See how businesses are succeeding with GEO strategies.</p>
            </Link>
            <Link
              to="/generative-engine-optimization/blog"
              className={styles.resourceCard}
            >
              <h3>
                GEO Blog <FaArrowRight />
              </h3>
              <p>Stay updated with the latest in AI search optimization.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Dominate AI Search?</h2>
          <p>
            Get your free AI Recommendation Audit and discover how we can
            position your business as the trusted choice that AI assistants
            actively suggest.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Request Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GenerativeEngineOptimization;
