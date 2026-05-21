import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);

    let animId;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const addHover = () => ringRef.current?.classList.add('cursor-ring--hover');
    const remHover = () => ringRef.current?.classList.remove('cursor-ring--hover');
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', remHover);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
