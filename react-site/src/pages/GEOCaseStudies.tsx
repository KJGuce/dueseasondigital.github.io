import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./GEOCaseStudies.module.css";

const GEOCaseStudies: React.FC = () => {
  return (
    <div className={styles.caseStudiesPage}>
      <Helmet>
        <title>
          GEO Case Studies - AI Recommendation Success Stories | Due Season
          Digital
        </title>
        <meta
          name="description"
          content="Discover how businesses are succeeding with Generative Engine Optimization (GEO) and becoming top recommendations by AI assistants like ChatGPT and Google Gemini."
        />
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>GEO Success Stories</h1>
          <p className={styles.subtitle}>
            Real results from businesses optimizing for AI recommendations
          </p>
        </header>

        <section className={styles.comingSoon}>
          <div className={styles.comingSoonContent}>
            <h2>Case Studies Coming Soon</h2>
            <p>
              We're currently documenting the success stories of businesses
              using our GEO strategies to become actively recommended by AI
              assistants. Check back soon to see detailed case studies and
              results.
            </p>
            <p>
              In the meantime, learn how we can help your business become a
              trusted recommendation across all major AI platforms.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/due-season-index" className={styles.primaryButton}>
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

        <section className={styles.whatToExpect}>
          <h2>What to Expect in Our Case Studies</h2>
          <div className={styles.expectationGrid}>
            <div className={styles.expectationCard}>
              <h3>Measurable Results</h3>
              <p>
                See real data on how businesses increased their AI
                recommendation frequency and quality across major platforms.
              </p>
            </div>
            <div className={styles.expectationCard}>
              <h3>Implementation Details</h3>
              <p>
                Learn about the specific GEO strategies and optimizations that
                led to improved AI visibility.
              </p>
            </div>
            <div className={styles.expectationCard}>
              <h3>Timeline & Progress</h3>
              <p>
                Understand the typical timeline for seeing results and how
                businesses maintained their AI recommendation authority.
              </p>
            </div>
            <div className={styles.expectationCard}>
              <h3>Business Impact</h3>
              <p>
                Discover how increased AI recommendations translated into real
                business growth and customer acquisition.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GEOCaseStudies;
