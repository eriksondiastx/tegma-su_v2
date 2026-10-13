/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DivisionsSection } from './components/DivisionsSection';
import { AgroPalancaSection } from './components/AgroPalancaSection';
import { ProvincialProjects } from './components/ProvincialProjects';
import { PartnersTestimonialsSection } from './components/PartnersTestimonialsSection';
import { InternationalCorridor } from './components/InternationalCorridor';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Language } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [preselectedDivision, setPreselectedDivision] = useState<string>('');

  const handleOpenQuoteWithDivision = (divisionTitle: string) => {
    setPreselectedDivision(divisionTitle);
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteGeneral = () => {
    setPreselectedDivision('Engenharia Civil & Infraestruturas Viárias');
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#EF4B37] selection:text-white">
      {/* Navigation Header adhering to Top Bar Contract */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuote={handleOpenQuoteGeneral}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenQuote={handleOpenQuoteGeneral}
        />

        {/* Core Capabilities & 4 Business Divisions */}
        <DivisionsSection
          currentLang={currentLang}
          onSelectDivisionForQuote={handleOpenQuoteWithDivision}
        />

        {/* Marquee Agro-Industrial Showcase: Batatas Palanca (Cacuso, Malanje) */}
        <AgroPalancaSection
          currentLang={currentLang}
          onOpenQuoteForPalanca={() => handleOpenQuoteWithDivision('Agroindústria & Batatas Palanca (Cacuso)')}
        />

        {/* Interactive Provincial Projects & Public Works in Angola */}
        <ProvincialProjects
          currentLang={currentLang}
          onOpenQuote={handleOpenQuoteGeneral}
        />

        {/* Strategic Partners & Client Testimonials with Smooth Horizontal Carousel */}
        <PartnersTestimonialsSection
          currentLang={currentLang}
          onOpenQuote={handleOpenQuoteGeneral}
        />

        {/* Global Hubs: Spain, Argentina, Uruguay, Dubai, Portugal */}
        <InternationalCorridor
          currentLang={currentLang}
        />

        {/* Institutional Contact Section */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenQuote={handleOpenQuoteGeneral}
      />

      {/* Request for Quotation (RFQ) Simulator Modal */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentLang={currentLang}
        initialDivision={preselectedDivision}
      />

      {/* Floating WhatsApp Commercial Support Widget */}
      <WhatsAppFloatingButton
        currentLang={currentLang}
      />
    </div>
  );
}
