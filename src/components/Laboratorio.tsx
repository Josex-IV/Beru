import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Cpu, Shield, Zap, Bot, Code, BarChart3, Sparkles, RefreshCw } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { playClickSound, playSuccessSound } from '../lib/audio';
import { ShadowParticles } from './ShadowParticles';
import { SectionGlow } from './SectionGlow';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  result?: {
    title: string;
    code?: string;
    stats?: { label: string; value: string }[];
    icon: any;
  };
}

const EXPERIMENTS = [
  {
    id: 'market',
    label: 'Análisis de Mercado',
    subtitle: 'Convierte datos en decisiones inteligentes.',
    desc: 'Nuestros sistemas analizan tendencias, comportamiento del usuario y oportunidades del mercado para darte ventaja competitiva en tiempo real.',
    tagline: 'Información clara. Decisiones estratégicas.',
    prompt: 'Beru, genera un análisis de tendencias para el sector tecnológico Q3 2026.',
    icon: BarChart3,
    response: 'Iniciando escaneo de redes globales... Procesando 14.2TB de datos en tiempo real.',
    result: {
      title: 'Reporte de Tendencias Q3 - Rango S',
      stats: [
        { label: 'Crecimiento IA', value: '+342%' },
        { label: 'Eficiencia Operativa', value: '98.4%' },
        { label: 'Adopción Agentes', value: 'High' }
      ],
      icon: BarChart3
    }
  },
  {
    id: 'code',
    label: 'Optimización de Código',
    subtitle: 'Más rendimiento. Menos errores.',
    desc: 'Mejoramos, depuramos y optimizamos tu código utilizando inteligencia artificial, aumentando eficiencia y reduciendo tiempos de desarrollo.',
    tagline: 'Código más limpio. Resultados más rápidos.',
    prompt: 'Optimiza el núcleo de procesamiento de mi infraestructura actual.',
    icon: Code,
    response: 'Refactorizando algoritmos de concurrencia... Aplicando patrones de sombras para latencia cero.',
    result: {
      title: 'Optimización de Núcleo Completada',
      code: 'const shadowCore = async (data) => {\n  const optimized = await beru.process(data, {\n    mode: "shadow-sync",\n    priority: "S-Rank"\n  });\n  return optimized;\n};',
      icon: Code
    }
  },
  {
    id: 'security',
    label: 'Escaneo de Seguridad',
    subtitle: 'Detecta antes de que sea un problema.',
    desc: 'Analizamos vulnerabilidades, riesgos y posibles fallos en tus sistemas para garantizar una operación segura y confiable.',
    tagline: 'Protección inteligente en cada capa.',
    prompt: 'Igris, realiza un escaneo de vulnerabilidades de Rango S en mis sistemas.',
    icon: Shield,
    response: 'Desplegando caballeros de sombras en el perímetro... Analizando vectores de ataque.',
    result: {
      title: 'Estado de Seguridad: Impenetrable',
      stats: [
        { label: 'Amenazas Bloqueadas', value: '1,240' },
        { label: 'Integridad de Datos', value: '100%' },
        { label: 'Nivel de Alerta', value: 'Mínimo' }
      ],
      icon: Shield
    }
  },
  {
    id: 'automation',
    label: 'Flujo de Trabajo IA',
    subtitle: 'Automatización que evoluciona contigo.',
    desc: 'Diseñamos procesos inteligentes que conectan tus herramientas, optimizan tareas y ejecutan operaciones sin intervención constante.',
    tagline: 'Sistemas que trabajan mientras tú creces.',
    prompt: 'Crea un agente autónomo para gestionar mi atención al cliente 24/7.',
    icon: Bot,
    response: 'Invocando Agente de Sombras... Configurando parámetros de aprendizaje continuo.',
    result: {
      title: 'Agente de Sombras Desplegado',
      stats: [
        { label: 'Tiempo de Respuesta', value: '< 100ms' },
        { label: 'Tasa de Resolución', value: '94.2%' },
        { label: 'Escalabilidad', value: 'Infinita' }
      ],
      icon: Bot
    }
  }
];

