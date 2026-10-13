import React from 'react';
import { Globe, Shield, Landmark, Plane, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/translations';

interface InternationalCorridorProps {
  currentLang: Language;
}

export const InternationalCorridor: React.FC<InternationalCorridorProps> = ({ currentLang }) => {
  const internationalHubs = [
    {
      country: currentLang === 'pt' ? 'Espanha' : 'Spain',
      role: currentLang === 'pt' ? 'Tecnologia Industrial & Engenharia' : 'Industrial Tech & Engineering',
      desc: currentLang === 'pt' 
        ? 'Parcerias para aquisição de maquinaria pesada, sistemas de automação fabril e intercâmbio de conhecimento de engenharia civil.'
        : 'Alliances for heavy machinery procurement, industrial automation, and civil engineering technology exchange.'
    },
    {
      country: currentLang === 'pt' ? 'Argentina & Uruguai' : 'Argentina & Uruguay',
      role: currentLang === 'pt' ? 'Expertise Agroindustrial & Genética' : 'Agro-Industrial Expertise & Crop Tech',
      desc: currentLang === 'pt'
        ? 'Apoio técnico na cadeia de sementes certificadas de batata, fertilização sustentável e boas práticas de colheita para o pólo de Cacuso.'
        : 'Technical cooperation for certified potato seed stocks, sustainable fertilization, and advanced harvesting in Cacuso.'
    },
    {
      country: currentLang === 'pt' ? 'Dubai (Emirados Árabes Unidos)' : 'Dubai (UAE)',
      role: currentLang === 'pt' ? 'Linhas de Financiamento & Trade Global' : 'Financing Lines & Global Trade',
      desc: currentLang === 'pt'
        ? 'Conexão financeira internacional para viabilização de linhas de crédito externas e estruturação de operações de comércio exterior.'
        : 'International financial bridge to structure external credit lines, bank guarantees, and cross-border trade transactions.'
    },
    {
      country: currentLang === 'pt' ? 'Portugal (Lisboa)' : 'Portugal (Lisbon)',
      role: currentLang === 'pt' ? 'Plataforma Gourmet de Exportação' : 'Gourmet Export & European Gateway',
      desc: currentLang === 'pt'
        ? 'Palco do lançamento internacional da Linha Gourmet das Batatas Palanca (2025/2026), porta de entrada nos mercados europeus e lusófonos.'
        : 'Showcase for the international launch of the Palanca Gourmet line, European and Lusophone distribution gateway.'
    }
  ];

  return (
    <section id="eixo-global" className="w-full bg-white py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4B37] mb-2">
            <Globe className="w-4 h-4" />
            <span>{currentLang === 'pt' ? 'Eixo Estratégico Global' : 'Strategic Global Axis'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            {currentLang === 'pt' 
              ? 'Conectando Angola aos Grandes Centros Fornecedores Mundiais' 
              : 'Bridging Angola with Premier Global Supply & Financial Hubs'}
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {currentLang === 'pt'
              ? 'A TEGMA-SU, Lda estruturou uma rede de cooperação bilateral que permite mobilizar financiamento externo, maquinarias de alta precisão e abrir mercados de exportação para a produção agroindustrial angolana.'
              : 'TEGMA-SU, Lda established a bilateral cooperation network enabling external funding mechanisms, precision industrial hardware, and export routes for Angolan agro-industrial products.'}
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internationalHubs.map((hub, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#EF4B37]">
                    EIXO 0{idx + 1}
                  </span>
                  <Plane className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  {hub.country}
                </h3>

                <div className="mt-1 text-xs font-semibold text-[#EF4B37]">
                  {hub.role}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {hub.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EF4B37] shrink-0" />
                <span>{currentLang === 'pt' ? 'Parceria em operação' : 'Active strategic partner'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Compliance Box */}
        <div className="mt-10 rounded-xl border border-red-200/80 bg-red-50/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-red-100 text-[#EF4B37] shrink-0">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                {currentLang === 'pt' ? 'Montagem de Linhas de Crédito & Financiamento Estruturado' : 'Structured Credit Lines & Trade Financing'}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {currentLang === 'pt'
                  ? 'Apoiamos instituições públicas e grupos empresariais na estruturação documental, garantias bancárias e articulação cambial com intermediários internacionais credenciados.'
                  : 'We assist governmental institutions and corporate groups with documentation, bank guarantees, and foreign exchange bridging with certified international intermediaries.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 shrink-0 font-medium">
            <Shield className="w-4 h-4 text-[#FA9B0E]" />
            <span>Compliance & KYC Verificados</span>
          </div>
        </div>

      </div>
    </section>
  );
};
