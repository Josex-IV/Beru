import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { playClickSound } from '../lib/audio';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';

const timeline = [
  { 
    year: '2023', 
    title: 'El Despertar', 
    subtitle: 'El inicio de todo.',
    desc: 'Beru surge como un prototipo de inteligencia artificial autónoma, explorando nuevas formas de automatizar procesos y tomar decisiones sin intervención humana.',
    tagline: 'Fundamentos construidos. Primeras capacidades activas.'
  },
  { 
    year: '2024', 
    title: 'Rango S', 
    subtitle: 'La inteligencia evoluciona.',
    desc: 'Nuestros agentes alcanzan capacidades avanzadas de razonamiento, permitiendo analizar, decidir y ejecutar tareas complejas con un nivel cercano al humano.',
    tagline: 'Sistemas más precisos. Mayor autonomía.'
  },
  { 
    year: '2025', 
    title: 'Expansión Global', 
    subtitle: 'La tecnología se escala.',
    desc: 'Implementamos nuestros agentes en empresas de alto nivel, optimizando operaciones, reduciendo costos y aumentando la productividad en múltiples sectores.',
    tagline: 'IA aplicada en escenarios reales.'
  },
  { 
    year: '2026', 
    title: 'Soberanía IA', 
    subtitle: 'El futuro se construye.',
    desc: 'Beru lidera la evolución hacia un ecosistema de agentes autónomos interconectados, capaces de operar a escala global sin límites.',
    tagline: 'Inteligencia que trabaja, aprende y evoluciona constantemente.'
  }
];

export const Historia = () => {
  return (
    <section id="historia" className="section-container relative">
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

      <SectionGlow intensity="medium" />


      {/* Shadow Energy Background */}
      <ShadowParticles count={40} color="#a855f7" className="opacity-20" />

      <div className="content-wrapper section-content-glow">
        <FadeIn className="mb-16 text-center">
          <h2 className="eternal-title font-bold mb-4 tracking-tight uppercase text-white">NUESTRA EVOLUCIÓN</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-beru-purple font-tech text-sm uppercase tracking-[0.2em] font-bold">
              De un prototipo… a una nueva forma de operar.
            </p>
            <p className="text-white/80 font-sans text-xl leading-relaxed">
              Beru no nació para seguir tendencias. Nació para redefinir el uso de la inteligencia artificial en el mundo empresarial.
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-beru-purple to-transparent mx-auto rounded-full shadow-[0_0_15px_#a855f7] mt-8" />
        </FadeIn>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[10px] md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-beru-purple/0 via-beru-purple to-beru-purple/0 -translate-x-1/2" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <FadeIn 
                key={item.year} 
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div 
                      onClick={playClickSound}
                      className={`p-8 border-l-2 border-transparent hover:border-beru-purple/30 transition-all duration-500 group interactive ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    >
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="font-display text-5xl font-black text-beru-purple/20 block mb-2 group-hover:text-beru-purple/40 transition-colors">{item.year}</span>
                        <h3 className="font-display text-xl font-bold mb-1 group-hover:text-beru-purple transition-colors">{item.title}</h3>
                        <p className="text-beru-purple font-tech text-[11px] uppercase tracking-widest mb-4">{item.subtitle}</p>
                        <p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">{item.desc}</p>
                        <div className={`pt-4 border-t border-white/10 w-full flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-xs text-white/50 font-sans italic font-medium">{item.tagline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className="w-8 h-8 bg-[#080010] border-2 border-beru-purple rounded-full shadow-[0_0_15px_#a855f7] flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg font-display font-bold text-white/90">
            Esto no es solo una historia. <span className="text-beru-purple">Es el inicio de una nueva era.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
