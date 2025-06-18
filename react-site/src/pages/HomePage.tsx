import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaCheck,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaSeedling,
  FaLeaf,
  FaChartLine,
  FaTag,
  FaBrain,
  FaStar,
  FaMapMarkerAlt,
  FaHandshake,
  FaBullseye,
  FaHeart,
  FaArrowDown,
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
      title: "AI-First Strategy",
      description:
        "We optimize for both traditional search and AI platforms, ensuring you're found wherever your customers look.",
    },
    {
      icon: <FaStar className={styles.benefitIcon} />,
      title: "Local Market Mastery",
      description:
        "Deep understanding of local search behavior and AI interactions in your specific market.",
    },
    {
      icon: <FaMapMarkerAlt className={styles.benefitIcon} />,
      title: "Multi-Platform Visibility",
      description:
        "Get found across Google, Gemini, ChatGPT, and more — wherever your customers are asking questions.",
    },
    {
      icon: <FaHandshake className={styles.benefitIcon} />,
      title: "True Partnership",
      description:
        "We're invested in your growth, providing personalized support that adapts to your business stage.",
    },
    {
      icon: <FaBullseye className={styles.benefitIcon} />,
      title: "Clear Growth Metrics",
      description:
        "Track your visibility across all platforms with AI-powered reports that show real progress.",
    },
    {
      icon: <FaHeart className={styles.benefitIcon} />,
      title: "Your Success Story",
      description:
        "We're committed to helping you build a strong, visible presence that attracts your ideal customers.",
    },
  ];

  const scrollToServices = () => {
    const servicesSection = document.querySelector(".services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Get Found on Google, ChatGPT, and Every AI That Matters.</h1>
          <p className={styles.heroSubtitle}>
            AI-powered local SEO that makes your business show up across Google,
            Gemini, ChatGPT, Perplexity, and more — wherever your customers ask.
          </p>
          <div className={styles.heroCta}>
            <button onClick={scrollToServices} className={styles.primaryButton}>
              🌱 Plant My Visibility
            </button>
            <Link to="/services" className={styles.secondaryButton}>
              See All Plans
            </Link>
          </div>
        </div>
        <div className={styles.scrollCue} onClick={scrollToServices}>
          <span>Scroll to see plans</span>
          <FaArrowDown className={styles.scrollCueIcon} />
        </div>
        <div className={styles.heroGraphic}></div>
        <div className={styles.robotIcon}>
          <FaRobot />
        </div>
      </section>

      {/* Section Divider */}
      <div className={styles.sectionDivider}></div>

      {/* Services Section */}
      <section className={styles.services} id="pricing-plans">
        <div className={styles.servicesContent}>
          <div className={styles.contextSection}>
            <p className={styles.contextText}>
              🌍 Get found across Google, Gemini, ChatGPT, and more — our
              AI-driven local SEO helps you show up where your customers are
              already searching. No guesswork. Just growth.
            </p>
            <div className={styles.benefitIcons}>
              <div className={styles.contextBenefitIcon}>
                <span>🧠</span>
                <h4>Smarter Visibility</h4>
                <p>
                  We optimize your presence across major search engines{" "}
                  <em>and</em> AI chat platforms — so you're not just ranking,
                  you're recognized.
                </p>
              </div>
              <div className={styles.contextBenefitIcon}>
                <span>📊</span>
                <h4>Clarity You Can Measure</h4>
                <p>
                  Our AI-powered reports track your visibility, reach, and
                  growth — with insights you can actually use.
                </p>
              </div>
              <div className={styles.contextBenefitIcon}>
                <span>🤝</span>
                <h4>Partnership, Not Just Service</h4>
                <p>
                  We walk with you. Whether you're just getting started or
                  scaling fast, our support adapts to your stage and goals.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <h2>AI-Powered Visibility Plans</h2>
            <p>Choose the perfect plan for your business growth</p>
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
            <h2>AI-Powered Growth, Human-Centered Support</h2>
            <p>
              Why forward-thinking businesses choose Due Season Digital for
              their visibility needs.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {benefit.icon}
                <div className={styles.benefitContent}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
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
              href="https://www.facebook.com/profile.php?id=61577034625612"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/due-season-digital/"
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
