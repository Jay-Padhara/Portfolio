import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolioData";
import "./Skills.css";

const categories = Object.keys(skills);

// One icon/emoji per category — edit freely
const categoryIcons = {
  "Programming Languages": "{ }",
  "Data & Machine Learning": "🧠",
  "Data Concepts": "📊",
  "Backend & APIs": "⚙️",
  "DevOps & Tools": "🛠",
  "Mobile & Frontend": "📱",
};

export default function Skills() {
  const [active, setActive] = useState(categories[0]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Header */}
        <motion.div
          className="section-header"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <h2>
            Tech <span>Stack</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">{"// skills.map(s => s.name)"}</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="skills__tabs"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills__tab ${active === cat ? "skills__tab--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              <span className="tab-icon">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill chips grid */}
        <motion.div
          className="skills__chips"
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skills[active].map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <span className="chip-dot" />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* All tech bubble cloud */}
        <motion.div
          className="skills__bubbles"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } },
          }}
        >
          <p className="bubbles__label">// all_technologies</p>
          <div className="bubbles__wrap">
            {Object.values(skills)
              .flat()
              .map((s) => (
                <motion.span
                  key={s.name}
                  className="tech-bubble"
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  {s.name}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
