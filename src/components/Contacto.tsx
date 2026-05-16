import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';
import { playClickSound, playSuccessSound } from '../lib/audio';

export const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessSound();
    // Using a more subtle way to show success could be better, but keeping it simple for now as requested
  };

  return (
    <section id="contacto" className="section-container relative">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          <FadeIn direction="right" className="text-left space-y-8">
            <div>
              <h2 className="eternal-title font-bold mb-6 leading-[1.1] tracking-tight uppercase text-white">
                ¿LISTO PARA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-beru-purple to-indigo-400 glow-text">SUBIR DE NIVEL?</span>
              </h2>
              <p className="text-beru-purple font-tech text-sm uppercase tracking-[0.2em] mb-4">
                Da el siguiente paso hacia una operación impulsada por inteligencia artificial.
              </p>
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-md font-medium">
                Únete a la élite tecnológica y transforma tu negocio con sistemas inteligentes diseñados para escalar, optimizar y ejecutar sin límites.
              </p>
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-md mt-4 font-medium">
                Nuestros especialistas están listos para integrar el poder de la IA en tu infraestructura.
              </p>
            </div>
            
            <div className="space-y-8 pt-8">
              <h3 className="font-display text-sm font-bold text-white/70 uppercase tracking-[0.2em] flex items-center gap-3">
                Beneficios
              </h3>
                            <div className="space-y-6">
                <div className="flex items-start gap-4 group interactive" onClick={playClickSound}>
                  <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-beru-purple/20 transition-colors duration-500 shrink-0">
                    <div className="w-2 h-2 bg-beru-purple rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
                  </div>
                  <div>
                    <div className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/90 mb-1 font-bold">Soporte Rango S 24/7</div>
                    <p className="text-[12px] text-white/70 leading-relaxed font-medium">Asistencia continua para garantizar el rendimiento de tus sistemas en todo momento.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group interactive" onClick={playClickSound}>
                  <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-beru-purple/20 transition-colors duration-500 shrink-0">
                    <div className="w-2 h-2 bg-beru-purple rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
                  </div>
                  <div>
                    <div className="font-tech text-[11px] uppercase tracking-[0.2em] text-white/90 mb-1 font-bold">Despliegue Instantáneo</div>
                    <p className="text-[12px] text-white/70 leading-relaxed font-medium">Implementación rápida y eficiente sin interrumpir tu operación.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm font-display font-bold text-white/80 italic">
                El futuro no se espera. <span className="text-beru-purple">Se construye.</span> <br />
                <span className="text-[10px] opacity-60 uppercase tracking-widest mt-2 block">Y empieza aquí.</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative z-10">
            <div className="p-8 md:p-12 border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm rounded-3xl">
              <h3 className="font-display text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                Formulario de Contacto
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-tech uppercase tracking-[0.3em] text-white/80 ml-4 font-bold">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu identidad dentro del sistema."
                    onClick={playClickSound}
                    className="w-full bg-white/5 rounded-[16px] px-6 py-4 outline-none focus:bg-beru-purple/10 transition-all text-white placeholder:text-white/40 font-sans text-sm md:text-base border border-white/5 focus:border-beru-purple/30"
                  />
                </div>
                
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-tech uppercase tracking-[0.3em] text-white/80 ml-4 font-bold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="Donde recibirás nuestra respuesta."
                    onClick={playClickSound}
                    className="w-full bg-white/5 rounded-[16px] px-6 py-4 outline-none focus:bg-beru-purple/10 transition-all text-white placeholder:text-white/40 font-sans text-sm md:text-base border border-white/5 focus:border-beru-purple/30"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-tech uppercase tracking-[0.3em] text-white/80 ml-4 font-bold">Misión / Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto, necesidades o desafíos. Mientras más detalles compartas, más precisa será la solución."
                    onClick={playClickSound}
                    className="w-full bg-white/5 rounded-[16px] px-6 py-4 outline-none focus:bg-beru-purple/10 transition-all text-white placeholder:text-white/40 resize-none font-sans text-sm md:text-base leading-relaxed border border-white/5 focus:border-beru-purple/30"
                  />
                </div>

                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={playClickSound}
                    className="w-full py-5 bg-white text-black font-tech font-bold rounded-[16px] uppercase tracking-[0.3em] text-[10px] hover:bg-beru-purple hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group interactive"
                  >
                    ENVIAR SOLICITUD <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </motion.button>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-white/80 uppercase tracking-widest font-medium">
                    Tu información es completamente confidencial.
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/80 uppercase tracking-widest font-medium">
                    Respuesta en menos de 24 horas.
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/80 uppercase tracking-widest font-medium">
                    Asesoría inicial sin costo.
                  </div>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
};
