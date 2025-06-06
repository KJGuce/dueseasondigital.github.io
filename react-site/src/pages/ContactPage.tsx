import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service (e.g., email service like Formspree, SendGrid, etc.)
    // For now, we'll just log it and show a success message.

    console.log("Form Data Submitted:", formData);

    // Simulate sending data
    setSubmitMessage("Sending...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    // Assume success for demonstration
    setSubmitMessage("Thanks for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/dueseasondigital",
    },
    { icon: <FaInstagram />, href: "https://instagram.com/dueseasondigital" },
    { icon: <FaFacebookF />, href: "https://facebook.com/dueseasondigital" },
  ];

  const whatHappensNextSteps = [
    "Submit your details via the form or contact us directly.",
    "We'll review your information and reach out for a quick chat within 1-2 business days.",
    "We'll discuss your goals, see if we're a good fit, and outline potential next steps—no strings attached!",
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Grow Your Business!
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to take your visibility to the next level? Reach out below and
            we'll make it happen—no pressure, no jargon, just honest answers and
            actionable steps.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className={styles.formInfoSection}>
        <div className={styles.container}>
          <div className={styles.formInfoGrid}>
            <motion.div
              className={styles.contactFormCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.formTextarea}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
                {submitMessage && (
                  <motion.p
                    className={styles.submitSuccess}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>

            <motion.div
              className={styles.socialConnect}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>Connect with us online</h2>
              <div className={styles.socialIcons}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIconLink}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className={styles.whatHappensNext}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>What Happens Next?</h2>
          </motion.div>
          <motion.div
            className={styles.stepsList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {whatHappensNextSteps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.stepItem}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <p>{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
