import React, { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '../data/companyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ProvincialProjectsProps {
  currentLang: Language;
  onOpenQuote: () => void;
}

export const ProvincialProjects: React.FC<ProvincialProjectsProps> = ({ currentLang, onOpenQuote }) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const t = TRANSLATIONS[currentLang];

  const provinces = [
    { id: 'all', label: t.projects.allProvinces },
    { id: 'Luanda', label: 'Luanda' },
    { id: 'Malanje', label: 'Malanje' },
    { id: 'Benguela', label: 'Benguela' },
    { id: 'Lunda-Sul', label: 'Lunda-Sul' },
    { id: 'Lunda-Norte', label: 'Lunda-Norte' }
  ];

  const filteredProjects = selectedProvince === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.province === selectedProvince);

  return (
    <section id="projectos" className="w-full bg-slate-50 py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#EF4B37] mb-2">
              {t.projects.tagline}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              {t.projects.heading}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {t.projects.subheading}
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs"
          >
            <span>{currentLang === 'pt' ? 'Submeter Caderno de Encargos' : 'Submit Project Tender'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Interactive Province Filter Bar */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mr-2 shrink-0">
            {currentLang === 'pt' ? 'Província:' : 'Province:'}
          </div>
          {provinces.map((prov) => (
            <button
              key={prov.id}
              onClick={() => setSelectedProvince(prov.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedProvince === prov.id
                  ? 'bg-[#EF4B37] text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {prov.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <span className="flex items-center gap-1 text-[#EF4B37] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.province}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span className="tabular-nums">{project.year}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className={project.status === 'Concluído' ? 'text-[#EF4B37] font-semibold' : 'text-[#FA9B0E] font-semibold'}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] line-clamp-2">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.scope}
                </p>

                {/* Client Reference */}
                <div className="mt-4 flex items-start gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{project.client}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 font-mono">
                  {project.metrics}
                </span>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#EF4B37] hover:text-[#D73C29] transition-colors"
                >
                  <span>{currentLang === 'pt' ? 'Detalhes' : 'Details'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detailed Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl relative text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#EF4B37] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{activeProjectModal.province}, Angola</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProjectModal.year}</span>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="text-slate-400 hover:text-slate-800 p-1"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                {activeProjectModal.title}
              </h3>

              <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-3">
                <p>
                  <strong className="text-slate-900">{t.projects.clientLabel}:</strong> {activeProjectModal.client}
                </p>
                <p>
                  <strong className="text-slate-900">{t.projects.scopeLabel}:</strong> {activeProjectModal.scope}
                </p>
                <p>
                  <strong className="text-slate-900">Indicador Chave:</strong> {activeProjectModal.metrics}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {currentLang === 'pt' ? 'Frentes de Execução e Conformidade:' : 'Execution & Compliance Points:'}
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {activeProjectModal.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EF4B37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md shadow-xs"
                >
                  {currentLang === 'pt' ? 'Fechar Ficha Técnica' : 'Close Technical Sheet'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
