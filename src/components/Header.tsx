import React, { useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import logoTegma from '../assets/images/logo_site3.png';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between pl-2 sm:pl-3 lg:pl-4 pr-3 sm:pr-4 lg:pr-6">
        
        {/* Zone 1: Single Brand Zone with Logo */}
        <a 
          href="#home"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 shrink-0 pr-3 lg:pr-4"
          aria-label="TEGMA-SU Início"
        >
          {!logoError ? (
            <img
              src={logoTegma}
              alt="Logótipo TEGMA-SU, Lda"
              className="h-10 sm:h-12 w-auto max-h-12 max-w-[190px] object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] hover:text-[#EF4B37] transition-colors">
              TEGMA-SU
            </span>
          )}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-slate-700">
          <a
            href="#divisoes"
            onClick={(e) => { e.preventDefault(); handleNavClick('#divisoes'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.divisions}
          </a>
          <a
            href="#agro-palanca"
            onClick={(e) => { e.preventDefault(); handleNavClick('#agro-palanca'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.agroPalanca}
          </a>
          <a
            href="#projectos"
            onClick={(e) => { e.preventDefault(); handleNavClick('#projectos'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.projects}
          </a>
          <a
            href="#parceiros"
            onClick={(e) => { e.preventDefault(); handleNavClick('#parceiros'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.partners}
          </a>
          <a
            href="#eixo-global"
            onClick={(e) => { e.preventDefault(); handleNavClick('#eixo-global'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.international}
          </a>
          <a
            href="#contactos"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contactos'); }}
            className="hover:text-[#EF4B37] transition-colors py-1 hover:border-b-2 hover:border-[#EF4B37] whitespace-nowrap shrink-0"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <button
            onClick={() => onLanguageChange(currentLang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-slate-700 hover:text-slate-900 border border-slate-300 rounded-md hover:border-[#EF4B37] transition-colors"
            title="Alternar Idioma / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#EF4B37]" />
            <span>{currentLang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Main Action CTA */}
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md shadow-sm transition-all whitespace-nowrap"
          >
            <span>{t.nav.requestQuote}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <a
              href="#divisoes"
              onClick={(e) => { e.preventDefault(); handleNavClick('#divisoes'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.divisions}
            </a>
            <a
              href="#agro-palanca"
              onClick={(e) => { e.preventDefault(); handleNavClick('#agro-palanca'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.agroPalanca}
            </a>
            <a
              href="#projectos"
              onClick={(e) => { e.preventDefault(); handleNavClick('#projectos'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.projects}
            </a>
            <a
              href="#parceiros"
              onClick={(e) => { e.preventDefault(); handleNavClick('#parceiros'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.partners}
            </a>
            <a
              href="#eixo-global"
              onClick={(e) => { e.preventDefault(); handleNavClick('#eixo-global'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.international}
            </a>
            <a
              href="#contactos"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contactos'); }}
              className="py-1 hover:text-[#EF4B37]"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md shadow-sm transition-all"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
