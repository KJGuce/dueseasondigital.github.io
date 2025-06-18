import { motion } from "framer-motion";
import {
  FaCrown,
  FaCheck,
  FaRocket,
  FaGem,
  FaSeedling,
  FaLeaf,
  FaChartLine,
  FaTag,
} from "react-icons/fa";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
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
        "Everything in Seed, plus:",
        "Monthly Blog/FAQ Post (AI optimized + edited)",
        "Review Automation System",
        "Directory Management (5/month)",
        "Monthly AI Visibility Report",
        "Email Support",
        "1 Local PR Pitch (Month 2)",
      ],
      icon: <FaLeaf className={styles.packageIcon} />,
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
        "Everything in Sprout, plus:",
        "Full Website Refresh (up to 5 pages – copy + design)",
        "Advanced Schema + Technical SEO",
        "2x PR Pitches (Quarterly)",
        "Brand Visibility Dashboard",
        "Quarterly Strategy Report",
        "Priority Support",
      ],
      icon: <FaChartLine className={styles.packageIcon} />,
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Blog/FAQ Post (AI Optimized)",
      price: "250",
      period: "post",
      description:
        "Crafted using AI and refined for clarity, SEO, and AI assistant visibility. Great for FAQ content, local rankings, and search dominance.",
    },
    {
      name: "AI Content + Light Human Edit",
      price: "125",
      period: "post",
      description:
        "Quick, lightweight version of blog content. AI-generated with light polishing—ideal for clients on a budget.",
    },
    {
      name: "Local PR Pitch",
      price: "550",
      period: "each",
      description:
        "Written and sent to a relevant local or industry outlet. Includes a pitch angle and tracking sheet.",
    },
    {
      name: "Review Management (Standalone)",
      price: "299",
      period: "month",
      description:
        "Includes review request automation (email/SMS), platform monitoring, and monthly performance summaries.",
    },
    {
      name: "AI Audit & Visibility Report",
      price: "325",
      period: "one-time",
      description:
        "Manual and AI-powered audit of ChatGPT, Gemini, Perplexity, and Google visibility. Includes screenshots, recommendations, and PDF delivery.",
    },
    {
      name: "Profile Power-Up",
      price: "399",
      period: "one-time",
      description:
        "Includes logo + photo updates and consistent branding across Google, Yelp, Bing, Apple, and Facebook listings.",
    },
    {
      name: "Monthly Analytics Summary",
      price: "145",
      period: "month",
      description:
        "Visual Looker Studio dashboard + AI-generated insights from GA4 and GSC. Delivered as PDF or Notion embed.",
    },
    {
      name: "Website Copywriting",
      price: "175",
      period: "page",
      description:
        "Custom, SEO-aligned copy for any core web page. Includes brand voice matching and headline structure.",
    },
    {
      name: "Landing Page (Conversion-Optimized)",
      price: "475",
      period: "page",
      description:
        "AI-informed, conversion-driven landing pages tailored for service pages, lead magnets, or campaigns.",
    },
    {
      name: "Reel/Short Script",
      price: "125",
      period: "script",
      description:
        "Short-form script written from blog content for use in Instagram Reels, TikToks, or YouTube Shorts.",
    },
    {
      name: "Website Starter",
      price: "1,950",
      period: "one-time",
      description:
        "Done-for-you design and content using Dorik, Framer, or Webflow Lite. Optimized for mobile and local SEO.",
    },
  ];

  const socialBooster = {
    name: "Social Visibility Booster",
    description:
      "Add-on that turns every blog into branded, scroll-stopping social content.",
    tiers: [
      {
        name: "Copy-Only",
        price: "150",
        period: "blog",
        features: ["3–5 captions w/ hashtags", "CTA suggestions"],
      },
      {
        name: "Copy + Canva Graphics",
        price: "325",
        period: "blog",
        features: ["3–5 captions", "3–5 branded visuals", "1 infographic"],
      },
      {
        name: "Full Post Pack",
        price: "450",
        period: "blog",
        features: [
          "All of the above",
          "1 short-form script",
          "Posting schedule PDF",
        ],
      },
    ],
  };

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
          <div className={styles.discountBadge}>
            <FaTag className={styles.discountIcon} />
            <span>
              Founding Client Offer: 25% off all packages for the first 10
              clients!
            </span>
          </div>
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
          <h2>Add-Ons & À La Carte Enhancements</h2>
          <p className={styles.addOnsSubtitle}>
            Enhance your visibility with our specialized services
          </p>
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
                <p className={styles.addOnDescription}>{addOn.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={styles.socialBooster}
          >
            <h3>{socialBooster.name}</h3>
            <p>{socialBooster.description}</p>
            <div className={styles.socialBoosterTiers}>
              {socialBooster.tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={styles.socialBoosterTier}
                >
                  <h4>{tier.name}</h4>
                  <div className={styles.tierPrice}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{tier.price}</span>
                    <span className={styles.period}>/{tier.period}</span>
                  </div>
                  <ul className={styles.tierFeatures}>
                    {tier.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
