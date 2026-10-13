import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, CheckCircle2, ChevronRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../data/translations';
import { COMPANY_CONTACTS } from '../data/companyData';

interface WhatsAppFloatingButtonProps {
  currentLang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = '244936683344'; // +244 936 683 344

  const quickTopics = [
    {
      id: 'obras',
      icon: '🏗️',
      label: currentLang === 'pt' ? 'Obras Públicas & Asfalto' : 'Civil Works & Asphalt',
      msg: currentLang === 'pt' 
        ? 'Olá! Gostaria de solicitar informações e cotação para projetos de Engenharia Civil e Obras Rodoviárias.'
        : 'Hello! I would like to request info and quotation for Civil Engineering and Roadworks projects.'
    },
    {
      id: 'palanca',
      icon: '🥔',
      label: currentLang === 'pt' ? 'Batatas Palanca (Retalho/Grossista)' : 'Palanca Potato Chips (Wholesale)',
      msg: currentLang === 'pt'
        ? 'Olá! Gostaria de consultar tabelas de preços, quantidades mínimas e distribuição das Batatas Fritas Palanca.'
        : 'Hello! I would like to inquire about price lists, minimum orders, and supply of Palanca Potato Chips.'
    },
    {
      id: 'maquinaria',
      icon: '🚜',
      label: currentLang === 'pt' ? 'Maquinaria Pesada & Equipamentos' : 'Heavy Machinery & Fleet',
      msg: currentLang === 'pt'
        ? 'Olá! Tenho interesse no aluguer ou fornecimento de maquinaria pesada para obras industriais.'
        : 'Hello! I am interested in heavy equipment rental or procurement for industrial projects.'
    },
    {
      id: 'reuniao',
      icon: '🤝',
      label: currentLang === 'pt' ? 'Audiência Institucional / Parcerias' : 'Institutional Meeting / Alliances',
      msg: currentLang === 'pt'
        ? 'Olá! Gostaria de agendar uma reunião técnica ou institucional com a direção da TEGMA-SU, Lda.'
        : 'Hello! I would like to schedule a technical or corporate meeting with TEGMA-SU management.'
    }
  ];

