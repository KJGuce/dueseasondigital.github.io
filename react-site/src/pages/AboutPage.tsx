import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";
import styles from "./AboutPage.module.css";
import founderPhoto from "../assets/KjGuce-BSTN Pic.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why <span className={styles.highlight}>Due Season</span> Digital?
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rooted in purpose. Fueled by growth. Focused on you.
          </motion.p>
          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Due Season Digital exists to help local businesses thrive in the era
            of AI-powered search. Our name is inspired by Galatians 6:9: "And
            let us not grow weary of doing good, for in due season we will reap,
            if we do not give up." We believe growth happens for those who keep
            showing up—and we bring that spirit to every client partnership.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <motion.section
        className={styles.visionMission}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Vision & Mission</h2>
          </div>
          <div className={styles.visionMissionGrid}>
            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Vision</h3>
              <p>
                To become the most trusted partner for local businesses seeking
                visibility in the new era of AI-powered search, helping them
                thrive and grow—no matter how search technology evolves.
              </p>
            </motion.div>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Mission</h3>
              <p>
                Empowering small and local businesses to secure top placement in
                both traditional and AI-driven search platforms, by delivering
                clear, measurable, and innovative digital marketing solutions
                that unlock real-world growth.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className={styles.coreValues}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
          </div>
          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {[
              {
                icon: <FaChartLine />,
                title: "Diligence",
                description:
                  "We work hard and do good, knowing that faithful effort brings a harvest.",
                emoji: "💪",
              },
              {
                icon: <FaHandshake />,
                title: "Integrity",
                description: "We act with honesty, transparency, and trust.",
                emoji: "🤝",
              },
              {
                icon: <FaHeart />,
                title: "Generosity & Service",
                description: "We serve others with excellence and kindness.",
                emoji: "💝",
              },
              {
                icon: <FaShieldAlt />,
                title: "Stewardship",
                description:
                  "We honor what's entrusted to us and help clients multiply their results.",
                emoji: "🛡️",
              },
              {
                icon: <FaClock />,
                title: "Patience & Perseverance",
                description:
                  "We don't give up; we believe in steady, lasting progress.",
                emoji: "⏳",
              },
              {
                icon: <FaLeaf />,
                title: "Growth & Fruitfulness",
                description:
                  "We pursue growth for our clients, team, and community—believing the best is yet to come.",
                emoji: "🌿",
              },
            ].map((value, _index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>
                  {value.title} {value.emoji}
                </h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Promise Section */}
      <motion.section
        className={styles.promise}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>The Due Season Promise</h2>
          </div>
          <motion.div
            className={styles.promiseContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p
              className={styles.promiseIntro}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Due Season Digital, we believe in honest work, measurable
              progress, and clear communication. That's why we'll never promise
              you #1 rankings, a set number of new clients, or overnight
              miracles—no reputable agency should.
            </motion.p>
            <motion.div
              className={styles.promiseGuarantees}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
            >
              <h3>But here's what we do guarantee:</h3>
              <ul>
                {[
                  "Transparent, On-Time Delivery: You'll receive every audit, report, and service outlined in your package—delivered on schedule and with total clarity.",
                  "Actionable, Honest Reporting: Every month, we'll provide a detailed report of your AI Visibility Score, progress, and next steps—so you always know where you stand.",
                  "Revision & Collaboration: If you're not satisfied with any deliverable, we'll revise and refine it until it meets the standards set out in your package.",
                  "Continuous Improvement: We'll keep you updated on the latest trends in AI search and ensure your business is always positioned to benefit.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 },
                    }}
                  >
                    <FaCheck />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Money-Back Guarantee Section */}
      <motion.section
        className={styles.guarantee}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our 90-Day Money-Back Guarantee</h2>
          </div>
          <motion.div
            className={styles.guaranteeContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We stand by our work. If, after 90 days of working together and
              implementing our recommendations, you see no measurable
              improvement in your AI Visibility Score (as tracked in our
              reports)—we'll refund your service fee for that period.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              All we ask is that you've implemented the key recommendations and
              shared feedback along the way.
            </motion.p>
            <motion.p
              className={styles.guaranteePromise}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              That's our Due Season Promise: Effort, transparency, a measurable
              path to improvement—and real accountability for your investment.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        className={styles.founder}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet the Founder</h2>
          </div>
          <div className={styles.founderContent}>
            <motion.div
              className={styles.founderImage}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Founder's photo */}
              <img
                src={founderPhoto}
                alt="Kristen Joy Guce"
                className={styles.founderPhoto}
              />
            </motion.div>
            <motion.div
              className={styles.founderBio}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.linkedin.com/in/kjguce/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.founderName}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Kristen Joy Guce</h3>
              </motion.a>
              <p>
                Kristen Joy Guce founded Due Season Digital to help small
                businesses flourish in a changing world. With a background in
                economics, digital marketing, and a passion for local impact,
                Kristen brings diligence, empathy, and results-driven strategy
                to every project. She believes that honest, excellent work—done
                in the right season—creates real, lasting growth.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
