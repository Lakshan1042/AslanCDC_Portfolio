import React, { useState } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ValuesStrip } from './components/ValuesStrip';
import { SupportJourney } from './components/SupportJourney';
import { TeamEnvironmentSection } from './components/TeamEnvironmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmsPage } from './components/AmsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { CENTER_INFO } from './data/contentData';
import type { PageRoute } from './types';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigate = (route: PageRoute, sectionId?: string) => {
    if (route === 'ams') {
      setCurrentRoute('ams');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (route === '404') {
      setCurrentRoute('404');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 80);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleOpenAppointment = (_serviceName?: string) => {
    handleNavigate('home', 'book');
  };

  // Helper to determine SEO properties per route
  const getSEOProps = () => {
    switch (currentRoute) {
      case 'ams':
        return {
          title: 'AMS | Aslan Management Software | Coming Soon',
          description: 'Aslan Management Software - A smarter way to manage care, appointments, and everyday operations at Aslan Child Development and Therapy Center.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/ams`,
          noindex: true,
        };
      case '404':
        return {
          title: 'Page Not Found | Aslan Child Development and Therapy Center',
          description: 'The requested page was not found.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/404`,
          noindex: true,
        };
      default:
        return {
          title: 'Child Development Center in Tambaram | Specialized Education & Therapy Center',
          description: 'Aslan CDC is the leading Child Development Center in Tambaram & Chromepet, Chennai. Providing Specialized Education in Tambaram and a premier Therapy Center in Tambaram for ADHD, Autism (ASD), Speech Delay, Sensory Integration, Stuttering, Down Syndrome, Cerebral Palsy, and Learning Disabilities.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/`,
          noindex: false,
        };
    }
  };

  const seoProps = getSEOProps();

  if (currentRoute === 'ams') {
    return (
      <>
        <SEOHead {...seoProps} />
        <AmsPage onBackToHome={() => handleNavigate('home', 'hero')} />
      </>
    );
  }

  if (currentRoute === '404') {
    return (
      <>
        <SEOHead {...seoProps} />
        <NotFoundPage onBackToHome={() => handleNavigate('home')} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-aslan-cream text-aslan-charcoal font-sans flex flex-col antialiased selection:bg-aslan-peach selection:text-aslan-charcoal overflow-x-hidden">
      {/* Dynamic SEO Meta Head */}
      <SEOHead {...seoProps} />

      {/* Header Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* 1. HERO (Warm Cream) */}
        <Hero
            onOpenAppointment={handleOpenAppointment}
            onExploreServices={() => handleNavigate('home', 'services')}
          />

          {/* 2. ABOUT ASLAN (Pure White) */}
          <AboutSection />

          {/* 3. CONTACT (Warm Cream - Quick access to locations, phone, hours & maps) */}
          <ContactSection />

          {/* 4. BOOK AN APPOINTMENT (Pure White - Directly after Contact) */}
          <AppointmentSection />

          {/* 5. PROGRAMS & SERVICES (Soft Cream) */}
          <ProgramsSection
            onOpenAppointment={handleOpenAppointment}
          />

          {/* COMPACT TRUST VALUES STRIP (Sage Soft) */}
          <ValuesStrip />

          {/* 6. HOW WE SUPPORT CHILDREN (Pure White) */}
          <SupportJourney />

          {/* 7. PARENT EXPERIENCES (Stories of Growth & Progress) */}
          <TestimonialsSection />

          {/* 8. INSIDE ASLAN (Our Team / Nurturing Environment) */}
          <TeamEnvironmentSection />
        </main>

      {/* 9. FOOTER (Pure White) */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
