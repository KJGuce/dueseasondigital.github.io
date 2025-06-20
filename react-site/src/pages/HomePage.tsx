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
  FaChartArea,
  FaTrophy,
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
import { motion as motionLink } from "framer-motion";
import PackageCard from "../components/PackageCard";

const MotionLink = motionLink(Link);

const HomePage: React.FC = () => {
  const packages = [
    {
      name: "Seed Package",
      description: "Perfect foundation for AI assistant visibility.",
      fullPrice: "799",
      betaPrice: "599",
      period: "one-time",
      features: [
        "Comprehensive AI Recommendation Audit",
        "Google Business Profile GEO Optimization",
        "Verified Listings Setup (Yelp, Bing, Apple, etc.)",
        "Basic Schema Markup Implementation",
        "FAQ + Content Optimization for AI",
        "AI Recommendation Strategy Guide",
        "30-Day Support & Optimization",
      ],
      icon: <FaSeedling className={styles.packageIcon} />,
      cta: "🌱 Start My GEO Journey",
      link: "/contact",
      popular: false,
    },
    {
      name: "Sprout Package",
      description: "Essential GEO foundation for growing businesses.",
      fullPrice: "299",
      betaPrice: "224",
      period: "month",
      setupFee: "997",
      setupBetaFee: "748",
      features: [
        "AI-Optimized Google Business Profile",
        "Verified Directory Management (5/month)",
        "Monthly AI Recommendation Reports",
        "1 Local Authority Building PR Pitch",
        "Quarterly Strategy Reviews",
        "Email Support",
      ],
      icon: <FaLeaf className={styles.packageIcon} />,
      cta: "🌿 Grow My AI Presence",
      link: "/contact",
      popular: true,
      commitment: "3-month minimum",
      annualDiscount: "10% off annual prepayment",
    },
    {
      name: "Grow Package",
      description: "Advanced GEO strategy for established businesses.",
      fullPrice: "499",
      betaPrice: "374",
      period: "month",
      setupFee: "1499",
      setupBetaFee: "1124",
      features: [
        "Everything in Sprout Package",
        "Full Website AI Content Optimization",
        "Advanced Schema Markup & AI Understanding",
        "2x Authority Building PR Pitches",
        "AI Recommendation Dashboard Access",
        "Monthly Analytics + AI Summary Reports",
        "Quarterly AI Strategy Reports",
        "Priority Support",
        "Custom AI Training for Your Industry",
      ],
      icon: <FaChartArea className={styles.packageIcon} />,
      cta: "📈 Scale My AI Authority",
      link: "/contact",
      popular: false,
      commitment: "6-month minimum",
      annualDiscount: "10% off annual prepayment",
      paymentPlan: "Flexible setup payment options",
    },
    {
      name: "Harvest Package",
      description: "Complete GEO domination for industry leaders.",
      fullPrice: "649",
      betaPrice: "487",
      period: "month",
      setupFee: "2799",
      setupBetaFee: "2099",
      features: [
        "Everything in Grow Package",
        "Comprehensive AI Content Strategy",
        "Advanced Schema + AI Understanding",
        "3x Authority Building PR Pitches",
        "Custom AI Recommendation Dashboard",
        "Weekly AI Visibility Reports",
        "Monthly Strategy Calls",
        "Dedicated Account Manager",
        "Priority Support (24-hour response)",
        "Industry-Specific AI Training",
        "Competitive AI Analysis",
      ],
      icon: <FaTrophy className={styles.packageIcon} />,
      cta: "🏆 Dominate AI Search",
      link: "/contact",
      popular: false,
      isVip: true,
      commitment: "6-12 month minimum",
      annualDiscount: "10% off annual prepayment",
      paymentPlan: "Flexible setup payment options",
    },
  ];

  const benefits = [
    {
      icon: <FaBrain className={styles.benefitIcon} />,
      title: "AI-First Recommendation Strategy",
      description:
        "We specialize in Generative Engine Optimization (GEO), crafting authoritative content and optimizing your presence to become the trusted source that AI assistants actively recommend.",
    },
    {
      icon: <FaStar className={styles.benefitIcon} />,
      title: "Local Market Authority",
      description:
        "Build trust through optimized Google Business Profiles, industry directories, and local content that AI assistants recognize and recommend in your market.",
    },
    {
      icon: <FaMapMarkerAlt className={styles.benefitIcon} />,
      title: "Multi-Platform AI Visibility",
      description:
        "Get actively recommended across ChatGPT, Google Gemini, Bing Chat, and Perplexity — wherever customers ask AI assistants for recommendations.",
    },
    {
      icon: <FaHandshake className={styles.benefitIcon} />,
      title: "True Partnership",
      description:
        "We're invested in your growth, providing personalized strategies to establish your business as a trusted recommendation in AI-powered searches.",
    },
    {
      icon: <FaBullseye className={styles.benefitIcon} />,
      title: "AI Recommendation Metrics",
      description:
        "Track how often AI assistants recommend your business with our comprehensive reports covering ChatGPT, Gemini, Bing Chat, and more.",
    },
    {
      icon: <FaHeart className={styles.benefitIcon} />,
      title: "Your AI Success Story",
      description:
        "We're committed to making your business the go-to recommendation when customers ask AI assistants about your industry.",
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
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get Actively Recommended by AI Assistants with Generative Engine
              Optimization (GEO)
            </motion.span>
          </h1>
          <p className={styles.heroSubtitle}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We don't just help you rank — we help you get recommended by AI
              assistants like ChatGPT, Google Gemini, Bing Chat, Perplexity,
              YouChat, Anthropic Claude, and more. Our GEO strategy ensures your
              business becomes the trusted source that AI platforms actively
              suggest to users.
            </motion.span>
          </p>
          <div className={styles.heroCta}>
            <Link to="/contact" className={styles.primaryButton}>
              🌱 Plant My Visibility
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              See All Plans
            </Link>
            <Link to="/geofaq" className={styles.secondaryButton}>
              Learn more about GEO
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
              🌍 Get actively recommended by ChatGPT, Gemini, Bing Chat, and
              more — our GEO-driven approach ensures AI assistants recognize and
              suggest your business to potential customers. Beyond rankings, we
              focus on becoming the trusted source that AI platforms naturally
              recommend.
            </p>
            <div className={styles.benefitIcons}>
              <div className={styles.contextBenefitIcon}>
                <span>🧠</span>
                <h4>AI-Powered Recommendations</h4>
                <p>
                  We optimize your presence so AI assistants don't just find you
                  — they actively recommend you as a trusted solution to user
                  queries.
                </p>
              </div>
              <div className={styles.contextBenefitIcon}>
                <span>📊</span>
                <h4>Recommendation Tracking</h4>
                <p>
                  Our AI-powered reports show how often you're recommended
                  across platforms, with actionable insights to increase
                  recommendation frequency.
                </p>
              </div>
              <div className={styles.contextBenefitIcon}>
                <span>🤝</span>
                <h4>Strategic AI Partnership</h4>
                <p>
                  We help you build authority that AI assistants trust and
                  recommend, adapting our approach as AI platforms evolve.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <h2>GEO-Powered Visibility Plans</h2>
            <p>
              Choose the perfect plan to boost your AI assistant search ranking
            </p>
          </div>

          <motion.div
            className={styles.founderDiscountBanner}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.discountBadge}>
              <FaTag className={styles.discountIcon} />
              <span>Founding Client Special: 25% Off All Packages</span>
            </div>
            <p className={styles.discountSubtext}>
              Be one of our first 10 clients and save 25% on all packages plus
              add-ons!
            </p>
          </motion.div>

          <div className={styles.packagesGrid}>
            {packages.map((pkg, index) => (
              <PackageCard pkg={pkg} index={index} key={pkg.name} />
            ))}
          </div>
          <motion.div
            className={styles.postSectionCTA}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p>Not sure which plan is right for you?</motion.p>
            <a
              href="https://calendly.com/kristenjoy-dueseasondigital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCtaButton}
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs} id="why-dsd">
        <div className={styles.whyUsContent}>
          <div className={styles.sectionHeader}>
            <h2>GEO-Powered Growth, Human-Centered Support</h2>
            <p>
              Why forward-thinking businesses choose Due Season Digital for
              their GEO and AI assistant search optimization needs.
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
            <a
              href="https://calendly.com/kristenjoy-dueseasondigital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCtaButton}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Client Success Stories</h2>
            <p>
              See what our clients say about our GEO and AI assistant search
              optimization services
            </p>
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
            Ready to Transform Your GEO?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the GEO revolution and start ranking higher in AI-powered
            search today
          </motion.p>
          <Link to="/contact" className={styles.primaryButton}>
            Chat With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
