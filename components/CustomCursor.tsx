'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default true on SSR/first paint

  useEffect(() => {
    // Check if device is mobile or touch
    const checkIsMobile = () => {
      const touchOrSmallScreen =
        window.innerWidth < 768 ||
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window;
      setIsMobile(touchOrSmallScreen);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Completely disable on mobile and touch screens
  if (isMobile || !isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Inner sharp cursor square */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-orange pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
      {/* Outer sharp cursor square */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-orange/50 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.4 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
    </div>
  );
}