  // Auto-hide the initial tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Close popover on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectTopic = (topic: typeof quickTopics[0]) => {
    setSelectedTopic(topic.id);
    setCustomMessage(topic.msg);
  };

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const finalMessage = customMessage.trim() || (
      currentLang === 'pt'
        ? 'Olá! Gostaria de falar com o departamento comercial da TEGMA-SU sobre oportunidades de projeto em Angola.'
        : 'Hello! I would like to speak with TEGMA-SU commercial department regarding project opportunities in Angola.'
    );

    const encoded = encodeURIComponent(finalMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* 1. Quick Chat Popover Window */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          aria-label="Janela de Chat WhatsApp"
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Popover Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Corporate Monogram Avatar with Online Dot */}
                <div className="relative">
                  <div className="h-11 w-11 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center font-black font-['Outfit'] text-white text-xs tracking-wider shadow-inner">
                    TEGMA
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm leading-snug font-['Outfit']">
                      TEGMA-SU Suporte Comercial
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-white/90" />
                  </div>
                  <p className="text-[11px] text-white/90 flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    <span>{currentLang === 'pt' ? 'Atendimento Online · Luanda' : 'Online Support · Luanda'}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label={currentLang === 'pt' ? 'Fechar chat' : 'Close chat'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body Simulation */}
          <div className="p-4 bg-slate-50/70 border-b border-slate-100 max-h-[360px] overflow-y-auto space-y-3">
            
            {/* Timestamp Notice */}
            <div className="text-center">
              <span className="inline-block text-[10px] font-medium text-slate-400 bg-white/80 px-2.5 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
                {currentLang === 'pt' ? 'Seg - Sex: 08h00 às 17h30 (GMT+1)' : 'Mon - Fri: 08:00 to 17:30 (GMT+1)'}
              </span>
            </div>

            {/* Official Greeting Bubble */}
            <div className="flex items-start gap-2 max-w-[90%]">
              <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-xs border border-slate-200/80 text-xs text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900 font-['Outfit'] flex items-center gap-1">
                  <span>{currentLang === 'pt' ? 'Olá! Bem-vindo à TEGMA-SU, Lda.' : 'Hello! Welcome to TEGMA-SU, Lda.'}</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {currentLang === 'pt'
                    ? 'Como podemos ajudar a sua instituição ou empresa hoje? Selecione um tema rápido abaixo ou escreva a sua dúvida:'
                    : 'How can we assist your institution or enterprise today? Select a quick topic below or type your message:'}
                </p>
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {currentLang === 'pt' ? 'Tópicos Frequentes:' : 'Frequently Inquired:'}
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {quickTopics.map((topic) => {
                  const isSelected = selectedTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleSelectTopic(topic)}
                      type="button"
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold shadow-2xs'
                          : 'bg-white hover:bg-slate-50/90 border-slate-200 text-slate-700 hover:border-emerald-200'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span>{topic.icon}</span>
                        <span className="truncate">{topic.label}</span>
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Form / Direct Action */}
          <form onSubmit={handleStartChat} className="p-3 bg-white space-y-2.5">
            <div className="relative">
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder={currentLang === 'pt' ? 'Escreva uma mensagem personalizada...' : 'Type a custom inquiry...'}
                rows={2}
                className="w-full resize-none rounded-lg border border-slate-300 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.631-.676-2.678-2.342-2.759-2.45-.08-.108-.66-88-.66-1.679 0-.799.418-1.192.566-1.353.149-.161.326-.202.434-.202.109 0 .217.001.312.006.1.006.234-.038.366.28.136.326.464 1.13.505 1.212.04.082.068.178.014.285-.054.108-.082.176-.162.272-.082.095-.172.213-.246.286-.081.082-.166.171-.071.334.095.163.423.699.907 1.13.624.557 1.15.729 1.314.81.163.082.26.069.356-.042.096-.111.408-.475.517-.638.109-.163.218-.136.367-.082.149.054.952.449 1.116.531.163.082.272.122.312.19.04.068.04.394-.104.799z" />
              </svg>
              <span>{currentLang === 'pt' ? 'Iniciar Conversa no WhatsApp' : 'Start WhatsApp Chat'}</span>
            </button>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#25D366]" />
                <span>+244 936 683 344</span>
              </span>
              <span>{currentLang === 'pt' ? 'Canal Oficial Certificado' : 'Official Verified Channel'}</span>
            </div>
          </form>

        </div>
      )}

      {/* 2. Floating Action Button & Tooltip Indicator */}
      <div className="flex items-center gap-2.5">
        
        {/* Contextual Tooltip Badge */}
        {!isOpen && showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-xs text-slate-800 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/90 text-xs font-semibold animate-in fade-in slide-in-from-right-3 duration-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{currentLang === 'pt' ? 'Precisa de suporte? Fale no WhatsApp' : 'Need assistance? Chat on WhatsApp'}</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded cursor-pointer"
              title={currentLang === 'pt' ? 'Dispensar' : 'Dismiss'}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* The Main Round WhatsApp Trigger Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          aria-expanded={isOpen}
          aria-label={currentLang === 'pt' ? 'Abrir chat direto de WhatsApp' : 'Open direct WhatsApp chat'}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-emerald-500/20"
        >
          {/* Subtle radiating ripple effect */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping pointer-events-none" />

          {/* Active Status Badge Indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white" />
          </span>

          {/* Button Icon: Switches cleanly between WhatsApp phone icon and Close X */}
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 rotate-90 group-hover:rotate-0" />
          ) : (
            <svg
              className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.631-.676-2.678-2.342-2.759-2.45-.08-.108-.66-88-.66-1.679 0-.799.418-1.192.566-1.353.149-.161.326-.202.434-.202.109 0 .217.001.312.006.1.006.234-.038.366.28.136.326.464 1.13.505 1.212.04.082.068.178.014.285-.054.108-.082.176-.162.272-.082.095-.172.213-.246.286-.081.082-.166.171-.071.334.095.163.423.699.907 1.13.624.557 1.15.729 1.314.81.163.082.26.069.356-.042.096-.111.408-.475.517-.638.109-.163.218-.136.367-.082.149.054.952.449 1.116.531.163.082.272.122.312.19.04.068.04.394-.104.799z" />
            </svg>
          )}
        </button>

      </div>

    </aside>
  );
};
