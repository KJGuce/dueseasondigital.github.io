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
              },
              {
                icon: <FaHandshake />,
                title: "Integrity",
                description: "We act with honesty, transparency, and trust.",
              },
              {
                icon: <FaHeart />,
                title: "Generosity & Service",
                description: "We serve others with excellence and kindness.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Stewardship",
                description:
                  "We honor what's entrusted to us and help clients multiply their results.",
              },
              {
                icon: <FaClock />,
                title: "Patience & Perseverance",
                description:
                  "We don't give up; we believe in steady, lasting progress.",
              },
              {
                icon: <FaLeaf />,
                title: "Growth & Fruitfulness",
                description:
                  "We pursue growth for our clients, team, and community—believing the best is yet to come.",
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
                <h3>{value.title}</h3>
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
            <motion.p className={styles.promiseIntro}>
              We're committed to delivering exceptional results through our
              comprehensive approach to digital marketing. Here's what you can
              expect when you partner with us:
            </motion.p>
            <motion.div
              className={styles.promiseGuarantees}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Our Guarantees</h3>
              <ul>
                <li>
                  <FaCheck /> Transparent communication and regular updates
                </li>
                <li>
                  <FaCheck /> Data-driven strategies tailored to your business
                </li>
                <li>
                  <FaCheck /> Measurable results and clear ROI tracking
                </li>
                <li>
                  <FaCheck /> Dedicated support and personalized attention
                </li>
                <li>
                  <FaCheck /> Continuous optimization and improvement
                </li>
              </ul>
            </motion.div>
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
            <h2>Meet Our Founder</h2>
          </div>
          <div className={styles.founderContent}>
            <motion.div
              className={styles.founderImage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={founderPhoto}
                alt="Kristen Joy Guce"
                className={styles.founderPhoto}
              />
            </motion.div>
            <motion.div
              className={styles.founderBio}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.founderName}>
                <h3>Kristen Joy Guce</h3>
                <p>Founder & CEO</p>
              </div>
              <p>
                With over a decade of experience across analytics, business
                strategy, and digital transformation, Kristen Joy Guce founded
                Due Season Digital to help local businesses thrive in a rapidly
                changing landscape. Her passion lies in equipping small
                businesses to grow—combining strategic insight, technical
                know-how, and a heart for service.
              </p>
              <p>
                Kristen believes that authentic growth happens when technology
                and purpose go hand in hand. By bridging the gap between classic
                strategies and the new era of AI-powered search, she ensures
                each client receives solutions that are both innovative and
                practical. Kristen's commitment to integrity, excellence, and
                measurable progress is at the heart of everything we do at Due
                Season Digital.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
