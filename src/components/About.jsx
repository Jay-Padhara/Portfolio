import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { education, personalInfo } from "../data/portfolioData";
import "./About.css";

const traits = [
  {
    emoji: "🚀",
    label: "Fast Learner",
    desc: "Adapt quickly to new tech stacks",
  },
  {
    emoji: "🧠",
    label: "ML Enthusiast",
    desc: "Passionate about intelligent systems",
  },
  {
    emoji: "📱",
    label: "Mobile Developer",
    desc: "React Native apps from scratch",
  },
  {
    emoji: "🎯",
    label: "Goal-Oriented",
    desc: "Focused on impactful outcomes",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Header */}
        <motion.div className="section-header" variants={variants}>
          <h2>
            About <span>Me</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">{"// who_am_i()"}</p>
        </motion.div>

        <div className="about__grid">
          {/* Left — terminal card */}
          <motion.div
            className="about__terminal glass-card"
            variants={variants}
          >
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">JayPadhara_profile.json</span>
            </div>
            <div className="terminal__body">
              <pre className="terminal__code">{`{
  "name": "${personalInfo.name}",
  "role": "${personalInfo.title}",
  "location": "${personalInfo.location}",
  "email": "${personalInfo.email}",
  "phone": "${personalInfo.phone}",
  "status": "${personalInfo.availability}",
  "passions": [
    "Machine Learning",
    "Mobile Apps",
    "Data Analysis",
    "Clean Code"
  ],
  "open_to": [
    "Working Student",
    "Full-time roles",
    "Internships"
  ]
}`}</pre>
            </div>
          </motion.div>

          {/* Right — bio + traits */}
          <div className="about__right">
            <motion.p className="about__bio" variants={variants}>
              {/* {personalInfo.bio} */}
              {`Software Engineer evolving into a Data Analyst and Machine Learning professional, currently pursuing a Master’s in Machine Learning and Data Analytics at Aalen University. Strong background in software development with hands-on experience in mobile and backend systems using React Native, Node.js, and APIs. Skilled in Python, data preprocessing, exploratory data analysis (EDA), and building basic predictive models. Focused on transforming raw data into actionable insights and developing data-driven solutions that support intelligent decision-making in applications.`}
            </motion.p>

            <motion.div className="about__info" variants={variants}>
              {[
                { icon: <FaMapMarkerAlt />, text: personalInfo.location },
                { icon: <FaEnvelope />, text: personalInfo.email },
                { icon: <FaPhone />, text: personalInfo.phone },
              ].map(({ icon, text }) => (
                <div key={text} className="info-row">
                  <span className="info-icon">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="about__traits" variants={variants}>
              {traits.map((t) => (
                <motion.div
                  key={t.label}
                  className="trait-card glass-card"
                  whileHover={{ scale: 1.04, y: -4 }}
                >
                  <span className="trait-emoji">{t.emoji}</span>
                  <div>
                    <div className="trait-label">{t.label}</div>
                    <div className="trait-desc">{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <motion.div className="about__edu" variants={variants}>
          <h3 className="edu-title">
            <FaGraduationCap className="neon-text-cyan" /> Education
          </h3>
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="edu-card glass-card"
              whileHover={{ x: 6 }}
            >
              <div className="edu-card__left">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-meta">
                  <FaMapMarkerAlt size={11} /> {edu.location}
                </div>
              </div>
              <div className="edu-card__right">
                <div className="edu-period">{edu.period}</div>
                <div className="edu-grade neon-text-cyan">{edu.grade}</div>
                <div className="edu-highlights">
                  {edu.highlights.map((h) => (
                    <span key={h} className="tech-tag">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
