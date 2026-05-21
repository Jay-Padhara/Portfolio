import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    setActive(href.replace('#', ''));
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <motion.a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="logo-bracket">[</span>
            <span className="logo-name">JP</span>
            <span className="logo-bracket">]</span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <a
                  href={link.href}
                  className={`nav-link ${active === link.href.replace('#','') ? 'nav-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                >
                  <span className="nav-link__num">0{i + 1}.</span>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Resume CTA */}
          <motion.a
            href={personalInfo.resumeUrl}
            download
            className="btn-neon navbar__resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Resume
          </motion.a>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  >
                    <span className="nav-link__num">0{i + 1}.</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li>
                <a href={personalInfo.resumeUrl} download className="btn-neon">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
