import React from 'react';
import { motion } from 'framer-motion';
import { Breadcrumbs } from './Breadcrumbs';
import { Button } from './Button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../data/contentData';
import type { PageRoute } from '../types';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenAppointment: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onOpenAppointment,
}) => {
  const service = SERVICES.find((s) => s.slug === serviceId || s.id === serviceId) || SERVICES[0];

  const breadcrumbs = [
    { name: 'Programs & Services', route: 'services' as PageRoute },
    { name: service.title },
  ];

  return (
    <div className="min-h-screen bg-aslan-cream text-aslan-charcoal font-sans flex flex-col">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Main Service Content */}
      <main className="flex-grow py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Back Button & Category Badge */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('home', 'services')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-aslan-teal hover:underline font-heading"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services Overview
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-aslan-teal text-white uppercase tracking-wider">
              {service.category === 'therapy' ? 'Clinical Therapy' : service.category === 'education' ? 'Educational Support' : service.category === 'activities' ? 'Group Program' : 'Integrated Care'}
            </span>
          </div>

          {/* Service Title (Single H1 on Page) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-aslan-teal font-heading">
              Aslan Child Development Center • West Tambaram, Chennai
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-aslan-charcoal leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-aslan-charcoal-muted leading-relaxed font-sans font-normal">
              {service.fullDescription}
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card space-y-6"
          >
            <h2 className="text-xl font-bold font-heading text-aslan-charcoal">
              Core Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-aslan-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Who It Helps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold font-heading text-aslan-charcoal">
              Who This May Be Relevant For
            </h2>
            <div className="space-y-3">
              {service.whoItHelps.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-aslan-sage/20 shadow-aslan-sm text-sm text-aslan-charcoal-muted leading-relaxed font-sans">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* What Parents Can Expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold font-heading text-aslan-charcoal">
              What Parents Can Expect at Aslan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatToExpect.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-aslan-sage-soft border border-aslan-sage/20 space-y-2">
                  <span className="text-xs font-bold text-aslan-teal font-heading">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-aslan-charcoal leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Box */}
          <div className="p-8 md:p-10 rounded-3xl bg-aslan-teal text-white shadow-aslan-lg space-y-4 text-center">
            <h3 className="text-2xl font-bold font-heading">
              Ready to Discuss {service.title}?
            </h3>
            <p className="text-aslan-cream/90 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
              Schedule an observational consultation with our care team in West Tambaram, Chennai.
            </p>
            <div className="pt-2">
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenAppointment}
              >
                Book an Appointment for {service.title}
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
