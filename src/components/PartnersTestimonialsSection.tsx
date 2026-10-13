import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ShieldCheck, 
  ArrowRight,
  Handshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PARTNERS_LIST, TESTIMONIALS_LIST, PartnerEntity, TestimonialItem } from '../data/companyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface PartnersTestimonialsSectionProps {
  currentLang: Language;
  onOpenQuote: () => void;
}

export const PartnersTestimonialsSection: React.FC<PartnersTestimonialsSectionProps> = ({
  currentLang,
  onOpenQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'infra' | 'agro' | 'global'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang];

  // Filter testimonials by category
  const filteredTestimonials = activeCategory === 'all'
    ? TESTIMONIALS_LIST
    : TESTIMONIALS_LIST.filter((item) => item.category === activeCategory);

  // Keep index within bounds when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Auto-advance testimonials carousel
  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused, filteredTestimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Helper to get partner badge color
  const getPartnerColor = (category: PartnerEntity['category']) => {
    switch (category) {
      case 'governo':
        return 'text-[#EF4B37] bg-red-50 border-red-200';
      case 'industrial':
        return 'text-slate-800 bg-slate-100 border-slate-300';
      case 'agro':
        return 'text-[#FA9B0E] bg-orange-50 border-orange-200';
      case 'finance':
        return 'text-[#EF4B37] bg-red-50/70 border-red-200';
      case 'distribuicao':
        return 'text-slate-700 bg-slate-100 border-slate-200';
      default:
        return 'text-[#EF4B37] bg-red-50 border-red-200';
    }
  };

  // Duplicate partner list for infinite smooth loop
  const marqueePartners = [...PARTNERS_LIST, ...PARTNERS_LIST];

  return (
    <section id="parceiros" className="w-full bg-slate-50/70 py-20 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF4B37] mb-2">
              <Handshake className="w-4 h-4" />
              <span>{t.testimonials.tagline}</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500">Angola & Internacional</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              {t.testimonials.heading}
            </h2>
            
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {t.testimonials.subheading}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs cursor-pointer"
            >
              <span>{currentLang === 'pt' ? 'Parceria Institucional' : 'Institutional Partnership'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 1. Horizontal Smooth Marquee of Partner Logos & Seals */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Building2 className="w-3.5 h-3.5 text-[#EF4B37]" />
              <span>{t.testimonials.partnersTickerTitle}</span>
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block">
              {currentLang === 'pt' ? 'Passe o cursor para pausar' : 'Hover to pause scroll'}
            </div>
          </div>

          {/* Marquee Wrapper with horizontal gradient masks for smooth fade */}
          <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-6 shadow-xs">
            {/* Left and Right Gradient scrims for smooth edge blend */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Continuous Marquee Track */}
            <div 
              ref={marqueeRef}
              className="flex items-center gap-6 w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]"
            >
              {marqueePartners.map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#EF4B37] hover:shadow-xs transition-all shrink-0 cursor-default group"
                >
                  {/* Monogram Badge */}
                  <div className={`flex h-10 w-10 items-center justify-center rounded-md font-mono text-xs font-bold border transition-colors ${getPartnerColor(partner.category)}`}>
                    {partner.initials}
                  </div>

                  {/* Partner Text Details */}
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#EF4B37] transition-colors whitespace-nowrap font-['Outfit']">
                      {partner.name}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                      <span>{partner.categoryLabel[currentLang]}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-400">{partner.countryOrProvince}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Interactive Testimonial Carousel */}
        <div className="mt-16">
          {/* Controls Bar: Category Filters & Prev/Next Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            
            {/* Category Segmented Controls */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#EF4B37] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {t.testimonials.filterAll}
              </button>

              <button
                onClick={() => setActiveCategory('infra')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'infra'
                    ? 'bg-[#EF4B37] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {t.testimonials.filterInfra}
              </button>

              <button
                onClick={() => setActiveCategory('agro')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'agro'
                    ? 'bg-[#EF4B37] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {t.testimonials.filterAgro}
              </button>

              <button
                onClick={() => setActiveCategory('global')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'global'
                    ? 'bg-[#EF4B37] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {t.testimonials.filterGlobal}
              </button>
            </div>

            {/* Prev / Next & Pagination Indicators */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-900">{currentIndex + 1}</span>
                <span className="text-slate-400"> / </span>
                <span>{filteredTestimonials.length}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-[#EF4B37] hover:text-white hover:border-[#EF4B37] transition-colors shadow-2xs cursor-pointer"
                  aria-label={t.testimonials.prev}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-[#EF4B37] hover:text-white hover:border-[#EF4B37] transition-colors shadow-2xs cursor-pointer"
                  aria-label={t.testimonials.next}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Testimonial Active Display Card with Pause on Hover */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm transition-all overflow-hidden"
          >
            {/* Subtle decorative background quote glyph */}
            <Quote className="absolute -top-4 -right-4 w-36 h-36 text-slate-100/70 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Quote and Project Context */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                
                {/* Meta header */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-[#FA9B0E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span aria-hidden="true" className="text-slate-300">·</span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold text-[#EF4B37] bg-red-50 border border-red-100">
                    <ShieldCheck className="w-3 h-3 text-[#EF4B37]" />
                    <span>{t.testimonials.verifiedPartner}</span>
                  </span>

                  {currentTestimonial.metricsBadge && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200">
                      {currentTestimonial.metricsBadge}
                    </span>
                  )}
                </div>

                {/* Primary Quote Content */}
                <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed font-sans italic [text-wrap:balance]">
                  "{currentTestimonial.quote[currentLang]}"
                </blockquote>

                {/* Sector and Execution Context */}
                <div className="text-xs text-slate-500 font-medium">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                    {currentLang === 'pt' ? 'Âmbito de Intervenção Técnica:' : 'Technical Project Scope:'}
                  </span>
                  <span className="text-slate-800 font-semibold">{currentTestimonial.sector[currentLang]}</span>
                  <span aria-hidden="true" className="text-slate-300 mx-2">·</span>
                  <span>Ano de Referência: {currentTestimonial.year}</span>
                </div>

              </div>

              {/* Right Column: Author Card with Corporate Authority */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* Initials Avatar */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#EF4B37] to-[#FA9B0E] text-white font-bold text-sm shadow-xs shrink-0">
                      {currentTestimonial.author
                        .split(' ')
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                        {currentTestimonial.author}
                      </h4>
                      <p className="text-xs text-slate-600 leading-snug">
                        {currentTestimonial.role[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Organization & Location details */}
                  <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#EF4B37] shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-900">{currentTestimonial.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{currentTestimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {currentLang === 'pt' ? 'Relação Institucional' : 'Institutional Relation'}
                  </span>
                  <a
                    href="#divisoes"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#EF4B37] hover:text-[#D73C29] transition-colors"
                  >
                    <span>{currentLang === 'pt' ? 'Ver Divisões' : 'View Divisions'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>

            {/* Pagination Dots at bottom */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
              {filteredTestimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    dotIdx === currentIndex
                      ? 'w-8 bg-[#EF4B37]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para testemunho ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 3. Bottom Trust Bar / Institutional Assurance */}
        <div className="mt-12 rounded-xl border border-red-200/60 bg-white p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#EF4B37] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                {currentLang === 'pt' 
                  ? 'Compromisso com o Rigor Técnico e Governança Corporativa' 
                  : 'Commitment to Technical Rigor and Corporate Governance'}
              </h4>
              <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
                {currentLang === 'pt'
                  ? 'Mais de 13 anos de atuação em Angola construindo obras com alvarás certificados, conformidade fiscal e parcerias internacionais éticas.'
                  : 'Over 13 years operating in Angola delivering works with certified licenses, fiscal compliance, and ethical global alliances.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              {currentLang === 'pt' ? 'Solicitar Cotação / RFQ' : 'Request RFQ'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
