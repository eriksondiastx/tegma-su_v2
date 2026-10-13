import React, { useState } from 'react';
import { ArrowRight, Check, ChevronRight, HardHat, Factory, Wrench, Globe2 } from 'lucide-react';
import { COMPANY_DIVISIONS, BusinessDivision } from '../data/companyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface DivisionsSectionProps {
  currentLang: Language;
  onSelectDivisionForQuote: (divisionTitle: string) => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  currentLang,
  onSelectDivisionForQuote
}) => {
  const [activeDivisionId, setActiveDivisionId] = useState<string>(COMPANY_DIVISIONS[0].id);
  const t = TRANSLATIONS[currentLang];

  const activeDivision = COMPANY_DIVISIONS.find((d) => d.id === activeDivisionId) || COMPANY_DIVISIONS[0];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'infraestrutura':
        return <HardHat className="w-5 h-5 text-[#EF4B37]" />;
      case 'agroindustria':
        return <Factory className="w-5 h-5 text-[#FA9B0E]" />;
      case 'comercio-maquinas':
        return <Wrench className="w-5 h-5 text-[#EF4B37]" />;
      case 'financiamento-global':
        return <Globe2 className="w-5 h-5 text-[#FA9B0E]" />;
      default:
        return <HardHat className="w-5 h-5 text-[#EF4B37]" />;
    }
  };

  return (
    <section id="divisoes" className="w-full bg-slate-50 py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#EF4B37] mb-2">
            {t.divisions.tagline}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            {t.divisions.heading}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {t.divisions.subheading}
          </p>
        </div>

        {/* Division Selector Tabs (Clean segmented controls) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {COMPANY_DIVISIONS.map((div) => {
            const isActive = div.id === activeDivisionId;
            return (
              <button
                key={div.id}
                onClick={() => setActiveDivisionId(div.id)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-white border-[#EF4B37] shadow-sm ring-1 ring-[#EF4B37]/30'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#EF4B37]">
                    {div.number}
                  </span>
                  {getDivisionIcon(div.id)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-['Outfit'] line-clamp-1">
                  {div.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {div.shortDesc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Division Detailed Card (Asymmetric Layout) */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#EF4B37] mb-2">
                  <span>DIVISÃO {activeDivision.number}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-500 uppercase">TEGMA-SU, LDA</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
                  {activeDivision.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeDivision.fullDesc}
                </p>

                {/* Highlights List */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {currentLang === 'pt' ? 'Capacidades e Atuação Técnica:' : 'Technical Scope & Capabilities:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {activeDivision.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#EF4B37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Metric Row */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#EF4B37] font-['Outfit'] tabular-nums">
                    {activeDivision.stat.value}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeDivision.stat.label}
                  </div>
                </div>

                <button
                  onClick={() => onSelectDivisionForQuote(activeDivision.title)}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors whitespace-nowrap shadow-xs"
                >
                  <span>{currentLang === 'pt' ? 'Solicitar Cotação Desta Divisão' : 'Request Quote for This Division'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px] lg:min-h-full">
              <img
                src={
                  activeDivision.id === 'infraestrutura' || activeDivision.id === 'comercio-maquinas'
                    ? '/src/assets/images/industrial_logistics_trade_1790688491649.jpg'
                    : activeDivision.id === 'agroindustria'
                    ? '/src/assets/images/agro_palanca_facility_1790688479876.jpg'
                    : '/src/assets/images/tegma_corporate_headquarters_1790688504372.jpg'
                }
                alt={activeDivision.title}
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-slate-700/60 text-xs text-slate-200">
                <span className="font-semibold text-white">Garantia TEGMA-SU:</span>{' '}
                {activeDivision.id === 'infraestrutura'
                  ? 'Controlo topográfico rigoroso e conformidade com as normas rodoviárias de Angola.'
                  : activeDivision.id === 'agroindustria'
                  ? 'Certificação de segurança alimentar e incentivo direto aos camponeses de Malanje.'
                  : activeDivision.id === 'comercio-maquinas'
                  ? 'Assistência técnica local com stock garantido de componentes e peças de desgaste.'
                  : 'Articulação financeira internacional com prazos e seguros mitigados.'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
