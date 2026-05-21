import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your backend / EmailJS / Formspree here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const socials = [
    {
      icon: <FaLinkedin />,
      href: personalInfo.social.linkedin,
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: <FaGithub />,
      href: personalInfo.social.github,
      label: "GitHub",
      color: "#fff",
    },
    {
      icon: <FaInstagram />,
      href: personalInfo.social.instagram,
      label: "Instagram",
      color: "#e1306c",
    },
  ];

  return (
    <section id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div className="section-header" variants={variants}>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            {"// contact.init() → let's_talk()"}
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left info */}
          <motion.div className="contact__info" variants={variants}>
            <p className="contact__intro">
              I'm actively looking for{" "}
              <strong className="neon-text-cyan">Working Student</strong> and{" "}
              <strong className="neon-text-cyan">Full-time</strong>{" "}
              opportunities in Data Science & ML. Whether you have a project, a
              question, or just want to connect — my inbox is always open!
            </p>

            <div className="contact__details">
              {[
                {
                  icon: <FaEnvelope />,
                  text: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: <FaPhone />,
                  text: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: <FaMapMarkerAlt />,
                  text: personalInfo.location,
                  href: null,
                },
              ].map(({ icon, text, href }) => (
                <div key={text} className="detail-row">
                  <span className="detail-icon">{icon}</span>
                  {href ? (
                    <a href={href} className="detail-text detail-text--link">
                      {text}
                    </a>
                  ) : (
                    <span className="detail-text">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="contact__socials">
              {socials.map(({ icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label={label}
                  style={{ "--sc": color }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {icon}
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="btn-neon contact__resume-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Right form */}
          <motion.div variants={variants}>
            <form
              className="contact__form glass-card"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form__title">
                <span className="neon-text-cyan">// </span>send_message()
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form__input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form__input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form__group">
                <label className="form__label">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="Working Student Opportunity / Collaboration"
                />
              </div>

              <div className="form__group">
                <label className="form__label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form__input form__textarea"
                  placeholder="Tell me about the opportunity, project, or just say hi!"
                  rows={5}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-neon form__submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <FaPaperPlane size={13} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
