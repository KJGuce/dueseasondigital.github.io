import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaTags,
  FaFileAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./DueSeasonIndexTool.module.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for the trend chart
const mockChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Search Visibility",
      data: [30, 45, 35, 50, 49, 60],
      borderColor: "#ffd700",
      backgroundColor: "rgba(255, 215, 0, 0.1)",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#ffffff",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#ffffff",
      },
    },
  },
};

const DueSeasonIndexTool = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    website: "",
    businessName: "",
    location: "",
    keywords: "",
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [isReportSent, setIsReportSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock score calculation
    const mockScore = Math.floor(Math.random() * 101);
    setScore(mockScore);

    setLoading(false);
    setStep(6);
  };

  const handleWebsiteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Randomly decide if we need more info
    const needsMoreInfo = Math.random() > 0.5;
    setLoading(false);
    setStep(needsMoreInfo ? 4 : 5);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "You're Crushing It!";
    if (score >= 60) return "You're on Track!";
    if (score >= 40) return "Room to Grow!";
    return "Time to Level Up!";
  };

  const getRecommendations = (score: number) => {
    const allRecommendations = [
      "Add more local content to improve regional visibility",
      "Optimize your site for voice search queries",
      "Create more long-form content targeting your main keywords",
      "Improve your site's mobile responsiveness",
      "Build more quality backlinks from industry websites",
      "Optimize your meta descriptions and title tags",
      "Add schema markup for better search results",
    ];

    // Return 3-4 recommendations based on score
    const count = score < 40 ? 4 : 3;
    return allRecommendations.slice(0, count);
  };

  const handleGetDetailedReport = async () => {
    setLoading(true);
    // Simulate sending report
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsReportSent(true);
    setLoading(false);
  };

  const handleBookCall = () => {
    // Replace with your actual calendar link
    window.open("https://calendly.com/your-calendar-link", "_blank");
  };

  return (
    <div className={styles.indexToolPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Due Season Index Tool</h1>
          <p className={styles.subtitle}>
            Discover your website's SEO potential and get actionable insights
          </p>
        </div>

        <div className={styles.toolCard}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.step}
              >
                <h2>Step 1: Enter Your Website</h2>
                <form onSubmit={handleWebsiteSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <FaGlobe className={styles.inputIcon} />
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      required
                      className={styles.input}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? "Analyzing..." : "Analyze My Site"}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.step}
              >
                <h2>Tell Us More About Your Business</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <FaUser className={styles.inputIcon} />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Business Name"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <FaMapMarkerAlt className={styles.inputIcon} />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Business Location"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <FaTags className={styles.inputIcon} />
                    <input
                      type="text"
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      placeholder="Main Keywords (comma-separated)"
                      required
                      className={styles.input}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? "Analyzing..." : "Get My Analysis"}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.step}
              >
                <h2>Almost There!</h2>
                <p className={styles.leadText}>
                  Enter your details to get your personalized report
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <FaUser className={styles.inputIcon} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <FaEnvelope className={styles.inputIcon} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className={styles.input}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? "Generating Report..." : "Get My Report"}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.step}
              >
                <div className={styles.scoreSection}>
                  <div className={styles.scoreCircle}>
                    <div className={styles.scoreValue}>{score}</div>
                    <div className={styles.scoreLabel}>Due Season Index</div>
                  </div>
                  <h2 className={styles.scoreMessage}>
                    {getScoreMessage(score)}
                  </h2>
                </div>

                <div className={styles.recommendations}>
                  <h3>Recommendations</h3>
                  <ul className={styles.recommendationsList}>
                    {getRecommendations(score).map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {rec}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.trendChart}>
                  <h3>Search Visibility Trend</h3>
                  <Line data={mockChartData} options={chartOptions} />
                </div>

                <div className={styles.ctaSection}>
                  <div className={styles.ctaButtons}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={styles.ctaButton}
                      onClick={handleBookCall}
                    >
                      <FaCalendarAlt className={styles.buttonIcon} />
                      Book a Free Strategy Call
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${styles.ctaButton} ${styles.reportButton}`}
                      onClick={handleGetDetailedReport}
                      disabled={loading || isReportSent}
                    >
                      <FaFileAlt className={styles.buttonIcon} />
                      {loading
                        ? "Sending..."
                        : isReportSent
                        ? "Report Sent!"
                        : "Get Detailed Report"}
                    </motion.button>
                  </div>
                  {isReportSent && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={styles.successMessage}
                    >
                      Your detailed report has been sent to your email!
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DueSeasonIndexTool;
