import React, { useState, useEffect, Suspense, lazy } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuesStrip } from './components/ValuesStrip';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CENTER_INFO } from './data/contentData';
import { getRouteFromPath, getPathForRoute } from './utils/routing';
import type { PageRoute } from './types';

// Code-split secondary route components & below-the-fold sections
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const AppointmentSection = lazy(() => import('./components/AppointmentSection').then(m => ({ default: m.AppointmentSection })));
const ProgramsSection = lazy(() => import('./components/ProgramsSection').then(m => ({ default: m.ProgramsSection })));
const SupportJourney = lazy(() => import('./components/SupportJourney').then(m => ({ default: m.SupportJourney })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const TeamEnvironmentSection = lazy(() => import('./components/TeamEnvironmentSection').then(m => ({ default: m.TeamEnvironmentSection })));
const AmsPage = lazy(() => import('./components/AmsPage').then(m => ({ default: m.AmsPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Code-split the 4 approved Local SEO & Service Landing Pages
const ChromepetPage = lazy(() => import('./pages/ChromepetPage').then(m => ({ default: m.ChromepetPage })));
const WestTambaramPage = lazy(() => import('./pages/WestTambaramPage').then(m => ({ default: m.WestTambaramPage })));
const OccupationalTherapyPage = lazy(() => import('./pages/OccupationalTherapyPage').then(m => ({ default: m.OccupationalTherapyPage })));
const AutismSupportPage = lazy(() => import('./pages/AutismSupportPage').then(m => ({ default: m.AutismSupportPage })));

// Non-shifting fallback for deferred sections
const SectionSkeleton: React.FC<{ minHeight?: string; bg?: string }> = ({ minHeight = 'min-h-[300px]', bg = 'bg-aslan-cream' }) => (
  <div className={`w-full ${minHeight} ${bg} animate-pulse flex items-center justify-center opacity-40`} />
);

// Verified Homepage FAQs (verbatim matching JSON-LD schema)
const HOMEPAGE_FAQS = [
  {
    question: "Which is the top Child Development Center in Tambaram & Chromepet?",
    answer: "Aslan Child Development and Therapy Center operates two specialized facilities in West Tambaram (Mudichur Road) and Chromepet (New Colony). We provide pediatric occupational therapy, speech therapy, special education, sensory integration therapy, and behavioral guidance."
  },
  {
    question: "Where can I get Specialized Education in Tambaram & Chromepet?",
    answer: "Aslan CDC provides Specialized Education with Individualized Education Plans (IEP), school readiness programs, attention skill development, and multi-sensory learning for children with autism, ADHD, learning disabilities, and developmental delays."
  },
  {
    question: "What conditions are supported at Aslan Therapy Center?",
    answer: "Aslan CDC specializes in therapeutic support for ADHD, Autism Spectrum Disorder (ASD), speech delays, stuttering, apraxia, sensory processing differences (SPD), global developmental delay (GDD), cerebral palsy, Down syndrome, and classroom behavior challenges."
  },
  {
    question: "How do I choose between the West Tambaram and Chromepet centers?",
    answer: "Both centers provide qualified occupational therapy, speech therapy, and special education. Families seeking extensive sensory gym sessions and ADL independence lab training frequently visit our West Tambaram main branch, while our Chromepet center provides quiet, distraction-free 1-on-1 cubicles and early childhood play therapy rooms."
  }
];

export const App: React.FC = () => {
  // Initialize route from current browser URL
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
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
          faqs: [
            {
              question: "Which neighborhoods are served by the Chromepet center?",
              answer: "Our Chromepet branch primarily serves families living in Chromepet, New Colony, Hasthinapuram, Radha Nagar, Pallavaram, Nemilichery, and surrounding southern Chennai suburbs."
            },
            {
              question: "How do I schedule an appointment for my child at the Chromepet branch?",
              answer: "You can schedule an appointment by submitting the appointment form on this page or by contacting our team directly at 9445914020."
            },
            {
              question: "How does the Chromepet branch differ from the West Tambaram branch?",
              answer: "Both centers deliver professional occupational therapy, speech therapy, and special education. Our West Tambaram main branch additionally houses our full sensory gym and life-skills independence lab."
            }
          ]
        };

      case 'location-west-tambaram':
        return {
          title: 'Child Development & Therapy Center in West Tambaram | Aslan',
          description: 'Main therapy facility in West Tambaram, Chennai. Featuring a full sensory gym, occupational therapy, speech therapy, special education, and ADL lab.',
          canonicalUrl: `${CENTER_INFO.siteUrl}/locations/west-tambaram/`,
          ogImage: `${CENTER_INFO.siteUrl}/images/sensory_gym_spider_net.webp`,
          branchType: 'main' as const,
          breadcrumbs: [
            { name: 'Home', url: `${CENTER_INFO.siteUrl}/` },
            { name: 'West Tambaram', url: `${CENTER_INFO.siteUrl}/locations/west-tambaram/` }
          ],
          faqs: [
            {
              question: "What facilities are available in the West Tambaram sensory gym?",
              answer: "Our West Tambaram sensory gym includes suspended swings, spider climbing nets, balance ladders, crash mats, and sensory tactile paths."
            },
            {
              question: "Does Aslan CDC provide home-visit appointments from West Tambaram?",
              answer: "Yes, for families unable to travel to the clinic, our team offers structured home appointments within our local service radius across West Tambaram and Mudichur."
            },
            {
              question: "What age groups do you support at the West Tambaram center?",
              answer: "We support infants, toddlers, young children, and adolescents through early intervention, school-age therapy, and teen independence training."
            }
          ]
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
          faqs: [
            {
              question: "How long is a typical pediatric occupational therapy session?",
              answer: "A standard occupational therapy session is typically 45 minutes of direct, play-based intervention followed by a collaborative discussion with parents."
            },
            {
              question: "At what age can a child begin occupational therapy?",
              answer: "Occupational therapy can begin as early as infancy through early intervention programs, supporting motor delays, sensory feeding difficulties, and posture."
            },
            {
              question: "Which Aslan CDC branch offers occupational therapy?",
              answer: "Both our West Tambaram (Mudichur Road) and Chromepet (New Colony) centers provide qualified occupational therapy."
            }
          ]
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
          faqs: [
            {
              question: "Can Aslan CDC support my child if we don't have a formal diagnosis yet?",
              answer: "Yes. If your child exhibits speech delays, sensory sensitivities, lack of eye contact, or behavioral challenges, you do not need to wait for a formal medical report to begin functional therapy."
            },
            {
              question: "Which Aslan branch provides autism support programs?",
              answer: "Both our West Tambaram (Mudichur Road) and Chromepet (New Colony) centers offer comprehensive autism developmental therapy."
            },
            {
              question: "Do you offer school readiness programs for children on the spectrum?",
              answer: "Yes. Our school readiness curriculum focuses on sitting tolerance, circle time participation, following instructions, and peer interaction."
            }
          ]
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
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <ChromepetPage
              onNavigate={handleNavigate}
              onOpenAppointment={handleOpenAppointment}
            />
          </Suspense>
        )}

        {currentRoute === 'location-west-tambaram' && (
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <WestTambaramPage
              onNavigate={handleNavigate}
              onOpenAppointment={handleOpenAppointment}
            />
          </Suspense>
        )}

        {currentRoute === 'service-occupational-therapy' && (
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <OccupationalTherapyPage
              onNavigate={handleNavigate}
              onOpenAppointment={handleOpenAppointment}
            />
          </Suspense>
        )}

        {currentRoute === 'service-autism-support' && (
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <AutismSupportPage
              onNavigate={handleNavigate}
              onOpenAppointment={handleOpenAppointment}
            />
          </Suspense>
        )}

        {currentRoute === 'ams' && (
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <AmsPage onBackToHome={() => handleNavigate('home', 'hero')} />
          </Suspense>
        )}

        {currentRoute === '404' && (
          <Suspense fallback={<SectionSkeleton minHeight="min-h-screen" />}>
            <NotFoundPage onBackToHome={() => handleNavigate('home')} />
          </Suspense>
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

            {/* COMPACT TRUST VALUES STRIP */}
            <ValuesStrip />

            {/* 6. HOW WE SUPPORT CHILDREN */}
            <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" bg="bg-journey-soft" />}>
              <SupportJourney />
            </Suspense>

            {/* 7. PARENT EXPERIENCES (Stories of Growth) */}
            <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" bg="bg-testimonials-soft" />}>
              <TestimonialsSection />
            </Suspense>

            {/* 8. INSIDE ASLAN (Real Environment Showcase) */}
            <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" bg="bg-gallery-soft" />}>
              <TeamEnvironmentSection />
            </Suspense>

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
