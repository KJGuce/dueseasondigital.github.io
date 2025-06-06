import { motion } from "framer-motion";
import { FaCrown, FaCheck, FaRocket } from "react-icons/fa";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const packages = [
    {
      name: "AI SEO Visibility Starter",
      description:
        "Perfect for small/local businesses wanting to be found by AI assistants and in local search.",
      price: "749",
      period: "one-time",
      features: [
        "AI & local search visibility audit",
        "Google Business Profile optimization",
        "Consistent listings management",
        "On-site SEO & FAQ/schema markup",
        "1x 'Ask the AI' visibility report",
        "Implementation checklist",
      ],
      icon: <FaRocket className={styles.packageIcon} />,
      popular: false,
    },
    {
      name: "AI SEO Growth",
      description:
        "For businesses ready to increase visibility, reputation, and ongoing results.",
      price: "399",
      period: "month",
      setup: "1,199",
      features: [
        "Everything in Starter, plus:",
        "Review & Reputation Accelerator",
        "Two Q&A blog posts or FAQs",
        "1 press release or local blog pitch",
        "Ongoing directory management",
        "Monthly 'Ask the AI' check/report",
        "Priority email support",
        "3-month minimum commitment",
      ],
      icon: <FaCrown className={styles.packageIcon} />,
      popular: true,
    },
    {
      name: "AI SEO VIP",
      description:
        "White-glove, done-for-you service with premium visibility and content.",
      price: "599",
      period: "month",
      setup: "2,499",
      features: [
        "Everything in Growth, plus:",
        "Website/landing page refresh",
        "Advanced schema and technical SEO",
        "Monthly blog or FAQ updates",
        "Two PR pitches to local/news media",
        "Quarterly strategy review",
      ],
      icon: <FaCrown className={styles.packageIcon} />,
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Review Management Only",
      price: "249",
      period: "month",
    },
    {
      name: "Q&A Content Booster",
      price: "195",
      period: "post",
    },
    {
      name: "Local Authority PR Blitz",
      price: "425",
      period: "pitch",
    },
    {
      name: "Profile Power-Up",
      price: "329",
      period: "one-time",
    },
    {
      name: "AI Visibility Audit/Report",
      price: "275",
      period: "one-time",
    },
    {
      name: "Website Starter",
      price: "1,350",
      period: "one-time",
    },
    {
      name: "Google Analytics Setup",
      price: "149",
      period: "one-time",
    },
    {
      name: "Ongoing Analytics & Report",
      price: "125",
      period: "month",
    },
  ];

  return (
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h1>Our Services</h1>
          <p>Choose the perfect package for your business needs</p>
        </motion.div>

        <div className={styles.packages}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.package} ${
                pkg.popular ? styles.popular : ""
              }`}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.packageHeader}>
                {pkg.icon}
                <h2>{pkg.name}</h2>
                <p>{pkg.description}</p>
              </div>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{pkg.price}</span>
                <span className={styles.period}>/{pkg.period}</span>
                {pkg.setup && (
                  <div className={styles.setup}>+ ${pkg.setup} setup</div>
                )}
              </div>
              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaButton}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.addOns}
        >
          <h2>Add-Ons & À La Carte</h2>
          <div className={styles.addOnsGrid}>
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={styles.addOn}
              >
                <h3>{addOn.name}</h3>
                <div className={styles.addOnPrice}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>{addOn.price}</span>
                  <span className={styles.period}>/{addOn.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={styles.custom}
        >
          <h2>Custom & Enterprise</h2>
          <p>
            Need something unique or have multiple locations? We're happy to
            build a custom solution!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Book a Free Strategy Call
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
