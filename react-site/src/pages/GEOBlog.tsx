import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./GEOBlog.module.css";

const upcomingArticles = [
  {
    title: "Understanding AI Assistant Recommendations: A Complete Guide",
    description:
      "Learn how AI assistants like ChatGPT and Google Gemini evaluate and recommend businesses to users.",
    status: "Coming Soon",
  },
  {
    title: "Schema Markup for AI Understanding: Best Practices",
    description:
      "Discover how to implement schema markup that helps AI assistants better understand and recommend your business.",
    status: "Coming Soon",
  },
  {
    title: "Building Trust Signals for AI Recommendations",
    description:
      "Explore strategies for establishing your business as a trusted source that AI platforms confidently recommend.",
    status: "Coming Soon",
  },
  {
    title: "Voice Search Optimization in the Age of AI",
    description:
      "Learn how to optimize your content for both text and voice-based AI interactions.",
    status: "Coming Soon",
  },
];

const GEOBlog: React.FC = () => {
  return (
    <div className={styles.blogPage}>
      <Helmet>
        <title>
          GEO Blog - AI Recommendation Insights | Due Season Digital
        </title>
        <meta
          name="description"
          content="Stay updated with the latest insights, strategies, and best practices for Generative Engine Optimization (GEO) and AI assistant recommendations."
        />
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>GEO Insights Blog</h1>
          <p className={styles.subtitle}>
            Expert insights on optimizing for AI recommendations
          </p>
        </header>

        <section className={styles.comingSoon}>
          <div className={styles.comingSoonContent}>
            <h2>Blog Articles Coming Soon</h2>
            <p>
              We're preparing in-depth articles about Generative Engine
              Optimization (GEO) and strategies for becoming actively
              recommended by AI assistants. Check back soon for expert insights
              and practical guides.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                Get Your AI Recommendation Audit
              </Link>
              <Link
                to="/generative-engine-optimization"
                className={styles.secondaryButton}
              >
                Learn More About GEO
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.upcomingArticles}>
          <h2>Upcoming Articles</h2>
          <div className={styles.articleGrid}>
            {upcomingArticles.map((article, index) => (
              <div key={index} className={styles.articleCard}>
                <span className={styles.articleStatus}>{article.status}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.subscribe}>
          <div className={styles.subscribeContent}>
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to be notified when we publish new
              insights about GEO and AI recommendation strategies.
            </p>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                aria-label="Email address"
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GEOBlog;
