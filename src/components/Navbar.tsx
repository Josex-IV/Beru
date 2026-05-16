import React from 'react';
import { motion } from 'framer-motion';
import { playClickSound } from '../lib/audio';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const navItems = ['Inicio', 'Servicios', 'Laboratorio', 'Historia', 'Nosotros', 'Contacto'];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-[#080010]/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('inicio')}>
          <img 
            src="https://stmwkvylgmvinrtopuod.supabase.co/storage/v1/object/sign/video/descarga.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81Nzg1ZGJiYS05YmQ2LTQwMjgtODViMy03MWQ4M2ExN2NkODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9kZXNjYXJnYS5wbmciLCJpYXQiOjE3NzY0NjU2NDYsImV4cCI6MTgwODAwMTY0Nn0.TZhHfMM-jNZVZ9fcl9B0hkljEDhL4Y0Bv71RACsx5mY" 
            alt="Beru Logo" 
            referrerPolicy="no-referrer"
            className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          />
          <span className="font-display text-2xl font-bold tracking-tighter glow-text">BERU</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-tech uppercase tracking-[0.2em]">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button 
                key={item} 
                onClick={() => setActiveSection(id)}
                className={`transition-colors duration-300 relative group ${isActive ? 'text-beru-purple font-bold' : 'text-white/40 hover:text-white'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-beru-purple transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            );
          })}
        </div>
        
        <button 
          onClick={playClickSound}
          className="px-6 py-2 bg-white text-black font-tech font-bold text-xs uppercase tracking-widest rounded-full hover:bg-beru-purple hover:text-white transition-all duration-300 shadow-xl"
        >
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
};
