import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, CheckCircle2, Copy, FileText, Send } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialDivision?: string;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialDivision
}) => {
  const [step, setStep] = useState<number>(1);
  const [division, setDivision] = useState<string>(initialDivision || 'Engenharia Civil & Infraestruturas Viárias');
  const [province, setProvince] = useState<string>('Luanda');
  const [projectType, setProjectType] = useState<string>('Reabilitação de Vias Urbanas');
  const [timeframe, setTimeframe] = useState<string>('3 a 6 Meses');
  const [scopeNotes, setScopeNotes] = useState<string>('');
  
  // Contact details
  const [clientType, setClientType] = useState<string>('Governo Provincial / Ministério');
  const [institutionName, setInstitutionName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang];

  const divisionsList = [
    'Engenharia Civil & Infraestruturas Viárias',
    'Agroindústria & Batatas Palanca (Cacuso)',
    'Comércio Técnico & Suprimentos Industriais',
    'Montagem de Linhas de Financiamento & Parcerias Globais'
  ];

  const provincesList = [
    'Luanda',
    'Malanje',
    'Benguela',
    'Lunda-Sul',
    'Lunda-Norte',
    'Huíla',
    'Huambo',
    'Cuanza-Norte',
    'Uíge',
    'Outra Província'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!institutionName || !contactName || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedProtocol = `TEGMA-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedProtocol(generatedProtocol);
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyProtocol = () => {
    if (submittedProtocol) {
      navigator.clipboard.writeText(submittedProtocol);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedProtocol(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl rounded-xl border border-slate-200 bg-white text-slate-800 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-6 bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#EF4B37] uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>TEGMA-SU, LDA · DEPARTAMENTO COMERCIAL</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-1">
              {t.rfq.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.rfq.subtitle}
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="rounded-lg p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        {!submittedProtocol && (
          <div className="border-b border-slate-100 bg-slate-50/40 px-6 py-3 flex items-center justify-between text-xs font-medium text-slate-500">
            <span className={step === 1 ? 'text-[#EF4B37] font-bold' : ''}>
              {t.rfq.step1}
            </span>
            <span aria-hidden="true">→</span>
            <span className={step === 2 ? 'text-[#EF4B37] font-bold' : ''}>
              {t.rfq.step2}
            </span>
            <span aria-hidden="true">→</span>
            <span className={step === 3 ? 'text-[#EF4B37] font-bold' : ''}>
              {t.rfq.step3}
            </span>
          </div>
        )}

        {/* Body Form */}
        <div className="p-6">
          {submittedProtocol ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-[#EF4B37] border border-red-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                {t.rfq.successTitle}
              </h3>

              <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.rfq.successDesc}
              </p>

              {/* Protocol Badge */}
              <div className="max-w-sm mx-auto p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500">
                    Número de Protocolo RFQ:
                  </div>
                  <div className="text-base font-mono font-bold text-[#EF4B37]">
                    {submittedProtocol}
                  </div>
                </div>
                <button
                  onClick={handleCopyProtocol}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded transition-colors shadow-2xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Summary of Request */}
              <div className="max-w-md mx-auto text-left text-xs bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5 text-slate-700">
                <div><strong className="text-slate-900">Divisão:</strong> {division}</div>
                <div><strong className="text-slate-900">Província:</strong> {province}</div>
                <div><strong className="text-slate-900">Entidade:</strong> {institutionName} ({clientType})</div>
                <div><strong className="text-slate-900">Responsável:</strong> {contactName}</div>
                <div><strong className="text-slate-900">Contacto:</strong> {phone} · {email}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Division */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Selecione a Divisão Operacional do Projeto:
                  </label>
                  <div className="space-y-2">
                    {divisionsList.map((div, i) => (
                      <div
                        key={i}
                        onClick={() => setDivision(div)}
                        className={`cursor-pointer rounded-lg border p-4 transition-all flex items-center justify-between ${
                          division === div
                            ? 'bg-red-50/40 border-[#EF4B37] text-slate-900 ring-1 ring-[#EF4B37]/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <div className="text-sm font-semibold">{div}</div>
                        {division === div && (
                          <Check className="w-4 h-4 text-[#EF4B37] shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs"
                    >
                      <span>Avançar para Detalhes Técnicos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Location and Specs */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Província de Execução / Entrega em Angola:
                      </label>
                      <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      >
                        {provincesList.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Prazo Estimado de Execução:
                      </label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      >
                        <option value="Imediato (menos de 1 mês)">Imediato (menos de 1 mês)</option>
                        <option value="1 a 3 Meses">1 a 3 Meses</option>
                        <option value="3 a 6 Meses">3 a 6 Meses</option>
                        <option value="6 a 12 Meses">6 a 12 Meses</option>
                        <option value="Mais de 12 Meses / Concurso Plurianual">Mais de 12 Meses / Concurso Plurianual</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subtipo ou Objeto do Pedido:
                    </label>
                    <input
                      type="text"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      placeholder="Ex: Pavimentação de 12km, Fornecimento de 500 caixas Palanca, Aquisição de 2 Escavadoras..."
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Descrição Sumária das Necessidades ou Caderno de Encargos:
                    </label>
                    <textarea
                      rows={3}
                      value={scopeNotes}
                      onChange={(e) => setScopeNotes(e.target.value)}
                      placeholder="Indique detalhes adicionais de volumes, localização específica do estaleiro ou especificações técnicas..."
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors shadow-xs"
                    >
                      <span>Avançar para Identificação Institucional</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Institutional Contact Information */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tipo de Entidade Solicitante:
                      </label>
                      <select
                        value={clientType}
                        onChange={(e) => setClientType(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      >
                        <option value="Governo Provincial / Ministério">Governo Provincial / Ministério</option>
                        <option value="Administração Municipal">Administração Municipal</option>
                        <option value="Empresa Privada / Construtora">Empresa Privada / Construtora</option>
                        <option value="Distribuidor / Grossista / Hipermercado">Distribuidor / Grossista / Hipermercado</option>
                        <option value="Cooperativa Agrícola">Cooperativa Agrícola</option>
                        <option value="Parceiro Internacional">Parceiro Internacional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nome da Entidade / Empresa: *
                      </label>
                      <input
                        type="text"
                        required
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="Ex: Governo Provincial de Benguela / Empresa ABC"
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nome e Cargo do Responsável: *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Ex: Eng. Mário Silva (Dir. de Obras)"
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Telefone de Contacto (com indicativo): *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+244 9XX XXX XXX"
                        className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Correio Eletrónico Institucional: *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@instituicao.gov.ao ou empresa.com"
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors disabled:opacity-50 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'A processar...' : t.rfq.submit}</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
