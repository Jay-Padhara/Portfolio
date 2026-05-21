import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaStar,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/portfolioData";
import "./Projects.css";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="section-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            {"// projects.filter(p => p.isAwesome)"}
          </p>
        </div>

        {/* Filter chips */}
        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? "filter-chip--active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                style={{ "--accent": project.color }}
              >
                {/* Card accent bar */}
                <div className="project-card__bar" />

                <div className="project-card__header">
                  <div className="project-card__meta">
                    <span className="project-category">{project.category}</span>
                    {project.featured && (
                      <span className="project-featured">
                        <FaStar size={9} /> Featured
                      </span>
                    )}
                  </div>
                  <div className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link"
                        aria-label="GitHub"
                        title="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link"
                        aria-label="Website"
                        title="Website"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.playstore && (
                      <a
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link proj-link--play"
                        aria-label="Google Play"
                        title="Google Play"
                      >
                        <FaGooglePlay />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech tags */}
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{
                        borderColor: `${project.color}44`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/jay-padhara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
