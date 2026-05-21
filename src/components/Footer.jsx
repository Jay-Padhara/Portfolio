import React from "react";
import { personalInfo } from "../data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="neon-text-cyan">[</span>
          {personalInfo.name}
          <span className="neon-text-cyan">]</span>
        </div>

        <div className="footer__socials">
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
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name} · Built with{" "}
          <FaHeart className="footer__heart" /> &amp; React
        </p>
      </div>
    </footer>
  );
}
