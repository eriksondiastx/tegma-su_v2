import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Direção Geral',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = TRANSLATIONS[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/244936683344?text=${encodeURIComponent(
    currentLang === 'pt'
      ? 'Olá, gostaria de obter informações institucionais sobre os serviços do Grupo TEGMA-SU.'
      : 'Hello, I would like to get institutional information regarding TEGMA-SU services.'
  )}`;

  return (
    <section id="contactos" className="w-full bg-slate-50 py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#EF4B37] mb-2">
            {t.contacts.tagline}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            {t.contacts.heading}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {t.contacts.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Official Location & Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Headquarters Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EF4B37] shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                    {currentLang === 'pt' ? 'Sede Corporativa (Luanda)' : 'Corporate Headquarters (Luanda)'}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {COMPANY_CONTACTS.headquarters}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Escritório Operacional: {COMPANY_CONTACTS.branch}
                  </p>
                </div>
              </div>
            </div>

            {/* Industrial Plant Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FA9B0E] shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                    {currentLang === 'pt' ? 'Complexo Agroindustrial Palanca' : 'Palanca Agro-Industrial Complex'}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {COMPANY_CONTACTS.factory}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {currentLang === 'pt' ? 'Fábrica de Batatas Fritas e Tubérculos' : 'Potato Chips & Root Processing Factory'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-3 mb-3">
                <Phone className="w-5 h-5 text-[#EF4B37] shrink-0 mt-1" />
                <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                  {t.contacts.directPhone}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {COMPANY_CONTACTS.phones.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase">{item.type}</div>
                    <a
                      href={`tel:${item.number.replace(/\s+/g, '')}`}
                      className="font-mono font-semibold text-slate-800 hover:text-[#EF4B37] transition-colors"
                    >
                      {item.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Hours */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EF4B37] shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                    {t.contacts.directEmail}
                  </h3>
                  <div className="mt-1 space-y-1 text-xs">
                    <div>
                      <a href="mailto:contactos@tegma-su.co.ao" className="text-slate-700 hover:text-[#EF4B37] transition-colors font-mono">
                        contactos@tegma-su.co.ao
                      </a>
                    </div>
                    <div>
                      <a href="mailto:comercial@tegma-su.co.ao" className="text-slate-700 hover:text-[#EF4B37] transition-colors font-mono">
                        comercial@tegma-su.co.ao
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-500">
                  {COMPANY_CONTACTS.workingHours}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.contacts.whatsappDirect} (+244 936 683 344)</span>
            </a>

          </div>

          {/* Institutional Contact Form */}
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-2">
              {t.contacts.sendMessage}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {currentLang === 'pt'
                ? 'Preencha o formulário abaixo para correspondência institucional, dúvidas técnicas ou agendamento de reuniões na nossa sede.'
                : 'Fill out the form below for institutional correspondence, technical queries, or meeting appointments at our headquarters.'}
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-lg bg-red-50/60 border border-red-200 space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-[#EF4B37]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {currentLang === 'pt' ? 'Mensagem Transmitida com Sucesso' : 'Message Transmitted Successfully'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  {currentLang === 'pt'
                    ? 'Agradecemos o seu contacto. A assessoria da direção da TEGMA-SU, Lda responderá com a maior brevidade possível.'
                    : 'Thank you for contacting us. TEGMA-SU executive office will respond promptly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded shadow-xs"
                >
                  {currentLang === 'pt' ? 'Enviar Nova Mensagem' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {currentLang === 'pt' ? 'Nome Completo / Entidade: *' : 'Full Name / Entity: *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {currentLang === 'pt' ? 'Correio Eletrónico: *' : 'Email Address: *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {currentLang === 'pt' ? 'Telefone: *' : 'Phone Number: *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+244 ..."
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {currentLang === 'pt' ? 'Destinatário / Departamento:' : 'Department:'}
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                    >
                      <option value="Direção Geral">Direção Geral (Gabinete de Gestão)</option>
                      <option value="Divisão de Engenharia">Divisão de Engenharia & Obras Públicas</option>
                      <option value="Fábrica Palanca">Fábrica Palanca & Agroindústria</option>
                      <option value="Comércio & Maquinaria">Comércio & Fornecimento Industrial</option>
                      <option value="Financiamento Externo">Financiamento Externo & Parcerias</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {currentLang === 'pt' ? 'Assunto: *' : 'Subject: *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={currentLang === 'pt' ? 'Ex: Concurso de Reabilitação Viária / Parceria Palanca' : 'Ex: Road Tender / Palanca Partnership'}
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {currentLang === 'pt' ? 'Mensagem: *' : 'Message: *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 focus:border-[#EF4B37] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#EF4B37] hover:bg-[#D73C29] rounded-md transition-colors disabled:opacity-50 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'A enviar...' : t.contacts.sendMessage}</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
