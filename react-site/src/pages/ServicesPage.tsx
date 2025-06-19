import { motion } from "framer-motion";
import {
  FaCheck,
  FaSeedling,
  FaLeaf,
  FaChartLine,
  FaTag,
} from "react-icons/fa";
import styles from "./ServicesPage.module.css";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-US").format(
      parseInt(price.replace(/,/g, ""))
    );
  };

  const getPeriodDisplay = (period: string) => {
    switch (period) {
      case "one-time":
        return "";
      case "pitch":
        return "/pitch";
      case "each":
        return "/each";
      case "post":
        return "/post";
      case "script":
        return "/script";
      case "page":
        return "/page";
      case "blog":
        return "/blog";
      case "month":
        return "/month";
      default:
        return `/${period}`;
    }
  };

  const packages = [
    {
      name: "Seed Package",
      description: "Start your journey to AI assistant recommendations.",
      fullPrice: "895",
      betaPrice: "675",
      period: "one-time",
      features: [
        "AI Assistant Recommendation Audit",
        "Google Business Profile Optimization for AI Trust",
        "Verified Listings Setup (Yelp, Bing, Apple, etc.)",
        "Basic Schema Markup for AI Understanding",
        "FAQ + Content Optimization for AI Recommendations",
        "'Ask the AI' Recommendation Report (PDF)",
        "AI Recommendation Strategy Guide",
      ],
      icon: <FaSeedling className={styles.packageIcon} />,
      popular: false,
    },
    {
      name: "Sprout Package",
      description: "Grow your AI-powered recommendation presence.",
      fullPrice: "749",
      betaPrice: "560",
      period: "month",
      setupFullPrice: "850",
      setupBetaPrice: "640",
      features: [
        "Everything in Seed, plus:",
        "Monthly AI-Optimized Content Creation",
        "Review Management for AI Trust",
        "Verified Directory Management (5/month)",
        "Monthly AI Recommendation Report",
        "Email Support",
        "1 Local Authority Building PR Pitch",
      ],
      icon: <FaLeaf className={styles.packageIcon} />,
      popular: true,
    },
    {
      name: "Harvest Package",
      description: "Maximize AI recommendations and authority.",
      fullPrice: "1,800",
      betaPrice: "1,350",
      period: "month",
      setupFullPrice: "2,999",
      setupBetaPrice: "2,250",
      features: [
        "Everything in Sprout, plus:",
        "Full Website AI Content Optimization",
        "Advanced Schema + AI Understanding",
        "2x Authority Building PR Pitches",
        "AI Recommendation Dashboard",
        "Quarterly AI Strategy Report",
        "Priority Support",
      ],
      icon: <FaChartLine className={styles.packageIcon} />,
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Blog/FAQ Post (AI-Optimized)",
      price: "250",
      period: "post",
      description:
        "Strategic content crafted to become the trusted source that AI assistants recommend. Includes schema markup, conversational optimization, and verification of facts that AI platforms prioritize.",
    },
    {
      name: "AI-Enhanced Content",
      price: "125",
      period: "post",
      description:
        "AI-generated content enhanced with human expertise and structured data. Perfect for building a foundation of trustworthy content that AI assistants can confidently recommend.",
    },
    {
      name: "Authority Building PR Pitch",
      price: "550",
      period: "pitch",
      description:
        "Strategic outreach to build verifiable authority that AI assistants recognize. Includes placement tracking and schema markup for maximum AI visibility.",
    },
    {
      name: "Trust Signals Management",
      price: "299",
      period: "month",
      description:
        "Comprehensive review and reputation management to build trust signals that AI assistants value. Includes automated collection, monitoring, and schema-enhanced display.",
    },
    {
      name: "AI Recommendation Audit",
      price: "325",
      period: "one-time",
      description:
        "In-depth analysis of how AI assistants currently view and recommend your business. Covers ChatGPT, Gemini, Bing Chat, and Perplexity with actionable optimization steps.",
    },
    {
      name: "Verified Profile Enhancement",
      price: "399",
      period: "one-time",
      description:
        "Comprehensive verification and optimization of your business profiles across platforms that AI assistants trust. Includes schema markup and authority building.",
    },
    {
      name: "AI Recommendation Analytics",
      price: "145",
      period: "month",
      description:
        "Track and analyze how often AI assistants recommend your business. Includes custom dashboard and AI-generated strategy insights.",
    },
    {
      name: "AI-Optimized Page Content",
      price: "175",
      period: "page",
      description:
        "Strategic page content designed to become the trusted source for AI recommendations. Includes schema markup and natural language optimization.",
    },
    {
      name: "Conversion Landing Page",
      price: "475",
      period: "page",
      description:
        "High-converting pages built with both human users and AI assistants in mind. Includes trust-building elements that AI platforms recognize.",
    },
    {
      name: "Multi-Format Content Script",
      price: "125",
      period: "script",
      description:
        "Repurpose your trusted content into engaging video scripts, maintaining consistency across platforms that AI assistants monitor.",
    },
    {
      name: "AI-Ready Website Foundation",
      price: "1,950",
      period: "one-time",
      description:
        "Complete website setup (1–3 pages) built to be easily understood and recommended by AI assistants. Includes schema markup and trust signal integration.",
    },
    {
      name: "Local Authority Page",
      price: "375",
      period: "page",
      description:
        "Location-specific pages built to dominate local AI recommendations. Includes verified local data, schema markup, and trust signals that AI assistants prioritize.",
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
          <p>
            Choose your path to becoming the trusted recommendation in
            AI-powered searches
          </p>
          <div className={styles.discountBadge}>
            <FaTag className={styles.discountIcon} />
            <span>
              Founding Client Offer: 25% off all packages for the first 10
              clients!
            </span>
          </div>
          <div className={styles.introText}>
            <p>
              We don't just help you rank — we help you become the business that
              AI assistants actively recommend. Through strategic content
              optimization, schema markup, and verified platform presence, we
              position your business as the trusted authority that AI platforms
              naturally suggest to users.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              margin: "2rem 0",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Link to="/geofaq" className={styles.ctaButton}>
              Learn How We Get You Recommended by AI
            </Link>
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
                  <span className={styles.amount}>
                    {formatPrice(pkg.fullPrice)}
                  </span>
                  {pkg.period !== "one-time" && (
                    <span className={styles.period}>
                      {getPeriodDisplay(pkg.period)}
                    </span>
                  )}
                </div>
                <div className={styles.betaPrice}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>
                    {formatPrice(pkg.betaPrice)}
                  </span>
                  {pkg.period !== "one-time" && (
                    <span className={styles.period}>
                      {getPeriodDisplay(pkg.period)}
                    </span>
                  )}
                </div>
                {pkg.setupFullPrice && (
                  <div className={styles.setup}>
                    <div className={styles.fullPrice}>
                      + ${formatPrice(pkg.setupFullPrice)} setup
                    </div>
                    <div className={styles.betaPrice}>
                      + ${formatPrice(pkg.setupBetaPrice)} setup
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
              <Link to="/contact" className={styles.ctaButton}>
                Get Started
              </Link>
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
                  <span className={styles.amount}>
                    {formatPrice(addOn.price)}
                  </span>
                  {addOn.period !== "one-time" && (
                    <span className={styles.period}>
                      {getPeriodDisplay(addOn.period)}
                    </span>
                  )}
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
                    <span className={styles.amount}>
                      {formatPrice(tier.price)}
                    </span>
                    <span className={styles.period}>
                      {getPeriodDisplay(tier.period)}
                    </span>
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
          <Link to="/contact" className={styles.ctaButton}>
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
