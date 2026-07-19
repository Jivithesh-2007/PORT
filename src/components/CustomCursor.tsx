import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Use framer motion values for smooth mouse following
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    // Suppress custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center of the 32px circle
      mouseY.set(e.clientY - 16);

      dotX.set(e.clientX - 4); // Center of the 8px dot
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover');

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer follow ring */}
      <motion.div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-slate-500/60 pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(242, 125, 38, 0.15)' : 'rgba(242, 125, 38, 0)',
          borderColor: isClicked ? '#F27D26' : isHovered ? '#f59e0b' : '#f27d2699',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />

      {/* Inner precise dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#F27D26] pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isClicked ? 1.2 : isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
