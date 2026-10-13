import React, { useState } from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { Language } from '../data/translations';
import logoTegma from '../assets/images/logo_site3.png';

interface FooterProps {
  currentLang: Language;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenQuote }) => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block p-2 bg-white rounded-md transition-opacity hover:opacity-95 shadow-xs">
              {!logoError ? (
                <img
                  src={logoTegma}
                  alt="Logótipo Oficial TEGMA-SU, Lda"
                  className="h-8 sm:h-9 w-auto max-h-9 max-w-[180px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight px-1">
                  TEGMA-SU
                </span>
              )}
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {currentLang === 'pt'
                ? 'Empresa privada angolana fundada em 2013 em Luanda. Atuação multissetorial em construção civil, reabilitação viária, agroindústria nacional (Batatas Palanca), importação e linhas de financiamento internacional.'
                : 'Angolan private enterprise founded in 2013 in Luanda. Multi-sector leadership in civil roadworks, national agro-industry (Palanca Potato Chips), industrial supply and global financing lines.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#EF4B37] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#EF4B37]" />
              <span>NIF: 5417124976 · República de Angola</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {currentLang === 'pt' ? 'Divisões' : 'Divisions'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#divisoes" className="hover:text-[#EF4B37] transition-colors">
                  Engenharia & Obras Públicas
                </a>
              </li>
              <li>
                <a href="#agro-palanca" className="hover:text-[#EF4B37] transition-colors">
                  Fábrica Palanca (Cacuso)
                </a>
              </li>
              <li>
                <a href="#divisoes" className="hover:text-[#EF4B37] transition-colors">
                  Maquinaria & Equipamentos
                </a>
              </li>
              <li>
                <a href="#eixo-global" className="hover:text-[#EF4B37] transition-colors">
                  Linhas de Financiamento
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {currentLang === 'pt' ? 'Institucional' : 'Institutional'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projectos" className="hover:text-[#EF4B37] transition-colors">
                  {currentLang === 'pt' ? 'Projectos por Província' : 'Provincial Projects'}
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-[#EF4B37] transition-colors">
                  {currentLang === 'pt' ? 'Parceiros & Testemunhos' : 'Partners & Testimonials'}
                </a>
              </li>
              <li>
                <a href="#eixo-global" className="hover:text-[#EF4B37] transition-colors">
                  {currentLang === 'pt' ? 'Eixo Global & Parcerias' : 'Global Hubs & Alliances'}
                </a>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-[#EF4B37] transition-colors text-left cursor-pointer">
                  {currentLang === 'pt' ? 'Simulador de Cotação (RFQ)' : 'Quotation Simulator (RFQ)'}
                </button>
              </li>
              <li>
                <a href="#contactos" className="hover:text-[#EF4B37] transition-colors">
                  {currentLang === 'pt' ? 'Sede em Luanda' : 'Headquarters in Luanda'}
                </a>
              </li>
            </ul>
          </div>

          {/* Regional & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {currentLang === 'pt' ? 'Localizações' : 'Locations'}
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <strong className="text-slate-300">Sede:</strong> Rua Amílcar Cabral, Luanda
              </div>
              <div>
                <strong className="text-slate-300">Pólo Fabril:</strong> Cacuso, Malanje
              </div>
              <div>
                <strong className="text-slate-300">Obras:</strong> Luanda, Malanje, Benguela, Lunda-Sul, Lunda-Norte
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TEGMA-SU, Lda. Todos os direitos reservados. República de Angola.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{currentLang === 'pt' ? 'Topo da Página' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
