import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './styles/globals.css';

// Loading screen
function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="loader__box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="loader__brackets">
              <span>[</span>
              <motion.span
                className="loader__jp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                JP
              </motion.span>
              <span>]</span>
            </div>
            <div className="loader__bar">
              <motion.div
                className="loader__bar-fill"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
              />
            </div>
            <p className="loader__text">Initializing portfolio...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader done={loaded} />
      {!isMobile && <CustomCursor />}

      <div className="noise-overlay" />
      <div className="scanlines" />
      <div className="grid-bg" />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .loader {
          position: fixed; inset: 0;
          background: var(--bg-primary);
          display: flex; align-items: center; justify-content: center;
          z-index: 99999;
        }
        .loader__box {
          display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
        }
        .loader__brackets {
          font-family: var(--font-display);
          font-size: 3rem; font-weight: 900;
          color: var(--text-primary);
          letter-spacing: 0.1em;
          display: flex; align-items: center; gap: 0.25rem;
        }
        .loader__brackets span { color: var(--neon-cyan); }
        .loader__jp { color: var(--text-primary); }
        .loader__bar {
          width: 200px; height: 2px;
          background: var(--border-subtle);
          border-radius: 2px; overflow: hidden;
        }
        .loader__bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
          box-shadow: 0 0 8px var(--neon-cyan);
          border-radius: 2px;
        }
        .loader__text {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
      `}</style>
    </>
  );
}
