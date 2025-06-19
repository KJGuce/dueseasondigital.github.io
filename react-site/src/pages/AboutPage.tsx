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
  FaBrain,
} from "react-icons/fa";
import styles from "./AboutPage.module.css";
import founderPhoto from "../assets/KjGuce-BSTN Pic.jpg";
import { Link } from "react-router-dom";

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
            Rooted in purpose. Fueled by growth. Focused on your success.
          </motion.p>
          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Due Season Digital empowers local businesses to thrive in the new
            era of Generative Engine Optimization (GEO). We believe that growth
            happens for those who keep showing up—and we bring that spirit to
            every client partnership. As pioneers in GEO, we help you get found
            by AI-powered conversational search and answer engines.
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
                To be the most trusted GEO partner for local businesses seeking
                visibility across Google, ChatGPT, and emerging AI
                platforms—helping them grow sustainably despite rapid
                technological change. We lead the way in Generative Engine
                Optimization.
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
                We empower small and local businesses to secure top placements
                on both traditional and AI-driven search platforms by delivering
                clear, innovative, and measurable GEO solutions that unlock
                real-world growth. GEO is the future of search, and we're here
                to help you master it.
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
                icon: <FaHandshake />,
                title: "Integrity",
                description:
                  "We build trust through honesty, transparency, and ethical actions in every project.",
              },
              {
                icon: <FaChartLine />,
                title: "Impact",
                description:
                  "We are committed to delivering meaningful, measurable results that help clients grow.",
              },
              {
                icon: <FaLeaf />,
                title: "Curiosity",
                description:
                  "We embrace continuous learning, exploring new technologies, and adapting to change.",
              },
              {
                icon: <FaHeart />,
                title: "Empathy",
                description:
                  "We listen deeply and serve clients with genuine care and understanding.",
              },
              {
                icon: <FaBrain />,
                title: "Innovation",
                description:
                  "We harness the power of AI and emerging tech to create forward-thinking solutions.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Resilience",
                description:
                  "We persist through challenges with determination and adapt to thrive in evolving landscapes.",
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
              When you partner with Due Season Digital, you can expect:
            </motion.p>
            <motion.div
              className={styles.promiseGuarantees}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Our Commitments to You</h3>
              <ul>
                <li>
                  <FaCheck />{" "}
                  <span className={styles.commitmentHighlight}>
                    Transparent communication and regular updates
                  </span>{" "}
                  — so you're always in the loop.
                </li>
                <li>
                  <FaCheck />{" "}
                  <span className={styles.commitmentHighlight}>
                    Data-driven strategies tailored to your unique business
                  </span>{" "}
                  — focused on real growth.
                </li>
                <li>
                  <FaCheck />{" "}
                  <span className={styles.commitmentHighlight}>
                    Measurable results with clear ROI tracking
                  </span>{" "}
                  — no guesswork, just impact.
                </li>
                <li>
                  <FaCheck />{" "}
                  <span className={styles.commitmentHighlight}>
                    Dedicated support and personalized attention
                  </span>{" "}
                  — because your success matters.
                </li>
                <li>
                  <FaCheck />{" "}
                  <span className={styles.commitmentHighlight}>
                    Continuous optimization
                  </span>{" "}
                  — ensuring your strategy evolves as your business grows.
                </li>
              </ul>
              <Link
                to="/contact"
                className={styles.ctaButton}
                style={{ marginTop: "2rem", display: "inline-block" }}
              >
                Schedule a Free Consultation Today
              </Link>
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
                alt="Kristen Joy Guce, Founder and CEO of Due Season Digital"
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
                Kristen Joy is the founder and CEO of Due Season Digital, where
                she helps local businesses grow their online visibility and
                connect with customers in the new era of AI-powered search. With
                a unique blend of analytics, technology, and AI expertise, she
                crafts smart strategies that deliver real results—helping
                clients step confidently into their due season of growth and
                success. 🚀
              </p>
              <p>
                Beyond her professional work, Kristen Joy is passionate about
                empowering people personally and professionally. She leads
                connect groups, sings on the worship team, and enjoys emceeing
                or performing at events. An aspiring author and lifelong
                learner, she brings creativity, heart, and a genuine commitment
                to every project. Working with Kristen means partnering with
                someone who combines down-to-earth expertise with cutting-edge
                AI knowledge—all delivered with care. ✨
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
