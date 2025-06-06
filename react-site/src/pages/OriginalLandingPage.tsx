import React from "react";
import "../global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LandingPageAISEO: React.FC = () => (
  <>
    <header className="hero">
      <div className="container">
        <div className="logo-hero-wrap">
          <div className="logo-sunrays">
            {/* Animated sun rays SVG */}
            <svg
              width="100"
              height="60"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g className="sunrays-group">
                <rect
                  x="48"
                  y="0"
                  width="4"
                  height="18"
                  rx="2"
                  fill="#D4AF37"
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
                  fill="#D4AF37"
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
                  fill="#D4AF37"
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
            <a href="/" className="logo animated-logo">
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
        <h1>
          <span className="highlight">Get Discovered by AI</span> — Put Your
          Business in the Spotlight of ChatGPT, Gemini & Answer Engines
        </h1>
        <p>
          We help local businesses and entrepreneurs become the top
          recommendation for AI-powered search results, voice assistants, and
          large language models. Ready to own your "Due Season"?
        </p>
        <a href="#due-season-index" className="btn btn-cta">
          <span className="btn-icon" aria-hidden="true">
            🤖
          </span>{" "}
          Get Your Free AI SEO Audit
        </a>
      </div>
    </header>

    <section className="services">
      <div className="services-bg-animated" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header">
          <span className="services-header-accent" aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="14" cy="14" r="3" fill="#FFC300" />
                <circle cx="6" cy="6" r="1.5" fill="#4AC6D3" />
                <circle cx="22" cy="8" r="1.2" fill="#3CAF7A" />
                <circle cx="8" cy="22" r="1" fill="#D4AF37" />
              </g>
            </svg>
          </span>
          <h2>AI SEO Services</h2>
          <p>
            Modern SEO for the age of AI — make sure your business is "findable"
            by the bots that matter most.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <i className="fas fa-brain"></i>
            <h3>AI SEO & LLM Visibility</h3>
            <p>
              Optimize your online presence so that AI models like ChatGPT,
              Gemini, and Perplexity mention your business first.
            </p>
          </article>
          <article className="service-card">
            <i className="fas fa-robot"></i>
            <h3>AI-Driven Content & Schema</h3>
            <p>
              We craft content and structure your site with the exact schema and
              signals AI needs to recommend you in answer engines.
            </p>
          </article>
          <article className="service-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Local Profile Optimization</h3>
            <p>
              Ensure your Google Business Profile, reviews, and directories are
              optimized for AI and voice search discovery.
            </p>
          </article>
          <article className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>LLM Audit & Analytics</h3>
            <p>
              Get actionable reporting: How visible is your brand in ChatGPT,
              Gemini, and AI-powered platforms? We'll show you—and help you win.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="about">
      <div className="container">
        <div className="about-visuals">
          {/* Animated Water Droplets SVG (rain effect) */}
          <div
            className="water-droplets"
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
              <g className="droplet-group">
                <ellipse
                  className="droplet"
                  cx="10"
                  cy="10"
                  rx="3"
                  ry="7"
                  fill="#4AC6D3"
                />
                <ellipse
                  className="droplet"
                  cx="25"
                  cy="20"
                  rx="2.5"
                  ry="6"
                  fill="#2C7A9E"
                />
                <ellipse
                  className="droplet"
                  cx="40"
                  cy="8"
                  rx="2.5"
                  ry="6"
                  fill="#4AC6D3"
                />
                <ellipse
                  className="droplet"
                  cx="60"
                  cy="18"
                  rx="2"
                  ry="5"
                  fill="#2C7A9E"
                />
                <ellipse
                  className="droplet"
                  cx="70"
                  cy="30"
                  rx="2"
                  ry="5"
                  fill="#4AC6D3"
                />
                <ellipse
                  className="droplet"
                  cx="20"
                  cy="40"
                  rx="1.5"
                  ry="4"
                  fill="#2C7A9E"
                />
                <ellipse
                  className="droplet"
                  cx="55"
                  cy="50"
                  rx="1.5"
                  ry="4"
                  fill="#4AC6D3"
                />
                <ellipse
                  className="droplet"
                  cx="35"
                  cy="60"
                  rx="1"
                  ry="3"
                  fill="#4AC6D3"
                />
                <ellipse
                  className="droplet"
                  cx="50"
                  cy="65"
                  rx="0.8"
                  ry="2"
                  fill="#2C7A9E"
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
        </div>
        <div className="about-content">
          <div>
            <div className="section-header">
              <h2>About Due Season Digital</h2>
              <p>Your AI SEO Partner for Local Business Growth</p>
            </div>
            <p>
              Due Season Digital exists to put local businesses on the digital
              map—literally and figuratively. We combine small business know-how
              with the latest in AI search and answer engine optimization so you
              show up where your customers are searching today (and tomorrow).
            </p>
            <p>
              Our approach is transparent, measurable, and focused on making
              your business the go-to recommendation for LLMs and voice
              assistants. Let's get you found, heard, and chosen in this new era
              of search.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="due-season-index" className="cta">
      <div className="container">
        {/* Animated Growing Plant SVG (larger) */}
        <div className="blooming-plant fun-bloom-entrance" aria-hidden="true">
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
                fill="#3CAF7A"
                className="growing-stem"
              />
              {/* Left leaf */}
              <ellipse
                cx="68"
                cy="180"
                rx="24"
                ry="12"
                fill="#4AC6D3"
                className="growing-leaf-left"
              />
              {/* Right leaf */}
              <ellipse
                cx="112"
                cy="180"
                rx="24"
                ry="12"
                fill="#4AC6D3"
                className="growing-leaf-right"
              />
            </g>
          </svg>
        </div>
        <h2>Free Due Season Index™ — AI SEO Audit</h2>
        <p>
          Not sure if you're discoverable by ChatGPT, Gemini, and AI-powered
          search?
          <strong>
            Take our free Due Season Index™ quiz or URL scan to see how you
            rank—and get actionable next steps instantly.
          </strong>
        </p>
        <a href="/due-season-index" className="btn">
          Try the Due Season Index Tool
        </a>
      </div>
    </section>

    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="testimonial-header-accent" aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="14" cy="14" r="3" fill="#FFC300" />
                <circle cx="6" cy="6" r="1.5" fill="#4AC6D3" />
                <circle cx="22" cy="8" r="1.2" fill="#3CAF7A" />
                <circle cx="8" cy="22" r="1" fill="#D4AF37" />
              </g>
            </svg>
          </span>
          <h2>Client Wins</h2>
          <p>
            See how local businesses have grown with Due Season Digital's
            AI-first approach
          </p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              "Our business started showing up in ChatGPT and Gemini answers.
              We've seen a surge in leads from people who 'found us on AI.'"
            </p>
            <div className="testimonial-author">
              - Sarah Johnson, Local Bakery Owner
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              "Due Season Digital's audit made it clear what we were missing for
              AI SEO. Their plan was practical, and the results are obvious."
            </p>
            <div className="testimonial-author">
              - Mike Thompson, Coffee Shop Owner
            </div>
          </article>
          <article className="testimonial-card">
            <p>
              "We finally understand what matters for Google SGE and ChatGPT,
              not just Google rankings. The team made AI SEO simple for us."
            </p>
            <div className="testimonial-author">
              - Lisa Chen, Boutique Owner
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Let's get your business found by the next wave of searchers</p>
        </div>
        <form
          className="contact-form"
          action="https://formsubmit.co/kristenjoy@dueseasondigital.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="/thank-you.html" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>

    <footer>
      <div className="container">
        <div className="social-links">
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
        <p>&copy; 2024 Due Season Digital. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default LandingPageAISEO;
