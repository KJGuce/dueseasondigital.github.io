import React from "react";
import styles from "./OriginalLandingPage.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LandingPageAISEO: React.FC = () => (
  <>
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.logoHeroWrap}>
          <div className={styles.logoSunrays}>
            {/* Animated sun rays SVG */}
            <svg
              width="100"
              height="60"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g className={styles.sunraysGroup}>
                <rect
                  x="48"
                  y="0"
                  width="4"
                  height="18"
                  rx="2"
                  fill="var(--color-gold)"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="80"
                  y="10"
                  width="4"
                  height="18"
                  rx="2"
                  transform="rotate(30 80 10)"
                  fill="var(--color-gold)"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="16"
                  y="10"
                  width="4"
                  height="18"
                  rx="2"
                  transform="rotate(-30 16 10)"
                  fill="var(--color-gold)"
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            </svg>
            <a href="/" className={`${styles.logo} ${styles.fadeIn}`}>
              <img
                src="/DSDlogo1.png"
                alt="Due Season Digital Logo"
                style={{
                  height: 60,
                  width: "auto",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: 12,
                }}
              />
              Due Season Digital
            </a>
          </div>
        </div>
        <h1 className={styles.slideInUp}>
          <span className={styles.highlight}>Get Discovered by AI</span> — Put
          Your Business in the Spotlight of ChatGPT, Gemini & Answer Engines
          with GEO
        </h1>
        <p className={styles.slideInUp}>
          We help local businesses and entrepreneurs become the top
          recommendation for AI-powered search results and generative answer
          engines. GEO (Generative Engine Optimization) is how you get found by
          AI assistants like ChatGPT, Gemini, and Bing Chat. Ready to own your
          "Due Season"?
        </p>
        <a
          href="#due-season-index"
          className={`${styles.btnCta} ${styles.slideInUp}`}
        >
          <span className={styles.btnIcon} aria-hidden="true">
            🤖
          </span>{" "}
          Get Your Free GEO Audit
        </a>
        <div className={`${styles.heroGraphic} ${styles.fadeIn}`}></div>
      </div>
    </header>

    <section className={styles.services}>
      <div className={styles.servicesBgAnimated} aria-hidden="true"></div>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.slideInUp}`}>
          <span className={styles.servicesHeaderAccent} aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="14" cy="14" r="3" fill="var(--color-gold)" />
                <circle
                  cx="6"
                  cy="6"
                  r="1.5"
                  fill="var(--color-primary-accent)"
                />
                <circle cx="22" cy="8" r="1.2" fill="var(--color-green)" />
                <circle cx="8" cy="22" r="1" fill="var(--color-gold)" />
              </g>
            </svg>
          </span>
          <h2>GEO Services</h2>
          <p>
            Modern GEO for the age of AI — make sure your business is "findable"
            by the AI assistants and answer engines that matter most.
          </p>
        </div>
        <div className={`${styles.servicesGraphic} ${styles.fadeIn}`}></div>
        <div className={styles.servicesGrid}>
          <article className={`${styles.serviceCard} ${styles.slideInUp}`}>
            <i className="fas fa-brain"></i>
            <h3>GEO & LLM Visibility</h3>
            <p>
              Optimize your online presence so that AI models like ChatGPT,
              Gemini, and Perplexity mention your business first in generative
              results.
            </p>
          </article>
          <article
            className={`${styles.serviceCard} ${styles.slideInUp}`}
            style={{ animationDelay: "0.1s" }}
          >
            <i className="fas fa-robot"></i>
            <h3>GEO-Driven Content & Schema</h3>
            <p>
              We craft content and structure your site with the exact schema and
              signals AI needs to recommend you in generative answer engines.
            </p>
          </article>
          <article
            className={`${styles.serviceCard} ${styles.slideInUp}`}
            style={{ animationDelay: "0.2s" }}
          >
            <i className="fas fa-map-marker-alt"></i>
            <h3>Local GEO Profile Optimization</h3>
            <p>
              Ensure your Google Business Profile, reviews, and directories are
              optimized for GEO and AI assistant discovery.
            </p>
          </article>
          <article
            className={`${styles.serviceCard} ${styles.slideInUp}`}
            style={{ animationDelay: "0.3s" }}
          >
            <i className="fas fa-chart-line"></i>
            <h3>LLM GEO Audit & Analytics</h3>
            <p>
              Get actionable reporting: How visible is your brand in ChatGPT,
              Gemini, and AI-powered platforms? We'll show you—and help you win
              with GEO.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutVisuals}>
          {/* Animated Water Droplets SVG (rain effect) */}
          <div
            className={styles.waterDroplets}
            aria-hidden="true"
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <svg
              width="80"
              height="70"
              viewBox="0 0 80 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={styles.dropletGroup}>
                <ellipse
                  className={styles.droplet}
                  cx="10"
                  cy="10"
                  rx="3"
                  ry="7"
                  fill="var(--color-primary-accent)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="25"
                  cy="20"
                  rx="2.5"
                  ry="6"
                  fill="var(--color-text-dark)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="40"
                  cy="8"
                  rx="2.5"
                  ry="6"
                  fill="var(--color-primary-accent)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="60"
                  cy="18"
                  rx="2"
                  ry="5"
                  fill="var(--color-text-dark)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="70"
                  cy="30"
                  rx="2"
                  ry="5"
                  fill="var(--color-primary-accent)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="20"
                  cy="40"
                  rx="1.5"
                  ry="4"
                  fill="var(--color-text-dark)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="55"
                  cy="50"
                  rx="1.5"
                  ry="4"
                  fill="var(--color-primary-accent)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="35"
                  cy="60"
                  rx="1"
                  ry="3"
                  fill="var(--color-primary-accent)"
                />
                <ellipse
                  className={styles.droplet}
                  cx="50"
                  cy="65"
                  rx="0.8"
                  ry="2"
                  fill="var(--color-text-dark)"
                />
              </g>
            </svg>
          </div>
          {/* Placeholder for the team image */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Due Season Digital Team"
            srcSet="
              https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,
              https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80 1200w,
              https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 1950w
            "
            sizes="(max-width: 600px) 800px, (max-width: 1200px) 1200px, 1950px"
          />
          <div className={`${styles.aboutGraphic} ${styles.fadeIn}`}></div>
        </div>
        <div className={`${styles.aboutContent} ${styles.slideInUp}`}>
          <div>
            <div className={styles.sectionHeader}>
              <h2>About Due Season Digital</h2>
              <p>Your GEO Partner for Local Business Growth</p>
            </div>
            <p>
              Due Season Digital exists to put local businesses on the digital
              map—literally and figuratively. We combine small business know-how
              with the latest in GEO and generative answer engine optimization
              so you show up where your customers are searching today (and
              tomorrow).
            </p>
            <p>
              Our approach is transparent, measurable, and focused on making
              your business the go-to recommendation for LLMs and AI assistants.
              Let's get you found, heard, and chosen in this new era of search.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="due-season-index" className={styles.cta}>
      <div className={styles.container}>
        {/* Animated Growing Plant SVG (larger) */}
        <div className={styles.bloomingPlant} aria-hidden="true">
          <svg
            width="180"
            height="220"
            viewBox="0 0 180 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              {/* Stem */}
              <rect
                x="86"
                y="120"
                width="8"
                height="80"
                rx="4"
                fill="var(--color-green)"
                className={styles.growingStem}
              />
              {/* Left leaf */}
              <ellipse
                cx="68"
                cy="180"
                rx="24"
                ry="12"
                fill="var(--color-primary-accent)"
                className={styles.growingLeafLeft}
              />
              {/* Right leaf */}
              <ellipse
                cx="112"
                cy="180"
                rx="24"
                ry="12"
                fill="var(--color-primary-accent)"
                className={styles.growingLeafRight}
              />
            </g>
          </svg>
        </div>
        <h2 className={styles.slideInUp}>Ready to Be Discovered by AI?</h2>
        <p className={styles.slideInUp}>
          Get your free GEO Audit and find out how to become a top AI
          recommendation.
        </p>
        <a
          href="/due-season-index"
          className={`${styles.btn} ${styles.slideInUp}`}
        >
          Try the Due Season Index Tool
        </a>
        <div className={`${styles.ctaGraphic} ${styles.fadeIn}`}></div>
      </div>
    </section>

    <section className={styles.clientWins}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.slideInUp}`}>
          <span className={styles.clientWinsHeaderAccent} aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="14" cy="14" r="3" fill="var(--color-gold)" />
                <circle
                  cx="6"
                  cy="6"
                  r="1.5"
                  fill="var(--color-primary-accent)"
                />
                <circle cx="22" cy="8" r="1.2" fill="var(--color-green)" />
                <circle cx="8" cy="22" r="1" fill="var(--color-gold)" />
              </g>
            </svg>
          </span>
          <h2>Client Wins</h2>
          <p>
            See how local businesses have grown with Due Season Digital's
            GEO-first approach
          </p>
        </div>
        <div className={styles.testimonialGrid}>
          <article className={`${styles.testimonialCard} ${styles.slideInUp}`}>
            <p>
              "Our business started showing up in ChatGPT and Gemini answers.
              We've seen a surge in leads from people who 'found us on AI.' GEO
              works."
            </p>
            <div className={styles.testimonialAuthor}>
              - Sarah Johnson, Local Bakery Owner
            </div>
          </article>
          <article
            className={`${styles.testimonialCard} ${styles.slideInUp}`}
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              "Due Season Digital's audit made it clear what we were missing for
              GEO. Their plan was practical, and the results are obvious."
            </p>
            <div className={styles.testimonialAuthor}>
              - Mike Thompson, Coffee Shop Owner
            </div>
          </article>
          <article
            className={`${styles.testimonialCard} ${styles.slideInUp}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              "We finally understand what matters for Google SGE and ChatGPT,
              not just Google rankings. The team made GEO simple for us."
            </p>
            <div className={styles.testimonialAuthor}>
              - Lisa Chen, Boutique Owner
            </div>
          </article>
        </div>
        <div className={`${styles.clientWinsGraphic} ${styles.fadeIn}`}></div>
      </div>
    </section>

    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.slideInUp}`}>
          <h2>Get in Touch</h2>
          <p>Let's get your business found by the next wave of searchers</p>
        </div>
        <div className={`${styles.contactGraphic} ${styles.fadeIn}`}></div>
        <form
          className={styles.contactForm}
          action="https://formsubmit.co/kristenjoy@dueseasondigital.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="/thank-you.html" />
          <input type="hidden" name="_captcha" value="false" />
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className={`${styles.formGroup} ${styles.slideInUp}`}>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className={`${styles.btn} ${styles.slideInUp}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>

    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.socialLinks} ${styles.fadeIn}`}>
          <a href="https://www.facebook.com/profile.php?id=61577034625612">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/dueseason.digital/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/due-season-digital/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className={styles.fadeIn}>
          &copy; 2024 Due Season Digital. All rights reserved.
        </p>
      </div>
    </footer>
  </>
);

export default LandingPageAISEO;
