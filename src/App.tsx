import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Inicio } from './components/Inicio';
import { Servicios } from './components/Servicios';
import { Laboratorio } from './components/Laboratorio';
import { Historia } from './components/Historia';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { CustomCursor } from './components/CustomCursor';
import { playClickSound } from './lib/audio';
import Lenis from '@studio-freight/lenis';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleSectionChange = (section: string) => {
    if (section !== activeSection) {
      playClickSound();
      setActiveSection(section);
    }
  };

  // Map section IDs to components
  const renderSection = () => {
    const Section = () => {
      switch (activeSection) {
        case 'inicio': return <Inicio />;
        case 'servicios': return <Servicios />;
        case 'laboratorio': return <Laboratorio />;
        case 'historia': return <Historia />;
        case 'nosotros': return <Nosotros />;
        case 'contacto': return <Contacto />;
        default: return <Inicio />;
      }
    };

    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Section />
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <div className="text-white selection:bg-beru-purple selection:text-white min-h-screen relative overflow-hidden">
      <CustomCursor />
      <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      <main className="relative w-full min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-full w-full transform-gpu"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Chatbot />
    </div>
  );
}
