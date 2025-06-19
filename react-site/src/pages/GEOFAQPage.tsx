import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./GEOFAQPage.module.css";

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the strategic process of optimizing your online presence to become actively recommended by AI assistants like ChatGPT, Google Gemini, and Bing Chat. Unlike traditional SEO, GEO focuses on building trust signals and authority that AI platforms recognize when making recommendations.",
  },
  {
    question: "How does GEO differ from traditional SEO?",
    answer:
      "While traditional SEO focuses on keyword rankings in search results, GEO optimizes for AI understanding and trust. This includes implementing comprehensive schema markup, maintaining verified business profiles, creating authoritative content, and building trust signals that AI systems recognize when making recommendations to users.",
  },
  {
    question: "What are the key components of a GEO strategy?",
    answer:
      "A comprehensive GEO strategy includes: 1) Advanced schema markup implementation, 2) Authoritative content creation optimized for AI understanding, 3) Verified business profile management, 4) Strategic trust signal building, 5) Local authority development, and 6) Continuous monitoring and optimization of AI recommendations.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "We track multiple metrics including: recommendation frequency across major AI platforms, sentiment analysis of AI-generated recommendations, trust signal strength, local authority indicators, and conversion rates from AI-driven traffic. Our comprehensive analytics provide clear insights into your GEO performance.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer:
      "Initial improvements in AI recommendations can be seen within 2-3 months as we implement trust signals and optimize your content. More significant growth in recommendation frequency typically occurs over 6-12 months as AI assistants increasingly recognize your authority.",
  },
  {
    question: "What types of businesses benefit most from GEO?",
    answer:
      "Any business seeking to be actively recommended by AI assistants can benefit from GEO. This is particularly valuable for local businesses, service providers, and industry experts who want to be the top recommendation when users ask AI assistants for trusted providers in their field.",
  },
  {
    question: "How does GEO handle voice search optimization?",
    answer:
      "GEO naturally optimizes for voice search by focusing on conversational content and natural language understanding. Our approach ensures your business is recommended in both text and voice-based AI interactions, capturing the growing voice search market.",
  },
  {
    question: "What role does schema markup play in GEO?",
    answer:
      "Schema markup is crucial in GEO as it helps AI assistants understand your business details, services, and authority. We implement comprehensive schema markup that clearly communicates your business information in a way AI platforms can confidently process and recommend.",
  },
  {
    question: "How do you ensure accurate AI recommendations?",
    answer:
      "We maintain consistent, verified information across all platforms that AI assistants reference, implement detailed schema markup, and regularly monitor how AI platforms represent your business. This ensures recommendations are accurate and aligned with your services.",
  },
  {
    question: "Can GEO work alongside traditional SEO efforts?",
    answer:
      "Absolutely! GEO complements traditional SEO by optimizing for both search engines and AI assistants. This creates a comprehensive digital presence that captures traffic from both traditional search and AI-powered recommendations.",
  },
  {
    question: "What makes Due Season Digital's GEO approach unique?",
    answer:
      "Our approach focuses on building lasting authority that AI assistants trust. We combine technical expertise in schema markup and structured data with strategic content optimization and trust signal building, ensuring your business becomes a consistently recommended source.",
  },
  {
    question: "How do I get started with GEO?",
    answer:
      "Start with our comprehensive AI Recommendation Audit. We'll analyze how AI assistants currently view your business and develop a strategic plan to increase your recommendation frequency and authority across all major AI platforms.",
  },
];

const GEOFAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Prepare FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={styles.faqPage}>
      <Helmet>
        <title>
          GEO FAQ - Generative Engine Optimization Explained | Due Season
          Digital
        </title>
        <meta
          name="description"
          content="Learn about Generative Engine Optimization (GEO) and how it helps your business get actively recommended by AI assistants like ChatGPT, Google Gemini, and Bing Chat."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Generative Engine Optimization FAQ</h1>
          <p className={styles.subtitle}>
            Everything you need to know about getting recommended by AI
            assistants
          </p>
        </header>

        <section className={styles.faqSection}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.question}</span>
                <span className={styles.faqToggle}>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className={styles.faqAnswer}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to optimize for AI recommendations?</h2>
          <p>
            Get your free AI Recommendation Audit and discover how we can
            position your business as the trusted choice that AI assistants
            actively suggest.
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
        </section>
      </div>
    </div>
  );
};

export default GEOFAQPage;
