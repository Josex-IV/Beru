import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Extremely snappy config for near-zero lag
  const springConfig = { damping: 25, stiffness: 1000, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .interactive');
      setIsHovering(!!isInteractive);
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseOver = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseleave', handleMouseOut);
    window.addEventListener('mouseenter', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('mouseenter', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.2 : 1
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {/* Visibility Aura: ensures the cursor is always visible but more integrated */}
      <div className="absolute inset-0 bg-beru-purple/20 rounded-full blur-lg animate-pulse" />
      
      <img 
        src="https://stmwkvylgmvinrtopuod.supabase.co/storage/v1/object/sign/video/cursor.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81Nzg1ZGJiYS05YmQ2LTQwMjgtODViMy03MWQ4M2ExN2NkODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9jdXJzb3IuZ2lmIiwiaWF0IjoxNzc2NTI2NTcwLCJleHAiOjE4MDgwNjI1NzB9.6MQLjfNZ8P8lE4nYvWZql-RtUOEbw0AA5OiF-DsVYQQ" 
        alt="Custom Cursor"
        className="w-full h-full object-contain filter brightness-150 contrast-125 saturate-200 drop-shadow-[0_0_8px_#a855f7]"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};
