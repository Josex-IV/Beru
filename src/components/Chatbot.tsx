import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../lib/audio';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hola, ¿en qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    playClickSound();
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simular respuesta local
    setTimeout(() => {
      playSuccessSound();
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Gracias por tu mensaje. Un agente de Beru se pondrá en contacto contigo pronto.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[2000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] h-[500px] bg-[#080010] border border-white/10 rounded-[30px] shadow-2xl overflow-hidden flex flex-col glass"
          >
            {/* Header */}
            <div className="p-6 bg-beru-purple flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#080010] rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-beru-purple" />
                </div>
                <div>
                  <h3 className="text-black font-tech font-bold text-xs uppercase tracking-widest">Beru Assistant</h3>
                  <span className="text-black/60 text-[8px] font-tech uppercase tracking-widest">En línea</span>
                </div>
              </div>
              <button 
                onClick={() => { playClickSound(); setIsOpen(false); }}
                className="p-2 hover:bg-[#080010]/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-white/10' : 'bg-beru-purple/20'}`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4 text-white/40" /> : <Bot className="w-4 h-4 text-beru-purple" />}
                    </div>
                    <div className={`p-4 rounded-[20px] text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-white/5 text-white rounded-tr-none' 
                        : 'bg-beru-purple/10 text-white border border-beru-purple/20 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center bg-beru-purple/10 p-4 rounded-[20px] rounded-tl-none border border-beru-purple/20">
                    <Loader2 className="w-4 h-4 text-beru-purple animate-spin" />
                    <span className="text-xs text-white/60">Beru está pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-6 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={isLoading ? "Beru está procesando..." : "Escribe un mensaje..."}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 pr-12 outline-none focus:border-beru-purple/50 transition-all text-sm disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-beru-purple text-white rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { playClickSound(); setIsOpen(!isOpen); }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? 'bg-white text-black' : 'bg-beru-purple text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};
