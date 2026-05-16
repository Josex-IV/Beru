import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, ExternalLink } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../lib/audio';

export const Footer = () => {
  const footerLinks = [
    {
      title: "Producto",
      links: [
        "Sistemas Autónomos",
        "Agentes de IA",
        "Automatización Rango S",
        "Shadow Engine",
        "Laboratorio",
        "Seguridad Cuántica"
      ]
    },
    {
      title: "Soluciones",
      links: [
        "Ecommerce Inteligente",
        "Optimización de Procesos",
        "Análisis Predictivo",
        "Atención al Cliente IA",
        "Gestión de Inventario",
        "Escalabilidad"
      ]
    },
    {
      title: "Aprende",
      links: [
        "Beru Blog",
        "Documentación",
        "Casos de Éxito",
        "Seguridad y Privacidad",
        "Guías de IA"
      ]
    },
    {
      title: "Soporte",
      links: [
        "Centro de Ayuda",
        "Estado del Sistema",
        "Reportar Incidente",
        "Comunidad",
        "Contacto Directo"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Nuestra Historia",
        "Misión Rango S",
        "Impacto Real",
        "Sala de Prensa",
        "Trabaja en Beru"
      ]
    }
  ];

  return (
    <footer className="bg-[#080010] text-white py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-[0.2em]">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); playClickSound(); }}
                      className="text-white/50 hover:text-beru-purple text-xs md:text-sm transition-colors duration-300 font-medium block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Branding Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:ml-auto">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://stmwkvylgmvinrtopuod.supabase.co/storage/v1/object/sign/video/descarga.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81Nzg1ZGJiYS05YmQ2LTQwMjgtODViMy03MWQ4M2ExN2NkODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9kZXNjYXJnYS5wbmciLCJpYXQiOjE3NzY0NjYyMzUsImV4cCI6MTgwODAwMjIzNX0._MS_wJRHdjm7ROGwwTveFsVDShXqTlOHx4rwLzmb4m4" 
                alt="Beru Logo" 
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
              <span className="font-display text-2xl font-bold tracking-tighter glow-text uppercase">BERU</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
              El motor de inteligencia artificial que redefine la autonomía empresarial. Construimos el mañana, hoy.
            </p>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a href="#" onClick={(e) => { e.preventDefault(); playClickSound(); }} className="text-white font-bold hover:text-beru-purple transition-all flex items-center gap-2 group text-sm tracking-wide">
                Sobre nosotros
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); playClickSound(); }} className="text-white font-bold hover:text-beru-purple transition-all flex items-center gap-2 group text-sm tracking-wide">
                Contáctanos
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] md:text-[11px] font-tech uppercase tracking-widest text-center">
            © 2026 BERU AI. FORJANDO EL FUTURO DE LA AUTONOMÍA INTELIGENTE.
          </p>

          <div className="flex gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); playClickSound(); }} className="text-white/40 hover:text-white text-[10px] font-tech uppercase tracking-widest transition-colors font-bold">Privacidad</a>
            <a href="#" onClick={(e) => { e.preventDefault(); playClickSound(); }} className="text-white/40 hover:text-white text-[10px] font-tech uppercase tracking-widest transition-colors font-bold">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
