import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenQuote }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950">
      {/* Background Image Focal Carrier with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/src/assets/images/hero_angola_infrastructure_1790688463904.jpg"
          alt="Infraestrutura viária e obras públicas da TEGMA-SU em Angola"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
        
        {/* Zero-Pill Unboxed Metadata Tagline with Typographic Separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4B37] mb-6">
          <span>{currentLang === 'pt' ? 'Empresa Privada Angolana' : 'Angolan Private Enterprise'}</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>{currentLang === 'pt' ? 'Fundada em 2013 em Luanda' : 'Est. 2013 in Luanda'}</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>{currentLang === 'pt' ? 'Proprietária da Fábrica Palanca' : 'Owner of Palanca Plant'}</span>
        </div>

        {/* Display Headline with text-wrap: balance */}
        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white font-['Outfit'] sm:text-5xl lg:text-6xl leading-[1.1] [text-wrap:balance]">
          {t.hero.title}
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Concrete Trust Elements */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#EF4B37] shrink-0" />
            <span>{currentLang === 'pt' ? 'Alvará de Obras Públicas e Construção Civil' : 'Public Works & Civil Construction Licensing'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FA9B0E] shrink-0" />
            <span>{currentLang === 'pt' ? 'Pólo Agroindustrial de Cacuso (Malanje)' : 'Agro-Industrial Hub in Cacuso (Malanje)'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#EF4B37] shrink-0" />
            <span>{currentLang === 'pt' ? 'Alianças Estratégicas: Espanha · América do Sul · Dubai' : 'Strategic Alliances: Spain · South America · Dubai'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md shadow-lg shadow-red-950/30 transition-all hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap cursor-pointer"
          >
            <span>{t.hero.ctaQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#divisoes"
            className="flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-md transition-colors whitespace-nowrap"
          >
            <span>{currentLang === 'pt' ? 'Conhecer as 4 Divisões' : 'Explore Our 4 Divisions'}</span>
            <ChevronRight className="w-4 h-4 text-[#EF4B37]" />
          </a>
        </div>

        {/* Quantitative Rigor Metrics Strip with Tabular Figures */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tabular-nums">
              13+
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              {t.hero.stats.years}
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tabular-nums">
              5
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              {t.hero.stats.provinces}
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#EF4B37] font-['Outfit'] tabular-nums">
              1.200 <span className="text-lg font-normal text-slate-300">t/ano</span>
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              {t.hero.stats.capacity}
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tabular-nums">
              4
            </div>
            <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              {t.hero.stats.partners}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
