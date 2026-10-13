import React, { useState } from 'react';
import { Factory, Award, TrendingUp, Check, ArrowRight, Package } from 'lucide-react';
import { PALANCA_PRODUCTS, PalancaProduct } from '../data/companyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface AgroPalancaSectionProps {
  currentLang: Language;
  onOpenQuoteForPalanca: () => void;
}

export const AgroPalancaSection: React.FC<AgroPalancaSectionProps> = ({
  currentLang,
  onOpenQuoteForPalanca
}) => {
  const [selectedProduct, setSelectedProduct] = useState<PalancaProduct>(PALANCA_PRODUCTS[0]);
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="agro-palanca" className="w-full bg-white py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF4B37] mb-2">
              <Factory className="w-4 h-4" />
              <span>{t.palanca.tagline}</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500">Cacuso, Malanje</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              {t.palanca.heading}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {t.palanca.desc}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenQuoteForPalanca}
              className="flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs"
            >
              <span>{currentLang === 'pt' ? 'Distribuição & Encomendas Palanca' : 'Palanca Wholesale & Supply'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story & Factory Overview Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Facility Media */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[4/3] shadow-sm">
            <img
              src="/src/assets/images/agro_palanca_facility_1790688479876.jpg"
              alt="Unidade Fabril das Batatas Palanca em Cacuso Malanje TEGMA-SU"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EF4B37] uppercase tracking-wider mb-1">
                <span>Inauguração Oficial: 21 de Fevereiro de 2020</span>
              </div>
              <div className="text-lg font-bold text-white font-['Outfit']">
                Pólo Agroindustrial de Cacuso · Província de Malanje
              </div>
              <p className="mt-1 text-xs text-slate-200">
                Iniciativa visionária liderada pelo empresário António Duarte (Proprietário da TEGMA-SU, Lda).
              </p>
            </div>
          </div>

          {/* Key Agro Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-100 text-[#EF4B37] shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {currentLang === 'pt' ? 'Substituição Efetiva de Importações em Angola' : 'Effective Import Substitution in Angola'}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Antes da fábrica Palanca, a grande maioria dos snacks de batata frita consumidos em Angola era importada. A TEGMA-SU verticalizou a cadeia, processando batata fresca colhida nas terras férteis de Malanje.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-100 text-[#FA9B0E] shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {currentLang === 'pt' ? 'Integração e Renda para Camponeses Locais' : 'Integration & Livelihood for Local Farmers'}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compramos diretamente a centenas de agricultores da região de Cacuso e municípios vizinhos, fornecendo apoio agronómico e garantindo o escoamento sem intermediários.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-100 text-[#FA9B0E] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {currentLang === 'pt' ? 'Internacionalização: Lançamento em Lisboa' : 'Internationalization: Lisbon Launch & Exports'}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    O Grupo TEGMA-SU apresentou em Lisboa a nova Linha Gourmet das Batatas Palanca, abrindo canais de exportação para Portugal, África do Sul, Cabo Verde e Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Product Catalog Cards */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#EF4B37]">
                {currentLang === 'pt' ? 'Gama de Produtos Fabris' : 'Factory Product Range'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                {currentLang === 'pt' ? 'Linhas Produzidas no Complexo Palanca' : 'Lines Processed at the Palanca Complex'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PALANCA_PRODUCTS.map((prod) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className={`cursor-pointer rounded-lg border p-5 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#EF4B37] shadow-md ring-1 ring-[#EF4B37]/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Unboxed category metadata with zero-pill discipline */}
                    <div className="text-xs text-[#EF4B37] font-semibold uppercase tracking-wider mb-2">
                      {prod.category}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                      {prod.name}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3 h-3 text-[#EF4B37] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px] font-medium">{prod.format}</span>
                    <Package className="w-4 h-4 text-[#EF4B37]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
