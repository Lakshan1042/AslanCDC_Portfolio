import React, { useState, useEffect, Suspense, lazy } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuesStrip } from './components/ValuesStrip';
import { Footer } from './components/Footer';
import { CENTER_INFO } from './data/contentData';
import type { PageRoute } from './types';

// Code-split below-the-fold and secondary route components
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const AppointmentSection = lazy(() => import('./components/AppointmentSection').then(m => ({ default: m.AppointmentSection })));
const ProgramsSection = lazy(() => import('./components/ProgramsSection').then(m => ({ default: m.ProgramsSection })));
const SupportJourney = lazy(() => import('./components/SupportJourney').then(m => ({ default: m.SupportJourney })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const TeamEnvironmentSection = lazy(() => import('./components/TeamEnvironmentSection').then(m => ({ default: m.TeamEnvironmentSection })));
const AmsPage = lazy(() => import('./components/AmsPage').then(m => ({ default: m.AmsPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Non-shifting fallback for deferred sections
const SectionSkeleton: React.FC<{ minHeight?: string; bg?: string }> = ({ minHeight = 'min-h-[300px]', bg = 'bg-aslan-cream' }) => (
  <div className={`w-full ${minHeight} ${bg} animate-pulse flex items-center justify-center opacity-40`} />
);

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');

  // Background idle prefetching for deferred interactive sections
  useEffect(() => {
    const prefetch = () => {
      import('./components/AppointmentSection');
      import('./components/ProgramsSection');
      import('./components/ContactSection');
      import('./components/SupportJourney');
      import('./components/TestimonialsSection');
      import('./components/TeamEnvironmentSection');
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => void }).requestIdleCallback(prefetch, { timeout: 2000 });
    } else {
      setTimeout(prefetch, 1200);
    }
  }, []);

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
      window.location.href = 'https://ams-app.aslancdc.com';
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
      <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
        <SEOHead {...seoProps} />
        <AmsPage onBackToHome={() => handleNavigate('home', 'hero')} />
      </Suspense>
    );
  }

  if (currentRoute === '404') {
    return (
      <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
        <SEOHead {...seoProps} />
        <NotFoundPage onBackToHome={() => handleNavigate('home')} />
      </Suspense>
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
        {/* 1. HERO (Warm Cream - Immediate LCP render) */}
        <Hero
          onOpenAppointment={handleOpenAppointment}
          onExploreServices={() => handleNavigate('home', 'services')}
        />

        {/* 2. ABOUT ASLAN (Pure White - Immediate Fold transition) */}
        <AboutSection />

        {/* 3. CONTACT (Warm Cream - Quick access to locations, phone, hours & maps) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" bg="bg-contact-soft" />}>
          <ContactSection />
        </Suspense>

        {/* 4. BOOK AN APPOINTMENT (Pure White - Interactive form) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" bg="bg-white" />}>
          <AppointmentSection />
        </Suspense>

        {/* 5. PROGRAMS & SERVICES (Soft Cream) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" bg="bg-programs-soft" />}>
          <ProgramsSection
            onOpenAppointment={handleOpenAppointment}
          />
        </Suspense>

        {/* COMPACT TRUST VALUES STRIP (Sage Soft) */}
        <ValuesStrip />

        {/* 6. HOW WE SUPPORT CHILDREN (Pure White) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" bg="bg-journey-soft" />}>
          <SupportJourney />
        </Suspense>

        {/* 7. PARENT EXPERIENCES (Stories of Growth & Progress) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" bg="bg-testimonials-soft" />}>
          <TestimonialsSection />
        </Suspense>

        {/* 8. INSIDE ASLAN (Our Team / Nurturing Environment) */}
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" bg="bg-gallery-soft" />}>
          <TeamEnvironmentSection />
        </Suspense>
      </main>

      {/* 9. FOOTER (Pure White) */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