export const Laboratorio = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Bienvenido al Laboratorio de Sombras. Selecciona un experimento para ver mi poder en acción o solicita una generación personalizada.'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleExperiment = (exp: typeof EXPERIMENTS[0]) => {
    if (isTyping) return;
    playClickSound();
    
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: exp.prompt
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: exp.response
      };
      setMessages(prev => [...prev, botMsg]);
      
      setTimeout(() => {
        const resultMsg: Message = {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          content: 'Generación completada con éxito. Aquí tienes los resultados:',
          result: exp.result
        };
        setMessages(prev => [...prev, resultMsg]);
        setIsTyping(false);
        playSuccessSound();
      }, 1500);
    }, 1000);
  };

  return (
    <section id="laboratorio" className="section-container relative">
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

      {/* Easter Egg */}

      <SectionGlow intensity="medium" />
      {/* Shadow Energy Background */}
      <ShadowParticles count={40} color="#a855f7" className="opacity-20" />

      <div className="content-wrapper relative z-10 h-full flex flex-col section-content-glow">
        <FadeIn className="mb-8 text-center">
          <h2 className="eternal-title font-bold mb-2 tracking-tight uppercase text-white">LABORATORIO DE SOMBRAS</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-beru-purple font-tech text-sm uppercase tracking-[0.2em] font-bold">
              Experimentación avanzada. Resultados reales.
            </p>
            <p className="text-white/80 font-sans text-xl leading-relaxed">
              Pon a prueba el poder de la inteligencia artificial en tiempo real. Analiza, optimiza y transforma tu negocio con herramientas diseñadas para operar al más alto nivel.
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-beru-purple to-transparent mx-auto rounded-full shadow-[0_0_15px_#a855f7] mt-8" />
        </FadeIn>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
          {/* Sidebar: Experiments */}
          <FadeIn direction="right" className="lg:col-span-1 space-y-4 h-full">
            <div className="p-6 h-full flex flex-col overflow-hidden relative">
              <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2 shrink-0">
                <Sparkles className="w-5 h-5 text-beru-purple" />
                Experimentos Disponibles
              </h3>
              <div className="flex-grow space-y-3 overflow-y-auto pr-2 scrollbar-hide">
                {EXPERIMENTS.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => handleExperiment(exp)}
                    disabled={isTyping}
                    className="w-full p-6 border-l-2 border-transparent hover:border-beru-purple/30 hover:bg-white/[0.02] transition-all duration-300 group flex flex-col gap-2 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-beru-purple/20 transition-colors shrink-0">
                        <exp.icon className="w-4 h-4 text-beru-purple" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold group-hover:text-beru-purple transition-colors truncate">{exp.label}</div>
                        <div className="text-[9px] text-beru-purple uppercase tracking-wider truncate">{exp.subtitle}</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-white/70 leading-relaxed line-clamp-2 md:text-xs">
                      {exp.desc}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[10px] text-white/50 font-sans italic truncate font-medium">{exp.tagline}</span>
                      <span className="text-[9px] text-white/40 font-tech uppercase tracking-widest shrink-0 font-bold">Activo</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 shrink-0">
                <p className="text-[11px] text-white/70 font-sans text-center font-bold">
                  No es solo experimentar. Es evolucionar con inteligencia.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Main: Chat Terminal */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-2 h-full">
            <div className="flex flex-col h-full overflow-hidden relative shadow-2xl">
              {/* Terminal Header */}
              <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-tech text-white/30 uppercase tracking-[0.2em] ml-2">Shadow_Lab_Terminal_v2.5</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-beru-purple rounded-full animate-pulse" />
                  <span className="text-[10px] font-tech text-beru-purple uppercase tracking-widest">Online</span>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                ref={scrollRef}
                className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide"
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] ${msg.type === 'user' ? 'border-beru-purple' : 'border-white/20'} border-l-2 p-4 relative group bg-white/5 rounded-r-xl`}>
                        <div className="text-sm md:text-base leading-relaxed text-white/90 font-medium">
                          {msg.content}
                        </div>
                        
                        {msg.result && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 p-4 border-l border-white/10"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-beru-purple/20 flex items-center justify-center">
                                <msg.result.icon className="w-4 h-4 text-beru-purple" />
                              </div>
                              <span className="text-xs font-bold font-display uppercase tracking-wider">{msg.result.title}</span>
                            </div>
                            
                            {msg.result.stats && (
                              <div className="grid grid-cols-3 gap-4">
                                {msg.result.stats.map((stat, i) => (
                                  <div key={i} className="text-center">
                                    <div className="text-beru-purple font-display font-bold text-lg md:text-xl">{stat.value}</div>
                                    <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">{stat.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {msg.result.code && (
                              <div className="relative group/code">
                                <pre className="text-[10px] font-mono text-indigo-300 p-4 overflow-x-auto scrollbar-hide">
                                  <code>{msg.result.code}</code>
                                </pre>
                                <button className="absolute top-2 right-2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                  <RefreshCw className="w-3 h-3 text-white/40" />
                                </button>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-1 items-center">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-beru-purple rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-beru-purple rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-beru-purple rounded-full" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-6 bg-white/5">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Solicita una generación personalizada..."
                    disabled={isTyping}
                    className="w-full bg-[#080010]/40 rounded-2xl px-6 py-4 outline-none focus:bg-beru-purple/10 transition-all text-white placeholder:text-white/50 font-sans text-sm md:text-base pr-16 disabled:opacity-50"
                  />
                  <button 
                    disabled={isTyping}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-beru-purple text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-beru-purple shadow-[0_0_5px_#a855f7]" />
                    <span className="text-[10px] font-tech text-white/70 uppercase tracking-widest font-bold">IA Activa</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_#6366f1]" />
                    <span className="text-[10px] font-tech text-white/70 uppercase tracking-widest font-bold">Cifrado Rango S</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
