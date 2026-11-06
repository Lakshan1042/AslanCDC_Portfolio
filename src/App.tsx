import React, { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuesStrip } from './components/ValuesStrip';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ProgramsSection } from './components/ProgramsSection';
import { SupportJourney } from './components/SupportJourney';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeamEnvironmentSection } from './components/TeamEnvironmentSection';
import { AmsPage } from './components/AmsPage';
import { NotFoundPage } from './components/NotFoundPage';

import { ChromepetPage } from './pages/ChromepetPage';
import { WestTambaramPage } from './pages/WestTambaramPage';
import { OccupationalTherapyPage } from './pages/OccupationalTherapyPage';
import { AutismSupportPage } from './pages/AutismSupportPage';

import { CENTER_INFO } from './data/contentData';
import {
  HOMEPAGE_FAQS,
  CHROMEPET_FAQS,
  WEST_TAMBARAM_FAQS,
  OCCUPATIONAL_THERAPY_FAQS,
  AUTISM_SUPPORT_FAQS
} from './data/faqsData';
import { getRouteFromPath, getPathForRoute } from './utils/routing';
import type { PageRoute } from './types';

interface AppProps {
  initialRoute?: PageRoute;
}

export const App: React.FC<AppProps> = ({ initialRoute }) => {
  // Initialize route from current browser URL or initialRoute for SSR
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    if (initialRoute) return initialRoute;
    if (typeof window !== 'undefined') {
      return getRouteFromPath(window.location.pathname).route;
    }
    return 'home';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const match = getRouteFromPath(window.location.pathname);
      setCurrentRoute(match.route);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Background idle prefetching for deferred interactive sections
  useEffect(() => {
    const prefetch = () => {
      import('./components/AppointmentSection');
      import('./components/ProgramsSection');
      import('./components/ContactSection');
      import('./pages/ChromepetPage');
      import('./pages/WestTambaramPage');
      import('./pages/OccupationalTherapyPage');
      import('./pages/AutismSupportPage');
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => void }).requestIdleCallback(prefetch, { timeout: 2500 });
    } else {
      setTimeout(prefetch, 1500);
    }
  }, []);

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85;
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

    const targetPath = getPathForRoute(route, sectionId);

    // Update browser address bar cleanly
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
    }

    setCurrentRoute(route);

    if (route === 'home') {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 60);
    } else {
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenAppointment = (_serviceName?: string) => {
    handleNavigate('home', 'book');
  };

  // Helper to determine SEO properties per route
  const getSEOProps = () => {
    switch (currentRoute) {
      case 'location-chromepet':
        return {
          title: 'Child Development & Therapy Center in Chromepet | Aslan CDC',
          description: 'Dedicated child development and therapy center in New Colony, Chromepet. Providing pediatric occupational therapy, speech therapy, and autism support.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/locations/chromepet/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/play_therapy_room.webp`,
          branchType: 'chromepet' as const,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'Chromepet', url: `${CENTER_INFO.siteUrl}/locations/chromepet/` }
          ],
          faqs: CHROMEPET_FAQS
        };

      case 'location-west-tambaram':
        return {
          title: 'Child Development & Therapy Center in West Tambaram | Aslan',
          description: 'Main therapy facility in West Tambaram, Chennai. Featuring a full sensory gym, occupational therapy, speech therapy, special education, and ADL lab.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/locations/west-tambaram/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/tambaram_sensory_gym_wide.webp`,
          branchType: 'main' as const,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'West Tambaram', url: `${CENTER_INFO.siteUrl}/locations/west-tambaram/` }
          ],
          faqs: WEST_TAMBARAM_FAQS
        };

      case 'service-occupational-therapy':
        return {
          title: 'Pediatric Occupational Therapy in Tambaram & Chromepet | Aslan',
          description: 'Pediatric occupational therapy in West Tambaram & Chromepet, Chennai. Enhancing fine motor skills, sensory integration, balance, handwriting, and daily self-care.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/services/occupational-therapy/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/sensory_gym_side.webp`,
          branchType: 'all' as const,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'Occupational Therapy', url: `${CENTER_INFO.siteUrl}/services/occupational-therapy/` }
          ],
          faqs: OCCUPATIONAL_THERAPY_FAQS
        };

      case 'service-autism-support':
        return {
          title: 'Autism Therapy & Early Intervention in Tambaram & Chromepet',
          description: 'Compassionate autism developmental therapy in West Tambaram & Chromepet, Chennai. Multidisciplinary sensory, speech, behavioral, and individualized educational care.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/services/autism-support/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/sensory_gym_spider_net.webp`,
          branchType: 'all' as const,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'Autism Support', url: `${CENTER_INFO.siteUrl}/services/autism-support/` }
          ],
          faqs: AUTISM_SUPPORT_FAQS
        };

      case 'ams':
        return {
          title: 'AMS | Aslan Management Software | Coming Soon',
          description: 'Aslan Management Software - A smarter way to manage care, appointments, and everyday operations at Aslan Child Development and Therapy Center.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/ams`,
          noindex: true,
          branchType: 'all' as const
        };

      case '404':
        return {
          title: 'Page Not Found | Aslan Child Development and Therapy Center',
          description: 'The requested page was not found.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/404`,
          noindex: true,
          branchType: 'all' as const
        };

      default:
        return {
          title: 'Child Development & Therapy Center in Tambaram & Chromepet | Aslan CDC',
          description: 'Aslan CDC is a premier child development and therapy center in West Tambaram & Chromepet, Chennai. Specialized occupational therapy, speech, and autism support.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/sensory_gym_spider_net.webp`,
          branchType: 'all' as const,
          faqs: HOMEPAGE_FAQS
        };
    }
  };

  const seoProps = getSEOProps();

  return (
    <div className="min-h-screen bg-aslan-cream text-aslan-charcoal font-sans flex flex-col antialiased selection:bg-aslan-peach selection:text-aslan-charcoal overflow-x-hidden">
      {/* Dynamic Route-Specific SEO Head */}
      <SEOHead {...seoProps} />

      {/* Persistent Global Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Routed Content Flow */}
      <main className="flex-grow">
        {currentRoute === 'location-chromepet' && (
          <ChromepetPage
            onNavigate={handleNavigate}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentRoute === 'location-west-tambaram' && (
          <WestTambaramPage
            onNavigate={handleNavigate}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentRoute === 'service-occupational-therapy' && (
          <OccupationalTherapyPage
            onNavigate={handleNavigate}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentRoute === 'service-autism-support' && (
          <AutismSupportPage
            onNavigate={handleNavigate}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentRoute === 'ams' && (
          <AmsPage onBackToHome={() => handleNavigate('home', 'hero')} />
        )}

        {currentRoute === '404' && (
          <NotFoundPage onBackToHome={() => handleNavigate('home')} />
        )}

        {currentRoute === 'home' && (
          <>
            {/* 1. HERO (Warm Cream - Immediate LCP render) */}
            <Hero
              onOpenAppointment={handleOpenAppointment}
              onExploreServices={() => handleNavigate('home', 'services')}
            />

            {/* 2. ABOUT ASLAN (Pure White - Immediate Fold transition) */}
            <AboutSection />

            {/* 3. CONTACT & LOCATIONS (Warm Cream - Quick access to both branches) */}
            <ContactSection />

            {/* 4. BOOK AN APPOINTMENT (Pure White - Interactive form) */}
            <AppointmentSection />

            {/* 5. PROGRAMS & SERVICES (Soft Cream) */}
            <ProgramsSection
              onOpenAppointment={handleOpenAppointment}
            />

            {/* COMPACT TRUST VALUES STRIP */}
            <ValuesStrip />

            {/* 6. HOW WE SUPPORT CHILDREN */}
            <SupportJourney />

            {/* 7. PARENT EXPERIENCES (Stories of Growth) */}
            <TestimonialsSection />

            {/* 8. INSIDE ASLAN (Real Environment Showcase) */}
            <TeamEnvironmentSection />

            {/* 9. PARENT FAQS (Verbatim matching Schema.org) */}
            <FaqSection
              title="Frequently Asked Questions"
              subtitle="Helpful answers to common questions about our programs, evaluations, and center visits."
              faqs={HOMEPAGE_FAQS}
            />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
