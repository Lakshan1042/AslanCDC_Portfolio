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
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { NotFoundPage } from './components/NotFoundPage';
import { CENTER_INFO, SERVICES } from './data/contentData';
import type { PageRoute } from './types';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>('speech-therapy');

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

    if (route === 'service-detail') {
      if (sectionId) {
        setActiveServiceSlug(sectionId);
      }
      setCurrentRoute('service-detail');
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

  const handleOpenAppointment = () => {
    handleNavigate('home', 'book');
  };

  const activeService = SERVICES.find((s) => s.slug === activeServiceSlug || s.id === activeServiceSlug) || SERVICES[0];

  // Helper to determine SEO properties per route
  const getSEOProps = () => {
    switch (currentRoute) {
      case 'ams':
        return {
          title: 'AMS | Aslan Management Software | Coming Soon',
          description: 'Aslan Management Software - A smarter way to manage care, appointments, and everyday operations at Aslan Child Development Center.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/ams`,
          noindex: true,
        };
      case 'service-detail':
        return {
          title: activeService.seoTitle,
          description: activeService.seoDescription,
          canonicalUrl: `${CENTER_INFO.siteUrl}/services/${activeService.slug}`,
          noindex: false,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'Programs & Services', url: `${CENTER_INFO.siteUrl}/services` },
            { name: activeService.title, url: `${CENTER_INFO.siteUrl}/services/${activeService.slug}` },
          ],
        };
      case '404':
        return {
          title: 'Page Not Found | Aslan Child Development Center',
          description: 'The requested page was not found.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/404`,
          noindex: true,
        };
      default:
        return {
          title: 'Aslan Child Development Center | Child Development & Therapy in Tambaram, Chennai',
          description: 'Supporting children in Tambaram, Chennai through specialized therapy, speech therapy, occupational therapy, education and developmental programs.',
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
        <AmsPage onBackToHome={() => handleNavigate('home', 'book')} />
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

      {currentRoute === 'service-detail' ? (
        <ServiceDetailPage
          serviceId={activeServiceSlug}
          onNavigate={handleNavigate}
          onOpenAppointment={handleOpenAppointment}
        />
      ) : (
        /* Main Homepage Flow */
        <main className="flex-grow">
          {/* 1. HERO (Warm Cream) */}
          <Hero
            onOpenAppointment={handleOpenAppointment}
            onExploreServices={() => handleNavigate('home', 'services')}
          />

          {/* 2. ABOUT ASLAN (Pure White) */}
          <AboutSection />

          {/* 3. PROGRAMS & SERVICES (Soft Cream) */}
          <ProgramsSection
            onOpenAppointment={handleOpenAppointment}
          />

          {/* COMPACT TRUST VALUES STRIP (Sage Soft) */}
          <ValuesStrip />

          {/* 4. HOW WE SUPPORT CHILDREN (Pure White) */}
          <SupportJourney />

          {/* 5. OUR TEAM / ENVIRONMENT ("Inside Aslan" 6-Image Gallery - Warm Cream) */}
          <TeamEnvironmentSection />

          {/* STORIES OF GROWTH (Soft Peach-tinted) */}
          <TestimonialsSection />

          {/* 6. BOOK AN APPOINTMENT (Pure White - Visible Form Section) */}
          <AppointmentSection />

          {/* 7. CONTACT (Warm Cream) */}
          <ContactSection />
        </main>
      )}

      {/* 8. FOOTER (Pure White) */}
      <Footer />
    </div>
  );
};

export default App;
