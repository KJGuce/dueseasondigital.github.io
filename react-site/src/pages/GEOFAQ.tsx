import React, { useState } from "react";
import styles from "./GEOFAQ.module.css";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the strategic process of optimizing your online presence to be actively recommended by AI assistants like ChatGPT, Google Gemini, Bing Chat, and Perplexity. Unlike traditional SEO that focuses on keyword ranking, GEO ensures your business becomes a trusted source that AI platforms naturally suggest when users ask questions in your industry.",
  },
  {
    question:
      "How do you ensure my business gets recommended by AI assistants, not just ranked?",
    answer:
      "We use a comprehensive approach that focuses on building trust signals that AI assistants value: 1) Creating authoritative, fact-verified content that AI platforms can confidently recommend, 2) Implementing advanced schema markup that helps AI understand your business details, 3) Maintaining verified profiles across trusted platforms, 4) Building local authority through strategic PR and content placement, and 5) Continuously monitoring and optimizing how AI assistants represent your business in their recommendations.",
  },
  {
    question: "Why is GEO important for my business?",
    answer:
      "As more consumers rely on AI assistants for recommendations, being merely visible isn't enough—you need to be actively recommended. AI platforms like ChatGPT and Gemini are becoming the new gatekeepers of business recommendations. GEO ensures your business is positioned as a trusted authority that these AI assistants confidently recommend to users seeking services in your industry.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "While traditional SEO focuses on keyword rankings, GEO optimizes for AI understanding and trust. This means creating content that AI assistants can verify and confidently recommend, implementing comprehensive schema markup for clear business understanding, maintaining verified profiles across trusted platforms, and building authority signals that AI systems recognize when making recommendations.",
  },
  {
    question: "What kind of businesses benefit most from GEO?",
    answer:
      "Any business that wants to be actively recommended by AI assistants can benefit from GEO. This is especially crucial for local businesses, service providers, and industry experts who want to be the top recommendation when users ask AI assistants for trusted providers. This includes: retail stores, restaurants, healthcare providers, home service professionals, legal and financial advisors, and hospitality businesses.",
  },
  {
    question: "What are some key strategies used in GEO?",
    answer:
      "Our key strategies focus on building trust signals that influence AI recommendations: 1) Creating authoritative, fact-verified content that answers user questions comprehensively, 2) Implementing advanced schema markup to help AI understand your business details and trustworthiness, 3) Optimizing Google Business Profiles and local citations for enhanced credibility, 4) Building verifiable authority through strategic content placement and PR, and 5) Maintaining consistent, verified information across all platforms that AI assistants reference.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer:
      "Initial improvements in AI recommendations can be seen within 2-3 months as we implement trust signals and optimize your content. More significant growth in recommendation frequency and authority typically occurs over 6-12 months as AI assistants increasingly recognize and trust your business as a reliable source in your industry.",
  },
  {
    question: "Can I combine GEO with my existing SEO efforts?",
    answer:
      "Absolutely! While traditional SEO helps with search engine visibility, GEO ensures you're actively recommended by AI assistants. The two strategies complement each other, creating a comprehensive approach that captures both traditional search traffic and the growing number of users who rely on AI assistants for recommendations.",
  },
  {
    question: "How does GEO impact voice search?",
    answer:
      "Voice search heavily relies on AI assistants to understand and answer queries. Our GEO strategies ensure your business is recommended in voice search results by optimizing for natural language understanding and building the trust signals that voice assistants rely on when making recommendations.",
  },
  {
    question: "How do you measure success in GEO?",
    answer:
      "We track multiple metrics to measure how often and confidently AI assistants recommend your business: 1) Recommendation frequency across major AI platforms, 2) Sentiment and context of AI-generated recommendations, 3) Verification status and trust signals across platforms, 4) Local authority indicators, and 5) Conversion rates from AI-driven recommendations.",
  },
  {
    question: "Is GEO suitable for small businesses?",
    answer:
      "Yes! GEO is particularly valuable for small businesses looking to compete with larger companies. By building strong trust signals and authority in your local market or niche, you can become the business that AI assistants confidently recommend—even over larger competitors with bigger marketing budgets.",
  },
  {
    question: "How can Due Season Digital help with GEO?",
    answer:
      "We specialize in making your business the trusted recommendation across AI platforms. Our comprehensive approach includes AI recommendation audits, trust signal optimization, schema markup implementation, authority building through strategic content and PR, and continuous monitoring of how AI assistants represent your business. We ensure you're not just visible, but actively recommended.",
  },
  {
    question: "How do I get started with GEO?",
    answer:
      "Start with our AI Recommendation Audit to see how AI assistants currently view and recommend your business. We'll analyze your trust signals, authority indicators, and current recommendation frequency to develop a strategic plan for becoming the go-to recommendation in your industry.",
  },
];

const GEOFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.geofaqPage}>
      <header className={styles.header}>
        <h1>AI Recommendation Optimization FAQ</h1>
        <p className={styles.subtitle}>
          Learn how we help your business become the trusted recommendation
          across AI assistants like ChatGPT, Gemini, and Bing Chat.
        </p>
      </header>
      <main className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <section key={idx} className={styles.faqItem}>
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
                className={styles.faqAnswer}
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </section>
        ))}
        <div className={styles.ctaSection}>
          <h2>
            Ready to become the #1 AI-recommended business in your industry?
          </h2>
          <p>
            Get your free AI Recommendation Audit and discover how we can
            position your business as the trusted choice that AI assistants
            actively suggest.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Your AI Recommendation Audit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default GEOFAQ;
