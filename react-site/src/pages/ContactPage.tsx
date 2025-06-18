import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    interests: [] as string[],
    message: "",
    referral: "",
    otherBusinessType: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitMessage("Sending...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitMessage("Thanks for reaching out! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      businessType: "",
      interests: [],
      message: "",
      referral: "",
      otherBusinessType: "",
    });
  };

  const businessTypes = [
    "Local Services (e.g. plumber, cleaner, contractor)",
    "Health & Wellness (clinic, therapist, chiropractor, etc.)",
    "Creative Studio / Freelancer",
    "eCommerce or Product-Based Business",
    "Real Estate or Property Services",
    "Coaching or Consulting",
    "Faith-Based Organization",
    "Legal or Financial Services",
    "Nonprofit or Community Org",
    "Education or Tutoring",
    "Food & Beverage (restaurant, café, catering)",
    "Beauty & Personal Care (salon, spa, esthetician)",
    "Event or Wedding Services",
    "Construction or Trade",
    "Technology / SaaS",
    "Marketing / Branding Agency",
    "Other (please specify)",
  ];

  const interests = [
    "Seed Package",
    "Sprout Package",
    "Harvest Package",
    "Add-ons & Enhancements",
    "Not Sure Yet",
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/due-season-digital",
    },
    { icon: <FaInstagram />, href: "https://instagram.com/dueseasondigital" },
    { icon: <FaFacebookF />, href: "https://facebook.com/dueseasondigital" },
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
            Ready to Grow Your Visibility?
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear about your business and how we can help you stand
            out in local and AI-powered search.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className={styles.formInfoSection}>
        <div className={styles.container}>
          <div className={styles.formInfoGrid}>
            <motion.div
              className={styles.contactFormCard}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.alternateCta}>
                <p>Prefer to skip the form?</p>
                <a
                  href="https://calendly.com/kristenjoy-dueseasondigital/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.strategyCallButton}
                >
                  🎯 Book a Free Strategy Call
                </a>
              </div>

              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
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
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="+1 (555) 555-5555"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="website">Business Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="https://"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="businessType">
                    Business Type or Industry
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={styles.formInput}
                  >
                    <option value="">Select an option</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {formData.businessType === "Other (please specify)" && (
                    <input
                      type="text"
                      name="otherBusinessType"
                      value={formData.otherBusinessType || ""}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="Please specify your business type"
                      style={{ marginTop: "0.5rem" }}
                    />
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label>Interested In</label>
                  <div className={styles.checkboxGroup}>
                    {interests.map((interest) => (
                      <label key={interest} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className={styles.checkbox}
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message or Goals</label>
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
                <div className={styles.formGroup}>
                  <label htmlFor="referral">How did you hear about us?</label>
                  <input
                    type="text"
                    id="referral"
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
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
                <p className={styles.privacyDisclaimer}>
                  🔒 We value your privacy and never share your information.
                </p>
              </form>
            </motion.div>

            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:kristenjoy@dueseasondigital.com">
                    kristenjoy@dueseasondigital.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>
                    Based in Toronto, Serving clients across the globe
                  </span>
                </div>
              </div>

              <div className={styles.socialConnect}>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Quote Section */}
      <section className={styles.brandQuote}>
        <div className={styles.container}>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            "We believe small businesses deserve big visibility. Let's start the
            conversation."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
