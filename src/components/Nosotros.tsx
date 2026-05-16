import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ParallaxSection } from './ParallaxSection';
import { playClickSound } from '../lib/audio';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';

export const Nosotros = () => {
  return (
    <section id="nosotros" className="section-container relative">
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
      {/* Shadow Energy Background */}
      <ShadowParticles count={40} color="#a855f7" className="opacity-20" />

      <div className="content-wrapper section-content-glow">
        <div className="flex flex-col items-center relative w-full overflow-hidden p-8 md:p-20 text-center">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-beru-purple/5 blur-[120px] rounded-full pointer-events-none" />
          
          <FadeIn direction="up" className="max-w-4xl space-y-8">
            <div className="flex flex-col items-center">
              <span className="font-tech text-beru-purple tracking-[0.4em] uppercase text-[10px] mb-4 block">Nuestra Misión</span>
              <h2 className="eternal-title font-bold mb-4 leading-[1.1] tracking-tight uppercase text-white">NUESTRA MISIÓN</h2>
              <p className="text-beru-purple font-tech text-sm uppercase tracking-[0.2em] mb-8">
                Forjando el futuro de la autonomía inteligente.
              </p>
            </div>

            <div className="space-y-6 text-white/80 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              <p>
                En Beru no solo desarrollamos software. <br />
                <span className="text-white font-bold">Creamos sistemas capaces de pensar, aprender y evolucionar de forma independiente.</span>
              </p>
              
              <p>
                Nuestra visión es clara: <br />
                un mundo donde la inteligencia artificial deje de ser una herramienta y se convierta en un aliado estratégico capaz de potenciar el verdadero alcance humano.
              </p>

              <p className="italic text-beru-purple font-bold">
                No buscamos reemplazar el talento… <br />
                buscamos amplificarlo.
              </p>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <h3 className="font-display text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                Impacto en Tiempo Real
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-2xl">
                <div className="group interactive space-y-2" onClick={playClickSound}>
                  <div className="text-5xl font-display font-black text-beru-purple group-hover:scale-110 transition-transform duration-500">10M+</div>
                  <p className="text-[12px] text-white/70 leading-relaxed group-hover:text-white/100 transition-colors uppercase tracking-widest font-bold">
                    Tareas automatizadas.
                  </p>
                </div>
                
                <div className="group interactive space-y-2" onClick={playClickSound}>
                  <div className="text-5xl font-display font-black text-beru-purple group-hover:scale-110 transition-transform duration-500">99.9%</div>
                  <p className="text-[12px] text-white/70 leading-relaxed group-hover:text-white/100 transition-colors uppercase tracking-widest font-bold">
                    Precisión Rango S.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <p className="text-sm font-display font-bold text-white/80">
                La evolución no es opcional. <span className="text-beru-purple">Es inevitable.</span> <br />
                <span className="text-[10px] opacity-60 uppercase tracking-[0.2em]">Y en Beru, la estamos construyendo.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
};
