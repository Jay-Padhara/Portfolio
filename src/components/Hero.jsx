import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

const buildTypeSequence = (taglines) => taglines.flatMap((t) => [t, 2000]);

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 245, 255, 0.6)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__badge" variants={itemVariants}>
          <span className="badge__dot" />
          <span>{personalInfo.availability}</span>
        </motion.div>
        <motion.p className="hero__greeting" variants={itemVariants}>
          <span className="neon-text-cyan">// </span>
          hello_world() → Welcome
        </motion.p>
        <motion.h1 className="hero__name" variants={itemVariants}>
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "neon-text-cyan" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.div className="hero__roles" variants={itemVariants}>
          <span className="role-prefix">{">"} </span>
          <TypeAnimation
            sequence={buildTypeSequence(personalInfo.taglines)}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="role-text"
          />
          <span className="cursor-blink">_</span>
        </motion.div>
        <motion.p className="hero__bio" variants={itemVariants}>
          {personalInfo.bio}
        </motion.p>

        <motion.div className="hero__ctas" variants={itemVariants}>
          <motion.a
            href="/JayPadhara_Resume_EN.pdf"
            download
            className="btn-neon hero__btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload size={14} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-neon btn-neon-purple hero__btn"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaEnvelope size={14} />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div className="hero__socials" variants={itemVariants}>
          {[
            {
              icon: <FaGithub />,
              href: personalInfo.social.github,
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: personalInfo.social.linkedin,
              label: "LinkedIn",
            },
            {
              icon: <FaInstagram />,
              href: personalInfo.social.instagram,
              label: "Instagram",
            },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__avatar-wrap"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      >
        <div className="avatar-ring" />
        <div className="avatar-ring avatar-ring--2" />
        <div className="avatar-img-wrap">
          <img
            className="avatar-img"
            alt={personalInfo.name}
            src={require("../{components,assets,data,hooks}/Me_Dark.png")}
          />
        </div>
        <div className="avatar-glow" />
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
}
