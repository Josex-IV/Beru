import React from 'react';
import { motion } from 'framer-motion';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';
import { playClickSound } from '../lib/audio';

export const Inicio = () => {
  return (
    <section id="inicio" className="section-container relative">
      {/* Background Video */}
      <div className="bg-multimedia-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-multimedia-asset opacity-100"
        >
          <source src="https://stmwkvylgmvinrtopuod.supabase.co/storage/v1/object/sign/video/funciona%20este%20v1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81Nzg1ZGJiYS05YmQ2LTQwMjgtODViMy03MWQ4M2ExN2NkODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9mdW5jaW9uYSBlc3RlIHYxLm1wNCIsImlhdCI6MTc3ODEwODA2NiwiZXhwIjoxODA5NjQ0MDY2fQ.Oq9Fj2t5oda-nQbGdQmLyot9_X1pzBMTwNG-38wQozk" type="video/mp4" />
        </video>
        <div className="bg-multimedia-overlay" />
      </div>

      <SectionGlow intensity="soft" />
      
      {/* Shadow Energy Particles */}
      <ShadowParticles count={40} color="#a855f7" className="opacity-20" />

      <div className="content-wrapper relative z-10 section-content-glow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ letterSpacing: '0.2em', opacity: 0 }}
            animate={{ letterSpacing: '0.5em', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-tech text-beru-purple uppercase text-[10px] md:text-xs mb-6 block"
          >
            No es el futuro. Es el punto de partida.
          </motion.span>
          
          <h1 className="hero-title mb-8 tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block"
            >
              EL DESPERTAR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-beru-purple via-indigo-400 to-purple-600 glow-text block mt-2"
            >
              DE LA IA
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="max-w-3xl mx-auto space-y-6 mb-10"
          >
            <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed">
              Creamos agentes de inteligencia artificial que piensan, ejecutan y evolucionan por ti. 
              Automatiza procesos, optimiza decisiones y escala tu negocio con sistemas que trabajan 24/7 sin descanso.
            </p>
            
            <p className="text-white/60 font-sans text-sm md:text-base italic">
              No se trata de hacer más… <br />
              Se trata de construir inteligencia que lo haga por ti.
            </p>
 
            <div className="pt-2">
              <span className="text-beru-purple font-tech uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Convierte tu visión en un sistema autónomo.
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              onClick={playClickSound}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#b347ff',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-beru-purple text-[#080010] font-tech font-black rounded-full uppercase tracking-[0.25em] text-xs transition-all duration-300 shadow-[0_0_20px_rgba(168, 85, 247, 0.4)] interactive"
            >
              Despertar Ahora
            </motion.button>
            <motion.button 
              onClick={playClickSound}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(168, 85, 247, 0.8)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent border-2 border-white/10 text-white font-tech font-bold rounded-full uppercase tracking-[0.25em] text-xs transition-all duration-300 interactive"
            >
              Ver Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};
