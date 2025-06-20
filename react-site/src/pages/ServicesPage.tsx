import { motion } from "framer-motion";
import {
  FaCheck,
  FaSeedling,
  FaLeaf,
  FaChartArea,
  FaTrophy,
  FaTag,
} from "react-icons/fa";
import styles from "./ServicesPage.module.css";
import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";

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

  const addOns = [
    {
      name: "Blog/FAQ Post (AI & GEO-Optimized)",
      price: "225",
      period: "post",
      description:
        "Strategic content crafted to become the trusted source that AI assistants recommend. Includes schema markup, conversational optimization, and verification of facts that AI platforms prioritize.",
      hours: "3-4 hours",
      clientType: "All packages",
    },
    {
      name: "🔧 AI SEO Health Check & Technical Fixes",
      price: "325",
      period: "one-time",
      description:
        "A deep scan and fix for critical technical SEO issues (crawl errors, schema, page speed) that block AI indexing, with a detailed health report.",
      hours: "2-3 hours",
      clientType: "All packages",
    },
    {
      name: "AI Visibility Report Refresh",
      price: "175",
      period: "report",
      description:
        "Updated analysis of your AI assistant visibility every 3-6 months. Tracks changes across ChatGPT, Gemini, Bing Chat, and Perplexity with actionable insights.",
      hours: "2-3 hours",
      clientType: "Seed, Sprout",
    },
    {
      name: "Profile Power-Up (Visual Branding on Listings)",
      price: "349",
      period: "one-time",
      description:
        "Enhanced visual branding across all business listings with custom graphics, optimized photos, and branded elements that AI assistants recognize.",
      hours: "4-5 hours",
      clientType: "All packages",
    },
    {
      name: "Review Management",
      price: "279",
      period: "month",
      description:
        "Comprehensive review collection, monitoring, and response management to build trust signals that AI assistants value and recommend.",
      hours: "5-6 hours/month",
      clientType: "Sprout, Grow, Harvest",
    },
    {
      name: "Google Analytics Setup + AI Visibility Dashboard",
      price: "175",
      period: "one-time",
      description:
        "Complete Google Analytics setup with custom AI visibility tracking dashboard to monitor recommendation frequency across platforms.",
      hours: "3-4 hours",
      clientType: "All packages",
    },
    {
      name: "Monthly Analytics + AI Summary Report",
      price: "125",
      period: "month",
      description:
        "Monthly analysis of your AI visibility performance with actionable insights and strategy recommendations for improvement.",
      hours: "2-3 hours/month",
      clientType: "Sprout, Grow, Harvest",
    },
    {
      name: "AI/SEO Landing Page",
      price: "425",
      period: "page",
      description:
        "High-converting landing pages optimized for both human users and AI assistants. Includes schema markup and trust-building elements.",
      hours: "6-8 hours",
      clientType: "Grow, Harvest",
    },
    {
      name: "Monthly Reel/Short Script",
      price: "95",
      period: "post",
      description:
        "Engaging short-form video scripts optimized for social platforms that AI assistants monitor for trending content and recommendations.",
      hours: "1-2 hours",
      clientType: "All packages",
    },
    {
      name: "Social Post Package (3-5 posts)",
      price: "125",
      period: "month",
      description:
        "Monthly social media content package with 3-5 posts optimized for AI assistant recognition and social proof building.",
      hours: "3-4 hours/month",
      clientType: "Sprout, Grow, Harvest",
    },
    {
      name: "Local PR Pitch",
      price: "450",
      period: "pitch",
      description:
        "Strategic local media outreach to build verifiable authority that AI assistants recognize and trust for recommendations.",
      hours: "5-6 hours",
      clientType: "Sprout, Grow, Harvest",
    },
    {
      name: "AI Audit & Report",
      price: "299",
      period: "one-time",
      description:
        "Comprehensive AI assistant visibility audit covering ChatGPT, Gemini, Bing Chat, and Perplexity with detailed optimization recommendations.",
      hours: "4-5 hours",
      clientType: "All packages",
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
          <p>
            Choose your path to becoming the trusted recommendation in
            AI-powered searches
          </p>
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

        <div className={styles.packages}>
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              pkg={{ ...pkg, cta: "Get Started", link: "/contact" }}
              index={index}
            />
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
