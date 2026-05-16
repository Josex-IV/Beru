import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, Cpu } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { playClickSound } from '../lib/audio';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';

const services = [
  {
    title: 'Agentes de Sombras',
    subtitle: 'IA que no espera instrucciones. Actúa.',
    desc: 'Desarrollamos agentes autónomos capaces de tomar decisiones, ejecutar procesos complejos y operar 24/7 sin intervención humana. Desde atención al cliente hasta operaciones internas, tu negocio funcionando en piloto automático.',
    tagline: 'Menos supervisión. Más resultados.',
    icon: Bot,
    color: '#a855f7'
  },
  {
    title: 'Automatización Épica',
    subtitle: 'Convierte procesos en sistemas inteligentes.',
    desc: 'Optimizamos tus flujos de trabajo para eliminar tareas repetitivas, reducir errores y acelerar cada operación. Tu empresa deja de depender del esfuerzo humano y comienza a funcionar como un sistema eficiente.',
    tagline: 'Más velocidad. Más eficiencia. Más crecimiento.',
    icon: Zap,
    color: '#6366f1'
  },
  {
    title: 'Seguridad de Rango S',
    subtitle: 'Protección al nivel de empresas líderes.',
    desc: 'Implementamos sistemas avanzados de seguridad y encriptación para proteger tu información, tus modelos y tus operaciones. La inteligencia artificial también necesita defensa… y nosotros la garantizamos.',
    tagline: 'Confianza total en cada proceso.',
    icon: Shield,
    color: '#ec4899'
  },
  {
    title: 'Núcleo Inteligente',
    subtitle: 'La IA se integra. Tu negocio evoluciona.',
    desc: 'Conectamos nuestros sistemas con tus herramientas actuales para una transición fluida y sin fricción. No reemplazamos tu negocio — lo potenciamos desde el núcleo.',
    tagline: 'Escala sin detener lo que ya funciona.',
    icon: Cpu,
    color: '#8b5cf6'
  }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="section-container relative">
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
          <h2 className="eternal-title font-bold mb-6 tracking-tight uppercase text-white">NUESTROS PODERES</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-white/80 font-sans text-xl leading-relaxed">
              Tecnología diseñada para automatizar, escalar y dominar tu operación con inteligencia artificial.
            </p>
            <p className="text-beru-purple font-tech text-sm uppercase tracking-[0.2em] font-bold">
              No vendemos software. <br />
              <span className="text-white">Creamos sistemas inteligentes que trabajan, aprenden y evolucionan por ti.</span>
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-beru-purple to-transparent mx-auto rounded-full shadow-[0_0_15px_#a855f7] mt-8" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  y: -5,
                  borderColor: 'rgba(168,85,247,0.5)'
                }}
                onClick={playClickSound}
                className="p-8 border-b border-white/5 hover:border-beru-purple/30 group relative overflow-hidden transition-all duration-500 h-full flex flex-col interactive text-left"
              >
                {/* Dynamic Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-beru-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-beru-purple/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-6 h-6 text-beru-purple" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-beru-purple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-beru-purple font-tech text-[11px] uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>
                <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base mb-4 flex-grow text-justify font-medium">
                  {service.desc}
                </p>
                <p className="text-white/50 font-sans text-xs italic mb-6 font-medium">
                  {service.tagline}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-[10px] font-tech uppercase tracking-[0.2em] text-beru-purple opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  Saber más <span className="text-base">→</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="text-center max-w-2xl mx-auto">
          <p className="text-white/60 font-sans text-base mb-2">
            No se trata de usar inteligencia artificial.
          </p>
          <p className="text-white/80 font-sans text-base mb-6 font-medium">
            Se trata de construir sistemas que trabajen por ti.
          </p>
          <p className="text-beru-purple font-tech text-xl uppercase tracking-[0.3em] font-bold">
            Y eso es exactamente lo que hacemos en Beru.
          </p>
        </FadeIn>
      </div>

    </section>
  );
};
