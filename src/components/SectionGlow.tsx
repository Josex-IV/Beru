import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface SectionGlowProps {
  intensity?: 'strong' | 'medium' | 'soft';
  color?: string;
}

export const SectionGlow: React.FC<SectionGlowProps> = ({ 
  intensity = 'medium', 
  color = 'rgba(168, 85, 247, 0.25)' 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate relative position (-0.5 to 0.5)
      const relX = (clientX / innerWidth) - 0.5;
      const relY = (clientY / innerHeight) - 0.5;
      
      mouseX.set(relX * 100); // Move up to 100px
      mouseY.set(relY * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const sizes = {
    strong: 'w-[800px] h-[800px] opacity-40 blur-[120px]',
    medium: 'w-[600px] h-[600px] opacity-30 blur-[100px]',
    soft: 'w-[400px] h-[400px] opacity-20 blur-[80px]',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className={`absolute top-1/2 left-1/2 rounded-full ${sizes[intensity]}`}
        style={{ 
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform, opacity, scale'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Edge Glow */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(168,85,247,0.05)] pointer-events-none" />
    </div>
  );
};
