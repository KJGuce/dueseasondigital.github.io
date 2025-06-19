import React, { useState } from "react";
import styles from "./GEOFAQ.module.css";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the process of optimizing your website and online presence to rank highly in AI-powered search assistants and generative engines such as ChatGPT, Google Gemini, Bing Chat, and Perplexity. Unlike traditional SEO, which focuses on keyword ranking on search engines like Google, GEO targets conversational AI platforms where users ask natural language questions and get AI-generated answers.",
  },
  {
    question: "Why is GEO important for my business?",
    answer:
      "More consumers are turning to AI assistants and chatbots to find products, services, and local businesses. If your business isn't optimized for these AI platforms, you risk losing visibility to competitors who are. GEO helps you stay ahead by ensuring your business appears in AI-generated responses, voice searches, and conversational queries—capturing a growing segment of the market.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "While traditional SEO focuses on ranking your website for specific keywords in search engine results pages (SERPs), GEO optimizes for the way AI assistants understand and generate answers from multiple sources. This means GEO emphasizes conversational content, FAQ optimization, structured data (schema markup), and local business signals that AI engines use to generate accurate and relevant responses.",
  },
  {
    question: "What kind of businesses benefit most from GEO?",
    answer:
      "Businesses that rely on local customers and service-oriented queries benefit greatly from GEO, including: retail stores and restaurants, healthcare providers, home service professionals (plumbers, electricians), legal and financial advisors, hospitality and tourism businesses. However, any business looking to stay competitive in the evolving digital landscape should consider GEO as part of their marketing strategy.",
  },
  {
    question: "What are some key strategies used in GEO?",
    answer:
      "Key GEO strategies include: creating conversational, natural language content that answers common customer questions; optimizing FAQ sections with schema markup to increase chances of being featured in AI-generated answers; enhancing Google Business Profiles and local citations to improve local AI search visibility; monitoring AI assistant traffic and adjusting content based on emerging trends; using structured data to help AI better interpret your website information.",
  },
  {
    question: "How long does it take to see results from GEO?",
    answer:
      "GEO is an evolving field, and results depend on factors like your industry, current online presence, and competition. Generally, you can expect to see initial improvements within 2-3 months, with more significant growth over 6-12 months as AI assistants increasingly drive search traffic.",
  },
  {
    question: "Can I combine GEO with my existing SEO efforts?",
    answer:
      "Absolutely! GEO complements traditional SEO and should be part of a holistic digital marketing strategy. While traditional SEO focuses on search engines, GEO ensures your content and business are optimized for the growing number of users searching via AI assistants and conversational platforms.",
  },
  {
    question: "How does GEO impact voice search?",
    answer:
      "Voice search is a subset of AI-powered search where users speak their queries instead of typing them. GEO's focus on natural language content and conversational queries naturally improves your chances of appearing in voice search results, capturing voice-driven traffic from smart speakers and mobile assistants.",
  },
  {
    question: "How do you measure success in GEO?",
    answer:
      "Success is measured by tracking increased traffic coming from AI-powered search assistants; improved rankings for conversational queries and FAQs; growth in local business visibility and engagement; leads and conversions generated through AI assistant interactions. Specialized analytics tools and AI-focused performance metrics are used for transparent reporting.",
  },
  {
    question: "Is GEO suitable for small businesses?",
    answer:
      "Yes! GEO is especially beneficial for small and local businesses that want to compete with larger companies by being discoverable where customers are asking questions—in AI assistants and voice search. It's a cost-effective way to future-proof your online presence.",
  },
  {
    question: "How can Due Season Digital help with GEO?",
    answer:
      "Due Season Digital specializes in GEO services tailored to your unique business needs. We provide comprehensive audits, conversational content creation, schema optimization, local AI search enhancement, and ongoing performance tracking to ensure your business thrives in the new AI-driven search landscape.",
  },
  {
    question: "How do I get started with GEO?",
    answer:
      "Start by contacting us for a free consultation or an AI search readiness audit. We'll assess your current online presence and develop a custom GEO strategy designed to boost your visibility in AI-powered search engines and assistants.",
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
        <h1>Generative Engine Optimization (GEO) FAQ</h1>
        <p className={styles.subtitle}>
          Everything you need to know about optimizing for AI-powered search
          assistants and generative engines.
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
          <h2>Ready to future-proof your business?</h2>
          <p>
            Schedule a free consultation or request a GEO audit to see how your
            business can stand out in AI-powered search.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Schedule a Free Consultation
          </Link>
        </div>
      </main>
    </div>
  );
};

export default GEOFAQ;
