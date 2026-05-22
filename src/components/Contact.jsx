import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
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

const EMAILJS_SERVICE_ID = "service_0t3ohva";
const EMAILJS_PUBLIC_KEY = "8smi-585vmpuB9zHL";
const EMAILJS_TEMPLATE_ID = "template_jrizw1l";

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === STATUS.SENDING) return;

    if (!validateForm()) {
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.SENDING);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus(STATUS.SUCCESS);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});

      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      console.log("err", err);
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);

      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
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
          </motion.div>

          <motion.div variants={variants}>
            <form
              ref={formRef}
              className="contact__form glass-card"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="form__title">
                <span className="neon-text-cyan">// </span>send_message()
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input
                    name="from_name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });

                      if (errors.name) {
                        setErrors({ ...errors, name: "" });
                      }
                    }}
                    className={`form__input ${errors.name ? "input-error" : ""}`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });

                      if (errors.email) {
                        setErrors({ ...errors, email: "" });
                      }
                    }}
                    className={`form__input ${errors.email ? "input-error" : ""}`}
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
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });

                    if (errors.subject) {
                      setErrors({ ...errors, subject: "" });
                    }
                  }}
                  className={`form__input ${errors.subject ? "input-error" : ""}`}
                  placeholder="Working Student Opportunity / Collaboration"
                />
              </div>

              <div className="form__group">
                <label className="form__label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });

                    if (errors.message) {
                      setErrors({ ...errors, message: "" });
                    }
                  }}
                  className={`form__input form__textarea ${errors.message ? "input-error" : ""}`}
                  placeholder="Tell me about the opportunity, project, or just say hi!"
                  rows={5}
                  required
                />
              </div>

              {status === STATUS.SUCCESS && (
                <motion.div
                  className="form__status form__status--success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle /> Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === STATUS.ERROR && (
                <motion.div
                  className="form__status form__status--error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaExclamationCircle /> Something went wrong. Please try again
                  or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className={`btn-neon form__submit ${status === STATUS.SENDING ? "form__submit--sending" : ""}`}
                disabled={status === STATUS.SENDING}
                whileHover={status !== STATUS.SENDING ? { scale: 1.03 } : {}}
                whileTap={status !== STATUS.SENDING ? { scale: 0.97 } : {}}
              >
                {status === STATUS.SENDING ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
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
