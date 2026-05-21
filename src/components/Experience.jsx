import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div
          className="section-header"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <h2>
            Work <span>Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">{"// career.timeline()"}</p>
        </motion.div>

        <div className="timeline">
          {/* Vertical line */}
          <div className="timeline__line">
            <motion.div
              className="timeline__line-fill"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              {/* Dot */}
              <div
                className={`timeline__dot ${exp.open ? "timeline__dot--open" : ""}`}
              >
                <FaBriefcase size={12} />
              </div>

              {/* Card */}
              <motion.div
                className={`exp-card glass-card ${exp.open ? "exp-card--open" : ""}`}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {exp.open && (
                  <div className="exp-card__open-badge">Open Position</div>
                )}

                <div className="exp-card__header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-type">{exp.type}</span>
                </div>

                <div className="exp-company">{exp.company}</div>

                <div className="exp-meta">
                  <span>
                    <FaCalendarAlt size={11} /> {exp.period}
                  </span>
                  <span>
                    <FaMapMarkerAlt size={11} /> {exp.location}
                  </span>
                </div>

                <ul className="exp-bullets">
                  {exp.description.map((d, j) => (
                    <li key={j}>
                      <span className="bullet-arrow neon-text-cyan">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
